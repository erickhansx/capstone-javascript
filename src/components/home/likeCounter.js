const likeCounter = (count) => {
  const likess = document.querySelector('#likes-number');
  likess.innerText = `${count}`;
};
export default likeCounter;
