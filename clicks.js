const images = document.querySelectorAll('.imes');

images.forEach((image) => {
    image.addEventListener('click', () => {
        const imageName = image.getAttribute('data-name');
        console.log('Enviando clic para:', imageName); // Verifica que el nombre de la imagen se obtenga correctamente

        fetch('click.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image_name: imageName }), // Envío de datos
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                console.log(`Clic registrado para la imagen: ${imageName}`);
            } else {
                console.error(`Error al registrar el clic: ${data.message}`);
            }
        })
        .catch((error) => {
            console.error('Error de red:', error);
        });
    });
});

