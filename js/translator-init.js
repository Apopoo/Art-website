(function() {
    var s = document.createElement("script");
    s.src = "https://cdn.conveythis.com/javascript/conveythis.js";
    s.onload = function() {

        // Initialisation
        ConveyThis_Init({
            api_key: "pub_fb32793d8c366d7061fceaed2235e734"
        });

        // boutons de langues
        document.querySelectorAll(".lang-btn").forEach(btn => {
            btn.addEventListener("click", function() {
                const lang = this.getAttribute("data-lang");
                ConveyThis.switchLanguage(lang);
            });
        });
    };
    document.head.appendChild(s);
})();
