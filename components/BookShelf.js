import Book from "./Book";
import PropTypes from "prop-types";

const BookShelf = ({
  bookShelfTitle,
  bookShelfId,
  books,
  handlerOnchange,
  setBooks,
}) => {
  const bookEl = books.map((book) => {
    return (
      book.shelf === bookShelfId && (
        <Book
          key={book.id}
          setBooks={setBooks}
          books={books}
          handlerOnchange={handlerOnchange}
          book={book}
          bookTitle={book.title || ""}
          authors={book.authors}
          bookCover={book.imageLinks.thumbnail || ""}
        />
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
  setBooks: PropTypes.func,
  bookShelfId: PropTypes.string,
  bookShelfTitle: PropTypes.string,
  handlerOnchange: PropTypes.func,
};

export default BookShelf;
