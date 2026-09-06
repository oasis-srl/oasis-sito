// menu.js — genera topbar, menu e footer di OASIS, in italiano o in inglese
// a seconda che la pagina si trovi nella cartella /en/.
(function() {
  var inEN = /\/en\//.test(location.pathname);
  var A = inEN ? '../' : '';          // prefisso per gli asset (le pagine /en/ stanno un livello sotto)

  // Etichette nelle due lingue
  var T = {
    it: {
      badge1: 'Organismo di Ricerca riconosciuto', badge2: 'PMI Innovativa', badge3: 'Certificata ISO 9001 &amp; ISO 14001',
      logosub: 'Ricerca &amp; Sviluppo', home: 'Home',
      chisiamo: 'Chi siamo', servizi: 'Servizi',
      fin: 'Finanza Agevolata', fins: 'Bandi · Credito R&amp;S · PNRR',
      rs: 'Ricerca &amp; Sviluppo', rss: 'Progetti scientifici · Credito R&amp;S',
      tor: 'Torymus sinensis', tors: 'Controllo biologico del cinipide',
      progetti: 'Progetti &amp; Brevetti', prog: 'Progetti di ricerca', progs: 'Agroscienze · Digitale · Biomedicale',
      brev: 'Brevetti', brevs: 'Privative industriali · UIBM',
      divulg: 'Divulgazione', news: 'News', contatti: 'Contattaci',
      fSite: 'Sito', fServ: 'Servizi', fCert: 'Certificazioni', fCont: 'Contatti',
      fCredito: "Credito d'imposta R&amp;S", fLavora: 'Lavora con noi',
      fBrand: 'Organismo di Ricerca senza scopo di lucro · PMI Innovativa · Centro di Ricerca e Sviluppo dal 2004.',
      fQual: 'Qualità', fAmb: 'Ambiente', fAnag: 'Anagrafe Nazionale Ricerche',
      fRights: '© 2026 OASIS srl · Tutti i diritti riservati', fPrivacy: 'Privacy &amp; Cookie',
      langLabel: 'EN', langAria: 'Switch to English', openMenu: 'Apri il menu', closeMenu: 'Chiudi il menu'
    },
    en: {
      badge1: 'Recognised Research Organisation', badge2: 'Innovative SME', badge3: 'ISO 9001 &amp; ISO 14001 certified',
      logosub: 'Research &amp; Development', home: 'Home',
      chisiamo: 'About us', servizi: 'Services',
      fin: 'Subsidised Finance', fins: 'Grants · R&amp;D tax credit · NRRP',
      rs: 'Research &amp; Development', rss: 'Scientific projects · R&amp;D tax credit',
      tor: 'Torymus sinensis', tors: 'Biological control of the gall wasp',
      progetti: 'Projects &amp; Patents', prog: 'Research projects', progs: 'Agro-sciences · Digital · Biomedical',
      brev: 'Patents', brevs: 'Industrial property · UIBM',
      divulg: 'Outreach', news: 'News', contatti: 'Contact us',
      fSite: 'Site', fServ: 'Services', fCert: 'Certifications', fCont: 'Contact',
      fCredito: 'R&amp;D tax credit', fLavora: 'Work with us',
      fBrand: 'Non-profit Research Organisation · Innovative SME · Research &amp; Development centre since 2004.',
      fQual: 'Quality', fAmb: 'Environment', fAnag: 'National Research Registry',
      fRights: '© 2026 OASIS srl · All rights reserved', fPrivacy: 'Privacy &amp; Cookies',
      langLabel: 'IT', langAria: 'Passa all’italiano', openMenu: 'Open menu', closeMenu: 'Close menu'
    }
  };
  var t = inEN ? T.en : T.it;

  // Link della bandierina lingua: stessa pagina, cartella dell'altra lingua
  var currentPage = location.pathname.split('/').pop() || 'index.html';
  var langHref = inEN ? ('../' + currentPage) : ('en/' + currentPage);

  var TOPBAR = `<div class="topbar">
  <div class="container">
    <div class="topbar-info">
      <span>${t.badge1}</span>
      <span>${t.badge2}</span>
      <span>${t.badge3}</span>
    </div>
    <div class="topbar-info">
      <span>segreteria@oasis-srl.it</span>
      <div class="topbar-social">
        <a href="https://www.linkedin.com/in/oasis-srl-centro-ricerca-e-sviluppo-1086035a/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
        </a>
        <a href="https://www.youtube.com/c/Oasissrlricerca" target="_blank" rel="noopener" aria-label="YouTube">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.11-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.39.56A3 3 0 00.5 6.2C0 8.09 0 12 0 12s0 3.91.5 5.8a3 3 0 002.11 2.14c1.89.56 9.39.56 9.39.56s7.5 0 9.39-.56a3 3 0 002.11-2.14C24 15.91 24 12 24 12s0-3.91-.5-5.8zM9.55 15.57V8.43L15.82 12z"/></svg>
        </a>
      </div>
    </div>
  </div>
</div>`;

  var HEADER = `<header class="main">
  <div class="container">
    <a href="index.html" class="logo" aria-label="OASIS S.r.l. — ${t.home}">
      <div class="logo-mark">
        <img src="${A}assets/images/logo-oasis.png" alt="">
      </div>
      <span class="logo-rule" aria-hidden="true"></span>
      <span class="logo-word">
        <span class="logo-name">OASIS S.r.l.</span>
        <span class="logo-sub">${t.logosub}</span>
      </span>
    </a>
    <nav id="main-nav">
      <ul>
        <li><a href="chi-siamo.html">${t.chisiamo}</a></li>
        <li class="has-dropdown">
          <a href="servizi.html">${t.servizi}</a>
          <ul class="dropdown">
            <li><a href="finanza-agevolata.html">${t.fin}<small>${t.fins}</small></a></li>
            <li><a href="ricerca-sviluppo.html">${t.rs}<small>${t.rss}</small></a></li>
            <li><a href="torymus.html">${t.tor}<small>${t.tors}</small></a></li>
          </ul>
        </li>
        <li class="has-dropdown">
          <a href="progetti.html">${t.progetti}</a>
          <ul class="dropdown">
            <li><a href="progetti.html">${t.prog}<small>${t.progs}</small></a></li>
            <li><a href="brevetti.html">${t.brev}<small>${t.brevs}</small></a></li>
          </ul>
        </li>
        <li><a href="divulgazione.html">${t.divulg}</a></li>
        <li><a href="news.html">${t.news}</a></li>
        <li class="cta-li"><a href="contatti.html" class="cta">${t.contatti}</a></li>
        <li class="lang-li"><a href="${langHref}" class="lang-switch" aria-label="${t.langAria}" hreflang="${inEN ? 'it' : 'en'}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z"/></svg>${t.langLabel}</a></li>
      </ul>
    </nav>
    <button class="nav-toggle" type="button" aria-label="${t.openMenu}" aria-expanded="false" aria-controls="main-nav">
      <span class="nav-toggle-bars"><span></span><span></span><span></span></span>
    </button>
  </div>
</header>`;

  var FOOTER = `<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="brand-block">
        <div class="logo footer-logo">
          <div class="logo-mark">
            <img src="${A}assets/images/logo-oasis.png" alt="OASIS S.r.l.">
          </div>
        </div>
        <p>${t.fBrand}</p>
      </div>
      <div>
        <h5>${t.fSite}</h5>
        <ul>
          <li><a href="chi-siamo.html">${t.chisiamo}</a></li>
          <li><a href="servizi.html">${t.servizi}</a></li>
          <li><a href="ricerca-sviluppo.html">${t.rs}</a></li>
          <li><a href="progetti.html">${t.prog}</a></li>
          <li><a href="brevetti.html">${t.brev}</a></li>
          <li><a href="divulgazione.html">${t.divulg}</a></li>
          <li><a href="news.html">${t.news}</a></li>
        </ul>
      </div>
      <div>
        <h5>${t.fServ}</h5>
        <ul>
          <li><a href="finanza-agevolata.html">${t.fin}</a></li>
          <li><a href="ricerca-sviluppo.html">${t.rs}</a></li>
          <li><a href="torymus.html">${t.tor}</a></li>
          <li><a href="contatti.html">${t.fLavora}</a></li>
        </ul>
      </div>
      <div>
        <h5>${t.fCert}</h5>
        <div class="iso-badges">
          <div class="iso-badge"><strong>ISO</strong><span>9001</span><small>${t.fQual}</small></div>
          <div class="iso-badge"><strong>ISO</strong><span>14001</span><small>${t.fAmb}</small></div>
        </div>
      </div>
      <div>
        <h5>${t.fCont}</h5>
        <ul>
          <li><a href="mailto:segreteria@oasis-srl.it">segreteria@oasis-srl.it</a></li>
          <li>P.IVA 02369130642</li>
          <li>SDI KRRH6B9</li>
          <li style="margin-top:14px; padding-top:10px; border-top:1px solid rgba(255,255,255,.12); font-size:12px; color:rgba(247,244,237,.55);">
            ${t.fAnag}<br><strong style="color:var(--sun);font-weight:500;">n. 000066_IMPR_/oasissrl</strong>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>${t.fRights}</div>
      <div><a href="privacy.html">${t.fPrivacy}</a></div>
    </div>
  </div>
</footer>`;

  function inject(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', function() {
    inject('topbar-slot', TOPBAR);
    inject('header-slot', HEADER);
    inject('footer-slot', FOOTER);

    // Marca current la voce di menu della pagina corrente
    var page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(function(a) {
      if (a.classList.contains('lang-switch')) return;
      var href = (a.getAttribute('href') || '').split('#')[0];
      if (href === page || (page === '' && href === 'index.html')) a.classList.add('current');
    });

    // Menu mobile
    var nav = document.getElementById('main-nav');
    var toggle = document.querySelector('.nav-toggle');
    if (nav && toggle) {
      var setOpen = function(open) {
        nav.classList.toggle('open', open);
        toggle.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? t.closeMenu : t.openMenu);
      };
      toggle.addEventListener('click', function() { setOpen(!nav.classList.contains('open')); });
      nav.querySelectorAll('a').forEach(function(a) { a.addEventListener('click', function() { setOpen(false); }); });
      window.addEventListener('resize', function() { if (window.innerWidth > 980) setOpen(false); });
      document.addEventListener('keydown', function(e) { if (e.key === 'Escape') setOpen(false); });
    }

    // Schede progetto con video: fotogramma intero e centrato
    document.querySelectorAll('.project-image').forEach(function(im) {
      if (im.querySelector('.video-thumb')) im.classList.add('is-video');
    });

    // Video YouTube: player nella pagina, nessun contatto con Google prima del clic
    document.querySelectorAll('a.video-thumb').forEach(function(a) {
      a.addEventListener('click', function(e) {
        var m = (a.getAttribute('href') || '').match(/(?:v=|youtu\.be\/|embed\/|live\/)([A-Za-z0-9_-]{11})/);
        if (!m) return;
        e.preventDefault();
        var f = document.createElement('iframe');
        f.className = 'video-player';
        f.src = 'https://www.youtube-nocookie.com/embed/' + m[1] + '?autoplay=1&rel=0';
        f.title = a.getAttribute('title') || 'YouTube video';
        f.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        f.setAttribute('allowfullscreen', '');
        f.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
        a.parentNode.replaceChild(f, a);
      });
    });

    // Effetto "scrolled" sulla barra fissa
    var header = document.querySelector('header.main');
    if (header) {
      var onScroll = function() {
        if (window.scrollY > 20) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  });
})();
