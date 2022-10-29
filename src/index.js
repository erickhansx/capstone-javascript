import './components/global/global.scss';
import './components/stage-comments/style.css';
import displayCharacters from './components/home/displayCharacters.js';
import './components/home/home.scss';

const appId = 'wHDqf2FyYMmzmK7MMxf9';
const idPath = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;

displayCharacters();
