import "./App.css";
import { useState, useEffect } from "react";
import { getAll, update } from "./BooksAPI";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import ListBooks from "./ListBooks";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const handlerOnchange = (book, e) => {
    const { value } = e.target;
    update(book, value);
  };
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <ListBooks
              books={books}
              handlerOnchange={handlerOnchange}
              setBooks={setBooks}
            />
          }
        />
        <Route
          path="/SearchPage"
          element={
            <SearchPage
              books={books}
              handlerOnchange={handlerOnchange}
              setBooks={setBooks}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
