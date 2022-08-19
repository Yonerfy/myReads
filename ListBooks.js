import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ListBooks = ({ books, setBooks, handlerOnchange }) => {
  return (
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
          <Link to="/SearchPage">Add a book</Link>
        </div>
      </div>
    </div>
  );
};

ListBooks.prototype = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
  handlerOnchange: PropTypes.func.isRequired,
};

export default ListBooks;
