(function() {
    var s = document.createElement("script");
    s.src = "https://cdn.conveythis.com/javascript/conveythis.js";
    s.onload = function() {

        // Initialisation avec ta clé API
        ConveyThis_Init({
            api_key: "pub_fb32793d8c366d7061fceaed2235e734"
        });
        
        document.addEventListener("conveythisLoaded", function() {

            // Connecter boutons FR/EN
            document.querySelectorAll(".lang-btn").forEach(btn => {
                btn.addEventListener("click", function() {

                    const lang = this.getAttribute("data-lang");

                    if (window.ConveyThis_Translation) {
                        ConveyThis_Translation.switchToLang(lang);
                    } else {
                        console.error("ConveyThis_Translation introuvable.");
                    }
                });
            });

            // Cacher widget
            const w = document.getElementById("conveythis-wrapper");
            if (w) w.style.display = "none";

        });
    };

    document.head.appendChild(s);
})();
