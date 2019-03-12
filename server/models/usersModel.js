const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creates a schema
var userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    products: { type: Array }
});


module.exports = userSchema;


