const mongoose = require('mongoose');
const UserProfileModelSchema = new mongoose.Schema({
    "email": String,
    "name": String,
    "nickname": String,
    "DOB":String,
    "phone":String,
    "gender":String,
});
const UserProfileModel = mongoose.model("UserProfileModel", UserProfileModelSchema,"user_profile_details");
module.exports = UserProfileModel;