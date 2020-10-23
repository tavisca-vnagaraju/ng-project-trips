const express = require('express');
const hotelBookingDetailsModel = require('../models/hotelBookingDetailsModel');
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

module.exports = app