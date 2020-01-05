import { homeInit } from './app/scripts/main';
import { aboutInit } from './app/scripts/about';

import './style.scss';
import './style/main.scss';
import './style/menu.css';
import './style/about.scss';
import './style/home.scss';
import './style/work.scss';

const mainPage = require('./app/pages/main.html');

$("body").html(mainPage).promise().done(homeInit);

