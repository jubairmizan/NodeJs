const path = require('path'); // import nodejs path for assign view file
const express = require('express'); // import express js library
const rootDir = require('../lib/path'); // Import path from out lib folder
const productInfo = require('./admin'); // Import Admin routes info

const router = express.Router(); // Express js Router start for admin

// Assign home page routes with get method
router.get('/',(req,res,next) => {
    const products = productInfo.products; // Get Products Info from admin routes
    res.render('shop',{productInfo:products,pageTitle:'Home Page'}); // Render shop.pug with sending data from routes page from shop.pug page
});

module.exports = router;