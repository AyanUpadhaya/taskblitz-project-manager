const mongoose = require('mongoose');

// create your schema object
const modelSchema = new mongoose.Schema({});

// export the model
const model = mongoose.model('model', modelSchema);

module.exports = model;