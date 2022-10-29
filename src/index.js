import './components/global/global.scss';
import './components/home/home.scss';
import displayCharacters from './components/home/displayCharacters.js';

displayCharacters();

// const appId = 'TpmMqPZSaYcfyNoZ0kVp';
// const idPath = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;
// fetch(idPath)
//   .then((data) => data.json())
//   .then((data) => console.log(data));

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// };

// const newGame = async () => {
//   await
// };

// console.log(
//   fetch(
//     'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
//     options
//   ).then((res) => res.text())
// );

if (process.env.NODE_ENV === 'production') {
  console.log('Production Mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development Mode');
}
