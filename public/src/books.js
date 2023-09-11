function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let returnedBooks = [];
  let borrowedBooks = [];
  books.forEach((book) => (book.borrows[0].returned === false) ? borrowedBooks.push(book) : returnedBooks.push(book));

  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  // access borrow records for the book
  borrowerInfo = book.borrows.map((borrow) => borrow)
  //create an array
  // access the account info
  borrowerInfo.forEach((borrower) =>  {
    // find the account associated with current id(borrower.id)
    // for every id, search the accounts array to find the account
    // currentUser is the account ascociated with the current borrower.id
    let currentUser = accounts.filter((account) => account.id === borrower.id)
    // add returned status if possible
    currentUser[0].returned = borrower.returned;
    // push to borrowers array
    if(borrowers.length < 10) borrowers.push(currentUser[0]);
    // use a counter variable to limit to ten calls
  })

  // add the account info associated with those ids into the array

  // add return status to the account info

  // return the array
  return borrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
