const express = require('express');
const flightBookingDetailsModel = require('../models/flightBookingDetailsModel');
const tripDetailsModel = require('../models/tripDetailsModel');
const tripsListModel = require('../models/tripsListModel');
const app = express();

app.get('/flight/booking/details', async (req, res) => {
    const flight_booking_details = await flightBookingDetailsModel.find({});
    try {
      res.send(flight_booking_details);
    } catch (err) {
      res.status(500).send(err);
    }
});
app.get('/flight/booking/details/:id', async (req, res) => {
  const flight_booking_details = await flightBookingDetailsModel.findOne({ id : req.params.id});
  try {
    res.send(flight_booking_details);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.post('/flight/booking/details', async (req, res) => {
    const flight_booking_details = new flightBookingDetailsModel(req.body);
    try {
        await flight_booking_details.save();
        res.send(flight_booking_details);
      } catch (err) {
        res.status(500).send(err);
      }
});
app.put("/flight/booking/cancel" , async (req,res)=> {
  let tripdetails_flightOptions = { 
      'status':"Cancelled",
      'flightInfo.status':"Cancelled"
  }
  let hotelStatus;
  let carStatus;
  const tripdetails = await tripDetailsModel.findOne({ id : req.body.tripId});
  if(tripdetails.isHotelBooked){
    hotelStatus = tripdetails.hotelInfo.status;
  }
  if(tripdetails.isCarBooked){
    carStatus = tripdetails.carInfo.status;
  }
  if( !(hotelStatus != undefined && carStatus != undefined) ){
    if(hotelStatus === "Booked" || carStatus === "Booked"){
      tripdetails_flightOptions.status = "Partially Cancelled";
    }
  }
  const updated_flight_booking_details = await flightBookingDetailsModel.findOneAndUpdate({ id : req.body.flightConfirmationId},{status : "Cancelled", cancelledDate:Date.now()},{new:true});
  const updated_trips_details = await tripDetailsModel.findOneAndUpdate({id : req.body.tripId} , {$set : tripdetails_flightOptions},{new:true});
  const updated_trips_list = await tripsListModel.findOneAndUpdate({id:req.body.tripId} , { $set : {status : tripdetails_flightOptions.status } } , {new:true});
  const result = {
    flight_booking_details : updated_flight_booking_details,
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