import "./App.css";
import { useState, useEffect } from "react";
import BookShelf from "./BookShelf";
import { getAll, search, update } from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  const [shelfName, setShelfName] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      const res = await getAll();
      setBooks(res);
    };
    getBooks();
    console.log("UseEffect ran");
  }, []);

  const handlerOnchange = (book, e) => {
    const { value } = e.target;

    update(book, value);
  };
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            books={books}
            setBooks={setBooks}
            handlerOnchange={handlerOnchange}
            bookShelfTitle="Currently Reading"
            bookShelfId="currentlyReading"
          />
          <BookShelf
            books={books}
            setBooks={setBooks}
            handlerOnchange={handlerOnchange}
            bookShelfTitle="Want to Read"
            bookShelfId="wantToRead"
          />
          <BookShelf
            books={books}
            setBooks={setBooks}
            handlerOnchange={handlerOnchange}
            bookShelfTitle="Read"
            bookShelfId="read"
          />
          <div className="open-search">
            <a onClick={() => {}}>Add a book</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
