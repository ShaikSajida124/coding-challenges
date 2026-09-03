const books = [
  {
    title: 'To Kill a Mockingbird', 
    authorName: 'Harper Lee', 
    releaseYear: 1960
  },
  {
    title: 'Pride and Prejudice', 
    authorName: 'Jane Austen',
    releaseYear: 1813
  },
  {
    title: 'The Hobbit', 
    authorName: 'J.R.R. Tolkien', 
    releaseYear: 1937
  },
  {
    title: 'Harry Potter and the Sorcerer\'s Stone', 
    authorName: 'J.K. Rowling', 
    releaseYear: 1997
  },
  {
    title: 'The Great Gatsby',
    authorName: 'F. Scott Fitzgerald',
    releaseYear: 1925
  },
  {
    title: 'Frankenstein', 
    authorName: 'Marry Shelley', 
    releaseYear: 1818
  }
];

function sortByYear(book1, book2) {
  if (book1.releaseYear == book2.releaseYear) {
    return 0;
  } else if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else {
    return 1;
  }
}
const filteredBooks = books.filter((book) => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);
console.log(filteredBooks);
