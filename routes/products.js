//Importing router from express
const router = require('express').Router();

//Importing our model
let Products = require('../models/products.model');

//Static route - /products/
router.route('/').get((req, res) => {
	Products.find()
		.then(prods => res.json(prods))
		.catch(err => res.status(400).json('Error: ' + err));
});

//Dynamic route - /products/1/
router.route('/:id').get((req, res) => {
	Products.findById(req.params.id)
		.then(prod => res.json(prod))
		.catch(err => res.status(400).json('Error: ' + err));
});  

module.exports = router; 