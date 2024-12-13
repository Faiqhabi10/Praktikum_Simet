// Menambahkan efek timbul pada setiap card saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
            card.style.transition = 'opacity 0.5s, transform 0.5s';
        }, index * 300); // Delay untuk setiap card
    });
const audio = new Audio('click-sound.mp3'); // Ganti dengan URL file suara

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        audio.play(); // Memainkan suara saat tautan diklik
    });
});
});