// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Form submission alert
const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Merci pour votre message ! Flowmatic vous répondra bientôt.');
    form.reset();
});