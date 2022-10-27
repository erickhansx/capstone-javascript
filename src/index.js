import './components/global/global.scss';
import './components/home/home.scss';
const appId = 'wHDqf2FyYMmzmK7MMxf9';
const idPath = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;
// import {
//   // displayCharacters,
//   retrieveLikes,
//   appId,
//   idPath,
//   passLike,
// } from './components/home/home.js';
import { addCharApi } from './components/home/addCharApi.js';
import { displayCharacters } from './components/home/displayCharacters';
import { retrieveCharacters } from './components/home/retrieveCharacters';

displayCharacters();
addCharApi();

fetch(idPath)
  .then((data) => data.json())
  .then((data) => console.log(data));

const btnComments = document.querySelector('.commentsBtn');
btnComments.addEventListener('click', () => {
  console.log('hola');
});

if (process.env.NODE_ENV === 'production') {
  console.log('Production Mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development Mode');
}
