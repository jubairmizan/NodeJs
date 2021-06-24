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
    constructor(title){
        this.title = title;
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
}