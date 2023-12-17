const smoothScrollToId = (id) => {
    document.querySelector(`#${id}`).scrollIntoView({
        behavior: 'smooth'
    });
}

const smoothScroll = (id) => {
    document.querySelector(`#${id}`).scrollIntoView({
        behavior: 'smooth'
    });
}

const hideOffCanvas = () => {
    const btnCloseOffcanvas = document.getElementById('btn-close-offcanvas');
    btnCloseOffcanvas.click();
}

const navBrand = document.querySelector('.navbar-brand');
navBrand.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScroll('top-of-page');
})
const offcanvasRightLabel = document.getElementById('offcanvasRightLabel');
offcanvasRightLabel.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScroll('top-of-page');
})
let btnToTop = document.getElementById("btn-back-to-top");
btnToTop.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScroll('top-of-page');
})
const navLecuoi = document.getElementById('nav-lecuoi');
navLecuoi.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScroll('lecuoi');
})
const navCodauchure = document.getElementById('nav-codauchure');
navCodauchure.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScroll('codauchure');
})
const navChuyentinhyeu = document.getElementById('nav-chuyentinhyeu');
navChuyentinhyeu.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScroll('chuyentinhyeu');
})
const navAlbumanhcuoi = document.getElementById('nav-albumanhcuoi');
navAlbumanhcuoi.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScroll('albumanhcuoi');
})
const navChucmung = document.getElementById('nav-chucmung');
navChucmung.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScroll('chucmung');
})

const mainContent = document.getElementById('main-content');
mainContent.addEventListener('scroll', (e) => {
    if (mainContent.scrollTop > 100) {
        btnToTop.style.display = 'flex';
    } else {
        btnToTop.style.display = 'none';
    }
});

if (window.innerWidth < 576) {
    let swiperWrapper = document.querySelector('.swiper-wrapper');
    for (let i = 1; i <= 6; i++) {
        let swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');
        swiperSlide.innerHTML = `<img src="./assets/images/wedding/slider_small/slider_${i}.JPG" alt="slider-small-${i}">`;
        swiperWrapper.appendChild(swiperSlide);
    }
} else {
    let swiperWrapper = document.querySelector('.swiper-wrapper');
    for (let i = 1; i <= 6; i++) {
        let swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');
        swiperSlide.innerHTML = `<img src="./assets/images/wedding/slider_big/slider_${i}.JPG" alt="slider-big-${i}">`;
        swiperWrapper.appendChild(swiperSlide);
    }
}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

let countDownDate = new Date("Dec 31, 2023 15:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("ngay").innerHTML = days;
    document.getElementById("gio").innerHTML = hours;
    document.getElementById("phut").innerHTML = minutes;
    document.getElementById("giay").innerHTML = seconds;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        document.getElementById("ngay").innerHTML = 0;
        document.getElementById("gio").innerHTML = 0;
        document.getElementById("phut").innerHTML = 0;
        document.getElementById("giay").innerHTML = 0;
        clearInterval(x);
    }
}, 1000);