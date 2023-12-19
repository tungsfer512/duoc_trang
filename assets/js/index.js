
const bgAudio = new Audio('./assets/audios/bg-audio.mp3');
bgAudio.loop = true;
bgAudio.volume = 1;
// const floatingSoundBtn = document.getElementById('floating-sound-btn');
// const floatingMutedBtn = document.getElementById('floating-muted-btn');
const floatingMusicBtn = document.getElementById('floating-music-btn');
floatingMusicBtn.setAttribute('custom-muted', 'true');
floatingMusicBtn.innerHTML = '<ion-icon id="floating-muted-btn" name="volume-mute-outline"></ion-icon>';

floatingMusicBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (floatingMusicBtn.getAttribute('custom-muted') == 'true') {
        bgAudio.muted = false;
        bgAudio.play();
        floatingMusicBtn.setAttribute('custom-muted', 'false');
        floatingMusicBtn.innerHTML = '<ion-icon id="floating-sound-btn" name="volume-high-outline"></ion-icon>';
    } else {
        e.preventDefault();
        bgAudio.muted = true;
        bgAudio.pause();
        floatingMusicBtn.setAttribute('custom-muted', 'true');
        floatingMusicBtn.innerHTML = '<ion-icon id="floating-muted-btn" name="volume-mute-outline"></ion-icon>';
    }
});

const smoothScrollToId = (id) => {
    document.querySelector(`#${id}`).scrollIntoView({
        behavior: 'smooth',

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
    smoothScrollToId('top-of-page');
})
const offcanvasRightLabel = document.getElementById('offcanvasRightLabel');
offcanvasRightLabel.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScrollToId('top-of-page');
})
let btnToTop = document.getElementById("btn-back-to-top");
btnToTop.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScrollToId('top-of-page');
})
const navLecuoi = document.getElementById('nav-lecuoi');
navLecuoi.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScrollToId('lecuoi');
})
const navCodauchure = document.getElementById('nav-codauchure');
navCodauchure.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScrollToId('codauchure');
})
// const navChuyentinhyeu = document.getElementById('nav-chuyentinhyeu');
// navChuyentinhyeu.addEventListener('click', (e) => {
//     e.preventDefault();
//     hideOffCanvas();
//     smoothScrollToId('chuyentinhyeu');
// })
const navAlbumanhcuoi = document.getElementById('nav-albumanhcuoi');
navAlbumanhcuoi.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScrollToId('albumanhcuoi');
})
const navChucmung = document.getElementById('nav-chucmung');
navChucmung.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScrollToId('chucmung');
})
const btnChucmung = document.getElementById('btn-chucmung');
btnChucmung.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScrollToId('chucmung');
})

const mainContent = document.getElementById('main-content');
mainContent.addEventListener('scroll', (e) => {
    if (mainContent.scrollTop > 100) {
        btnToTop.style.display = 'flex';
    } else {
        btnToTop.style.display = 'none';
    }
});

let albumGrid = document.querySelector('.album-grid');
albumGrid.innerHTML = '';
for (let i = 1; i <= 12; i++) {
    let albumImage = document.createElement('div');
    albumImage.classList.add('col');
    albumImage.classList.add('col-12');
    albumImage.classList.add('col-md-6');
    albumImage.classList.add('col-lg-4');
    albumImage.classList.add('col-xl-3');
    albumImage.classList.add('album-image');
    albumImage.setAttribute('album-image', i);
    albumImage.setAttribute('data-bs-toggle', "modal");
    albumImage.setAttribute('data-bs-target', "#albumModal");
    albumImage.innerHTML = `<img class="w-100 my-3 shadow" src="./assets/images/wedding/album/album_${i}.jpg"
    alt="Album image ${i}">`;
    albumImage.addEventListener('click', (e) => {
        console.log("---------------------", i);
        swiper2.slideTo(i - 1, false, false);
    })
    albumGrid.appendChild(albumImage);
}

if (window.innerWidth < 576) {
    let swiperWrapper = document.querySelector('.mySwiper .swiper-wrapper');
    for (let i = 1; i <= 6; i++) {
        let swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');
        swiperSlide.innerHTML = `<img src="./assets/images/wedding/slider_small/slider_${i}.jpg" alt="slider-small-${i}">`;
        swiperWrapper.appendChild(swiperSlide);
    }
    let swiperWrapper2 = document.querySelector('.mySwiper2 .swiper-wrapper');
    for (let i = 1; i <= 12; i++) {
        let swiperSlide2 = document.createElement('div');
        swiperSlide2.classList.add('swiper-slide');
        swiperSlide2.innerHTML = `<img class="w-100 h-auto" src="./assets/images/wedding/album/album_${i}.jpg" alt="Lightbox Album Image ${i}">`;
        swiperWrapper2.appendChild(swiperSlide2);
    }
} else {
    let swiperWrapper = document.querySelector('.mySwiper .swiper-wrapper');
    for (let i = 1; i <= 6; i++) {
        let swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');
        swiperSlide.innerHTML = `<img src="./assets/images/wedding/slider_big/slider_${i}.jpg" alt="slider-big-${i}">`;
        swiperWrapper.appendChild(swiperSlide);
    }
    let swiperWrapper2 = document.querySelector('.mySwiper2 .swiper-wrapper');
    for (let i = 1; i <= 12; i++) {
        let swiperSlide2 = document.createElement('div');
        swiperSlide2.classList.add('swiper-slide');
        swiperSlide2.innerHTML = `<img class="h-100 w-auto" src="./assets/images/wedding/album/album_${i}.jpg" alt="Lightbox Album Image ${i}">`;
        swiperWrapper2.appendChild(swiperSlide2);
    }
}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
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
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper2 = new Swiper(".mySwiper2", {
    effect: "creative",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
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

const send_message = async (text) => {
    const API_TOKEN = '6340000511:AAHRacEXR8AfXKZOAp14NAm7VRFgG6Gjt2I'
    const CHAT_ID = '5574718005'
    message = 'Có tin nhắn cần chuyên viên hỗ trợ'
    let path = 'https://api.telegram.org/bot' + API_TOKEN + '/sendMessage';
    return axios.post(path, {
        chat_id: CHAT_ID,
        text: text
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

let btnGuiLoiChuc = document.getElementById('btn-submit-loi-chuc');
btnGuiLoiChuc.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log("Gui loi chuc");
    let type = '';
    if (document.getElementById('radio-nha-trai').checked) {
        type = 'nhatrai';
    }
    if (document.getElementById('radio-nha-gai').checked) {
        type = 'nhagai';
    }
    let name = document.getElementById('form-loi-chuc-name').value;
    let message = document.getElementById('form-loi-chuc-message').value;
    const loi_chuc = `${type} - ${name} - ${message} - ${new Date()}`;
    const res = await send_message(loi_chuc);
    if (res.status === 200) {
        console.log("Gui thanh cong");
    } else {
        await send_message(loi_chuc);
        console.log("Gui that bai");
    }
    document.getElementById('form-loi-chuc-name').value = '';
    document.getElementById('form-loi-chuc-message').value = '';
    Toastify({
        text: "Lời chúc của bạn đã được gửi tới cô dâu và chú rể! Xin chân thành cảm ơn!",
        duration: 3000,
        gravity: "top",
        position: 'right',
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        stopOnFocus: true,
        onClick: function () { } // Callback after click
    }).showToast();
});