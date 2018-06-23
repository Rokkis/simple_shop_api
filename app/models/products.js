const mongoose = require('../../configs/mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    manufacturer: {
        type: String,
        required: true
    }
})

exports.Product = mongoose.model('Product',ProductSchema);

//module.exports = Product;