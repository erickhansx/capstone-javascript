import displayLikes from './displayLikes.js';
import passLike from './passLike.js';
import retrieveCharacters from './retrieveCharacters.js';

const homepage = document.querySelector('.homepage');
const displayCharacters = async () => {
  const charactersInfo = await retrieveCharacters();

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

  await displayLikes();
  passLike();
};

export default displayCharacters;
