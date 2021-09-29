// this is the list of all the movies in the store
var Movies = [

];

var Users = [

];

var userCount = 0;
var movieCount = 0;


// User class
class User {
  constructor (member_id, surname, firstname, address, phone_no, email) {
    this.id = member_id;
    this.surname = surname;
    this.firstname = firstname;
    this.address = address;
    this.phone_no = phone_no;
    this.email = email;
    this.movies = [];
  }

  addMovie (movie) {
    this.movies.push(movie);
  }

  returnMovie (movie) {
    let newListOfMovies = this.movies.filter(item => item.id != movie.id);

    this.movies = newListOfMovies;
  }

  get allUserMovies () {
    return this.movies;
  }
}

class Movie {
  constructor (movie_id, movie_name, distributor, director, genre, rating, year_of_release, rental_price) {
    this.id = movie_id;
    this.name = movie_name;
    this.distributor = distributor;
    this.director = director;
    this.genre = genre;
    this.rating = rating;
    this.yearOfRelease = year_of_release;
    this.rentalPrice = rental_price;
    this.rentIds = [];
  }

  deleteMovie () {
    delete this;
  }
  
  get getMovie () {
    return this;
  }
}


// function that creates movies in the store
function addNewMovie (movie_id, movie_name, distributor, director, genre, rating, year_of_release, rental_cost) {
    let newMovie = new Movie(movie_id, movie_name, distributor, director, genre, rating, year_of_release, rental_cost);
    Movies.push(newMovie);
    movie_id++;
}


// function that creates new user
function addNewUser (member_id, surname, firstname, address, phone_no, email) {
  let newUser = new User(member_id, surname, firstname, address, phone_no, email);
  Users.push(newUser);
  member_id++;
}


// function that helps rent a movie
function rentMovie (userId, movieId) {
  let movie;
  Movies.forEach(function (item) {
    if (item.id == movieId) {
      movie = item;
      item.rentIds.push(userId);
    }
  });
  Users.forEach(function (s) {
    if (s.id == userId) {
      s.addMovie(movie);
    }
  });
}


// function that helps return a movie
function returnMovie (userId, movieId) {
  let movie;
  Movies.forEach(function (item) {
    if (item.id == movieId) {
      movie = item;
      let id = item.rentIds.indexOf(userId);
      item.rentIds.splice(id, 1);
    }
  });
  Users.forEach(function (s) {
    if (s.id == userId) {
      s.returnMovie(movie);
    }
  });
}

// function that deletes the movies in the store
function removeMovie (movieId) {
  let movie;
  Movies.forEach(function (item) {
    if (item.id == movieId) {
      movie = item;
    }
  });

  let newMovies = Movies.filter(s => s.id != movie.id);
  Movies = newMovies;

  Users.forEach(function (s) {
    for (const i of s.movies) {
      if (i.id == movieId) {
        s.returnMovie(movie);
      }
    }
  });
}

addNewMovie(movieCount, "The Social Network", "Columbia Pictures", "David Fincher", "Biography", 5, 2010, 500);

addNewUser(userCount, "Ezesinachi", "Jim", "4131 Faber Drive", 8164990885, "ezesinachijim@gmail.com");

rentMovie(0, 0);
console.log(Movies);
console.log(Users);

returnMovie(0, 0);
console.log(Movies);
console.log(Users);

removeMovie(0);
console.log(Movies);
console.log(Users);