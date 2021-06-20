const path = require('path'); // import nodejs path for assign view file
const express = require('express'); // import express js library
const rootDir = require('../lib/path'); // Import path from out lib folder

const router = express.Router(); // Express js Router start for admin
const products = []; // Assign empty array for store product information we input on browser

// Assign add-product routes with get method
router.get('/add-product',(req,res,next) => {
    // res.sendFile(path.join(rootDir,'views','add-product.html')); // sending add-product.html file which stored in views folder
    res.render('add-product',{pageTitle:'Add Product'});// Render Add Product with sending data from routes page from View Page
});

// Assign add-product routes with view method
router.post('/add-product',(req,res,next) => {
    products.push({title:req.body.title}); // Push input title with products array for displaying in shop/home page

    res.redirect('/'); // Redirect to shop/home page while user submit their input
});

// Exporting this file information to app.js file 
exports.routes = router;
exports.products = products;

//module.exports = {routes : router,products : products}
