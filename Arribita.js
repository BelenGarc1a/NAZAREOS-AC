window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY; // Obtiene la posición del scroll vertical

    // Flecha para volver al inicio: que aparezca al hacer scroll
    var scrollToTop = document.querySelector('.scroll-to-top');
    if (scrollTop > 200) {
        scrollToTop.style.opacity = 1; // Hace visible la flecha
    } else {
        scrollToTop.style.opacity = 0; // Hace invisible la flecha cuando el scroll es pequeño
    }
});

// Función para desplazarse suavemente hacia la barra de navegación
function scrollToNavbar() {
    const navbar = document.getElementById("navbar"); // Selecciona el header (barra de navegación)
    if (navbar) {
        navbar.scrollIntoView({ behavior: "smooth" }); // Desplaza la vista hacia el header con animación suave
    }
}
