<?php
include('conexion.php');
header('Content-Type: application/json');

// Verifica si es una solicitud POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtén los datos JSON enviados
    $input = json_decode(file_get_contents('php://input'), true);

    // Verifica que 'image_name' esté presente
    if (isset($input['image_name']) && !empty($input['image_name'])) {
        $imageName = mysqli_real_escape_string($enlace, $input['image_name']);

        // Consulta para actualizar el conteo de clics
        $query = "INSERT INTO clicks (objeto_social, fecha, clicks)
                  VALUES ('$imageName', CURRENT_DATE, 1)
                  ON DUPLICATE KEY UPDATE clicks = clicks + 1";

        // Ejecuta la consulta
        if (mysqli_query($enlace, $query)) {
            echo json_encode(['success' => true, 'message' => 'Clic registrado exitosamente.']);
        } else {
            // En caso de error
            echo json_encode(['success' => false, 'message' => 'Error al registrar el clic: ' . mysqli_error($enlace)]);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'El nombre de la imagen es requerido.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método no permitido.']);
}
?>
