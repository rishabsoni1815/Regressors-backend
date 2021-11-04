const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	Product_Name: {type: String, required: true},
	Description: {type: String, required: true},
	Price: {type: Number, required: true},
	Material: {type: String, required: true},
	Image: {type: [String], required: true},
}, {
	timestamps: true,
},{ 
	collection : 'Products',
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;