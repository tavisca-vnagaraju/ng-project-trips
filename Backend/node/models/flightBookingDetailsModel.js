const mongoose = require('mongoose');
const FlightBookingDetailsModelSchema = new mongoose.Schema({
    "id":String,
    "flightId":String,
    "startDate":String,
    "endDate":String,
    "startTime":String,
    "endTime":String,
    "passengerCount":Number,
    "journeyTime":String
});
const FlightBookingDetailsModel = 
mongoose.model("FlightBookingDetailsModel", FlightBookingDetailsModelSchema,"flight_booking_details");
module.exports = FlightBookingDetailsModel;