/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/
const writeLine = (Title) => {
  console.log(`>----------------------< ${Title} >----------------------<`);
};
console.log(`--------JAVASCRIPT BASICS---------`);
writeLine("Ex. A");
/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

const test = "kenneth";
console.log(test);
writeLine("Ex. B");
/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
const sum = 10 + 20;
console.log(sum);
writeLine("Ex. C");
/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
const random = Math.floor(Math.random() * 20);
console.log(random);
writeLine("Ex. D");
/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
const me = {
  name: "KENNETH",
  surname: "OBI",
  age: 25,
};
console.log(me);
writeLine("Ex. E");
/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me.age;
console.log(me);

writeLine("Ex. F");
/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
me.skills = ["HTML", "CSS", "JAVASCRIPT"];
console.log(me);

writeLine("Ex. G");
/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
let removeLastSkill = delete me.skills.pop();
console.log(me);
console.log(`--------JAVASCRIPT FUNCTIONS---------`);
writeLine("Ex. 1");
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
const dice = () => {
  return Math.floor(Math.random() * 6 + 1);
};
console.log(dice());
writeLine("Ex. 2");
/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
const whoIsBigger = (num1, num2) => {
  if (num1 > num2) {
    return `${num1} is the biggest`;
  } else {
    return `${num2} is the biggest`;
  }
};

console.log(whoIsBigger(76, 111));

writeLine("Ex. 3");
/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
const splitMe = (str) => {
  return str.split(" ");
};

console.log(splitMe("i love coding"));
writeLine("Ex. 4");
/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
const deleteOne = (str, Boolean) => {
  if (Boolean === true) {
    return str.substring(1);
  } else {
    return str.slice(0, -1);
  }
};
console.log(deleteOne("wmy mummyt", false));
writeLine("Ex. 5");
/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
const onlyLetters = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i];
    if (isNaN(currentLetter)) result += currentLetter;
  }
  return result;
};

console.log(onlyLetters("i love my mummy 4 real"));
writeLine("Ex. 6");
/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
const isThisAnEmail = (str) => {
  return str.indexOf("@") > 0 && str.indexOf(".") > 0;
};

console.log(isThisAnEmail("obikenneth913@gmail.com"));
writeLine("Ex. 7");
/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

function whatDayIsIt() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date();
  let dayName = days[date.getDay()];
  return dayName;
}
console.log(whatDayIsIt());
writeLine("Ex. 8");
/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

const rollTheDices = (n) => {
  let result = {
    sum: 0,
    values: [],
  };
  for (let i = 0; i < n; i++) {
    let randonDice = dice();
    result.values.push(randonDice);
    result.sum += randonDice;
  }
  return result;
};
console.log(rollTheDices(3));

writeLine("Ex. 9");
/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/
// function howManyDays(selectedDate) {
//   let today = new Date();
//   let difference = today - selectedDate;
//   return difference / (1000 * 60 * 60 * 24);
// }
// console.log(howManyDays(12));
writeLine("Ex. 10");
/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

function isTodayMyBirthday() {
  let today = new Date();
  let bday = new Date(1997, 3, 2); // 3 april 97
  return (
    today.getDay() === bday.getDay() && today.getMonth() === bday.getMonth()
  );
}

console.log(`--------JAVASCRIPT OBJECTS---------`);
/* This movies array is used throughout the exercises. Please don't change it :)  */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
writeLine("Ex. 11");

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/

function deleteProp(obj, prop) {
  delete obj[prop];
  return obj;
}
writeLine("Ex. 12");

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
function olderMovie() {
  let result = { Year: 2100 };
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    let currentYear = parseInt(movie.Year);
    if (currentYear < result.Year) result = movie;
  }
  return result;
}
console.log(olderMovie());
writeLine("Ex. 13");
/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

const countMovies = () => {
  for (let i = 0; i < movies.length; i++) return movies.length;
};

console.log(countMovies());
writeLine("Ex. 14");
/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
const onlyTheTitles = () => {
  let title = [];
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    title.push(movie.Title);
  }
  return title;
};
console.log(onlyTheTitles());
writeLine("Ex. 15");

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
function onlyInThisMillennium() {
  let result = [];
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    if (parseInt(movie.Year) > 1999) result.push(movie);
  }
  return result;
}

console.log(onlyInThisMillennium());

writeLine("Ex. 16");

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/
function getMovieById(id) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].imdbID === id) {
      return movies[i];
    }
  }
  return {};
}

console.log(getMovieById("tt4154796"));
writeLine("Ex. 17");

/* Ex.17
//     Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
// */

const sumAllTheYears = () => {
  let result = 0;
  for (let i = 0; i < movies.length; i++) {
    result += parseInt(movies[i].Year);
  }
  return result;
};
console.log(sumAllTheYears());
writeLine("Ex. 18");

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

function searchByTitle(keyword) {
  let result = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.indexOf(keyword) !== -1) {
      result.push(movies[i]);
    }
  }
  return result;
}

console.log(searchByTitle("Rings"));
writeLine("Ex. 19");
/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/
function searchAndDivide(word) {
  let result = {
    match: [],
    unmatch: [],
  };
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.indexOf(word) !== -1) {
      result.match.push(movies[i]);
    } else {
      result.unmatch.push(movies[i]);
    }
  }
  return result;
}
console.log(searchAndDivide("Avengers"));
writeLine("Ex. 20");
/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/ const removeIndex = (n) => {
  let result = [];
  for (let i = 0; i < movies.length; i++) {
    if (n === i) {
      continue;
    }
    result.push(movies[i]);
  }
  return result;
};

console.log(removeIndex(1));
// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/
function halfTree(height) {
  for (let i = 0; i < height; i++) {
    let toPrint = "";
    for (let j = 0; j < i; j++) {
      toPrint += "*";
    }
    console.log(toPrint);
  }
}
console.log(halfTree(10));
/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/
function tree(height) {
  for (let i = 0; i < height; i++) {
    let stars = "*".repeat(2 * i + 1);
    let spacesBefore = " ".repeat(height - i - 1);
    console.log(spacesBefore + stars);
  }
}
console.log(tree(10));

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/
function isItPrime(n) {
  for (i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isItPrime(4));
