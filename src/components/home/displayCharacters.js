import retrieveCharacters from './retrieveCharacters.js';

const homepage = document.querySelector('.homepage');
// const path = 'https://www.breakingbadapi.com/api/characters?limit=12&offset=0';
// const appId = 'wHDqf2FyYMmzmK7MMxf9';
// const idPath = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;
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
  const close = document.querySelector('.close')
  const container = document.querySelector('.general__container')
  const btnComments = document.querySelectorAll('.commentsBtn');
  const nameSpace = document.querySelector('.name__space')
  const photo = document.querySelector('.photo__breaking')
  const contOne = document.querySelector('.one')
  const contTwo = document.querySelector('.two')
  const contThree = document.querySelector('.three')
  const contFour = document.querySelector('.four')
  const addComment = document.querySelector('.name__add')
  const input1 = document.querySelector('.input__text')
  const input2 = document.querySelector('.input__mail')


  btnComments.forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log(typeof btn.parentElement.id)
      container.style.display = 'block';
      fetch('https://www.breakingbadapi.com/api/characters?limit=12&offset=0')
    .then(res => res.json())
    .then(data => {
      data.forEach(data  => {
        if(JSON.stringify(data.char_id)=== btn.parentElement.id) {
          nameSpace.innerText = data.name
          console.log(nameSpace)
          photo.src = data.img
          contOne.innerText = data.nickname
          contTwo.innerText = data.status
          contThree.innerText = data.portrayed
          contFour.innerText = data.birthday
          addComment.innerText = 'Add a comment'
          const insideBtn = document.createElement('button');
          insideBtn.innerText = 'Comments';
          const inputMain = document.querySelector('.input__main');
          inputMain.appendChild(insideBtn)
          insideBtn.addEventListener('click', () => {
            console.log(input1.value, input2.value)
            
            const newComment = document.createElement('div')
            newComment.classList.add('newComment')
            const general = document.querySelector('.general__container')
            const newParagraph = document.createElement('p')
            const date = new Date()
            newParagraph.innerText = `${date} ${input1.value}: ${input2.value}`
            newComment.appendChild(newParagraph)
            general.insertBefore(newComment, addComment)
            input1.value = ''
            input2.value = ''

          })
        }
      })
    })
    
    .catch(e => console.log(new Error(e)))
    });
  });

  
  
  
  close.addEventListener('click', () => container.style.display = 'none');
};


export default displayCharacters;

