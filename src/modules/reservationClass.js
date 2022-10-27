export default class ReservationClass {
    theID;

    username;

    dateStart;

    dateEnd;

    constructor(theID, username, dateStart, dateEnd) {
        this.username = username;
        this.theID = theID;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
    }
}