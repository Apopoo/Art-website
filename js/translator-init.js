(function() {

    console.log("🔄 Chargement du script ConveyThis…");

    // 1️⃣ Charger la librairie ConveyThis AVEC ta clé API
    var s = document.createElement("script");
    s.src = "//cdn.conveythis.com/javascript/conveythis.js?api_key=pub_fb32793d8c366d7061fceaed2235e734";
    s.async = true;

    s.onload = function() {

        console.log("✅ Script ConveyThis chargé");

        // 2️⃣ Initialiser l’API
        ConveyThis_Init({
            api_key: "pub_fb32793d8c366d7061fceaed2235e734"
        });

        // 3️⃣ Quand ConveyThis est prêt
        document.addEventListener("conveythisLoaded", function() {

            console.log("✅ ConveyThis est prêt");

            // Sélection des boutons de langue
            var buttons = document.querySelectorAll(".lang-btn");

            if (!buttons.length) {
                console.error("❌ Aucun bouton .lang-btn trouvé");
                return;
            }

            // 4️⃣ Connexion des boutons FR / EN
            buttons.forEach(function(btn) {

                btn.addEventListener("click", function(e) {

                    e.preventDefault();
                    e.stopPropagation(); // ⚠ Empêche le <ul> de bouffer le clic

                    var lang = this.getAttribute("data-lang");

                    console.log("🌐 Clic sur :", lang);

                    if (window.ConveyThis_Translation) {
                        ConveyThis_Translation.switchToLang(lang);
                        console.log("✅ Langue changée ->", lang);
                    } else {
                        console.error("❌ ConveyThis_Translation n'est pas disponible !");
                    }
                });
            });

            // 5️⃣ Cacher le widget officiel ConveyThis
            function hideConveyThisWidget() {
                var widget = document.getElementById("conveythis-wrapper");
                if (widget) {
                    widget.style.display = "none";
                    console.log("✅ Widget ConveyThis caché");
                } else {
                    setTimeout(hideConveyThisWidget, 200);
                }
            }

            hideConveyThisWidget();
        });
    };

    document.head.appendChild(s);

    // 6️⃣ Gestion de ton dropdown custom
    document.addEventListener("DOMContentLoaded", function() {

        var toggle = document.getElementById("lang-toggle");
        var dropdown = document.querySelector(".lang-dropdown");

        if (!toggle || !dropdown) {
            console.error("❌ lang-toggle ou .lang-dropdown introuvable");
            return;
        }

        toggle.addEventListener("click", function(e) {
            e.stopPropagation();
            dropdown.classList.toggle("open");
        });

        // Fermer si on clique ailleurs
        document.addEventListener("click", function() {
            dropdown.classList.remove("open");
        });
    });

})();
