import "./App.css";
import { useState } from "react";
import BookShelf from "./BookShelf";
import { getAll, search, update } from "./BooksAPI";

function App() {
  getAll().then((data) => console.log(data));
  search("React").then((data) => console.log(data));

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            bookShelfTitle="Currently Reading"
            bookShelfId="currentlyReading"
          />
          <BookShelf bookShelfTitle="Want to Read" bookShelfId="wantToRead" />
          <BookShelf bookShelfTitle="Read" bookShelfId="read" />
          <div className="open-search">
            <a onClick={() => {}}>Add a book</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
