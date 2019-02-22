const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    productName: String,
    productDescription: String,
    productCategory: String,
    productPrice: String,
    productImage: String,
});

module.exports = ProductSchema;