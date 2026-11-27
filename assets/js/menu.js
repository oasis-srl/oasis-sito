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
          <li><a href="mailto:oasis@pec.it">PEC oasis@pec.it</a></li>
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

    // ---- PROMOZIONE TORYMUS — scade da sola a fine 31/12/2026 ----
    // Per una nuova promo: cambiare PROMO_END e i testi qui sotto e in torymus.html / en/torymus.html.
    var PROMO_END = new Date('2027-01-01T00:00:00+01:00');
    var promoOn = new Date() < PROMO_END;
    document.querySelectorAll('[data-promo]').forEach(function (el) {
      if (!promoOn) el.parentNode.removeChild(el);
    });
    var promoClosed = false;
    try { promoClosed = sessionStorage.getItem('oasis-promo-torymus-2026') === '1'; } catch (e) {}
    var topSlot = document.getElementById('topbar-slot');
    if (promoOn && !promoClosed && topSlot) {
      var pt = inEN
        ? { tag: 'Offer', txt: '<strong><em>Torymus sinensis</em>: €50 off every release</strong> — the discount adds up for each release. Until 31 December 2026.', more: 'Find out more', close: 'Close' }
        : { tag: 'Promozione', txt: '<strong><em>Torymus sinensis</em>: 50 € di sconto su ogni lancio</strong> — lo sconto si somma per ogni lancio acquistato. Fino al 31 dicembre 2026.', more: 'Scopri di più', close: 'Chiudi' };
      var bar = document.createElement('div');
      bar.className = 'promo-bar';
      bar.setAttribute('role', 'region');
      bar.setAttribute('aria-label', pt.tag);
      bar.innerHTML = '<div class="container"><a class="promo-bar-link" href="torymus.html#promo-torymus">'
        + '<span class="promo-bar-tag">' + pt.tag + '</span><span class="promo-bar-txt">' + pt.txt + '</span>'
        + '<span class="promo-bar-more">' + pt.more + ' →</span></a>'
        + '<button type="button" class="promo-bar-close" aria-label="' + pt.close + '">×</button></div>';
      topSlot.parentNode.insertBefore(bar, topSlot);
      bar.querySelector('.promo-bar-close').addEventListener('click', function () {
        bar.parentNode.removeChild(bar);
        try { sessionStorage.setItem('oasis-promo-torymus-2026', '1'); } catch (e) {}
      });
    }
    // Form contatti precompilato da ?promo=torymus
    if (/[?&]promo=torymus\b/.test(location.search)) {
      var fTipo = document.getElementById('f-tipo'), fMsg = document.getElementById('f-msg');
      if (fTipo) fTipo.value = 'Torymus sinensis';
      if (fMsg && !fMsg.value) fMsg.value = inEN
        ? 'I would like to order … Torymus sinensis releases with the €50-per-release offer (valid until 31/12/2026). Chestnut grove location: …'
        : 'Vorrei acquistare … lanci di Torymus sinensis con la promozione da 50 € a lancio (valida fino al 31/12/2026). Località del castagneto: …';
    }

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

    // ---- Carosello foto (news): puro scroll-snap, nessun cookie, nessun CDN ----
    var ncLabels = inEN
      ? { prev: 'Previous photo', next: 'Next photo', go: 'Go to photo ' }
      : { prev: 'Foto precedente', next: 'Foto successiva', go: 'Vai alla foto ' };
    document.querySelectorAll('[data-carousel]').forEach(function (car) {
      var track = car.querySelector('.nc-track');
      if (!track) return;
      var slides = track.querySelectorAll('.nc-slide');
      if (slides.length < 2) return;
      var prev = car.querySelector('.nc-prev');
      var next = car.querySelector('.nc-next');
      var dotsWrap = car.querySelector('.nc-dots');
      var dots = [];
      var goTo = function (i) {
        track.scrollTo({ left: track.clientWidth * i, behavior: 'smooth' });
      };
      if (dotsWrap) {
        for (var i = 0; i < slides.length; i++) {
          var d = document.createElement('button');
          d.className = 'nc-dot';
          d.type = 'button';
          d.setAttribute('aria-label', ncLabels.go + (i + 1));
          (function (idx) { d.addEventListener('click', function () { goTo(idx); }); })(i);
          dotsWrap.appendChild(d);
          dots.push(d);
        }
      }
      if (prev) prev.setAttribute('aria-label', ncLabels.prev);
      if (next) next.setAttribute('aria-label', ncLabels.next);
      var current = function () { return Math.round(track.scrollLeft / track.clientWidth); };
      var setActive = function () {
        var idx = current();
        dots.forEach(function (dd, i) { dd.classList.toggle('is-active', i === idx); });
      };
      if (prev) prev.addEventListener('click', function () { goTo(Math.max(0, current() - 1)); });
      if (next) next.addEventListener('click', function () { goTo(Math.min(slides.length - 1, current() + 1)); });
      var tmr;
      track.addEventListener('scroll', function () { clearTimeout(tmr); tmr = setTimeout(setActive, 80); }, { passive: true });
      window.addEventListener('resize', setActive);
      setActive();

      // scorrimento automatico: si mette in pausa col mouse sopra e si ferma se l'utente interagisce
      var ncReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var ncAuto = null, ncPaused = false;
      var ncAdvance = function () { var i = current(); goTo(i >= slides.length - 1 ? 0 : i + 1); };
      var ncStart = function () { if (!ncReduce && !ncAuto) ncAuto = setInterval(function () { if (!ncPaused) ncAdvance(); }, 4200); };
      var ncStop = function () { if (ncAuto) { clearInterval(ncAuto); ncAuto = null; } };
      car.addEventListener('mouseenter', function () { ncPaused = true; });
      car.addEventListener('mouseleave', function () { ncPaused = false; });
      if (prev) prev.addEventListener('click', ncStop);
      if (next) next.addEventListener('click', ncStop);
      dots.forEach(function (dd) { dd.addEventListener('click', ncStop); });
      track.addEventListener('pointerdown', ncStop);
      ncStart();
    });

    // ---- News: comparsa in scorrimento + filtri per categoria ----
    var newsList = document.querySelector('.news-list');
    if (newsList) {
      var newsItems = [].slice.call(newsList.querySelectorAll('.news-item'));

      // ---- Condivisione di ogni notizia (LinkedIn + condivisione del telefono / copia link) ----
      // Ogni notizia riceve un id ricavato dal titolo, così il link porta proprio a quella notizia.
      var shT = inEN
        ? { lbl: 'Share', li: 'Share on LinkedIn', ig: 'Instagram', more: 'Share', copied: 'Link copied — paste it into Instagram or anywhere else', copiedShort: 'Link copied' }
        : { lbl: 'Condividi', li: 'Condividi su LinkedIn', ig: 'Instagram', more: 'Condividi', copied: 'Link copiato — incollalo su Instagram o dove preferisci', copiedShort: 'Link copiato' };
      var slug = function (t) {
        var x = t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        return x.length > 60 ? x.slice(0, 61).replace(/-[^-]*$/, '') : x;
      };
      var baseUrl = location.href.split('#')[0].split('?')[0];
      var copyText = function (txt, done) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(txt).then(done, function () { window.prompt('', txt); });
        } else { window.prompt('', txt); }
      };
      var icoLI = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>';
      var icoIG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';
      var icoSH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7"/><path d="M16 6l-4-4-4 4"/><path d="M12 2v13"/></svg>';
      newsItems.forEach(function (it) {
        var h = it.querySelector('h3');
        var content = it.querySelector('.news-content');
        if (!h || !content) return;
        if (!it.id) it.id = 'news-' + slug(h.textContent);
        var url = baseUrl + '#' + it.id;
        var title = h.textContent.trim();
        var box = document.createElement('div');
        box.className = 'news-share';
        box.innerHTML = '<span class="news-share-lbl">' + shT.lbl + '</span>'
          + '<a class="ns-btn ns-li" target="_blank" rel="noopener" href="https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url) + '" aria-label="' + shT.li + '" title="' + shT.li + '">' + icoLI + '<span>LinkedIn</span></a>'
          + '<button type="button" class="ns-btn ns-ig" aria-label="' + shT.ig + '" title="' + shT.ig + '">' + icoIG + '<span>Instagram</span></button>'
          + (navigator.share ? '<button type="button" class="ns-btn ns-more" aria-label="' + shT.more + '" title="' + shT.more + '">' + icoSH + '<span>' + shT.more + '</span></button>' : '')
          + '<span class="ns-msg" role="status" aria-live="polite"></span>';
        content.appendChild(box);
        var msg = box.querySelector('.ns-msg');
        var flash = function (t) { msg.textContent = t; clearTimeout(msg._t); msg._t = setTimeout(function () { msg.textContent = ''; }, 4000); };
        var nativeShare = function () { return navigator.share({ title: title, text: title + ' — OASIS S.r.l.', url: url }).catch(function () {}); };
        // Instagram non ha un link di condivisione web: sul telefono si apre il menu di condivisione
        // (dove compare Instagram); sul computer si copia il link.
        box.querySelector('.ns-ig').addEventListener('click', function () {
          if (navigator.share && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) nativeShare();
          else copyText(url, function () { flash(shT.copied); });
        });
        var more = box.querySelector('.ns-more');
        if (more) more.addEventListener('click', nativeShare);
      });
      // apertura diretta di una notizia condivisa (gli id sono creati via JS, quindi lo scroll va fatto qui)
      if (location.hash) {
        var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (target && target.classList.contains('news-item')) {
          target.classList.add('in', 'is-target');
          setTimeout(function () { target.scrollIntoView({ block: 'start' }); }, 60);
        }
      }

      // comparsa in scorrimento (solo con JS; senza JS il CSS lascia tutto visibile)
      document.documentElement.classList.add('js-reveal');
      newsItems.forEach(function (it) { it.classList.add('reveal'); });
      if ('IntersectionObserver' in window) {
        var nio = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); nio.unobserve(e.target); } });
        }, { threshold: 0.15 });
        newsItems.forEach(function (it) { nio.observe(it); });
      } else {
        newsItems.forEach(function (it) { it.classList.add('in'); });
      }

      // filtri per categoria, ricavati dai tag presenti (nessuna modifica manuale all'HTML)
      var allLabel = inEN ? 'All' : 'Tutte';
      var cats = [];
      newsItems.forEach(function (it) {
        var tg = it.querySelector('.news-tag');
        var c = tg ? tg.textContent.trim() : '';
        it.setAttribute('data-cat', c);
        if (c && cats.indexOf(c) === -1) cats.push(c);
      });
      if (cats.length > 1) {
        var bar = document.createElement('div');
        bar.className = 'news-filter';
        var mkChip = function (label, cat) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'news-chip' + (cat === null ? ' is-active' : '');
          b.textContent = label;
          b.addEventListener('click', function () {
            bar.querySelectorAll('.news-chip').forEach(function (x) { x.classList.remove('is-active'); });
            b.classList.add('is-active');
            newsItems.forEach(function (it) {
              var show = (cat === null) || (it.getAttribute('data-cat') === cat);
              it.classList.toggle('is-hidden', !show);
            });
          });
          bar.appendChild(b);
        };
        mkChip(allLabel, null);
        cats.forEach(function (c) { mkChip(c, c); });
        newsList.parentNode.insertBefore(bar, newsList);
      }
    }

    // ---- Pagina Progetti: filoni a fisarmonica con intestazione sticky ----
    var pgHeads = [].slice.call(document.querySelectorAll('.projects-group-head'));
    if (pgHeads.length) {
      var pgWord = inEN ? ['project', 'projects'] : ['progetto', 'progetti'];
      pgHeads.forEach(function (head, i) {
        var grid = head.nextElementSibling;
        if (!grid || !grid.classList.contains('projects-grid')) return;
        var sec = document.createElement('div');
        sec.className = 'pg-section pg-collapsed';
        head.parentNode.insertBefore(sec, head);
        sec.appendChild(head);
        sec.appendChild(grid);
        head.classList.add('pg-acc-head');
        head.id = 'filone-' + i;
        var desc = head.querySelector('p');
        if (desc) desc.classList.add('pg-desc');
        var n = grid.querySelectorAll('.project-card').length;
        var h3 = head.querySelector('h3');
        if (h3) {
          var badge = document.createElement('span');
          badge.className = 'pg-count';
          badge.textContent = n + ' ' + pgWord[n === 1 ? 0 : 1];
          h3.appendChild(badge);
        }
        var chev = document.createElement('span');
        chev.className = 'pg-chevron';
        chev.textContent = '▼';
        head.appendChild(chev);
        head.setAttribute('role', 'button');
        head.tabIndex = 0;
        head.setAttribute('aria-expanded', 'false');
        var pgToggle = function () {
          var stickyTop = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pg-sticky-top')) || 70;
          var wasStuck = head.getBoundingClientRect().top <= stickyTop + 2;
          var c = sec.classList.toggle('pg-collapsed');
          head.setAttribute('aria-expanded', c ? 'false' : 'true');
          // se richiudo un filone mentre la sua intestazione e' incollata in alto,
          // riporto la vista sull'intestazione per non perdere il punto
          if (c && wasStuck) {
            window.scrollTo(0, head.getBoundingClientRect().top + window.scrollY - stickyTop - 8);
          }
        };
        head.addEventListener('click', pgToggle);
        head.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pgToggle(); }
        });
      });
      // l'intestazione sticky si aggancia all'altezza reale dell'header (che si rimpicciolisce allo scroll)
      var pgHeader = document.querySelector('header.main');
      var pgFixTop = function () {
        var h = pgHeader ? pgHeader.offsetHeight : 70;
        document.documentElement.style.setProperty('--pg-sticky-top', h + 'px');
      };
      pgFixTop();
      window.addEventListener('scroll', pgFixTop, { passive: true });
      window.addEventListener('resize', pgFixTop);
    }

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
