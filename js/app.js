/* ======= MENU MOBILE ======= */
const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    menu.classList.toggle("active");
    const icon = document.querySelector("header .material-icons");
    if (menu.classList.contains("active")) {
        icon.innerHTML = "close";
    } else {
        icon.innerHTML = "menu";
    }
};

// Fermer le menu quand on clique sur un lien
document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".header-menu a");
    const menu = document.querySelector(".header-menu");

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
            document.querySelector("header .material-icons").innerHTML = "menu";
        });
    });
});

/* ======= LIGHTBOX ======= */
(function () {
    const galleryLinks = Array.from(document.querySelectorAll('.gallery1 a'));
    if (!galleryLinks.length) return;

    const images = galleryLinks.map(a => a.getAttribute('href') || (a.querySelector('img') && a.querySelector('img').src));
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const lbImage = lightbox.querySelector('.lb-image');
    const lbCaption = lightbox.querySelector('.lb-caption');
    const btnClose = lightbox.querySelector('.lb-close');
    const btnNext = lightbox.querySelector('.lb-next');
    const btnPrev = lightbox.querySelector('.lb-prev');

    let current = 0;

    function open(idx) {
        current = idx;
        lbImage.src = images[current] || '';
        const alt = galleryLinks[current].querySelector('img') ? galleryLinks[current].querySelector('img').alt : '';
        lbCaption.textContent = alt || '';
        lightbox.classList.remove('hidden');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        lightbox.classList.add('hidden');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        lbImage.src = '';
    }

    function showNext() {
        open((current + 1) % images.length);
    }

    function showPrev() {
        open((current - 1 + images.length) % images.length);
    }

    galleryLinks.forEach((a, i) => {
        a.addEventListener('click', function (e) {
            e.preventDefault();
            open(i);
        });
    });

    btnClose.addEventListener('click', close);
    btnNext.addEventListener('click', showNext);
    btnPrev.addEventListener('click', showPrev);

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) close();
    });

    document.addEventListener('keydown', function (e) {
        if (lightbox.classList.contains('hidden')) return;
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'Escape') close();
    });

    let touchStartX = 0;
    let touchStartY = 0;
    const swipeThreshold = 40;
    const maxVerticalTolerance = 75;

    lightbox.addEventListener('touchstart', function (e) {
        const t = e.changedTouches[0];
        touchStartX = t.clientX;
        touchStartY = t.clientY;
    }, { passive: true });

    lightbox.addEventListener('touchend', function (e) {
        const t = e.changedTouches[0];
        const distX = t.clientX - touchStartX;
        const distY = t.clientY - touchStartY;
        if (Math.abs(distX) >= swipeThreshold && Math.abs(distY) <= maxVerticalTolerance) {
            if (distX < 0) showNext();
            else showPrev();
        }
    }, { passive: true });

})();

/* ======= VIDEO PLAY BUTTONS ======= */
document.addEventListener('DOMContentLoaded', function () {

    function setupVideoPlayButton(videoId, btnId) {
        const video = document.getElementById(videoId);
        const playBtn = document.getElementById(btnId);

        if (!video || !playBtn) return;

        video.addEventListener('play', function () {
            playBtn.classList.add('hidden');
        });

        video.addEventListener('pause', function () {
            playBtn.classList.remove('hidden');
        });

        playBtn.classList.remove('hidden');
    }

    setupVideoPlayButton('myVideo', 'playBtn');
    setupVideoPlayButton('myVideo1', 'playBtn1');
    setupVideoPlayButton('myVideo2', 'playBtn2');
});


/* ======================================================
   ✅ ✅ SYSTÈME LANGUE — VERSION FINALE
   (uniquement dropdown + liens FR ↔ EN)
   ====================================================== */
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("lang-toggle");
    const dropdown = document.querySelector(".lang-dropdown");

    if (!toggle || !dropdown) return;

    toggle.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdown.classList.toggle("open");
    });

    document.addEventListener("click", function () {
        dropdown.classList.remove("open");
    });
});
