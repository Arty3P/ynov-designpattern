const productFactory = require('./factory/productFactory');

const book = productFactory.createProduct("Book", {
	name: 'Lord of the Ring',
	nbPage: 3000
});

const dress = productFactory.createProduct("Dress", {
	name: 'Robe bleu',
	size: 38,
	color: 'blue'
});

console.log(book);
console.log(dress);
