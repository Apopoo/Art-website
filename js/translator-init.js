(function() {
    var s = document.createElement("script");
    s.src = "https://cdn.conveythis.com/javascript/conveythis.js";
    s.onload = function() {

        //  Initialisation
        ConveyThis_Init({
            api_key: "pub_fb32793d8c366d7061fceaed2235e734"
        });
        
        // Quand ConveyThis a fini de charger
        document.addEventListener("conveythisLoaded", function() {

            // Connecter boutons FR/EN
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

            
            function hideConveyThisWidget() {
                var widget = document.getElementById("conveythis-wrapper");
                if (widget) {
                    widget.style.display = "none";
                } else {
                    setTimeout(hideConveyThisWidget, 200);
                }
            }
            hideConveyThisWidget()

        });
    };
    document.head.appendChild(s);
})();
