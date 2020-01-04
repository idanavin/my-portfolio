import { homeInit } from './app/scripts/main';

import './style.scss';
import './style/main.scss';
import './style/menu.css';
import './style/about.scss';

const mainPage = require('./app/pages/main.html');

$("body").html(mainPage);
homeInit();
