
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});
const orderForm = document.querySelector('form');
if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your order! We will contact you shortly to confirm details.');
        orderForm.reset();
    });
}

const newsletterForm = document.querySelectorAll('form')[1];
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}