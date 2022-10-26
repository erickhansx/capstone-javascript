import ReservationClass from './ReservationClass.js';

export default class AddReservation {
    static getData = async ({ url }) => {
      try {
        const fetchRequest = new FetchRequestClass({ url });
        const data = await fetchRequest.makeRequest();
        return data;
      } catch (error) {
        throw new Error(error);
      }
    }

    static postData = async ({
      item_id, username, date_start, date_end,
    }, url) => {
      try {
        const fetchRequest = new FetchRequestClass({
          method: 'POST',
          body: {
            item_id,
            username,
            date_start,
            date_end,
          },
          url,
        });

        const data = await fetchRequest.makeRequest();
        return data;
      } catch (error) {
        console.log('This is the error');
        throw new Error(error);
      }
    }

    static getDataToUse = async () => {
      try {
        const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8d89N90hd9nfq0mdsf/reservations?item_id=0';
        const objfromAPI = await AddReservation.getData({ url: URL });
        return objfromAPI;
      } catch (error) {
        throw new Error(error);
      }
    }

    // static appID = 'ed0LORUs5gJKQQ4QLOxZ'

    // static endPointMap = {
    //   mainurl: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
    //   postReservationURL: `${AddReservation.appID}/reservations/`,
    // }

    static createDataToPostToAPI = async ({itemId, username, dateStart, dateEnd}) => {

        try {
        const reservationFromUI = new ReservationClass(itemId, username, dateStart, dateEnd);
        const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8d89N90hd9nfq0mdsf/reservations/';
        // `${AddReservation.endPointMap.mainurl}${AddReservation.endPointMap.postReservationURL}`
        const postItNow = await AddReservation.postData(reservationFromUI, URL);
        return postItNow;
      } catch (error) {
        throw new Error(error);
      }
    }

    static htmlForReservationDOM = ({ username, date_start, date_end }) => {
      const UL = document.querySelector('.reservation-ul');
      const LI = document.createElement('li');
      LI.classList.add('object-li');
      LI.innerHTML = `<span>${date_start} - </span><span>${date_end}</span><span> by ${username}</span>`;
      UL.appendChild(LI);
    }
}