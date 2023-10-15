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
    hasMovieAdaptation: false,
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

const books = getBooks();
books;

// MAP
const x = [1, 2, 3, 4, 5].map((e) => e * 2);
console.log(x);

let result = null;

// Show list of titles
result = books.map((e) => e.title);
console.log(result);

// Show list of titles, authors
result = books.map((book) => ({ title: book.title, author: book.author }));
console.log(result);

// Show list of title, author, and genres
result = books.map(({ title, author, genres }) => {
  return {
    title,
    author,
    genres,
  };
});
console.log(result);

// Show list of title, author, and review counts
result = books.map(({ title, author, reviews }) => {
  return {
    title,
    author,
    reviewCounts:
      (reviews?.goodreads?.reviewsCount ?? 0) +
      (reviews?.librarything?.reviewsCount ?? 0),
  };
});

console.log(result);

// FILTER

// Show list of book with more than 500 pages and has movie adaptation

result = books.filter((e) => e.pages > 500).filter((e) => e.hasMovieAdaptation);
console.log(result);

// Show list of title and genre with adventure genre

result = books
  .filter((e) => e.genres.includes("adventure"))
  .map(({ title, genres }) => ({ title, genres }));
console.log(result);

// REDUCE

// Get total of pages on all books
result = books.reduce((sum, e) => sum + e.pages, 0);
console.log(result);

// SORT

const arr = [3, 7, 1, 9, 6];
// arr.slice is try to copy the array
const sortedArr = arr.slice().sort((a, b) => a - b); // ASC
// const sortedArr = arr.sort((a, b) => b - a); // DESC
console.log(sortedArr);
console.log(arr);

// arr.sort is mutate, change the original array

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages); // ASC
console.log(sortedByPages);

// IMMUTABLE !

let originArray = [5, 3, 2, 1, 4];

let copyArray = originArray.slice().sort((a, b) => a - b);
console.log(copyArray);

// Add Object to Array

const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
console.log(books);
console.log(booksAfterAdd);

// Delete Object from Array

const booksAfterDelete = booksAfterAdd.filter((e) => e.id !== 3);
console.log(books);
console.log(booksAfterDelete);

// Update Object in the Array

const booksAfterUpdate = booksAfterDelete.map((e) =>
  e.id === 1 ? { ...e, pages: 1 } : e
);
console.log(booksAfterUpdate);
