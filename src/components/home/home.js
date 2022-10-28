import './home.scss';
import EventListerners from '../../modules/reservationEventListener.js';
import AddReservation from '../../modules/addReservation.js';
const homepage = document.querySelector('.homepage');
const path = 'https://www.breakingbadapi.com/api/characters?limit=12&offset=0';

const retrieveCharacters = async () => {
  const retrieve = await fetch(path);
  const data = await retrieve.json();
  // console.log(data);
  return data;
};

const displayCharacters = async () => {
  const charactersInfo = await retrieveCharacters();

  console.log(typeof charactersInfo);

  charactersInfo.forEach((character) => {
    const characterDiv = document.createElement('div');
    characterDiv.setAttribute('id', character.char_id);
    characterDiv.classList.add('characterDiv');
    const charactersName = document.createElement('h4');
    charactersName.classList.add('charactersName');
    const characterBday = document.createElement('p');
    const charactersOccupation = document.createElement('ul');
    charactersOccupation.classList.add('charactersOccupation');
    const characterImg = document.createElement('img');
    characterImg.classList.add('characterImg');
    characterImg.src = character.img;
    console.log(characterImg);
    homepage.appendChild(characterDiv);
    const characterText = document.createElement('div');
    characterText.classList.add('characterText');
    characterDiv.appendChild(characterImg);
    characterDiv.appendChild(characterText);
    charactersName.innerText = `Name: ${character.name}`;
    characterText.appendChild(charactersName);
    characterBday.innerText = `Date of birth: ${character.birthday}`;
    characterText.appendChild(characterBday);
    characterText.appendChild(charactersOccupation);
    const commentsBtn = document.createElement('button');
    commentsBtn.innerText = 'Comments';
    commentsBtn.classList.add('commentsBtn');
    commentsBtn.classList.add('btn');
    const reservationsBtn = document.createElement('button');
    reservationsBtn.classList.add('btn');
    reservationsBtn.innerText = 'Reservations';
    reservationsBtn.classList.add('reservationsBtn');
    characterDiv.appendChild(commentsBtn);
    characterDiv.appendChild(reservationsBtn);

    character.occupation.forEach((occupation) => {
      const occupationList = document.createElement('li');
      occupationList.classList.add('occupationList');
      occupationList.innerText = `Occupation: ${occupation}`;
      charactersOccupation.appendChild(occupationList);
    });
  });
EventListerners.reserveBtn();
EventListerners.closeBtn();
AddReservation.getDataToUse();
EventListerners.windowLoad()
};

export { retrieveCharacters, displayCharacters };