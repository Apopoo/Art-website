(function() {

    // Charger la librairie ConveyThis
    var s = document.createElement("script");
    s.src = "https://cdn.conveythis.com/javascript/conveythis.js";
    s.onload = function() {

        // ✅ Initialisation
        ConveyThis_Init({
            api_key: "pub_fb32793d8c366d7061fceaed2235e734"
        });

        // ✅ Quand ConveyThis est prêt
        document.addEventListener("conveythisLoaded", function() {

            // ✅ Connecter TES boutons FR/EN
            var buttons = document.querySelectorAll(".lang-btn");
            buttons.forEach(function(btn) {
                btn.addEventListener("click", function() {

                    var lang = this.getAttribute("data-lang");

                    if (window.ConveyThis_Translation) {
                        ConveyThis_Translation.switchToLang(lang);
                        console.log("Changement de langue vers :", lang);
                    } else {
                        console.error("ConveyThis_Translation introuvable.");
                    }
                });
            });

            // ✅ Cacher le widget ConveyThis
            function hideConveyThisWidget() {
                var widget = document.getElementById("conveythis-wrapper");
                if (widget) {
                    widget.style.display = "none";
                } else {
                    setTimeout(hideConveyThisWidget, 200);
                }
            }
            hideConveyThisWidget();
        });
    };

    // ✅ Ajouter le script ConveyThis dans le head
    document.head.appendChild(s);


    // ✅ Gestion de l'ouverture/fermeture du menu FR/EN
    document.addEventListener("DOMContentLoaded", function() {
        var toggle = document.getElementById("lang-toggle");
        var dropdown = document.querySelector(".lang-dropdown");

        // ✅ Correction du bug &amp;&amp;
        if (toggle && dropdown) {
            toggle.addEventListener("click", function() {
                dropdown.classList.toggle("open");
            });
        }
    });

})();
