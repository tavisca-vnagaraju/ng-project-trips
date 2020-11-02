const mongoose = require('mongoose');
const FlightDetailsSchema = new mongoose.Schema({
    "id":String,
    "airline":String,
    "sourceCode":String,
    "destinationCode":String,
    "source":String,
    "destination":String,
    "cost":Number,
    "currencyCode":String
});
const FlightDetails = mongoose.model("FlightDetails", FlightDetailsSchema,"flight_details");
module.exports = FlightDetails;