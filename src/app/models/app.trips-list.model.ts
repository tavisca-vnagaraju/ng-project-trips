export class TripsList {
    constructor(
        public id:string,
        public status:string,
        public bookedDate:string,
        public startDate:string,
        public endDate:string,
        public cancelledDate:string,
        public totalCost:string,
        public currencyCode:string
    ){}
}