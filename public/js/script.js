document.addEventListener('DOMContentLoaded', function() {
    
const initStyle = document.getElementById('init-style');
const title = document.querySelector('.title-init');
const slogan = document.querySelector('.slogan-init');
const image = document.querySelector('.img-init-flower');

// Movimiento de elementos al mover el ratón
initStyle.addEventListener('mousemove', (event) => {
    const { left, top } = initStyle.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;

    // Calcular el movimiento de los elementos
    const moveX = (mouseX / initStyle.clientWidth - 0.5) * 20; // Ajusta el factor para el movimiento
    const moveY = (mouseY / initStyle.clientHeight - 0.5) * 20; // Ajusta el factor para el movimiento

    // Mover los elementos
    title.style.transform = `translate(${moveX}px, ${moveY}px)`;
    image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    slogan.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Restablecer posición al salir del contenedor
initStyle.addEventListener('mouseleave', () => {
    title.style.transform = 'translate(0, 0)';
    image.style.transform = 'translate(0, 0)';
    slogan.style.transform = 'translate(0, 0)';
});

});

