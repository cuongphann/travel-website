/* ====================== SHOW MENU ====================== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    overlayMenu = document.getElementById('overlay-menu');

/* ========= Menu show ========= */
if(navToggle) {
    navToggle.addEventListener('click',function() {
        navMenu.classList.add('show-menu');
        overlayMenu.classList.add('show-overlay');
    })
}
/* ========= Menu hidden ========= */
if(navClose) {
    navClose.addEventListener('click', function() {
        navMenu.classList.remove('show-menu');
        overlayMenu.classList.remove('show-overlay');
    })
}
if(overlayMenu) {
    overlayMenu.addEventListener('click', function() {
        navMenu.classList.remove('show-menu');
        overlayMenu.classList.remove('show-overlay');
    })
}
/* ====================== REMOVE MENU MOBILE ====================== */
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const overlayMenu = document.getElementById('overlay-menu');
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
    overlayMenu.classList.remove('show-overlay')
}
navLink.forEach(function(item) {
    item.addEventListener('click', linkAction);
})
/* ====================== CHANGE BACKGROUND HEADER ====================== */
function scrollHeader() {
    const header = document.getElementById('header');
    if(this.scrollY >= 100)
        header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


/* ====================== SLIDER DISCOVER ====================== */
var swiper = new Swiper(".discover__container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        coverflowEffect: {
        rotate: 30,
    },
});
/* ====================== VIDEO ====================== */
const videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('video-button'),
    videoIcon = document.getElementById('video-icon');
function playPause() {
    if(videoFile.paused) {
        videoFile.play();
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    } else {
        videoFile.pause();
        videoIcon.classList.add('ri-play-line')
        videoIcon.classList.remove('ri-pause-line')
    }
}
function videoEnd() {
    videoIcon.classList.add('ri-play-line')
    videoIcon.classList.remove('ri-pause-line')
}
videoFile.addEventListener('ended', videoEnd)
videoButton.addEventListener('click', playPause)

/* ====================== SCROLL UP ====================== */
function scrollTop() {
    const scrollTop = document.getElementById('scroll-up')
    if(this.scrollY >= 600)
        scrollTop.classList.add('scrollup-show');
    else scrollTop.classList.remove('scrollup-show');
}
window.addEventListener('scroll', scrollTop)

/* ====================== SCROLL SECTION ACTIVE LINK ====================== */
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(function(current) {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        var sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            
            document.querySelector('.nav__menu a[href="#'+sectionId+'"]').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href="#'+sectionId+'"]').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ====================== DARK LIGHT THEME ====================== */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const icontheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = function() {
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';
}
const getCurrentIcon = function() {
    themeButton.classList.contains(icontheme) ? 'ri-moon-line' : 'ri-sun-line';
}

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](icontheme);
}
themeButton.addEventListener('click', function() {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(icontheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

/* =========================  SCROLL REVEAL ANIMATION ===========================*/

const sr = ScrollReveal({
    distance: '60px',
    duration: 1800,
    // reset: true,
})

sr.reveal(`.home__data, .home__social-link, .home__info,
            .discover__container,
            .experience__data, .experience__overlay,
            .sponsor__content,
            .place__card`,{
    origin: 'top',
    interval: 100,
})
sr.reveal(`.about__data,
            .video__description,
            .subscribe__description,
            .footer__data,
            .place__subtitle`, {
    origin: 'left',
})
sr.reveal(`.about__overlay,
            .video__content,
            .subscribe__form,
            .footer__rights,
            .place__title`, {
    origin: 'right',
    interval: 100,
})

sr.reveal(`.place__price`, {
    origin: 'bottom',
})