const express = require('express'); // import express js library
const ProductController = require('../controllers/ProductController');

const router = express.Router(); // Express js Router start for admin

// Assign home page routes with get method
router.get('/',ProductController.productList);

module.exports = router;