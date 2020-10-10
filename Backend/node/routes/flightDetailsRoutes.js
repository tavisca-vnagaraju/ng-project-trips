const express = require('express');
const flightDetailsModel = require('../models/flightDetailsModel');
const app = express();

app.get('/flight/details', async (req, res) => {
    const flightdetails = await flightDetailsModel.find({});
    try {
      res.send(flightdetails);
    } catch (err) {
      res.status(500).send(err);
    }
});

app.post('/flight/details', async (req, res) => {
    const flightdetails = new flightDetailsModel(req.body);
    try {
        await flightdetails.save();
        res.send(flightdetails);
      } catch (err) {
        res.status(500).send(err);
      }
});

module.exports = app