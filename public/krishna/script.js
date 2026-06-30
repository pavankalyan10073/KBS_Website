/* =================================================================
   Krishna Business Solutions — premium interactions (optimized)
   ================================================================= */

(() => {
  /* ---------- Loader ---------- */
  window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loader')?.classList.add('hide'), 400);
  });

  /* ---------- Year ---------- */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- Nav scroll + mobile toggle ---------- */
  const nav = document.getElementById('nav');
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav?.classList.toggle('scrolled', window.scrollY > 30);
        const h = document.documentElement;
        const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
        const bar = document.getElementById('scrollProgress');
        if (bar) bar.style.width = pct + '%';
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');
  navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
  });
  navMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navToggle?.classList.remove('open');
    navMenu.classList.remove('open');
  }));

  /* ---------- Cursor (disabled) ---------- */

  /* ---------- Reveal on scroll (disabled for performance) ---------- */

  /* ---------- Counters ---------- */
  const counters = document.querySelectorAll('.counter');
  const cio = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = +el.dataset.target;
      const dur = 1800;
      const start = performance.now();
      const step = (t) => {
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target).toLocaleString();
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      cio.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => cio.observe(c));

  /* ---------- Particles (reduced count) ---------- */
  const pcontainer = document.getElementById('particles');
  if (pcontainer) {
    const count = window.innerWidth < 700 ? 8 : 15;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const s = document.createElement('span');
      s.className = 'particle';
      const size = Math.random() * 4 + 1;
      s.style.width = s.style.height = size + 'px';
      s.style.left = Math.random() * 100 + '%';
      s.style.background = Math.random() > .6 ? 'rgba(255,209,102,0.7)' : 'rgba(230,57,70,0.7)';
      s.style.animationDuration = (Math.random() * 10 + 8) + 's';
      s.style.animationDelay = (-Math.random() * 10) + 's';
      frag.appendChild(s);
    }
    pcontainer.appendChild(frag);
  }

  /* ---------- Service card mouse-light (throttled) ---------- */
  document.querySelectorAll('.service-card').forEach(card => {
    let cTicking = false;
    card.addEventListener('mousemove', e => {
      if (!cTicking) {
        requestAnimationFrame(() => {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
          card.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
          cTicking = false;
        });
        cTicking = true;
      }
    }, { passive: true });
  });

  /* ---------- Tilt (throttled) ---------- */
  document.querySelectorAll('.tilt').forEach(el => {
    let tTicking = false;
    el.addEventListener('mousemove', e => {
      if (!tTicking) {
        requestAnimationFrame(() => {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
          tTicking = false;
        });
        tTicking = true;
      }
    }, { passive: true });
    el.addEventListener('mouseleave', () => el.style.transform = '');
  });

  /* ---------- Magnetic buttons (disabled) ---------- */

  /* ---------- Ripple (disabled) ---------- */

  /* ---------- Parallax blobs (throttled) ---------- */
  const blobs = document.querySelectorAll('.blob');
  let pTicking = false;
  window.addEventListener('mousemove', e => {
    if (!pTicking) {
      requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        blobs.forEach((b, i) => {
          const f = (i + 1) * 0.5;
          b.style.translate = `${x * f}px ${y * f}px`;
        });
        pTicking = false;
      });
      pTicking = true;
    }
  }, { passive: true });

  /* ---------- Contact form - Send to WhatsApp ---------- */
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    
    const name = form.querySelector('[name="name"]')?.value || '';
    const phone = form.querySelector('[name="phone"]')?.value || '';
    const service = form.querySelector('[name="service"]')?.value || '';
    const message = form.querySelector('[name="message"]')?.value || '';
    
    const serviceLabels = {
      'phone-banking': 'Phone Banking',
      'tele-calling': 'Tele Calling',
      'credit-card': 'Credit Card Sales',
      'loan-support': 'Loan Support',
      'customer-support': 'Customer Support',
      'bpo-services': 'BPO Services',
      'other': 'Other'
    };
    
    const serviceName = serviceLabels[service] || service;
    
    const whatsappNumber = '919618895674';
    
    const whatsappMessage = `*New Inquiry from Website*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service Required:* ${serviceName}%0A*Details:* ${message || 'N/A'}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    form.reset();
  });
})();