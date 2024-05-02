// Obtener referencia a los botones
const btnRegistrar = document.getElementById('btn-registrar');
const btnIniciarSesion = document.getElementById('btn-iniciar-sesion');

// Evento clic para el botón de registrar
btnRegistrar.addEventListener('click', function() {
    window.location.href = 'registro.html'; // Redireccionar a la página de registro
});

// Evento clic para el botón de iniciar sesión
btnIniciarSesion.addEventListener('click', function() {
    window.location.href = 'inicio-sesion.html'; // Redireccionar a la página de inicio de sesión
});