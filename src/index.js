class book {
  constructor(title, genre, author) {
    this._title = title;
    this._genre = genre;
    this._author = author;
    this._read = false;
    this._readDate = "";
  }
  markAsRead() {
    this._read = true;
    this._readDate = new Date(Date.now());
  }
}

class Library {
  constructor(arrayOfBooks) {
    this._books = arrayOfBooks;
    this._readCounter = 0;
    this._unreadCounter - arrayOfBooks.length;
    this._currentBookRef = 0;
    this._nextBookRef = this._currentBookRef + 1;
  }
  addbook(book) {
    this._books.push(book);
    this._unreadCounter += 1;
  }
}
finishCurrentBook() {
  const book = this._books[this._currentBookRef];
  book.markAsRead();
  this._nextBookRef += 1;
  this._currentBookRef += 1;
  if (!this._lastBookRef) this._lastBookRef = 0;
  else this._lastBookRef += 1;
  this._readCounter += 1;
  this._unreadCounter -= 1;
  }
}

const got = new book("Got", "Fiction", "Alfredo");
const tog = new book("Tog", "NonFiction", "Alfredo");

const books = [got, tog];

const myLib = new Library(books);

console.log(myLib);