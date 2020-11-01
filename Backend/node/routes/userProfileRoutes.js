const express = require('express');
const userProfileModel = require('../models/userProfileModel');
const userAddressModel = require('../models/userAddressModel');
const userCardModel = require('../models/userCardModel');
const app = express();

app.get('/user/profile/', async (req, res) => {
    const user_profile = await userProfileModel.findOne({email:req.body.email});
    try {
      res.send(user_profile);
    } catch (err) {
      res.status(500).send(err);
    }
});
app.get('/user/address/', async (req, res) => {
    const user_address = await userAddressModel.findOne({email:req.body.email});
    try {
      res.send(user_address);
    } catch (err) {
      res.status(500).send(err);
    }
});
app.get('/user/card/', async (req, res) => {
    const user_card = await userCardModel.findOne({email:req.body.email});
    try {
      res.send(user_card);
    } catch (err) {
      res.status(500).send(err);
    }
});

app.post('/user/profile/', async (req, res) => {
  const user_profile = new userProfileModel(req.body);
  const user_details = await userProfileModel.findOne({email:req.body.email});
  if(user_details == null){
    try {
      await user_profile.save();
      res.send(user_profile);
    } catch (err) {
      res.status(500).send(err);
    }
  }else{
    const delete_profile = await userProfileModel.findOneAndDelete({email:req.body.email});
    if(delete_profile != null){
      try {
        await user_profile.save();
        res.send(user_profile);
      } catch (err) {
        res.status(500).send(err);
      }
    }
  }
});

app.post('/user/address/', async (req, res) => {
  const user_address = new userAddressModel(req.body);
  const user_details = await userAddressModel.findOne({email:req.body.email});
  if(user_details == null){
    try {
      await user_address.save();
      res.send(user_address);
    } catch (err) {
      res.status(500).send(err);
    }
  }else{
    const delete_profile = await userAddressModel.findOneAndDelete({email:req.body.email});
    if(delete_profile != null){
      try {
        await user_address.save();
        res.send(user_address);
      } catch (err) {
        res.status(500).send(err);
      }
    }
  }
});

app.post('/user/card/', async (req, res) => {
  const user_card = new userCardModel(req.body);
  const user_details = await userCardModel.findOne({email:req.body.email});
  if(user_details == null){
    try {
      await user_card.save();
      res.send(user_card);
    } catch (err) {
      res.status(500).send(err);
    }
  }else{
    const delete_profile = await userCardModel.findOneAndDelete({email:req.body.email});
    if(delete_profile != null){
      try {
        await user_card.save();
        res.send(user_card);
      } catch (err) {
        res.status(500).send(err);
      }
    }
  }
});

module.exports = app;