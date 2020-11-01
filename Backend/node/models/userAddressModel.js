const mongoose = require('mongoose');
const UserAddressModelSchema = new mongoose.Schema({
    "email":String,
    "addressLine1":String,
    "addressLine2":String,
    "city":String,
    "state":String,
    "country":String,
    "zip":String
});
const UserAddressModel = mongoose.model("UserAddressModel", UserAddressModelSchema,"user_address_details");
module.exports = UserAddressModel;