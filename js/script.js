"use strict";
let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');
if (numberOfFilms == "" || numberOfFilms == null)
{
  let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');
}

const personalMovieDB =   {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

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

if (personalMovieDB.count < 10) {
  alert ("Просмотрено довольно мало фильмов");
}
else if (personalMovieDB.count <= 30) {
  alert ("Вы классический зритель");
}

else if (personalMovieDB.count > 30) {
  alert ("Вы киноман!");
}

else  {
  console.log('Произошла ошибка');
}
}
console.log(personalMovieDB);
