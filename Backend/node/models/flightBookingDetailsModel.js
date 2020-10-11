const mongoose = require('mongoose');
const FlightBookingDetailsModelSchema = new mongoose.Schema({
    "id":String,
    "status":String,
    "flightId":String,
    "sourceCode":String,
    "destinationCode":String,
    "source":String,
    "destination":String,
    "startDate":String,
    "endDate":String,
    "startTime":String,
    "endTime":String,
    "adults":Number,
    "children":Number,
    "journeyTime":String
});
const FlightBookingDetailsModel = 
mongoose.model("FlightBookingDetailsModel", FlightBookingDetailsModelSchema,"flight_booking_details");
module.exports = FlightBookingDetailsModel;