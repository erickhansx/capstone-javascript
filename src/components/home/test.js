const displayLikes = async () => {
  const homepage = document.querySelector('.homepage');
  homepage.innerHTML = '';
  const appId = 'QPRhlLxU5jPtJhZkce09';
  const idPath = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;
  const characterDiv = document.querySelectorAll('.characterDiv');
  const fetchedLikes = await fetch(idPath).then((data) => {
    characterDiv.forEach((character) => {
      console.log('here');
      if (data.bodyUsed === false) {
        const likesSpan = document.createElement('span');
        console.log('next');
        likesSpan.innerHTML =
          '<i class="fa-solid fa-flask"></i><p>Likes: 0</p>';
        character.appendChild(likesSpan);
      }
    });
  });
};
