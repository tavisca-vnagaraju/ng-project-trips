const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json()); // Make sure it comes back as json
//schema start
const BookingsSchema = new mongoose.Schema({
    "id":String,
    "type":String,
    "status":String,
    "source" : String,
    "destination" :String,
    "bookedDate":String,
    "journeyDate":String,
    "cancelledDate":String,
    "travellersCount":Number,
    "cost":String,
    "currencyCode":String
});
const Bookings = mongoose.model("Bookings", BookingsSchema);
//schema end
// db connect start
var mongoDB = process.env.MONGODB_LINK;
console.log(process.env.MONGODB_LINK);
var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(mongoDB, options);
// db connect end
// routes start
app.get('/bookings', async (req, res) => {
    const bookings = await Bookings.find({});
    console.log(process.env.MONGODB_LINK);
    try {
      res.send(bookings);
    } catch (err) {
      res.status(500).send(err);
    }
});

app.post('/bookings', async (req, res) => {
    const bookings = new Bookings(req.body);
    try {
        await bookings.save();
        res.send(bookings);
      } catch (err) {
        res.status(500).send(err);
      }
});
// routes end
app.listen(3001, () => { console.log('Server is running...') });