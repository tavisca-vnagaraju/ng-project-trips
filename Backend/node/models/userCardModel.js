const mongoose = require('mongoose');
const UserCardModelSchema = new mongoose.Schema({
    "email":String,
    "CardNumber":String,
    "CardHolderName":String,
    "ExpirationMonth":String,
    "ExpirationYear":Number
});
const UserCardModel = mongoose.model("UserCardModel", UserCardModelSchema,"user_card_details");
module.exports = UserCardModel;