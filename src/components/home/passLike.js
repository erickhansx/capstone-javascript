const appId = 'TpmMqPZSaYcfyNoZ0kVp';
const idPath = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;

const passLike = async () => {
  const likeDiv = document.querySelectorAll('.likeDiv');
  likeDiv.forEach((div) => {
    div.addEventListener('click', async () => {
      console.log(div);
      div.innerHTML = `<a class="likesBtn"><i class="fa-solid fa-flask"></i><span>${
        Number(div.innerText) + 1
      }</span></a>`;
      div.classList.add('liked');
      const update = {
        item_id: div.parentElement.id,
      };
      console.log(update);
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
      };

      await fetch(idPath, options);
    });
  });
};

export default passLike;
