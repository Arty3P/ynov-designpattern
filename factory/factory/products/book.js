const Book = function({ name, nbPage }) {
	this.name = name || "";
	this.nbPage = nbPage || 0;
};

module.exports = Book;
