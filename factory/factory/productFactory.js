const Book = require('./products/book');
const Dress = require ('./products/dress');
const product = { Book, Dress };

module.exports = {
	createProduct(type, attributes) {
		const ProductType = product[type];
		if(ProductType) {
			return new ProductType(attributes);
		} else {
			return "Produit non conforme"
		}
	}
}
