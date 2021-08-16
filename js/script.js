"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');



const personalMovieDB =   {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

const q1 = prompt("Один из последних просмотренных фильмов?", ''),
q2 = +prompt("На сколько оцените его от 1 до 10?", '');

personalMovieDB.movies[q1] = q2;


console.log(personalMovieDB);

