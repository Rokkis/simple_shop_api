const productsController = require('../controllers/products_controller');
const manufacturersController = require('../controllers/manufacturer_contoller')
module.exports = function(app) {
    
    app.get('/products', productsController.getAllProducts );
    app.post('/products', productsController.createProduct );
    app.get('/manufacturers', manufacturersController.getAllManufacturers)
}