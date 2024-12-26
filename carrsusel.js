const slider = document.querySelector('.slider-images');
const sliderImages = document.querySelectorAll('.slider-img');
const dots = document.querySelectorAll('.dots button');

let index = 0; // Índice actual del carrusel
const imagesPerPage = 11; // Número de imágenes visibles por página
const totalPages = Math.ceil(sliderImages.length / imagesPerPage); // Total de páginas

// Actualizar carrusel
function updateSlider() {
    slider.style.transition = 'transform 1s ease-in-out'; // Transición más lenta
    slider.style.transform = `translateX(-${index * 100}%)`;

    // Actualizar puntos activos
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Cambiar página al hacer clic en un punto
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        updateSlider();
    });
});

// Navegación por hover en las imágenes
sliderImages.forEach((image, i) => {
    image.addEventListener('mouseover', () => {
        if (i === index * imagesPerPage + imagesPerPage - 1 && index < totalPages - 1) {
            index++; // Última imagen visible, avanzar
        } else if (i === sliderImages.length - 1) {
            index = 0; // Regresar a la primera página
        } else if (i === index * imagesPerPage && index > 0) {
            index--; // Primera imagen visible, retroceder
        }
        updateSlider();
    });
});

// Lógica para el ícono de corazón
sliderImages.forEach((image) => {
    const heartIcon = image.querySelector('.heart-icon');
    heartIcon.addEventListener('click', () => {
        heartIcon.classList.toggle('active');
    });
});