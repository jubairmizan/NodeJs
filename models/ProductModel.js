const fs = require('fs');
const path = require('path');
const products = [];
const fileDetails = path.join(path.dirname(process.mainModule.filename),'data-log','products.json');

const productListFromFile = (callback) => {
    fs.readFile(fileDetails,(err,data) => {
        if(err){
            return callback([]);
        }else{
            callback(JSON.parse(data));
        }
    });
}

module.exports = class ProductModel{
    constructor(title,price,desc,img_url){
        this.productId  = Math.floor(Math.random() * 10000) + 1; 
        this.title      = title;
        this.price      = price;
        this.desc       = desc; 
        this.img_url    = img_url;
    }
    save(){
        productListFromFile(products => {
            products.push(this);// Push input title with products array for displaying in shop/home page
            fs.writeFile(fileDetails,JSON.stringify(products),(err) => {
                console.log(err);
            });
        });
    }
    static list(callback){
        productListFromFile(callback);
    }
    static productDetails(id,callback){
        productListFromFile(products => {
            const product = products.find(p => {
                return p.productId == id;
            });
            callback(product);
        });
    }
}