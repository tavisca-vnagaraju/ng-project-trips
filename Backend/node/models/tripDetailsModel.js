const mongoose = require('mongoose');
const TripDetailsSchema = new mongoose.Schema({
    "id":String,
    "bookedDate":String,
    "status":String,
    "totalCost":Number,
    "currencyCode":String,
    "flightBookingId":String
});
const TripDetails = mongoose.model("TripDetails", TripDetailsSchema,"trip_details");
module.exports = TripDetails;