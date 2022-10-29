import './components/global/global.scss';
import './components/stage-comments/style.css';
import  displayCharacters  from './components/home/displayCharacters.js';
import './components/home/home.scss';
// import {
//   // displayCharacters,
//   retrieveLikes,
//   appId,
//   idPath,
//   passLike,
// } from './components/home/home.js';
import addCharApi from './components/home/addCharApi.js';
// import retrieveCharacters from './components/home/retrieveCharacters';

const appId = 'wHDqf2FyYMmzmK7MMxf9';
const idPath = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;


displayCharacters();


fetch(idPath)
  .then((data) => data.json())
  .then((data) => console.log(data));



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



