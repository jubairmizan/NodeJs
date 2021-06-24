const products = []; // Assign empty array for store product information we input on browser
module.exports = class ProductModel{
    constructor(title){
        this.title = title;
    }
    save(){
        products.push(this);// Push input title with products array for displaying in shop/home page
    }
    static list(){
        return products;
    }
}