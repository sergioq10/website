const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

//click button will add class
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

//nav links 
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})