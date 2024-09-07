
// Espera a que todo el DOM se cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    
    const ctaButton = document.querySelector('.cta-button'); // Selecciona el botón de llamada a la acción (CTA) para inscribirse
    const menuButton = document.querySelector('.menu-toggle-button');  // Selecciona el botón que abrirá el menú
    const confirmationScreen = document.querySelector('.confirmation-screen');
    const backButton = document.querySelector('.back-button');

    // Función que se ejecuta al hacer clic en el botón del menú
    // Desliza la pantalla de confirmación hacia la izquierda (-100%) para mostrarla
    menuButton.addEventListener('click', () => {
        confirmationScreen.style.transform = 'translateX(-100%)';
    });

    // Función que se ejecuta al hacer clic en el botón de volver
    // Desliza la pantalla de confirmación hacia la derecha (100%) para ocultarla y regresar a la pantalla principal.
    backButton.addEventListener('click', () => {
        confirmationScreen.style.transform = 'translateX(100%)';
    });

    // Función que se ejecuta al hacer clic en el botón de inscripción
    // Muestra una alerta indicando que la inscripción ha sido enviada
    ctaButton.addEventListener('click', () => {
        alert('Inscripción enviada.');
    });
});




