const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tripsListRouter = require('./routes/tripsListRoutes.js');
const flightDetailsRouter = require('./routes/flightDetailsRoutes.js');
const carDetailsRouter = require('./routes/carDetailsRoutes.js');
const hotelDetailsRouter = require('./routes/hotelDetailsRoutes.js');
const tripDetailsRouter = require('./routes/tripDetailsRoutes.js');
const flightBookingDetailsRouter = require('./routes/flightBookingDetailsRoutes.js');
const hotelBookingDetailsRouter = require('./routes/hotelBookingDetailsRoutes.js');
const carBookingDetailsRouter = require('./routes/carBookingDetailsRoutes.js');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json()); // Make sure it comes back as json

// db connect start
var mongoDB = process.env.MONGODB_LINK;
var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
mongoose.connect(mongoDB, options);
// db connect end
app.use(tripsListRouter);
app.use(flightDetailsRouter);
app.use(hotelDetailsRouter);
app.use(carDetailsRouter);
app.use(flightBookingDetailsRouter);
app.use(hotelBookingDetailsRouter);
app.use(carBookingDetailsRouter);
app.use(tripDetailsRouter);

app.listen(3001, () => { console.log('http://localhost:3001') });