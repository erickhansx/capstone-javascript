export default class ReservationClass {
    itemId;

    username;

    dateStart;

    dateEnd;

    constructor(itemId, username, dateStart, dateEnd) {
        this.itemId = itemId;
        this.username = username;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
    }
}