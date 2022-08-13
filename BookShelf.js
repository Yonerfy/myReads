import Book from "./Book";
import PropTypes from "prop-types";
import { update } from "./BooksAPI";
const BookShelf = ({ bookShelfTitle, bookShelfId, books, handlerOnchange }) => {
  const bookEl = books.map((book) => {
    return (
      book.shelf === bookShelfId && (
        <li key={book.id}>
          <Book
            handlerOnchange={handlerOnchange}
            book={book}
            bookTitle={book.title}
            authors={book.authors}
            bookCover={book.imageLinks.thumbnail}
          />
        </li>
      )
    );
  });

  return (
    <div className="bookshelf" id={bookShelfId}>
      <h2 className="bookshelf-title">{bookShelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{bookEl}</ol>
      </div>
    </div>
  );
};

BookShelf.prototype = {
  books: PropTypes.array,
  bookShelfId: PropTypes.string,
  bookShelfTitle: PropTypes.string,
};

export default BookShelf;
