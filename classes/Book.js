// import the Media class:
const Media = require('./Media');
// create your Book class:
class Book extends Media {
    constructor(title, year, genre, author, numPages, rating) {
        super(title, year, genre)
    }
}
// don't change below
module.exports = Book;
