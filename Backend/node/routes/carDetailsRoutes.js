const express = require('express');
const carDetailsModel = require('../models/carDetailsModel');
const app = express();

app.get('/car/details', async (req, res) => {
    const cardetails = await carDetailsModel.find({});
    try {
      res.send(cardetails);
    } catch (err) {
      res.status(500).send(err);
    }
});

app.post('/car/details', async (req, res) => {
    const cardetails = new carDetailsModel(req.body);
    try {
        await cardetails.save();
        res.send(cardetails);
      } catch (err) {
        res.status(500).send(err);
      }
});

module.exports = app