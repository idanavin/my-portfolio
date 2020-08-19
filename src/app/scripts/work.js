import p1s from '../../assets/projects/project1.jpg';

const anime = require('animejs/lib/anime.min');
const workPage = require('../pages/work.html');
const projectPage = require('../pages/project.html');

const myWork = [
    {
        title: 'try',
        url: 'https://www.stoleron.com/',
        simg: p1s,
        limg: ''
    },
    {
        title: '2nd',
        url: 'https://github.com/idanavin',
        simg: p1s,
        limg: ''
    },
    {
        url: '',
        simg: p1s,
        limg: ''
    },
    {
        url: '',
        simg: p1s,
        limg: ''
    }];

const mark = `<div class="work__gallery__item">
    <div class="item-background"></div>
    <div class="item-demo"></div>
    </div>`;

function showProject() {
    $('body').append(projectPage);
    $(".project").click((e) => {
        e.preventDefault();
        $(".project").remove();
    });
}
function editProjectPage(index) {
    console.log(index);
    
    $('.project__title').text(myWork[index].title);
}

export function workInit() {
    const $container = $(".main_area");
    $container.html(workPage);
    const h3 = document.querySelector('.work__h3');
    const h1 = document.querySelector('.work__h1');
    const gallery = $('.work__gallery');
    
    anime({
        targets: [h3, h1],
        translateX: ['-100%', '0'],
        loop: false,
        // easing: 'easeInOutSine',
        keyframes: [
            { opacity: 0 },
            { opacity: 0.3 },
            { opacity: 1 },
        ],
        duration: 2000
    });

    for (let i = 0; i < myWork.length; i++) {
        gallery.append(mark);
        // $('.work__gallery__item')[i].data('item', i)
        let item = $('.item-background')[i];
        let button = $('.item-demo')[i];
        item.style.backgroundImage = `url('${myWork[i].simg}')`;
        // $('.item-demo')[i].attr("href", myWork[i].url)
    }
    const item = $('.work__gallery__item');
    // item.each((i) => {
    //     item[i].data('item', i)
    //     item.click((e) => {
    //         console.log(e);
            
    //         showProject();
    //         editProjectPage(i);
    //     })

    // })
    item.click((e) => {
        e.preventDefault();
        showProject();
        console.log($(this));
    });
}