import _ from 'lodash';
import './style.scss';
import './style/main.scss';
import './style/menu.css';

const mainPage = require('./app/pages/main.html');

$("body").html(mainPage);
console.log(_);
