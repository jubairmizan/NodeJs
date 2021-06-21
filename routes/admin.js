const express = require('express'); // import express js library
const ProductController = require('../controllers/ProductController');

const router = express.Router(); // Express js Router start for admin

// Assign add-product routes with get method
router.get('/add-product',ProductController.addProduct);

// Assign add-product routes with view method
router.post('/add-product',ProductController.saveProduct);

// Exporting this file information to app.js file 
module.exports = router;