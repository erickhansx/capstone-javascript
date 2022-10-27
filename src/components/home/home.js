import './home.scss';
import { displayCharacters } from './displayCharacters';
import { retrieveCharacters } from './retrieveCharacters';

const homepage = document.querySelector('.homepage');
const path = 'https://www.breakingbadapi.com/api/characters?limit=12&offset=0';
const appId = 'wHDqf2FyYMmzmK7MMxf9';
const idPath = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;

// const retrieveCharacters = async () => {
//   const retrieve = await fetch(path);
//   const data = await retrieve.json();
//   console.log(data);
//   return data;
// };

// const retrieveLikes = async () => {
// const update = {
//   item_id: 'item1',
// };
// fetch(idPath, options);
// fetch(idPath, options);
// fetch(idPath)
//   .then((data) => data.json())
//   .then((data) => console.log(data));
// fetch(idPath)
//   .then((data) => data.json())
//   .then((data) => console.log(data));
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// try {
//   charactersInfo.forEach((character) => {
//     const update = {
//       item_id: character.char_id,
//     };
//     console.log(update);
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(update),
//     };
//     fetch(idPath, options);
//   });
// } catch {
//   console.log('error');
//   // }
// };

// const passLike = async () => {
//   const charactersIds = document.querySelectorAll('.characterDiv');
//   charactersIds.forEach((char) => {
//     const id = char.id;
//     console.log(id);
//     const update = {
//       item_id: char.id,
//     };
//     console.log(update);
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(update),
//     };
//     fetch(idPath, options);
//   });
// } catch {
//   console.log('error');
// }
//   });
// };

// const displayCharacters = async () => {
//   const charactersInfo = await retrieveCharacters();

//   charactersInfo.forEach((character) => {
//     const characterDiv = document.createElement('div');
//     characterDiv.setAttribute('id', character.char_id);
//     characterDiv.classList.add('characterDiv');
//     const charactersName = document.createElement('h4');
//     charactersName.classList.add('charactersName');
//     const characterBday = document.createElement('p');
//     const charactersOccupation = document.createElement('ul');
//     charactersOccupation.classList.add('charactersOccupation');
//     const characterImg = document.createElement('img');
//     characterImg.classList.add('characterImg');
//     characterImg.src = character.img;
//     homepage.appendChild(characterDiv);
//     const characterText = document.createElement('div');
//     characterText.classList.add('characterText');
//     characterDiv.appendChild(characterImg);
//     characterDiv.appendChild(characterText);
//     charactersName.innerText = `Name: ${character.name}`;
//     characterText.appendChild(charactersName);
//     characterBday.innerText = `Date of birth: ${character.birthday}`;
//     characterText.appendChild(characterBday);
//     characterText.appendChild(charactersOccupation);
//     const commentsBtn = document.createElement('button');
//     commentsBtn.innerText = 'Comments';
//     commentsBtn.classList.add('commentsBtn');
//     commentsBtn.classList.add('btn');
//     const reservationsBtn = document.createElement('button');
//     reservationsBtn.classList.add('btn');
//     reservationsBtn.innerText = 'Reservations';
//     reservationsBtn.classList.add('reservationsBtn');
//     characterDiv.appendChild(commentsBtn);
//     characterDiv.appendChild(reservationsBtn);

//     character.occupation.forEach((occupation) => {
//       const occupationList = document.createElement('li');
//       occupationList.classList.add('occupationList');
//       occupationList.innerText = `Occupation: ${occupation}`;
//       charactersOccupation.appendChild(occupationList);
//     });
//   });
//   const btnComments = document.querySelector('.commentsBtn');

//   btnComments.addEventListener('click', () => console.log('hola'));
// };

// export {
//   retrieveCharacters,
//   displayCharacters,
//   retrieveLikes,
//   appId,
//   idPath,
//   passLike,
// };
