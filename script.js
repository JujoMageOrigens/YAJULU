// Agrega evento de clic a los botones de compra
document.querySelectorAll('.producto button').forEach(button => {
    button.addEventListener('click', () => {
        alert('¡Gracias por tu compra!');
    });
});