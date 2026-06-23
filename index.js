// script.js – Interactive enhancements for BSIS Student Resume

document.addEventListener('DOMContentLoaded', () => {
    // ----- Animated skill bars -----
    const skillBars = document.querySelectorAll('.skill-bar div');
    skillBars.forEach((bar, index) => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 200 + index * 100);
    });

    // ----- Counter animation for stats -----
    const statNumbers = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10);
                animateCounter(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.3 });

    statNumbers.forEach(stat => observer.observe(stat));

    function animateCounter(element, target) {
        let current = 0;
        const duration = 1500;
        const steps = 60;
        const increment = Math.ceil(target / steps);
        const interval = duration / steps;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
                return;
            }
            element.textContent = current.toLocaleString();
        }, interval);
    }

    // ----- Glow effect on stat cards -----
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // ----- Console greeting -----
    console.log('🚀 BSIS Student Resume — Built with ❤️');
    console.log('👩‍💻 Maria Santos — 2nd Year BSIS');
});