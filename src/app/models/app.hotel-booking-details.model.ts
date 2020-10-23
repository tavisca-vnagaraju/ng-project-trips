export class HotelBookingDetails {
    constructor(
        public id:string,
        public status:string,
        public hotelId:string,
        public locationCode:string,
        public location:string,
        public startDate:string,
        public endDate:string,
        public roomType:string,
        public roomNumber:string,
        public adults:number,
        public children:number,
        public numberOfDays:number
    ){}
}