"use strict";

const numberOfMovies = +prompt('How many movies have you seen?', '');

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i=0;i<2;i++){
    const lastSeenMovie = prompt('One of the latest movie that you have seen?', '');
    const scoreOfTheLastMovie = prompt('How do you score it?','');
    if(scoreOfTheLastMovie.length>1||lastSeenMovie>1||lastSeenMovie!=null||scoreOfTheLastMovie!=null){
        personalMovieDB.movies[lastSeenMovie]= scoreOfTheLastMovie;
    }else{
    i--;
    }
}

if(personalMovieDB.count<10){
    console.log("Too less films");
}
else if(personalMovieDB.count>10&&personalMovieDB.count<30){
    console.log("You are a movielover");
}
else if(personalMovieDB.count>=30){
    console.log("Keep going!");
}
else{
    console.log("Error...");
}

console.log(personalMovieDB);