const appId = 'TpmMqPZSaYcfyNoZ0kVp';
const idPath = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;

const displayLikes = async () => {
  const data = await fetch(idPath).then((data) => data.json());
  const characterDiv = document.querySelectorAll('.characterDiv');
  console.log(data);
  characterDiv.forEach((character) => {
    const likeDiv = document.createElement('div');
    likeDiv.classList.add(`likeDiv-${character.id}`);
    likeDiv.classList.add('likeDiv');
    const icon = document.createElement('a');
    icon.classList.add('likesBtn');
    icon.innerHTML = '<i class="fa-solid fa-flask"></i>';
    likeDiv.appendChild(icon);
    character.appendChild(likeDiv);
  });

  data.forEach((item) => {
    characterDiv.forEach((character) => {
      const likeDiv = document.querySelector(`.likeDiv-${character.id}`);
      if (item.item_id === character.id) {
        console.log(item.item_id, character.id);
        likeDiv.innerHTML = `<a><i class="fa-solid fa-flask"></i><span id="likes-number">${item.likes}</span></a>`;
      }
    });
  });
};

export default displayLikes;
