import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const BookItem = ({ book, onViewDetails }) => {
  const navigate = useNavigate();
  const { onAdd } = useCart(); // Use the onAdd function from the cart context

  const viewDetails = () => {
    navigate(`/book/${book.id}`, { state: { book } });
  };

  const handleAddToCart = () => {
    onAdd(book);
  };

  const priceInfo =
    book.saleInfo && book.saleInfo.listPrice
      ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}`
      : "Not for sale";

  return (
    <div className="book-item">
      <div className="image-container">
        <img
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo.title}
          className="book-img"
        />
      </div>

      <div className="book-title">
        <h3>{book.volumeInfo.title}</h3>
        {book.volumeInfo.authors && <p>{book.volumeInfo.authors.join(", ")}</p>}
        <p className="price">{priceInfo}</p>
      </div>
      <div className="book-info">
        <button onClick={viewDetails}>View Details</button>
        <br />
        <button onClick={handleAddToCart}>Add to Cart</button> {/* Use the handleAddToCart function */}
      </div>
    </div>
  );
};

export default BookItem;
