Weglot.initialize({
  api_key: 'wg_07cb6a32cad441414a25b5b379d0de257',
  originalLanguage: 'fr',
  destinationLanguages: ['en']
});

document.addEventListener('DOMContentLoaded', function () {
  var btnFr = document.getElementById('btn-fr');
  var btnEn = document.getElementById('btn-en');

  if (btnFr) {
    btnFr.addEventListener('click', function () {
      Weglot.switchTo('fr');
    });
  }

  if (btnEn) {
    btnEn.addEventListener('click', function () {
      Weglot.switchTo('en');
    });
  }

  function syncActive() {
    var current = Weglot.getCurrentLang(); // 'fr' ou 'en'
    if (btnFr) {
      btnFr.classList.toggle('is-active', current === 'fr');
      btnFr.setAttribute('aria-pressed', String(current === 'fr'));

      btnFr.textContent = (current === 'en') ? 'French' : 'Français';
    }
    if (btnEn) {
      btnEn.classList.toggle('is-active', current === 'en');
      btnEn.setAttribute('aria-pressed', String(current === 'en'));
      btnEn.textContent = (current === 'en') ? 'English' : 'Anglais';
    }
  }

  syncActive();
  Weglot.on('languageChanged', syncActive);
});


