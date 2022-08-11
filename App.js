import "./App.css";
import { useState, useEffect } from "react";
import BookShelf from "./BookShelf";
import { getAll, search, update } from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getAll().then((data) => setBooks(data));
  }, []);
  console.log(books);
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            books={books}
            bookShelfTitle="Currently Reading"
            bookShelfId="currentlyReading"
          />
          <BookShelf
            books={books}
            bookShelfTitle="Want to Read"
            bookShelfId="wantToRead"
          />
          <BookShelf books={books} bookShelfTitle="Read" bookShelfId="read" />
          <div className="open-search">
            <a onClick={() => {}}>Add a book</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
