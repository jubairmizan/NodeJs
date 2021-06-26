const ProductModel = require('../../models/ProductModel');

exports.index = (req,res,next) => {
    ProductModel.list((productList) => {
        res.render(
                    'shop/index',
                    {
                        productInfo:productList,
                        pageTitle:'Home Page',
                        path: "/"
                    }
        ); // Render shop.pug with sending data from routes page from shop.pug page
    });
};

exports.productList = (req,res,next) => {
    ProductModel.list((productLists) => {
        res.render(
                    'shop/product-list',
                    {
                        productInfo:productLists,
                        pageTitle:'Product List',
                        path: "/products"
                    }
        ); // Render shop.pug with sending data from routes page from shop.pug page
    });
};

exports.cart = (req,res,next) => {
    ProductModel.list((productLists) => {
        res.render(
                    'shop/cart',
                    {
                        productInfo:productLists,
                        pageTitle:'Cart',
                        path: "/cart"
                    }
        ); // Render shop.pug with sending data from routes page from shop.pug page
    });
};

exports.orders = (req,res,next) => {
    ProductModel.list((productLists) => {
        res.render(
                    'shop/orders',
                    {
                        productInfo:productLists,
                        pageTitle:'Orders',
                        path: "/orders"
                    }
        ); // Render shop.pug with sending data from routes page from shop.pug page
    });
};

exports.checkout = (req,res,next) => {
    ProductModel.list((productLists) => {
        res.render(
                    'shop/checkout',
                    {
                        productInfo:productLists,
                        pageTitle:'Checkout',
                        path: "/checkout"
                    }
        ); // Render shop.pug with sending data from routes page from shop.pug page
    });
};

exports.productDetails = (req,res,next) => {
    const productId = req.params.productId;
    ProductModel.productDetails(productId,product => {
        res.render(
                    'shop/product-detail',
                    {
                        productInfo : product,
                        pageTitle : product.title,
                        path: "/products"
                    }
        );
    });
};
