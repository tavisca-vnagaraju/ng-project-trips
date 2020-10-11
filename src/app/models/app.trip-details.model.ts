export class TripDetails {
    constructor(
        public id:string,
        public status:string,
        public bookedDate:string,
        public totalCost:number,
        public currencyCode:string,
        public isFlightBooked:boolean,
        public isHotelBooked:boolean,
        public isCarBooked:boolean,
        public flightBookingId:string,
        public flightInfo:FlightInfo
    ){}
}
export class FlightInfo{
    constructor(
        public status:string,
        public sourceCode:string,
        public destinationCode:string,
        public startDate:string,
        public endDate:string,
    ){ }
}