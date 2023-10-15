const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();
books;

const book = getBook(3);
// const title = book.title;
// const author = book.author;

// Property Initializer Shorthand
function createPerson(name, age) {
  return {
    name,
    age,
  };
}

let person = createPerson("Andreas", 28);
console.log(person.name, person.age);

// Object Destructuring

// Its relying with the name of properties

const {
  title,
  author,
  pages,
  publicationDate,
  genres,
  hasMovieAdaptation,
  isbn = "Not Found",
} = book;

console.log(title, author, pages, publicationDate, isbn);

// Object Destruction Assignment

let node = {
  type: "Identifier",
  desc: "Foo",
  loc: {
    start: {
      line: 1,
      column: 1,
    },
    end: {
      line: 1,
      column: 4,
    },
  },
};

let type = "Literal";
let desc = 5;

({ type, desc } = node);
console.log(type, desc);

let { type: localType, name: localName = "bar" } = node;

console.log(localType, localName);

let {
  loc: { start: localStart },
} = node;

console.log(localStart.line, localStart.column);

genres;

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// Array Destructuring

// Its relying with the order of element

const [primaryGenre, secondaryGenre] = genres;

console.log(primaryGenre, secondaryGenre);

const [, , thridGenre] = genres;

console.log(thridGenre);

// Array Desctructing Assignment
let colors = ["red", "green", ["blue1", "blue2"]];

let firstColor = "magenta";
let secondColor = "black";

[firstColor, secondColor, [thridColor1, thridColor2], fourthColor = "white"] =
  colors;

console.log(firstColor, secondColor, thridColor1, thridColor2, fourthColor);

// Use for Swap
let a = 1,
  b = 2;

[a, b] = [b, a];

console.log(a, b);

// Rest Operators

let numbers = [1, 2, 3, 4];

[firstNumber, secondNumber, ...restNumbers] = numbers;

console.log(firstNumber, secondNumber, restNumbers[0], restNumbers[1]);

[...cloneNumbers] = numbers;
console.log(cloneNumbers);

var result = sum(1, 2, 3, 4);
console.log(result);

function sum(...numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

// Spread Operators

var extendNumbers = [5, ...numbers];
console.log(extendNumbers);

const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",
  // Overwriting an existing property
  pages: 1210,
};
updatedBook;

// Template Literals

// Javascript function inside a string
// Using backtick (`)

let hello = `\`Hello\`,
World!`;
console.log(hello);

// Arrow Function

// Function Declaration
// function getYear(str) {
//   return str.split("-")[0];
// }

// Function Expression
const getYear = (str) => {
  return str.split("-")[0];
};

console.log(getYear(publicationDate));

const summary = `${title}, a ${pages}-pages long book, was writter by \
${author} and published in ${getYear(publicationDate)}`;
summary;

// falsy: 0, '', null, undefined, otherwise is truty

// Short Circuit AND Operator

// left true  return right
console.log(true && "Today");
// left false return left
console.log(false && "Today");

console.log(0 && "Today");
console.log("" && "Today");
console.log(null && "Today");
console.log(undefined && "Today");

// Use for condition
console.log(hasMovieAdaptation && "This book has a movie");
// Equal to condition ? result : false
console.log("A" && "B");

// Short Circuit OR Operator

// left true  return left
console.log(true || "Today");
// left false return right
console.log(false || "Today");

// Use for default value
console.log(0 || "Today");
console.log("" || "Today");
console.log(null || "Today");
console.log(undefined || "Today");

// Short Circuit NULLISH COALESING Operator

// falsy: null, undefined, otherwise is truty 0, '', etc

console.log(0 ?? "Today");
console.log("" ?? "Today");
console.log(null ?? "Today");
console.log(undefined ?? "Today");

// Optional Chaining

// Example :
// a.b.c
// b is required accessed by a
// c is required accessed by b

// If undefined it will throw an error

// a?.b?.c ?? default value

// b is optional accessed by a
// c is optional accessed by b

// will return undefined and set to default value

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
