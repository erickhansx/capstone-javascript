import displayLikes from './displayLikes.js';
import passLike from './passLike.js';
import retrieveCharacters from './retrieveCharacters.js';
import characterCounter from './characters-counts.js';
import commentsCounter from './commentsCounter.js';

const homepage = document.querySelector('.homepage');
// const path = 'https://www.breakingbadapi.com/api/characters?limit=12&offset=0';
const appId = 'wHDqf2FyYMmzmK7MMxf9';
const idPath = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments/`;

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
    const counterChar = document.getElementById('CharacterCounter');
    characterCounter(counterChar, charactersInfo.length);
  });

  //Comments Section
  const close = document.querySelector('.close');
  const container = document.querySelector('.general__container');
  const btnComments = document.querySelectorAll('.commentsBtn');
  const nameSpace = document.querySelector('.name__space');
  const photo = document.querySelector('.photo__breaking');
  const contOne = document.querySelector('.one');
  const contTwo = document.querySelector('.two');
  const contThree = document.querySelector('.three');
  const contFour = document.querySelector('.four');
  const addComment = document.querySelector('.name__add');
  const input1 = document.querySelector('.input__text');
  const input2 = document.querySelector('.input__mail');
  const insideBtn = document.createElement('button');
  insideBtn.classList.add('inside__button');
  const date = new Date();
  const newComment = document.createElement('div');
  newComment.classList.add('newComment');
  const general = document.querySelector('.general__container');
  const newParagraph = document.createElement('p');
  newParagraph.classList.add('text__paragraph');
  newComment.appendChild(newParagraph);
  general.insertBefore(newComment, addComment);

  btnComments.forEach((btn) => {
    btn.addEventListener('click', () => {
      const inputMain = document.querySelector('.input__main');
      const idDinamic = btn.parentElement.id; // id dinamico get
      const idPath = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments/`; // id dinamico post
      const pathGet = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments/?item_id=${idDinamic}`;

      container.style.display = 'block';

      fetch('https://www.breakingbadapi.com/api/characters?limit=12&offset=0') // GET BREAKING BAD DATA
        .then((res) => res.json())
        .then((data) => {
          data.forEach((data) => {
            if (JSON.stringify(data.char_id) === btn.parentElement.id) {
              nameSpace.innerText = data.name;
              console.log(nameSpace);
              photo.src = data.img;
              contOne.innerText = data.nickname;
              contTwo.innerText = data.status;
              contThree.innerText = data.portrayed;
              contFour.innerText = data.birthday;
            }
          });
        });

      // Post comment Button
      addComment.innerText = 'Add a comment';
      const insideBtn = document.createElement('button');
      insideBtn.innerText = 'Comments';
      inputMain.appendChild(insideBtn);

      // GET COMMENTS
      const title = document.createElement('p');
      title.innerHTML = 'Comments XXXX';
      newComment.appendChild(title);
      const retrieveComment = async () => {
        await fetch(pathGet)
          .then((response) => response.json())
          .then((json) => {
            for (let i = 0; i < json.length; i += 1) {
              console.log('papitas');
              console.log(json[i]);
              //contenedor

              const comentNEW = document.createElement('p');
              comentNEW.innerText =
                json[i].username +
                ' ' +
                json[i].comment +
                ' ' +
                json[i].creation_date;
              newComment.appendChild(comentNEW);
              commentsCounter(title, json.length);
            }
            //console.log(json.length +"********************************************")
          });
      };

      retrieveComment();

      // postNewComment();
      insideBtn.addEventListener('click', () => {
        while (newComment.hasChildNodes()) {
          newComment.removeChild(newComment.firstChild);
        }

        const updatePost = {
          //inputs para el post
          item_id: idDinamic,
          username: input1.value,
          comment: input2.value,
        };

        const optionsPost = {
          // FETCH POST COMENTARIOS
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatePost),
        };

        const postNewComment = async () => await fetch(idPath, optionsPost);
        postNewComment();
        setTimeout(retrieveComment, 1000);
      });
    });
  });

  close.addEventListener('click', () => {
    location.reload();
  });
  await displayLikes();
  passLike();

  //section reservations
  const closeRes = document.querySelector('.close__but');
  const containerRes = document.querySelector('.main__container');
  const btnReserv = document.querySelectorAll('.reservationsBtn');
  const nameSpaceRes = document.querySelector('.name__space__reserv ');
  const photoRes = document.querySelector('.photo__reserv');
  const contOneRes = document.querySelector('.one_one');
  const contTwoRes = document.querySelector('.two_two');
  const contThreeRes = document.querySelector('.three_three');
  const contFourRes = document.querySelector('.four_four');
  const addCommentRes = document.querySelector('.name__add_reserv');
  const input1Res = document.querySelector('.text__main');
  const input2Res = document.querySelector('.main__mail');
  const input3Res = document.querySelector('.end__name');
  const insideBtnRes = document.createElement('button');
  insideBtnRes.classList.add('inside__button_reserv');

  const newCommentReser = document.createElement('div');
  newCommentReser.classList.add('newCommentReser');
  const generalRes = document.querySelector('.main__container');
  const newParagraphReser = document.createElement('p');
  newParagraphReser.classList.add('text__paragraph_reser');
  newCommentReser.appendChild(newParagraphReser);
  generalRes.insertBefore(newCommentReser, addCommentRes);

  btnReserv.forEach((btn) => {
    btn.addEventListener('click', () => {
      const inputMainRes = document.querySelector('.input__main_reserv');
      const idDinamic = btn.parentElement.id; // id dinamico get
      const idPath = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wHDqf2FyYMmzmK7MMxf9/reservations/`; // id dinamico post
      const pathGet = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments/?item_id=${idDinamic}`;

      generalRes.style.display = 'block';

      fetch('https://www.breakingbadapi.com/api/characters?limit=12&offset=0') // GET BREAKING BAD DATA
        .then((res) => res.json())
        .then((data) => {
          data.forEach((data) => {
            if (JSON.stringify(data.char_id) === btn.parentElement.id) {
              nameSpaceRes.innerText = data.name;
              console.log(nameSpace);
              photoRes.src = data.img;
              contOneRes.innerText = data.nickname;
              contTwoRes.innerText = data.status;
              contThreeRes.innerText = data.portrayed;
              contFourRes.innerText = data.birthday;
            }
          });
        });
      // Post comment Button
      addCommentRes.innerText = 'Add a Reservation';
      const insideBtnRes = document.createElement('button');
      insideBtnRes.classList.add('but_inside_res');
      insideBtnRes.innerText = 'Reservations';
      inputMainRes.appendChild(insideBtnRes);
    });
  });



  closeRes.addEventListener('click', () => {
    location.reload();
  });
};

export default displayCharacters;
