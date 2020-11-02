const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tripsListRouter = require('./routes/tripsListRoutes.js');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json()); // Make sure it comes back as json

// db connect start
var mongoDB = process.env.MONGODB_LINK;
var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(mongoDB, options);
// db connect end
app.use(tripsListRouter);

app.listen(3001, () => { console.log('http://localhost:3001') });