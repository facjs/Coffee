/*=============== CHANGE BACKGROUND HEADER ===============*/
const mainHeader = document.getElementById('header');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
mainHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(
    (entries) => {
        mainHeader.classList.toggle('scroll-header', !entries[0].isIntersecting);
    },
    { rootMargin: '200px 0px 0px 0px' }
);

navObserver.observe(scrollWatcher);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    this.scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Repite la animación
});

sr.reveal('.home__data, .products__data, .steps__content, .footer__container');
sr.reveal('.home__img', { origin: 'bottom' });
sr.reveal('.products__card', { interval: 100 });
sr.reveal('.about__img, .testimonial__img', { origin: 'right' });
sr.reveal('.about__data, .testimonial__data, .footer__social', { origin: 'left' });
