const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();
const PORT = config.get('port') || 5000;
const mongoURL = config.get('mongoURL')

const start = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  }catch(e) {
    console.log('Server error', e.message);
    process.exit(1);
  }
}

start();

app.listen(PORT, () => { console.log(`App has been started on ${PORT}`) });