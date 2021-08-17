"use strict";

let numberOfFilms;

function start () {
 numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');

 while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
  numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');
 }
}

start();

const personalMovieDB =   {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};



function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const q1 = prompt("Один из последних просмотренных фильмов?", ''),
    q2 = +prompt("На сколько оцените его от 1 до 10?", '');
    if (q1 !=null && q2 !=null && q1 !='' && q2 !='' && q1.length < 50) {
    personalMovieDB.movies[q1] = q2;
    console.log('done');
  }
  else {
    console.log('error');
    alert ("Нужно что-то написать, ска");
    i--;
  }
}
}
rememberMyFilms();


function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >=10 && personalMovieDB.count <30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман!");
  } else  {
    console.log('Произошла ошибка');
  }

}

detectPersonalLevel ();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    console.log('done');
  }
}

writeYourGenres();


