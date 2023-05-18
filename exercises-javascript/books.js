const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "The secrets of the milionaire mind",
        author: "T. Harv Eker",
      },
      {
        title: "The richest man in Babylon",
        author: "George S. Clason",
      },
      {
        title: "Rich Dad, Poor Dad",
        author: "Robert T. Kiyosaki e Sharon L. Letcher",
      },
    ],
  },
  {
    category: "Emotional Inteligence",
    books: [
      {
        title: "You are irreplaceable",
        author: "Augusto Cury",
      },
      {
        title: "Anxiety - How to face the evil of the century",
        author: "Augusto Cury",
      },
      {
        title: "The 7 habits of highly effective people",
        author: "Stephen R. Covey",
      },
    ],
  },
];

const totalCategories = booksByCategory.length;
console.log(totalCategories);

for (let category of booksByCategory) {
  console.log("Total number of books in the category: ", category.category);
  console.log(category.books.length);
}

function countAuthors() {
  let authors = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author);
      }
    }
  }
  console.log("Total authors: ", authors.length);
}

countAuthors();

function booksOfAuthor(author) {
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title);
      }
    }
  }
  console.log(`Author's books ${author}: ${books.join(", ")}`);
}

booksOfAuthor("Augusto Cury");
