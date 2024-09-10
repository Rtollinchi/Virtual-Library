// import the Media class:
const Media = require("./Media");

// create your Movie class:
class Movie extends Media{
    constructor(title, year, genre, director, duration, rating){
        super(title, year, genre)
        this.director=director
        this.rating=rating
        this.duration=duration
    }
    summary(){return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`}
    static longestMovie(Movie){return Movie.reduce((longest, current) => (current.duration > longest.duration ? current : longest))}
}

// don't change below
module.exports = Movie;