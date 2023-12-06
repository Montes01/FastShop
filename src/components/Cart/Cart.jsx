import React, { useContext, useRef } from "react";
import { CartContext } from "../CartContext";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
  } = useContext(CartContext);
  const modalRef = useRef(null);
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleIncrementQuantity = (item) => {
    incrementQuantity(item);
  };

  const handleDecrementQuantity = (item) => {
    decrementQuantity(item);
  };

  const handleConfirmPurchase = () => {
    modalRef.current.showModal();
  };
  const handleCancelPurchase = () => {
    modalRef.current.close();
  };
  const handleBuy = () => {
    modalRef.current.close();
    clearCart();
  };
  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">No hay items.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <strong>{item.title}</strong> - $
              {(item.price * item.quantity).toFixed(2)}
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
              <button
                onClick={() => handleDecrementQuantity(item)}
                className="cart-decrement-button"
              >
                -
              </button>
              {item.quantity}
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleClearCart} >
        Limpiar carrito
      </button>
      <button disabled={cartItems.length === 0} className="cart-clear-button" onClick={handleConfirmPurchase}>
        Comprar
      </button>
      <dialog className="modal" ref={modalRef}>
        <div className="modal-style">
          <label> Confirmar compra</label>
          <button onClick={handleCancelPurchase}> Cancelar </button>
          <button onClick={handleBuy}>Comprar </button>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
