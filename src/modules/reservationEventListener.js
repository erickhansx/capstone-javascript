import AddReservation from './AddReservation.js';
import ReservationClass from './ReservationClass.js';

export default class EventListerners {
    static buttonSubmit = () => {
        const formBtn = document.querySelector('.reservation-date-form')
        formBtn.addEventListener('submit', async (e) => {
        try {
            e.preventDefault()
          const reserve = AddReservation.getDataToUse()
          const [username, dateStart, dateEnd] = Array.from(formBtn.elements)
          const theID = 50;
          const UL = document.querySelector('.reservation-ul');
          const user = username.value;
          const start = dateStart.value;
          const end = dateEnd.value;
          const ReservationClas = new ReservationClass(theID, user, start, end)
          const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8d89N90hd9nfq0mdsf/reservations/';
          const creatNew = AddReservation.postData(ReservationClas, URL);
          // const creatNew = AddReservation.createDataToPostToAPI(username.value, dateStart.value, dateEnd.value);
          console.log(creatNew);
          username.value = ''
          dateStart.value = ''
          dateEnd.value = ''
          setTimeout(function( ) {
            UL.innerHTML = ''
            AddReservation.displayOnUI()
          }, 500)
          // EventListerners.windowLoad()
          return creatNew
        } catch (error) {
          throw new Error(error);
        }
        // putout.value
        // console.log(putout.value)
      });
    }

static windowLoad = () => {
  window.addEventListener('load', async () => {
    try {
      const displayIndexScoreName = await AddReservation.displayOnUI();
      return displayIndexScoreName;
    } catch (error) {
      throw new Error(error);
    }
  });
}

}
static reserveBtn = () => {
  const mainBody = document.querySelector('.character');

  mainBody.addEventListener('click', (e) => {
    const tar = e.target;
    const parent = e.target.parentElement.parentElement.parentElement;
    const src = parent.children[0].getAttribute('src');
    const pickName = parent.children[1].children[0].textContent;
    const underSpace = document.querySelector('.under-space');
    const appendIt = document.querySelector('.image-body');
    const starNumber = parent.children[1].children[1].children[1].textContent;
    const reservationBody = document.querySelector('.section-reservations');
    if (!tar.classList.contains('reservationsBtn')) return null;

    appendIt.innerHTML = imageIt;
    underSpace.innerHTML = underSpaceContent;
    reservationBody.classList.add('active');
  });
}

static closeBtn = () => {
  const mainBody = document.querySelector('.section-reservations');

  mainBody.addEventListener('click', (e) => {
    const tar = e.target;
    if (!tar.classList.contains('closeBTN')) return null;

    mainBody.classList.remove('active');
  });
}