const express = require('express');
const carBookingDetailsModel = require('../models/carBookingDetailsModel');
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

module.exports = app