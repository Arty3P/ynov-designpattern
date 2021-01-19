const Book = require('./products/book');
const Dress = require ('./products/dress');
const product = { Book, Dress };

module.exports = {
	createProduct(type, attributes) {
		const ProductType = product[type];
		return new ProductType(attributes);
	}
}
