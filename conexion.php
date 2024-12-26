<?php
$servidor = "localhost";
$usuario = "root";
$clave = "";
$baseDeDatos = "contáctanos";

$enlace = mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);

if (!$enlace) {
    die("Error al conectar a la base de datos: " . mysqli_connect_error());
}
?>
