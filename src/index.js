import './components/global/global.scss';
import './components/home/home.scss';
// import {
//   // displayCharacters,
//   retrieveLikes,
//   appId,
//   idPath,
//   passLike,
// } from './components/home/home.js';
import addCharApi from './components/home/addCharApi.js';
import displayCharacters from './components/home/displayCharacters';
import displayLikes from './components/home/displayLikes';
// import retrieveCharacters from './components/home/retrieveCharacters';

const appId = 'TpmMqPZSaYcfyNoZ0kVp';
const idPath = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;

displayCharacters();
// displayLikes();

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
