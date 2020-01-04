import _ from 'lodash';
import tittleSvg from '../../assets/idan.svg';
import subTittleSvg from '../../assets/sub.svg';

const anime = require('animejs/lib/anime.min');
const homePage = require('../pages/home.html');

export function homeInit() {

    const $container = $(".main_area");
    
    $container.html(homePage);
    const animate = function () {
        const svgPath = document.querySelectorAll('.path');

        const svgText = anime({
            targets: svgPath,
            loop: false,
            direction: 'alternate',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1000,
            delay: (el, i) => { return i * 500 },
            complete: function () {
                svgPath.forEach(function (e) {
                    e.parentElement.style.transition = 'all 0.5s ease-in';
                    e.parentElement.style.fill = 'white';
                });
            }
        });
    }

    $(".svg1").load(tittleSvg, function () {
        $(".svg2").load(subTittleSvg, function () {
            animate();
        });
    });
}