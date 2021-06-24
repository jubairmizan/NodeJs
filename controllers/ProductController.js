const ProductModel = require('../models/ProductModel');

exports.addProduct = (req,res,next) => {
    // res.sendFile(path.join(rootDir,'views','add-product.html')); // sending add-product.html file which stored in views folder
    res.render('add-product',{pageTitle:'Add Product',path: "/admin/add-product"});// Render Add Product with sending data from routes page from View Page
};

exports.saveProduct = (req,res,next) => {
    const product = new ProductModel(req.body.title); 
    product.save();
    res.redirect('/'); // Redirect to shop/home page while user submit their input
};

exports.productList = (req,res,next) => {
    const productList = ProductModel.list();
    
    res.render('shop',{productInfo:productList,pageTitle:'Home Page',path: "/"}); // Render shop.pug with sending data from routes page from shop.pug page
};