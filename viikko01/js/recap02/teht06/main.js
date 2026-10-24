'use strict';

const movies = [];
const num = parseInt(prompt('How many movies do you want to rate?'));

for (let i = 1; i <= num; i++) {
  let title = prompt('Enter movie number ' + i + ' title:');
  let rating = parseFloat(prompt('Enter movie rating 1-5:'));

  while (title === '' || isNaN(rating) || rating < 1 || rating > 5) {
    if (title === '') {
      title = prompt(
        'You entered an empty title for movie number ' +
          i +
          '! Please enter a title for it!'
      );
    }

    if (isNaN(rating) || rating < 1 || rating > 5) {
      rating = parseFloat(
        prompt(
          'You entered an incorrect rating for movie number ' +
            i +
            '! Please only use numbers between 1-5!'
        )
      );
    }
  }

  movies.push({title: title, rating: rating});
}

movies.sort((a, b) => b.rating - a.rating);

const target = document.querySelector('#target');

const highestRated = document.createElement('p');
highestRated.textContent =
  'Your highest rated movie is: ' +
  movies[0].title +
  ', with rating ' +
  movies[0].rating +
  '.';
target.append(highestRated);

const table = document.createElement('table');

const tableTop = document.createElement('tr');
const tableMovie = document.createElement('td');
tableMovie.textContent = 'Movie title';
tableTop.append(tableMovie);
const tableRating = document.createElement('td');
tableRating.textContent = 'Rating';
tableTop.append(tableRating);

table.append(tableTop);

for (let mov of movies) {
  console.log(mov);
  const tableRow = document.createElement('tr');
  const tableTitle = document.createElement('td');
  tableTitle.textContent = mov.title;
  tableRow.append(tableTitle);
  const tableNumber = document.createElement('td');
  tableNumber.textContent = mov.rating;
  tableRow.append(tableNumber);

  table.append(tableRow);
}

target.append(table);
