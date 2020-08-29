"use strict";

const numberOfMovies = +prompt('How many movies have you seen?', '');

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastSeenMovie = prompt('What of the latest movies that you have seen?', '');
const scoreOfTheLastMovie = prompt('How do you score it?','');

personalMovieDB.movies[lastSeenMovie]= scoreOfTheLastMovie;

console.log(personalMovieDB);