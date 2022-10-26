import AddReservation from './AddReservation.js';

export default class EventListerners {
    static buttonSubmit = () => {
        const formBtn = document.querySelector('.reservation-date-form')
        formBtn.addEventListener('submit', async (e) => {
        try {
            e.preventDefault()
            // const itemId = e.target.parentElement
          const [username, dateStart, dateEnd] = Array.from(formBtn.elements)
          const creatNew = AddReservation.createDataToPostToAPI({
            item_id: 0,
            username: username.value,
            date_start: dateStart.value,
            date_end: dateEnd.value,
          })
          username.value = ''
          dateStart.value = ''
          dateEnd.value = ''
          return creatNew
        } catch (error) {
          throw new Error(error);
        }
        // putout.value
        // console.log(putout.value)
      });
    }
}