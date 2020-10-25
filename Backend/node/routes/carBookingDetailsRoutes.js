const express = require('express');
const carBookingDetailsModel = require('../models/carBookingDetailsModel');
const tripDetailsModel = require('../models/tripDetailsModel');
const tripsListModel = require('../models/tripsListModel');
const app = express();

app.get('/car/booking/details', async (req, res) => {
    const car_booking_details = await carBookingDetailsModel.find({});
    try {
      res.send(car_booking_details);
    } catch (err) {
      res.status(500).send(err);
    }
});
app.get('/car/booking/details/:id', async (req, res) => {
  const car_booking_details = await carBookingDetailsModel.findOne({ id : req.params.id});
  try {
    res.send(car_booking_details);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.post('/car/booking/details', async (req, res) => {
    const car_booking_details = new carBookingDetailsModel(req.body);
    try {
        await car_booking_details.save();
        res.send(car_booking_details);
      } catch (err) {
        res.status(500).send(err);
      }
});
app.put("/car/booking/cancel",async (req,res) => {
    let tripdetails_carOptions = {
      'status':"Cancelled",
      'carInfo.status':"Cancelled"
    }
    let flightStatus;
    let hotelStatus;
    const tripdetails = await tripDetailsModel.findOne({ id : req.body.tripId});
    if(tripdetails.isFlightBooked){
      flightStatus = tripdetails.flightInfo.status;
    }
    if(tripdetails.isHotelBooked){
      hotelStatus = tripdetails.hotelInfo.status;
    }
    if( !(flightStatus != undefined && hotelStatus != undefined) ){
      if(flightStatus === "Booked" || hotelStatus === "Booked"){
        tripdetails_carOptions.status = "Partially Cancelled";
      }
    }
    const updated_car_booking_details = await carBookingDetailsModel.findOneAndUpdate({ id : req.body.carConfirmationId},{status : "Cancelled", cancelledDate:Date.now()},{new:true});
    const updated_trips_details = await tripDetailsModel.findOneAndUpdate({id : req.body.tripId} , {$set : tripdetails_carOptions},{new:true});
    const updated_trips_list = await tripsListModel.findOneAndUpdate({id:req.body.tripId} , { $set : {status : tripdetails_carOptions.status } } , {new:true});
    const result = {
      car_booking_details : updated_car_booking_details,
      trips_details : updated_trips_details,
      trips_list : updated_trips_list
    }
    try{
      res.send(result);
    }catch(err){
      res.status(500).send(err);
    }
});

module.exports = app