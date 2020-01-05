const anime = require('animejs/lib/anime.min');
const workPage = require('../pages/work.html');

export function workInit() {
    const $container = $(".main_area");
    $container.html(workPage);
    const h3 = document.querySelector('.work__h3');
    const h1 = document.querySelector('.work__h1');
    anime({
        targets: [h3, h1],
        loop: false,
        easing: 'easeInOutSine',
        keyframes: [
            { opacity: 0 },
            { opacity: 0.3 },
            { opacity: 1 },

        ],
        duration: 2000
    });

}