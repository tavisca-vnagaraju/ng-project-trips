export class FlightDetails {
    constructor(
        public id:string,
        public name:string,
        public location:string,
        public locationCode:string,
        public description:string,
        public cost:number,
        public currencyCode:string
    ){}
}