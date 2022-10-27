import './components/global/global.scss';
import './components/stage-comments/style.css'
import { displayCharacters } from './components/home/home.js';

displayCharacters();

if (process.env.NODE_ENV === 'production') {
  console.log('Production Mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development Mode');
}
