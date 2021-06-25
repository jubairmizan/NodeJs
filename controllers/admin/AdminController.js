const ProductModel = require('../../models/ProductModel');

exports.products = (req,res,next) => {
    ProductModel.list((productList) => {
        res.render(
                    'admin/product-list',
                    {
                        productInfo :   productList,
                        pageTitle   :   'Admin Product List',
                        path        :   '/admin/products'
                    }
        ); // Render shop.pug with sending data from routes page from shop.pug page
    });
};

exports.addProduct = (req,res,next) => {
    // res.sendFile(path.join(rootDir,'views','add-product.html')); // sending add-product.html file which stored in views folder
    res.render(
                'admin/add-product',
                {
                    pageTitle:'Add Product',
                    path: "/admin/add-product"
                }
    );// Render Add Product with sending data from routes page from View Page
};

exports.saveProduct = (req,res,next) => {
    let title = req.body.title;
    let price = req.body.price;
    let img_url = req.body.img_url;
    let desc = req.body.desc;

    const product = new ProductModel(title,price,desc,img_url); 
    product.save();
    res.redirect('/'); // Redirect to shop/home page while user submit their input
};
