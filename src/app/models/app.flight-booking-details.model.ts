export class FlightBookingDetails {
    constructor(
        public id:string,
        public status:string,
        public flightId:string,
        public sourceCode:string,
        public destinationCode:string,
        public source:string,
        public destination:string,
        public startDate:string,
        public endDate:string,
        public startTime:string,
        public endTime:string,
        public adults:number,
        public children:number,
        public journeyTime:string
    ){}
}