const express = require('express'); // import express js library
const AdminController = require('../controllers/admin/AdminController');

const router = express.Router(); // Express js Router start for admin

// Assign add-product routes with get method
router.get('/add-product',AdminController.addProduct);
router.get('/products',AdminController.products);

// Assign add-product routes with view method
router.post('/add-product',AdminController.saveProduct);

// Exporting this file information to app.js file 
module.exports = router;