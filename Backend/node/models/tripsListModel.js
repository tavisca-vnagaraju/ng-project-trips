const mongoose = require('mongoose');
const TripsListSchema = new mongoose.Schema({
    "id":String,
    "status":String,
    "bookedDate":String,
    "startDate":String,
    "endDate":String,
    "cancelledDate":String,
    "totalCost":String,
    "currencyCode":String
});
const TripsList = mongoose.model("TripsList", TripsListSchema,"trips_list");
module.exports = TripsList;