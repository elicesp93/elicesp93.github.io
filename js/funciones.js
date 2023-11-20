// Navbar después de scroll de 500px
window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition >= 500) {
        document.querySelector(".navbar").classList.add("scrolled");
    } else {
        document.querySelector(".navbar").classList.remove("scrolled");
    }
});


// Botón que te devuelve a arriba
var scrollToTopButton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        scrollToTopButton.style.display = "flex";
    } else {
        scrollToTopButton.style.display = "none";
    }
}


// When the user clicks on the button, scroll to the top of the document
scrollToTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});    


// Botón scroll al final de la página
document.addEventListener("DOMContentLoaded", function() {
    var scrollToBottomBtn = document.getElementById("scrollToBottomBtn");

    scrollToBottomBtn.addEventListener("click", function() {
        // Obtén la altura total del documento
        var bodyHeight = document.body.scrollHeight || document.documentElement.scrollHeight;

        // Haz scroll suavemente hasta el final de la página
        window.scrollTo({
            top: bodyHeight,
            behavior: "smooth"
        });
    });
});


// Funcion para esconder los botones hasta el scroll

window.addEventListener("scroll", function() {
    var panelBotones = document.querySelector(".panel-botones");
    var scrollPosition = window.scrollY;

    // Adjust the value (in pixels) according to when you want the panel to appear
    var scrollThreshold = 100;

    if (scrollPosition > scrollThreshold) {
        panelBotones.style.display = "block";
    } else {
        panelBotones.style.display = "none";
    }
});
