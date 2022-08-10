import Book from "./Book";

const BookShelf = ({ bookShelfTitle, bookShelfId }) => {
  return (
    <div className="bookshelf" id={bookShelfId}>
      <h2 className="bookshelf-title">{bookShelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <Book />
          </li>
          <li>
            <Book />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
