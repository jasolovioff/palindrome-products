const mongoose = require('mongoose');
const Product = mongoose.model('products');
const checkPalindrome = require('../utils/checkPalindrome');

module.exports = app => {
    app.get('/api/products/*', async (req, res) => {
        const searchParam = req.params[0]
        let searchQuery = {
            $or: []
        }
        if(parseInt(searchParam)){
            searchQuery.$or.push({id: parseInt(searchParam)});
        }
        if(searchParam.length >= 3){
            searchQuery.$or.push({brand: {$regex : searchParam}});
            searchQuery.$or.push({description: {$regex : searchParam}})
        }
        if (searchQuery.$or.length > 0){
            const products = await Product.find(searchQuery);
            let discount = 0;
            if (checkPalindrome(searchParam)){
                discount = 0.5
            }
            const response = {
                discount,
                products
            }
            res.send(response);
        }else{
            res.send({discount:'', products: []});
        }
    });
}