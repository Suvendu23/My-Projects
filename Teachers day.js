document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your RSVP! We look forward to celebrating with you.');
    });

    const glowElements = document.querySelectorAll('.glow, .magical-text');
    glowElements.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.style.textShadow = '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de';
        });
        element.addEventListener('mouseout', function() {
            this.style.textShadow = '';
        });
    });
});
