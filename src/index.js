import './components/global/global.scss';
<<<<<<< HEAD
import './components/stage-comments/style.css'
=======
import { displayCharacters } from './components/home/home.js';

displayCharacters();
>>>>>>> 4fb611becac8468d68fe963bfea607c47b150e42

if (process.env.NODE_ENV === 'production') {
  console.log('Production Mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development Mode');
}
