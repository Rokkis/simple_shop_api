const Manufacturer = require('../models/manufacturers').Manufacturer;

exports.getAllManufacturers = (req, res) => {
    Manufacturer.find().then(data => res.send(data));
}