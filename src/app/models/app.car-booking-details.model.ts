export class CarBookingDetails {
    constructor(
        public id:string,
        public status:string,
        public carId:string,
        public pickUpLocation:string,
        public dropOffLocation:string,
        public pickUpLocationCode:string,
        public dropOffLocationCode:string,
        public startDate:string,
        public endDate:string,
        public pickUpTime:string,
        public dropOffTime:string
    ){}
}