const anime = require('animejs/lib/anime.min');
const aboutPage = require('../pages/about.html');

export function aboutInit() {
    const $container = $(".main_area");
    $container.html(aboutPage);
    const animate = function () {
        const h3 = document.querySelector('.about__h3');
        const text = document.querySelector('.about__text');
        
        const tittleAnime = anime({
            targets: h3,
            loop: false,
            easing: 'easeInOutSine',
            duration: 1500,
            opacity: 1
        });
        const textAnime = anime({
            targets: text,
            translateX: ['-100%', '0'],
            keyframes: [
                {opacity: 0},
                {opacity: 0.3},
                {opacity: 1},

            ],
            duration: 2000
        })
    }
    animate();
}