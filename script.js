// Animación de carga
let progress = 0;
const syncElement = document.getElementById('sync');

const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 5);
    if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
    }
    syncElement.textContent = `${progress}%`;
}, 200);
// Activar efecto cuando se presione el botón
document.getElementById('activate-btn').addEventListener('click', function() {
    const evas = document.querySelectorAll('.eva-gif');
    
    evas.forEach(eva => {
        eva.classList.add('active');
        
        // Resetear después de 3 segundos
        setTimeout(() => {
            eva.classList.remove('active');
        }, 3000);
    });
});