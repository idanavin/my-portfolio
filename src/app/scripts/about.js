const $container = $(".main_area");
const aboutPage = require('../pages/about.html');

export function aboutInit() {
    $container.html(aboutPage);
}