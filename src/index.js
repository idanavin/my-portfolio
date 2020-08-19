import { homeInit } from './app/scripts/main';
import { aboutInit } from './app/scripts/about';

import './style.scss';
import './style/main.scss';
import './style/menu.scss';
import './style/about.scss';
import './style/home.scss';
import './style/work.scss';
import './style/project.scss';

import './style/m_main.scss'
import './style/m_home.scss'
import './style/m_about.scss'
import './style/m_work.scss'

const mainPage = require('./app/pages/main.html');

$("body").html(mainPage).promise().done(homeInit);

