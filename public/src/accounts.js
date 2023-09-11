
/* ACCOUNTS DATA FORMAT:
{
  "id": "5f446f2ecfaf0310387c9603",
  "name": {
    "first": "Esther",
    "last": "Tucker"
  },
  "picture": "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
  "age": 25,
  "company": "ZILLACON",
  "email": "esther.tucker@zillacon.me",
  "registered": "Thursday, May 28, 2015 2:51 PM"
}
*/

/* BOOKS DATA FORMAT
{
  "id": "5f4471327864ee880caf5afc",
  "title": "reprehenderit quis laboris adipisicing et",
  "genre": "Poetry",
  "authorId": 20,
  "borrows": [
    {
      "id": "5f446f2e2a4fcd687493a775",
      "returned": false
    },
    {
      "id": "5f446f2ebe8314bcec531cc5",
      "returned": true
    },
    {
      "id": "5f446f2ea508b6a99c3e42c6",
      "returned": true
    }
  ]
}
*/

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return (accounts.sort((account1, account2) => (account1.name.last.toLowerCase() > account2.name.last.toLowerCase()) ? 1 : -1))
}

function getTotalNumberOfBorrows({id}, books) {
  let borrowCount = 0;
  // for every book
  borrowCounter = books.forEach((book) => {
    const borrowed = book.borrows.forEach((borrow) => {
      if(borrow.id === id) borrowCount++;
    })
  })
  return borrowCount;
  // check every 'borrow' record for that book
  // see if the borrower id matches with the account id
  // increase borrow counter +1;
  // return borrow count
}

function getBooksPossessedByAccount(account, books, authors) {
  //should return all of the books taken out by an account with the author embedded
  // for each book borrowed by user
  const accountId = account.id;
  const booksByAuthor = books.filter((book) => {
    const findBookId = book.borrows.filter((borrow) => borrow.id === accountId && borrow.returned === false);
    if (findBookId.length > 0) {
      return book;
    }
  })
  const bookAuthor = (authors.find((author) => author.id === booksByAuthor[0].authorId))
  booksByAuthor[0].author = bookAuthor;
  // check borrow records for account

  // return array of objects(books)
  return booksByAuthor
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
