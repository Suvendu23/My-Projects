document.addEventListener('DOMContentLoaded', function() {
    // Typing effect for the header
    const header = document.querySelector('h1');
    const text = header.textContent;
    header.textContent = '';
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            header.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // Glowing effect for agency logos
    const logos = document.querySelectorAll('.agency-logo');
    logos.forEach(logo => {
        setInterval(() => {
            logo.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px #00ff00`;
        }, 1000);
    });

    // Fade-in effect for agency sections
    const agencies = document.querySelectorAll('.agency');
    function fadeInAgencies() {
        agencies.forEach((agency, index) => {
            setTimeout(() => {
                agency.style.opacity = '1';
            }, index * 200);
        });
    }
    fadeInAgencies();

    // Interactive navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Hover effect for agency sections
    agencies.forEach(agency => {
        agency.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            this.style.background = `radial-gradient(circle at ${x}px ${y}px, #2a2a2a, #1a1a1a)`;
        });
        agency.addEventListener('mouseleave', function() {
            this.style.background = '#1a1a1a';
        });
    });
});
