'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function () {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }

    },

    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count < 30) {
            console.log("Вы классический зритель");
        } else if (this.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB: () => {
        if (!personalMovieDB.private) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: () => {

        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            // if (genre === "" || genre === null) {
            //     console.log("Неверный ввод");
            //     i--;
            // } else {
            //     this.genres[i - 1] = genre;
            // }

            let genres = prompt(`Ввведите ваши любимые жанры через запятую ${i}`).toLowerCase();

            if (genres === "" || genres === null) {
                console.log("Неверный ввод");
                i--;
            } else {
                this.genres = genres.split(", ");
                this.genres.sort();
            }
        }


        this.genres.forEach((element, i) => {
            console.log(`Любимый жанр номер ${i+1}: ${element}`);
        });
    },

    setPrivateStatus: (isPrivate) => {
        if (isPrivate) {
            this.private = false;
        } else {
            this.private = true;
        }
    }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB();