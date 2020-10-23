const mongoose = require('mongoose');
const TripDetailsSchema = new mongoose.Schema({
    "id":String,
    "bookedDate":String,
    "status":String,
    "totalCost":Number,
    "currencyCode":String,
    "isFlightBooked":Boolean,
    "isHotelBooked":Boolean,
    "isCarBooked":Boolean,
    "flightBookingId":String,
    "hotelBookingId":String,
    "carBookingId":String,
    "flightInfo":{
        "status":String,
        "sourceCode":String,
        "destinationCode":String,
        "startDate":String,
        "endDate":String,
    },
    "hotelInfo":{
        "status":String,
        "locationCode":String,
        "name":String,
        "startDate":String,
        "endDate":String
    }
});
const TripDetails = mongoose.model("TripDetails", TripDetailsSchema,"trip_details");
module.exports = TripDetails;