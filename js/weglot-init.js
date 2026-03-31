Weglot.initialize({
  api_key: 'wg_07cb6a32cad441414a25b5b379d0de257',
  originalLanguage: 'fr',
  destinationLanguages: ['en']
});

document.addEventListener('DOMContentLoaded', function () {
  var btnFr = document.getElementById('btn-fr');
  var btnEn = document.getElementById('btn-en');
  var langToggle = document.getElementById('lang-toggle');
  var langDropdown = document.querySelector('.lang-dropdown');
  var langSelector = document.querySelector('.lang-selector');

  function setLanguage(lang) {
    if (lang === 'en') {
      Weglot.switchTo('en');
    } else {
      Weglot.switchTo('fr');
    }
  }

  if (btnFr) {
    btnFr.addEventListener('click', function () {
      setLanguage('fr');
      closeLangDropdown();
    });
  }

  if (btnEn) {
    btnEn.addEventListener('click', function () {
      setLanguage('en');
      closeLangDropdown();
    });
  }

  if (langToggle) {
    langToggle.addEventListener('click', function (event) {
      event.stopPropagation();
      var isOpen = langDropdown.classList.contains('open');
      if (isOpen) {
        closeLangDropdown();
      } else {
        openLangDropdown();
      }
    });
  }

  function openLangDropdown() {
    if (langDropdown) {
      langDropdown.classList.add('open');
    }
    if (langToggle) {
      langToggle.setAttribute('aria-expanded', 'true');
    }
  }

  function closeLangDropdown() {
    if (langDropdown) {
      langDropdown.classList.remove('open');
    }
    if (langToggle) {
      langToggle.setAttribute('aria-expanded', 'false');
    }
  }

  document.addEventListener('click', function (event) {
    if (langSelector && !langSelector.contains(event.target)) {
      closeLangDropdown();
    }
  });

  function syncActive() {
    var current = Weglot.getCurrentLang();

    if (langToggle) {
      var label = current === 'en' ? 'English' : 'Français';
      var flagSpan = langToggle.querySelector('.lang-flag');
      var labelSpan = langToggle.querySelector('.lang-label');
      if (flagSpan) {
        flagSpan.classList.toggle('lang-flag--en', current === 'en');
        flagSpan.classList.toggle('lang-flag--fr', current === 'fr');
      }
      btnFr.classList.toggle('is-active', current === 'fr');
      btnFr.setAttribute('aria-pressed', String(current === 'fr'));
      btnFr.textContent = 'Français';
    }
    if (btnEn) {
      btnEn.classList.toggle('is-active', current === 'en');
      btnEn.setAttribute('aria-pressed', String(current === 'en'));
      btnEn.textContent = 'Anglais';
    }
  }

  syncActive();
  Weglot.on('languageChanged', syncActive);
});


