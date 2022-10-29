const cardsNumber = (parameter) => {
  const cardCounter = document.getElementsByClassName(parameter).length;

  const cardsResult = document.querySelector('.charactersNav');
  cardsResult.textContent = `Characters: (${cardCounter})`;
};
export default cardsNumber;
