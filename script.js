// this is the list of all the movies in the store
let AllMovies = [

];

// this is the list of movies that have been rented
let Movies_on_Rent = [

];

let User = [

];


// storage of the data
// storing his movies
// his 

// class
const user = {
  constructor(member_id, surname, firstname, address, phone_no, email) {
    this.member_id = member_id
    this.surname = surname
    this.firstname = firstname
    this.address = address
    this.phone_no = phone
    this.email = email
  }
}

class movie{
  constructor(movie_id, movie_name, distributor, director, genre, rating, year_of_release, rental_cost, copiesExisting, instances) {
    this.movie_id = movie_id
    this.movie_name = movie_name
    this.distributor = distributor
    this.director = director
    this.genre = genre
    this.rating = rating
    this.year_of_release = year_of_release
    this.rental_cost = rental_cost
    this.instances = instances
    this.count = function(){
      instances
    }
  }
  // counter


}






// function that helps rent a movie
// name

// function that helps return a movie

// funciton that edits the movies in the store

// funciton that deletes the movies in the store

XUo?

What a




// function that creates movies in the store

function createNewMovie (movie_id, movie_name, distributor, director, genre, rating, year_of_release, rental_cost, instances) {
    let newMovie = new movie(movie_id, movie_name, distributor, director, genre, rating, year_of_release, rental_cost, instances);
    AllMovies.push(newMovie);
  }


// add some moves to the AllMovies  

createNewMovie(0001, "Avenger age of utron", "marvel", "stephen spilberg", "action", 5, 2013, 2000, 10);
createNewMovie(0002, "Avenger end game", "marvel", "stephen spilberg", "action", 4, 2015, 1000, 5);


console.log(AllMovies);
// const end_game = new movie (0002, "Avenger end game", "marvel", "stephen spilberg", "action", 5, 2019, 2000);
// const loki = new movie (0001, "Avenger loki", "marvel", "stephen spilberg", "action", 5, 2013, 2000);
// const infinity_wars = new movie (0001, "Avenger infinity wars", "marvel", "stephen spilberg", "action", 5, 2013, 2000);