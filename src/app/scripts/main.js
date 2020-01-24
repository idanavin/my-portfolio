import _ from 'lodash';
import tittleSvg from '../../assets/idan.svg';
import subTittleSvg from '../../assets/sub.svg';
import { workInit } from './work';


const anime = require('animejs/lib/anime.min');
const homePage = require('../pages/home.html');

// For mobile menu
let opened = false;

$('.home__goto').click(() => {
    workInit();
}) 

function menuAnime(target, isOpa, dis, css) {
    target.toggleClass('show');
    anime({
        targets: target,
        loop: false,
        easing: 'linear',
        opacity: isOpa,
        // display: dis,
        duration: 500,
        complete: () => {
            target.css(css);
        }
    })
};

export function closeMenu() {
    menuAnime($('.links'), 0, 'none', {'display': 'none', 'height': '0', 'opacity': '0'});
    menuAnime($(".main_area"), 1, 'flex', {'display': 'flex'});
    opened = false;
}

//animation isnt working properly
$('.m_links').on('click', () => {
    // $('.hamburger--squeeze').toggleClass('is-active');
    opened = !opened;
    if (opened) {
        menuAnime($(".main_area"), 0, 'none', {'display': 'none'});
        menuAnime($('.links'), 1, 'flex', {'display': 'flex', 'height': '100vh', 'opacity': '1'});
        $('.hamburger').addClass('is-active');
    } else {
        menuAnime($('.links'), 0, 'none', {'display': 'none', 'height': '0', 'opacity': '0'});
        menuAnime($(".main_area"), 1, 'flex', {'display': 'flex'});
        $('.hamburger').removeClass('is-active');
    }

});

//add "home.html" to container + animations
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
                    e.parentElement.style.fill = '#0A3055';
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