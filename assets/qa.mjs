import fs from 'node:fs';
import path from 'node:path';

const files = fs.readdirSync('.').filter((file) => file.endsWith('.html'));
const problems = [];
const titles = new Map();

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const title = source.match(/<title>(.*?)<\/title>/)?.[1];
  if (!title) problems.push(`${file}: missing title`);
  if (titles.has(title)) problems.push(`${file}: duplicate title`);
  titles.set(title, file);
  if (!/<meta name="description"/.test(source)) problems.push(`${file}: missing meta description`);
  if ((source.match(/<h1[ >]/g) || []).length !== 1) problems.push(`${file}: expected exactly one H1`);

  for (const match of source.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (/^(https?:|mailto:|tel:|#|\?)/.test(url)) continue;
    const localPath = url.split(/[?#]/)[0];
    if (localPath && !fs.existsSync(path.resolve(path.dirname(file), localPath))) {
      problems.push(`${file}: broken local reference ${url}`);
    }
  }
}

console.log(`HTML pages: ${files.length}`);
console.log(`Unique titles: ${titles.size}`);
if (problems.length) {
  console.error(problems.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Static QA passed: metadata, H1 structure, and local links/assets are valid.');
}
