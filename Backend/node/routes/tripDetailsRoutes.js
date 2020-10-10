const express = require('express');
const tripDetailsModel = require('../models/tripDetailsModel');
const app = express();

app.get('/trip/details/:id', async (req, res) => {
    const tripdetails = await tripDetailsModel.findOne({ id : req.params.id});
    try {
      res.send(tripdetails);
    } catch (err) {
      res.status(500).send(err);
    }
});

app.post('/trip/details', async (req, res) => {
    const tripdetails = new tripDetailsModel(req.body);
    try {
        await tripdetails.save();
        res.send(tripdetails);
      } catch (err) {
        res.status(500).send(err);
      }
});

module.exports = app