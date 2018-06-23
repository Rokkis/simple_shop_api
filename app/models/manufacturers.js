const mongoose = require('../../configs/mongoose');

const Schema = mongoose.Schema;

const ManufacturerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    books: [String]
})

exports.Manufacturer = mongoose.model('Manufacturer',ManufacturerSchema);

//module.exports = Product;