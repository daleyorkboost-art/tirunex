// ==========================================
// TIRUNEX CLIENT CONFIGURATION & PLACEHOLDERS
// Add your verified social media IDs and contact details below:
// ==========================================
const TIRUNEX_CONFIG = {
  companyName: "Tirunex Systems Private Limited",
  email: "sales@tirunex.com",
  phone: "+91 98841 82037",
  whatsapp: "919884182037",
  linkedin: "",          // e.g. "https://www.linkedin.com/company/tirunex-systems"
  twitter: "",           // e.g. "https://x.com/tirunex" (optional)
  instagram: "",         // e.g. "https://www.instagram.com/tirunex" (optional)
  websiteUrl: "https://www.tirunex.com",
  formEndpoint: "",      // Form submission endpoint (e.g. Web3Forms or Formspree URL)
  address: "Porur, Chennai, Tamil Nadu - 600 116, India.",
  cin: ""                // Corporate Identification Number (CIN)
};

const pages = [
  ['index.html', 'Home'],
  ['products.html', 'Products'],
  ['ai-agents.html', 'AI Agents'],
  ['services.html', 'Services'],
  ['industries.html', 'Industry Solutions'],
  ['manpower.html', 'Manpower'],
  ['about.html', 'About'],
  ['contact.html', 'Contact']
];

const current = document.body.dataset.page || 'home';
const slug = s => s.toLowerCase().replace(/\s+/g, '-');

function renderHeader() {
  const target = document.querySelector('[data-header]');
  if (!target) return;
  target.innerHTML = `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="Tirunex Systems Private Limited Home">
          <img class="brand-logo" src="images/logo/tirunex-logo.png" alt="Tirunex Systems Private Limited" width="180" height="33" />
        </a>
        <button class="menu-toggle" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu">
          <span></span>
        </button>
        <nav class="nav" id="primary-nav" aria-label="Primary navigation">
          ${pages.map(([u, n]) => `<a href="${u}" class="${current === slug(n) || (current === 'industries' && n === 'Industry Solutions') ? 'active' : ''}">${n}</a>`).join('')}
          <a class="btn btn-primary btn-small" href="contact.html#contact-form">Talk to an Expert</a>
        </nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  const target = document.querySelector('[data-footer]');
  if (!target) return;
  target.innerHTML = `
    <section class="section-sm section-muted">
      <div class="container">
        <div class="cta-band">
          <div>
            <h2>Ready to Transform Your Business?</h2>
            <p>Bring together technology, AI, automation and talent with one trusted partner.</p>
          </div>
          <a class="btn btn-primary" href="contact.html#contact-form">Start a Conversation</a>
        </div>
      </div>
    </section>
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="brand" href="index.html" aria-label="Tirunex Systems Private Limited Home">
              <img class="brand-logo brand-logo-footer" src="images/logo/tirunex-logo-white.png" alt="Tirunex Systems Private Limited" width="180" height="33" />
            </a>
            <p>Empowering Growth through Unified Technology, AI & Talent</p>
            <p>Run better. Grow faster. Automate intelligently. Scale confidently.</p>
            ${TIRUNEX_CONFIG.address ? `<p style="margin-top:14px;font-size:0.82rem;color:#8fa2b8;line-height:1.5;">📍 ${TIRUNEX_CONFIG.address}</p>` : ''}
          </div>
          <div class="footer-links">
            <h3>Explore</h3>
            ${pages.slice(1, 7).map(([u, n]) => `<a href="${u}">${n}</a>`).join('')}
          </div>
          <div class="footer-links">
            <h3>Connect</h3>
            <a href="contact.html">Contact</a>
            <a href="faq.html">FAQ</a>
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms.html">Terms & Conditions</a>
            ${TIRUNEX_CONFIG.email ? `<a href="mailto:${TIRUNEX_CONFIG.email}">${TIRUNEX_CONFIG.email}</a>` : ''}
            ${TIRUNEX_CONFIG.phone ? `<a href="tel:${TIRUNEX_CONFIG.phone.replace(/[^+\d]/g, '')}">${TIRUNEX_CONFIG.phone}</a>` : ''}
            <span data-config-social></span>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} ${TIRUNEX_CONFIG.companyName}. All rights reserved.</span>
          <span>Technology + AI + Automation + Talent</span>
        </div>
      </div>
    </footer>
    <button class="to-top" aria-label="Back to top">↑</button>
  `;

  const social = target.querySelector('[data-config-social]');
  if (social) {
    if (TIRUNEX_CONFIG.linkedin) social.insertAdjacentHTML('beforebegin', `<a href="${TIRUNEX_CONFIG.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>`);
    if (TIRUNEX_CONFIG.twitter) social.insertAdjacentHTML('beforebegin', `<a href="${TIRUNEX_CONFIG.twitter}" target="_blank" rel="noopener noreferrer">X / Twitter</a>`);
    if (TIRUNEX_CONFIG.instagram) social.insertAdjacentHTML('beforebegin', `<a href="${TIRUNEX_CONFIG.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a>`);
    if (TIRUNEX_CONFIG.whatsapp) social.insertAdjacentHTML('beforebegin', `<a href="https://wa.me/${TIRUNEX_CONFIG.whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp</a>`);
    social.remove();
  }
}

function initNav() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (!toggle) return;

  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  };

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    if (open) close();
    else {
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      nav.classList.add('open');
      document.body.classList.add('menu-open');
    }
  });

  nav.addEventListener('click', e => {
    if (e.target.closest('a')) close();
  });

  document.addEventListener('click', e => {
    if (nav.classList.contains('open') && !header.contains(e.target)) {
      close();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });

  addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 12), { passive: true });
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach(x => x.classList.add('visible'));
    return;
  }
  document.documentElement.classList.add('reveal-ready');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  els.forEach(x => {
    if (x.getBoundingClientRect().top < innerHeight * 1.08) x.classList.add('visible');
    else observer.observe(x);
  });
}

function initFaq() {
  document.querySelectorAll('.faq-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', String(!open));
      panel.classList.toggle('open', !open);
    });
  });
}

function initForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  const status = form.querySelector('.form-status');
  const reqTextarea = form.querySelector('#requirement');
  const indSelect = form.querySelector('#industry');

  const topicMap = {
    'ai': 'Inquiry regarding AI & Intelligent Automation solutions.',
    'ai-agent': 'Inquiry regarding Custom AI Agent development.',
    'ai-assessment': 'Request for an Enterprise AI Readiness Assessment.',
    'consultation': 'Request for a strategic business & technology consultation.',
    'products': 'Inquiry regarding Tirunex Business Software Products.',
    'services': 'Inquiry regarding IT Consulting & Engineering Services.',
    'manpower': 'Inquiry regarding Skilled Manpower & Staffing solutions.',
    'workforce-support': 'Request for Workforce Support & Talent Deployment.',
    'industry': 'Inquiry regarding Industry-Specific Technology Solutions.'
  };

  const applyTopic = (topicKey) => {
    if (topicKey && topicMap[topicKey] && reqTextarea) {
      reqTextarea.value = topicMap[topicKey];
    }
  };

  const applyIndustry = (industryKey) => {
    if (industryKey && indSelect) {
      const cleanKey = industryKey.toLowerCase().replace(/[^a-z]/g, '');
      const match = Array.from(indSelect.options).find(opt => 
        opt.value.toLowerCase().replace(/[^a-z]/g, '') === cleanKey
      );
      if (match) indSelect.value = match.value;
    }
  };

  // Pre-fill from URL parameters
  const params = new URLSearchParams(location.search);
  applyTopic(params.get('topic'));
  applyIndustry(params.get('industry'));

  // Handle in-page topic links
  document.querySelectorAll('a[href*="?topic="]').forEach(link => {
    link.addEventListener('click', () => {
      try {
        const url = new URL(link.href, location.origin);
        const topic = url.searchParams.get('topic');
        if (topic && topicMap[topic]) {
          applyTopic(topic);
          reqTextarea?.focus();
        }
      } catch {}
    });
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('[required]').forEach(input => {
      const err = form.querySelector(`#${input.id}-error`);
      const bad = !input.value.trim() || (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value));
      input.setAttribute('aria-invalid', String(bad));
      if (err) err.textContent = bad ? (input.type === 'email' ? 'Enter a valid email address.' : 'This field is required.') : '';
      valid = !bad && valid;
    });

    if (!valid) {
      status.className = 'form-status error';
      status.textContent = 'Please review the highlighted fields.';
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    const submit = form.querySelector('[type=submit]');
    submit.disabled = true;
    submit.textContent = 'Preparing enquiry…';

    if (TIRUNEX_CONFIG.formEndpoint) {
      try {
        const res = await fetch(TIRUNEX_CONFIG.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form)))
        });
        if (!res.ok) throw new Error();
        status.className = 'form-status success';
        status.textContent = 'Thank you. Your enquiry has been sent.';
        form.reset();
      } catch {
        status.className = 'form-status error';
        status.textContent = 'We could not send the enquiry. Please try again later.';
      }
    } else {
      const data = Object.fromEntries(new FormData(form));
      const subject = encodeURIComponent(`Tirunex enquiry from ${data.name}`);
      const body = encodeURIComponent(Object.entries(data).map(([k, v]) => `${k}: ${v}`).join('\n'));
      if (TIRUNEX_CONFIG.email) {
        status.className = 'form-status success';
        status.textContent = 'Enquiry prepared. Opening your mail client to send to sales@tirunex.com…';
        location.href = `mailto:${TIRUNEX_CONFIG.email}?subject=${subject}&body=${body}`;
      } else {
        status.className = 'form-status success';
        status.textContent = 'Your enquiry is validated and ready. Add the official email or form endpoint in js/main.js before launch to enable delivery.';
      }
    }
    submit.disabled = false;
    submit.textContent = 'Send Enquiry';
  });
}

function enhanceBrandLogos() {
  document.querySelectorAll('.site-header .brand').forEach(brand => {
    brand.innerHTML = '<img class="brand-logo" src="images/logo/tirunex-logo.png" alt="Tirunex Systems Private Limited" width="180" height="33" />';
  });
  document.querySelectorAll('.site-footer .brand').forEach(brand => {
    brand.innerHTML = '<img class="brand-logo brand-logo-footer" src="images/logo/tirunex-logo-white.png" alt="Tirunex Systems Private Limited" width="180" height="33" />';
  });
}

function renderWhatsAppChatWidget() {
  if (!TIRUNEX_CONFIG.whatsapp) return;
  const num = TIRUNEX_CONFIG.whatsapp;
  const greeting = encodeURIComponent("Hello Tirunex team, I would like to enquire about your solutions.");
  const waUrl = `https://wa.me/${num}?text=${greeting}`;

  const container = document.createElement('div');
  container.className = 'wa-widget-container';
  container.innerHTML = `
    <div class="wa-chatbox" id="wa-chatbox" aria-hidden="true">
      <div class="wa-chatbox-header">
        <div class="wa-chatbox-brand">
          <div class="wa-avatar">
            <img src="images/logo/tirunex-logo-white.png" alt="Tirunex Systems" />
            <span class="wa-online-dot"></span>
          </div>
          <div class="wa-brand-info">
            <strong>Tirunex Systems</strong>
            <span>Online &bull; Replies within minutes</span>
          </div>
        </div>
        <button class="wa-close-btn" id="wa-close" aria-label="Close WhatsApp chat">&times;</button>
      </div>
      <div class="wa-chatbox-body">
        <div class="wa-message-bubble">
          <p>Hello! 👋 Welcome to <strong>Tirunex Systems</strong>.</p>
          <p>How can we assist you today with AI, business technology, or workforce solutions?</p>
          <span class="wa-message-time">Just now</span>
        </div>
      </div>
      <div class="wa-chatbox-footer">
        <a class="wa-send-btn" href="${waUrl}" target="_blank" rel="noopener noreferrer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display:inline-block;vertical-align:middle;margin-right:6px"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          Chat on WhatsApp
        </a>
      </div>
    </div>
    <div class="wa-trigger-wrap">
      <button class="wa-floating-btn" id="wa-toggle" aria-expanded="false" aria-label="Open WhatsApp Chat">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
        <span class="wa-ping"></span>
      </button>
      <div class="wa-tooltip">Chat with us on WhatsApp</div>
    </div>
  `;
  document.body.appendChild(container);

  const toggle = document.getElementById('wa-toggle');
  const chatbox = document.getElementById('wa-chatbox');
  const close = document.getElementById('wa-close');

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = chatbox.classList.contains('active');
    chatbox.classList.toggle('active', !isOpen);
    chatbox.setAttribute('aria-hidden', String(isOpen));
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });

  close.addEventListener('click', (e) => {
    e.stopPropagation();
    chatbox.classList.remove('active');
    chatbox.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('click', (e) => {
    if (!container.contains(e.target) && chatbox.classList.contains('active')) {
      chatbox.classList.remove('active');
      chatbox.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function init() {
  renderHeader();
  renderFooter();
  enhanceBrandLogos();
  renderWhatsAppChatWidget();
  initNav();
  initReveal();
  initFaq();
  initForm();
  const top = document.querySelector('.to-top');
  addEventListener('scroll', () => top?.classList.toggle('show', scrollY > 600), { passive: true });
  top?.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
}

init();

