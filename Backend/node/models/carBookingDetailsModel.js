const mongoose = require('mongoose');
const CarBookingDetailsModelSchema = new mongoose.Schema({
    "id":String,
    "status":String,
    "carId":String,
    "pickUpLocation":String,
    "dropOffLocation":String,
    "pickUpLocationCode":String,
    "dropOffLocationCode":String,
    "startDate":String,
    "endDate":String,
    "pickUpTime":String,
    "dropOffTime":String,
});
const CarBookingDetailsModel = 
mongoose.model("CarBookingDetailsModel", CarBookingDetailsModelSchema,"car_booking_details");
module.exports = CarBookingDetailsModel;