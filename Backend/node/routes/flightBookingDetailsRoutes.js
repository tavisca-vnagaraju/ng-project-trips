const express = require('express');
const flightBookingDetailsModel = require('../models/flightBookingDetailsModel');
const app = express();

app.get('/flight/booking/details', async (req, res) => {
    const flight_booking_details = await flightBookingDetailsModel.find({});
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

module.exports = app