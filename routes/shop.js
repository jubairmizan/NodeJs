const express = require('express'); // import express js library
const ShopController = require('../controllers/shop/ShopController');

const router = express.Router(); // Express js Router start for admin

// Assign home page routes with get method
router.get('/',ShopController.index);
router.get('/products',ShopController.productList);
router.get('/cart',ShopController.cart);
router.get('/orders',ShopController.orders);
router.get('/checkout',ShopController.checkout);
router.get('/product/details/:productId',ShopController.checkout);

module.exports = router;