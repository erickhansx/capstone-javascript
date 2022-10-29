const appId = 'TpmMqPZSaYcfyNoZ0kVp';
const idPath = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;

const passLike = () => {
  const likeDiv = document.querySelectorAll('.likeDiv');
  likeDiv.forEach((div) => {
    div.addEventListener('click', () => {
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

      fetch(idPath, options);
    });
  });
};
//
//
//
//
//
//
//
//
//
//
//
//
// const likeDiv = document.querySelectorAll('.likeDiv');
// const characterDiv = document.querySelectorAll('.characterDiv');
// characterDiv.forEach((char) => {
//   likeDiv.forEach((div) => {
//     div.addEventListener('click', () => {
//       const update = {
//         item_id: char.id,
//       };
//       console.log(update);
//       const options = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(update),
//       };
//       // console.log(fetch(idPath, options));
//       div.innerHTML = `<a class="likesBtn"><i class="fa-solid fa-flask"></i><span>${
//         Number(div.innerText) + 1
//       }</span></a>`;
//       div.classList.add('liked');
//       console.log(Number(div.innerText) === 1);
//     });
//   });
//   return;
// btn.addEventListener('click', () => {
//   console.log('worked');
// if (char.lastChild.classList.contains('liked')) {
//   return;
// }
// });
// fetch(idPath, options);
// char.lastChild.innerHTML = `<a class="likesBtn"><i class="fa-solid fa-flask"></i><span>${
//   Number(char.lastChild.innerText) + 1
// }</span></a>`;
// char.lastChild.classList.add('liked');
// console.log(Number(char.lastChild.innerText) === 1);

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
// };

export default passLike;
