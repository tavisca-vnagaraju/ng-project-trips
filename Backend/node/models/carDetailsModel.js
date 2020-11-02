const mongoose = require('mongoose');
const CarDetailsSchema = new mongoose.Schema({
    "id":String,
    "company":String,
    "type":String,
    "size":String,
    "description":String,
    "cost":Number,
    "currencyCode":String
});
const CarDetails = mongoose.model("CarDetails", CarDetailsSchema,"car_details");
module.exports = CarDetails;