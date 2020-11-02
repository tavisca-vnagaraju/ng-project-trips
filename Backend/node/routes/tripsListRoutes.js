const express = require('express');
const tripsListModel = require('../models/tripsListModel');
const app = express();

app.get('/trips', async (req, res) => {
    const trips = await tripsListModel.find({});
    try {
      res.send(trips);
    } catch (err) {
      res.status(500).send(err);
    }
});

app.post('/trips', async (req, res) => {
    const trips = new tripsListModel(req.body);
    try {
        await trips.save();
        res.send(trips);
      } catch (err) {
        res.status(500).send(err);
      }
});

module.exports = app