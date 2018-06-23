/**
 * 1.Возвращать список продуктов(get)
 * 2.Добавить довый продукт(post)
 * 3.Изменить продукт(?)
 * 4.Удалить продукт(delete)
 */

const Product = require('../models/products').Product;
const Manufacturer = require('../models/manufacturers').Manufacturer;

exports.getAllProducts = (req, res) => {
    Product.find().then(data => res.send(data));
}

exports.createProduct = (req, res) => {
    Manufacturer.findOne({name: req.body.manufacturer})
    .then(data => {
        console.log(data);
        if(data === null) {
            const manufacturer = new Manufacturer({
                name: req.body.manufacturer,
                books:[req.body.name]
            })
            manufacturer.save();
            res.send('done');
        } else {
            console.log('id',data.id);
            Manufacturer.findByIdAndUpdate(data.id, {$push: {"books": req.body.name}}, function(err, result){
                 if(err) {
                     console.log('err', err)
                 }
                console.log(result);
        
            })
            res.send('add');
        }
    })
    .catch(err => {
        //console.log('error',err);
        res.send(`ERROR: ${err}`)
    })
        
      
    
  
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        manufacturer: req.body.manufacturer
    })
    
    product.save();
}