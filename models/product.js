const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    name: String,
    nameUrl: String,
    description: String,
    price: String,
    priceIva: String,
    premiere: Boolean,
    offer: Boolean,
    image: String,
    dateCreate: Date,
    dateMod: Date
})

module.exports = mongoose.model('Product', Product);