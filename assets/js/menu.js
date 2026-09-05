// menu.js — genera automaticamente topbar, menu e footer di OASIS
(function() {
  const TOPBAR = `<div class="topbar">
  <div class="container">
    <div class="topbar-info">
      <span>Organismo di Ricerca riconosciuto</span>
      <span>PMI Innovativa</span>
      <span>Certificata ISO 9001 &amp; ISO 14001</span>
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
  const HEADER = `<header class="main">
  <div class="container">
    <a href="index.html" class="logo" aria-label="OASIS srl — Home">
      <div class="logo-mark">
        <img src="assets/images/logo-oasis.jpeg" alt="OASIS S.r.l. — Ricerca &amp; Sviluppo">
      </div>
    </a>
    <nav id="main-nav">
      <ul>
        <li><a href="chi-siamo.html">Chi siamo</a></li>
        <li class="has-dropdown">
          <a href="servizi.html">Servizi</a>
          <ul class="dropdown">
            <li><a href="finanza-agevolata.html">Finanza Agevolata<small>Bandi · Credito R&amp;S · PNRR</small></a></li>
            <li><a href="ricerca-sviluppo.html">Ricerca &amp; Sviluppo<small>Progetti scientifici · Credito R&amp;S</small></a></li>
            <li><a href="torymus.html">Torymus sinensis<small>Controllo biologico del cinipide</small></a></li>
          </ul>
        </li>
        <li><a href="progetti.html">Progetti</a></li>
        <li><a href="divulgazione.html">Divulgazione</a></li>
        <li class="cta-li"><a href="contatti.html" class="cta">Contattaci</a></li>
      </ul>
    </nav>
    <button class="nav-toggle" type="button" aria-label="Apri il menu" aria-expanded="false" aria-controls="main-nav">
      <span class="nav-toggle-bars"><span></span><span></span><span></span></span>
    </button>
  </div>
</header>`;
  const FOOTER = `<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="brand-block">
        <div class="logo footer-logo">
          <div class="logo-mark">
            <img src="assets/images/logo-oasis.jpeg" alt="OASIS S.r.l.">
          </div>
        </div>
        <p>Organismo di Ricerca senza scopo di lucro · PMI Innovativa · Centro di Ricerca e Sviluppo dal 2004.</p>
      </div>
      <div>
        <h5>Sito</h5>
        <ul>
          <li><a href="chi-siamo.html">Chi siamo</a></li>
          <li><a href="servizi.html">Servizi</a></li>
          <li><a href="ricerca-sviluppo.html">Ricerca &amp; Sviluppo</a></li>
          <li><a href="progetti.html">Progetti</a></li>
          <li><a href="divulgazione.html">Divulgazione</a></li>
        </ul>
      </div>
      <div>
        <h5>Servizi</h5>
        <ul>
          <li><a href="finanza-agevolata.html">Finanza Agevolata</a></li>
          <li><a href="ricerca-sviluppo.html">Credito d'imposta R&amp;S</a></li>
          <li><a href="torymus.html">Torymus sinensis</a></li>
          <li><a href="contatti.html">Lavora con noi</a></li>
        </ul>
      </div>
      <div>
        <h5>Certificazioni</h5>
        <div class="iso-badges">
          <div class="iso-badge"><strong>ISO</strong><span>9001</span><small>Qualità</small></div>
          <div class="iso-badge"><strong>ISO</strong><span>14001</span><small>Ambiente</small></div>
        </div>
      </div>
      <div>
        <h5>Contatti</h5>
        <ul>
          <li><a href="mailto:segreteria@oasis-srl.it">segreteria@oasis-srl.it</a></li>
          <li>P.IVA 02369130642</li>
          <li>SDI KRRH6B9</li>
          <li style="margin-top:14px; padding-top:10px; border-top:1px solid rgba(255,255,255,.12); font-size:12px; color:rgba(247,244,237,.55);">
            Anagrafe Nazionale Ricerche<br><strong style="color:var(--sun);font-weight:500;">n. 000066_IMPR_/oasissrl</strong>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© 2026 OASIS srl · Tutti i diritti riservati</div>
      <div><a href="privacy.html">Privacy &amp; Cookie</a></div>
    </div>
  </div>
</footer>`;

  function inject(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', function() {
    inject('topbar-slot', TOPBAR);
    inject('header-slot', HEADER);
    inject('footer-slot', FOOTER);

    // Marca current la voce di menu della pagina corrente
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(a => {
      const href = (a.getAttribute('href') || '').split('#')[0];
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        a.classList.add('current');
      }
    });

    // Menu mobile: apertura/chiusura del pannello di navigazione
    var nav = document.getElementById('main-nav');
    var toggle = document.querySelector('.nav-toggle');
    if (nav && toggle) {
      var setOpen = function(open) {
        nav.classList.toggle('open', open);
        toggle.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
      };
      toggle.addEventListener('click', function() {
        setOpen(!nav.classList.contains('open'));
      });
      // Chiude il menu dopo aver scelto una voce
      nav.querySelectorAll('a').forEach(function(a) {
        a.addEventListener('click', function() { setOpen(false); });
      });
      // Chiude il menu tornando a schermo largo o premendo Esc
      window.addEventListener('resize', function() {
        if (window.innerWidth > 980) setOpen(false);
      });
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') setOpen(false);
      });
    }

    // Effetto "scrolled" sulla barra fissa: si assottiglia e prende ombra
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
