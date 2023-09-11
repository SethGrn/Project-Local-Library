function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  // loop through books array
  let borrowedBooks = 0;
  books.forEach((book) => book.borrows[0].returned === false ? borrowedBooks++ : 0)
  // return number of books with borrow[0].returned = false;
  return borrowedBooks;
}

function getMostCommonGenres(books) {
  // format : name: "" count: 
  // loop through books array 
  // count how many times a genre shows up (make it clevver though)
  let genreList = [];
  books.forEach((book) => {
    // loop through list
    // if name: doesnt exits
    // add new genre
    // if name found?
    // +1 to count
    if (genreList.every((genre) => genre.name != book.genre)) {
      const genreTemp = {name: book.genre, count: 1}
      genreList.push(genreTemp)
    } else {
      for (let i = 0; i < genreList.length; i++) {
        if (genreList[i].name === book.genre) genreList[i].count++;
      }
    }
  })
  genreList.sort((a,b) => b.count - a.count)
  while (genreList.length > 5) genreList.pop();

  return genreList;
}

function getMostPopularBooks(books) {
  // loop through books array
  // count how many times each book has been borrowed
  // sort by descending
  let bookList = [];
  books.forEach((book) => {
    //const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    //book.borrows
    const borrowCount = book.borrows.reduce((accumulator, currentValue) => accumulator + 1, 0);
    bookList.push({name: book.title, count: borrowCount })
  })
  bookList.sort((a, b) => b.count - a.count);
  while(bookList.length > 5) bookList.pop();
  return bookList
}

// MY OWN FUNCTION AS A HELPER FOR THE FINAL FUNCTION
function getMostPopularBooksLimit5(books) {
  // edited version of getMostPopularBooks to help with the below function
  // the edit is to also return book ids
  let bookList = [];
  books.forEach((book) => {
    const count = book.borrows.reduce((accumulator, currentValue) => accumulator + 1, 0);
    bookList.push({name: book.title, authorId: book.authorId, count })
  })
  bookList.sort((a, b) => b.count - a.count);
  while(bookList.length > 5) bookList.pop();
  return bookList
}

function getMostPopularAuthors(books, authors) {
  // "name": {
    //"first": "Lucia",
    //"last": "Moreno"
  let popularAuthors = [];
  bookList = getMostPopularBooksLimit5(books);
  bookList.forEach((book) => {
    currentAuthor = authors.filter((author) => author.id === book.authorId)[0]
    popularAuthors.push({name: `${currentAuthor.name.first} ${currentAuthor.name.last}`, count: book.count})
  })
  return popularAuthors;
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
