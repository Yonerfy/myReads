import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import Book from "./Book";

const SearchPage = ({ books, handlerOnchange, setBooks }) => {
  const [query, setQuery] = useState("");
  const [booksQuery, setBooksQuery] = useState([]);

  useEffect(() => {
    const queryBooks = async () => {
      const res = await search(query);
      setBooksQuery(res);
    };
    queryBooks();
  }, [query]);

  const handlerOnchangeSearchBooks = (query) => {
    setQuery(query);
  };
  console.log(booksQuery);

  const bookEl = Array.isArray(booksQuery)
    ? booksQuery.map((book) => (
        <Book
          key={book.id}
          setBooks={setBooks}
          books={books}
          handlerOnchange={handlerOnchange}
          book={book}
          bookTitle={book.title}
          authors={book.authors}
          bookCover={book.imageLinks ? book.imageLinks.thumbnail : ""}
        />
      ))
    : "";
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => handlerOnchangeSearchBooks(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">{bookEl}</ol>
      </div>
    </div>
  );
};

export default SearchPage;
