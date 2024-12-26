<?php
// Mostrar errores (solo para desarrollo; deshabilítalo en producción)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Incluir archivo de conexión
include 'conexion.php';

// Arreglo para la respuesta
$response = ['mensaje' => '', 'clase' => ''];

// Verificar si se envió el formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validar el correo
    $correo = isset($_POST['correo']) ? trim($_POST['correo']) : '';

    if (!empty($correo) && filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        // Escapar entrada para prevenir inyección SQL
        $correoSanitizado = mysqli_real_escape_string($enlace, $correo);

        // Insertar correo en la base de datos
        $insertarDatos = "INSERT INTO correo (correo) VALUES ('$correoSanitizado')";
        $ejecutarInsertar = mysqli_query($enlace, $insertarDatos);

        if ($ejecutarInsertar) {
            $response['mensaje'] = 'Correo guardado correctamente.';
            $response['clase'] = 'exito';
        } else {
            $response['mensaje'] = 'Error al guardar el correo. Intenta nuevamente.';
            $response['clase'] = 'error';
        }
    } else {
        $response['mensaje'] = 'El correo ingresado no es válido o está vacío.';
        $response['clase'] = 'error';
    }
} else {
    $response['mensaje'] = 'No se recibió ningún dato.';
    $response['clase'] = 'error';
}

// Devolver la respuesta en formato JSON
header('Content-Type: application/json');
echo json_encode($response);
?>