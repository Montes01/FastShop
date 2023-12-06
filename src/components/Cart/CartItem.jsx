import { useContext } from "react";
import { CartContext } from "../CartContext";
export const CartItem = ({ item }) => {
  const { removeFromCart, incrementQuantity, decrementQuantity } =
    useContext(CartContext);
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const handleIncrementQuantity = (item) => {
    incrementQuantity(item);
  };

  const handleDecrementQuantity = (item) => {
    decrementQuantity(item);
  };
  return (
    <li key={item.id} className="cart-item">
      <strong className="title">{item.title}</strong>
      <div className="cart-item-controls">
        {(item.price.amount * item.quantity).toFixed(2)}
        <button
          onClick={() => handleRemoveFromCart(item.id)}
          className="cart-remove-button"
        >
          Eliminar
        </button>
        <button
          onClick={() => handleIncrementQuantity(item)}
          className="cart-increment-button"
        >
          +
        </button>
        {item.quantity}
        <button
          onClick={() => handleDecrementQuantity(item)}
          className="cart-decrement-button"
        >
          -
        </button>
      </div>
    </li>
  );
};
