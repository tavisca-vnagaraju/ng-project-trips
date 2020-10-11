export class FlightDetails {
    constructor(
        public id:string,
        public airline:string,
        public source:string,
        public destination:string,
        public cost:number,
        public currencyCode:string
    ){}
}