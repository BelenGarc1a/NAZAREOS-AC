// Selecciona todas las imágenes dentro del carrusel
const images = document.querySelectorAll('.carrusel2 span img');

// Agrega el evento de doble clic a cada imagen
images.forEach(img => {
    img.addEventListener('dblclick', function () {
        const url = this.getAttribute('data-url'); // Obtiene el enlace del atributo data-url
        if (url) {
            window.open(url, '_blank'); // Abre el enlace en una nueva pestaña
        }
    });
});
