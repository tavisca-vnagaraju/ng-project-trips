const mongoose = require('mongoose');
const HotelDetailsSchema = new mongoose.Schema({
    "id":String,
    "name":String,
    "location":String,
    "locationCode":String,
    "description":String,
    "cost":Number,
    "currencyCode":String
});
const HotelDetails = mongoose.model("HotelDetails", HotelDetailsSchema,"hotel_details");
module.exports = HotelDetails;