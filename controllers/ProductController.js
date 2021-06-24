const products = []; // Assign empty array for store product information we input on browser

exports.addProduct = (req,res,next) => {
    // res.sendFile(path.join(rootDir,'views','add-product.html')); // sending add-product.html file which stored in views folder
    res.render('add-product',{pageTitle:'Add Product',path: "/admin/add-product"});// Render Add Product with sending data from routes page from View Page
};

exports.saveProduct = (req,res,next) => {
    products.push({title:req.body.title}); // Push input title with products array for displaying in shop/home page

    res.redirect('/'); // Redirect to shop/home page while user submit their input
};

exports.productList = (req,res,next) => {
    res.render('shop',{productInfo:products,pageTitle:'Home Page',path: "/"}); // Render shop.pug with sending data from routes page from shop.pug page
};