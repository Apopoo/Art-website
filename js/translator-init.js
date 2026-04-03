document.addEventListener("DOMContentLoaded", function() {

    // boutons langues
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", function() {
          const lang = this.getAttribute("data-lang");

           // Appel ConveyThis
            if (typeof ConveyThis !== "undefined") {
                ConveyThis.switchLanguage(lang);
            } else {
                console.error("ConveyThis n'est pas chargé.");
            }
        });
    });
});
