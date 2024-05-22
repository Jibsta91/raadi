const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const listingRoutes = require('./routes/listingRoutes');
dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/listings', listingRoutes);

module.exports = app;
