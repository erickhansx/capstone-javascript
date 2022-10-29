export default class Util {
  openModal = (modal, overlay) => {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
  }

reserveCounter = (comments) => {
    let count = 0;
    comments.forEach(() => {
      count += 1;
    });
    return count;
  }

  loadReservations = (storedReserve, modalContainer) => {
    modalContainer.commentDiv.innerHTML = '';
    let numResve;
    if (storedReserve.error) {
      numResve = '';
    } else {
      numResve = this.reserveCounter(storedReserve);
    }
    modalContainer.commentHeader.innerHTML = `Resevations(${numResve})`;
    modalContainer.commentDiv.appendChild(modalContainer.commentHeader);
    if (storedReserve.error) {
      return;
    }
    storedReserve.forEach((item) => {
      const commentParagraph = document.createElement('p');
      commentParagraph.innerHTML = `${item.date_start.replace(/-/ig, '/')} - <span class='comment-username'> ${item.date_end.replace(/-/ig, '/')} by</span> ${item.username}`;
      modalContainer.commentDiv.appendChild(commentParagraph);
    });
  }