(function() {

    // Charger la librairie ConveyThis
    var s = document.createElement("script");
    s.src = "https://cdn.conveythis.com/javascript/conveythis.js";
    s.onload = function() {

        // Initialisation
        ConveyThis_Init({
            api_key: "pub_fb32793d8c366d7061fceaed2235e734"
        });

        // ConveyThis est prêt
        document.addEventListener("conveythisLoaded", function() {

            console.log("✅ ConveyThis ready");

            // Boutons FR/EN
            var buttons = document.querySelectorAll(".lang-btn");

            buttons.forEach(function(btn) {
                btn.addEventListener("click", function(e) {
                    e.stopPropagation(); // important !
                    
                    var lang = this.getAttribute("data-lang");
                    console.log("Bouton cliqué :", lang);

                    if (window.ConveyThis_Translation) {
                        ConveyThis_Translation.switchToLang(lang);
                        console.log("Langue changée :", lang);
                    } else {
                        console.error("❌ API non prête !");
                    }
                });
            });

            // Cacher le widget ConveyThis
            function hideWidget() {
                var w = document.getElementById("conveythis-wrapper");
                if (w) {
                    w.style.display = "none";
                } else {
                    setTimeout(hideWidget, 200);
                }
            }
            hideWidget();
        });
    };

    document.head.appendChild(s);

})();
``
