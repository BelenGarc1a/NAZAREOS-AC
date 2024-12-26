document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe de manera convencional

    // Obtener datos del formulario
    const formData = new FormData(this);

    // Enviar datos mediante AJAX
    fetch('formulario.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) // Esperar la respuesta en formato JSON
    .then(data => {
        // Mostrar mensaje
        const mensaje = document.getElementById('mensaje');
        mensaje.textContent = data.mensaje; // Establecer el mensaje
        mensaje.className = `mensaje ${data.clase}`; // Establecer la clase para el estilo
    })
    .catch(error => {
        console.error('Error:', error);
        const mensaje = document.getElementById('mensaje');
        mensaje.textContent = 'Ocurrió un error inesperado. Inténtalo más tarde.';
        mensaje.className = 'mensaje error';
    });
});