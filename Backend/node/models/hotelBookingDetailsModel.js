const mongoose = require('mongoose');
const HotelBookingDetailsModelSchema = new mongoose.Schema({
    "id":String,
    "status":String,
    "hotelId":String,
    "locationCode":String,
    "location":String,
    "startDate":String,
    "endDate":String,
    "roomType":String,
    "roomNumber":String,
    "adults":Number,
    "children":Number,
    "numberOfDays":String,
    "cancelledDate":Date
});
const HotelBookingDetailsModel = 
mongoose.model("HotelBookingDetailsModel", HotelBookingDetailsModelSchema,"hotel_booking_details");
module.exports = HotelBookingDetailsModel;