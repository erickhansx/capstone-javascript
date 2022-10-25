import './home.scss';
export { retrieveCharacters, displayCharacters };

const homepage = document.querySelector('.homepage');
const path = 'https://www.breakingbadapi.com/api/characters?limit=12&offset=0';

const retrieveCharacters = async () => {
  const retrieve = await fetch(path);
  const data = await retrieve.json();
  // console.log(data);
  return data;
};

const displayCharacters = async () => {
  const body = document.body;
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
    charactersName.innerText = character.name;
    characterText.appendChild(charactersName);
    characterBday.innerText = character.birthday;
    characterText.appendChild(characterBday);
    characterText.appendChild(charactersOccupation);
    const commentsBtn = document.createElement('button');
    commentsBtn.innerText = 'Comments';
    commentsBtn.classList.add('commentsBtn');
    const reservationsBtn = document.createElement('button');
    reservationsBtn.innerText = 'Reservations';
    reservationsBtn.classList.add('reservationsBtn');
    characterDiv.appendChild(commentsBtn);
    characterDiv.appendChild(reservationsBtn);

    character.occupation.forEach((occupation) => {
      const occupationList = document.createElement('li');
      occupationList.classList.add('occupationList');
      occupationList.innerText = occupation;
      charactersOccupation.appendChild(occupationList);
    });
  });
};
