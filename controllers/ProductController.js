const ProductModel = require('../models/ProductModel');

exports.addProduct = (req,res,next) => {
    // res.sendFile(path.join(rootDir,'views','add-product.html')); // sending add-product.html file which stored in views folder
    res.render('admin/add-product',{pageTitle:'Add Product',path: "/admin/add-product"});// Render Add Product with sending data from routes page from View Page
};

exports.saveProduct = (req,res,next) => {
    const product = new ProductModel(req.body.title); 
    product.save();
    res.redirect('/'); // Redirect to shop/home page while user submit their input
};

exports.productList = (req,res,next) => {
    ProductModel.list((productList) => {
        res.render(
                    'shop/product-list',
                    {
                        productInfo:productList,
                        pageTitle:'Home Page',
                        path: "/"
                    }
        ); // Render shop.pug with sending data from routes page from shop.pug page
    });
};