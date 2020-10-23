const express = require('express');
const hotelDetailsModel = require('../models/hotelDetailsModel');
const app = express();

app.get('/hotel/details', async (req, res) => {
    const hoteldetails = await hotelDetailsModel.find({});
    try {
      res.send(hoteldetails);
    } catch (err) {
      res.status(500).send(err);
    }
});

app.post('/hotel/details', async (req, res) => {
    const hoteldetails = new hotelDetailsModel(req.body);
    try {
        await hoteldetails.save();
        res.send(hoteldetails);
      } catch (err) {
        res.status(500).send(err);
      }
});

module.exports = app