const express = require('express');
const hotelBookingDetailsModel = require('../models/hotelBookingDetailsModel');
const tripDetailsModel = require('../models/tripDetailsModel');
const tripsListModel = require('../models/tripsListModel');
const app = express();

app.get('/hotel/booking/details', async (req, res) => {
    const hotel_booking_details = await hotelBookingDetailsModel.find({});
    try {
      res.send(hotel_booking_details);
    } catch (err) {
      res.status(500).send(err);
    }
});
app.get('/hotel/booking/details/:id', async (req, res) => {
  const hotel_booking_details = await hotelBookingDetailsModel.findOne({ id : req.params.id});
  try {
    res.send(hotel_booking_details);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.post('/hotel/booking/details', async (req, res) => {
    const hotel_booking_details = new hotelBookingDetailsModel(req.body);
    try {
        await hotel_booking_details.save();
        res.send(hotel_booking_details);
      } catch (err) {
        res.status(500).send(err);
      }
});

app.put("/hotel/booking/cancel",async (req,res) => {
  let tripdetails_hotelOptions = {
    'status':"Cancelled",
    'hotelInfo.status':"Cancelled"
  }
  let flightStatus;
  let carStatus;
  const tripdetails = await tripDetailsModel.findOne({ id : req.body.tripId});
  if(tripdetails.isFlightBooked){
    flightStatus = tripdetails.flightInfo.status;
  }
  if(tripdetails.isCarBooked){
    carStatus = tripdetails.carInfo.status;
  }
  if( !(flightStatus != undefined && carStatus != undefined) ){
    if(flightStatus === "Booked" || carStatus === "Booked"){
      tripdetails_hotelOptions.status = "Partially Cancelled";
    }
  }
  const updated_hotel_booking_details = await hotelBookingDetailsModel.findOneAndUpdate({ id : req.body.hotelConfirmationId},{status : "Cancelled", cancelledDate:Date.now()},{new:true});
  const updated_trips_details = await tripDetailsModel.findOneAndUpdate({id : req.body.tripId} , {$set : tripdetails_hotelOptions},{new:true});
  const updated_trips_list = await tripsListModel.findOneAndUpdate({id:req.body.tripId} , { $set : {status : tripdetails_hotelOptions.status } } , {new:true});
  const result = {
    hotel_booking_details : updated_hotel_booking_details,
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