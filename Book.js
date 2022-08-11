import PropTypes from "prop-types";

const Book = ({ bookTitle, authors, bookCover, handlerOnchange }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${bookCover})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select onChange={handlerOnchange}>
            <option value="none">Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{bookTitle}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

Book.prototype = {
  bookTitle: PropTypes.string,
  bookCover: PropTypes.string,
  authors: PropTypes.string,
  handlerOnchange: PropTypes.func,
};

export default Book;
