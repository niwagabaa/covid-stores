const mongoose = require('mongoose');
//const passportLocalMongoose = require('passport-local-mongoose');

const salesAgentSchema = new mongoose.Schema({
  name : {
    type: String,
  },
  nin: {
    type: String,
  },
  empid: {
    type: String,
  },
  email: {
    type: String
  },
  password: {
    type: String
  }


})


module.exports = mongoose.model('salesAgent', salesAgentSchema)
