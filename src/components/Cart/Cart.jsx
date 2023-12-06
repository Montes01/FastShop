import React, { useState, useContext, useRef } from "react";
import { CartContext } from "../CartContext";
import * as canvas from "canvas-confetti";
import "./Cart.css";
import { CartItem } from "./CartItem";
import { Thanks } from "./Thanks";
const MappedItems = () => {
  const { cartItems } = useContext(CartContext);
  return cartItems.map((item) => <CartItem item={item} />);
};

export default function cart() {
  const { cartItems, clearCart } = useContext(CartContext);
  const modalRef = useRef(null);
  const [isBuying, setIsBuying] = useState(false);
  const handleClearCart = () => {
    clearCart();
  };

  const handleConfirmPurchase = () => {
    modalRef.current.showModal();
  };
  const handleCancelPurchase = () => {
    modalRef.current.close();
  };
  const handleBuy = () => {
    modalRef.current.close();
    //show a confetti animation
    // canvas.default.create({
    //   particleCount: 100,
    //   spread: 160,
    //   origin: { y: 0.6 },
    // });
    canvas.create({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });

    setIsBuying(true);
    setTimeout(() => {
      setIsBuying(false);
      handleClearCart(); // Call the handleClearCart function instead of clearCart()
    }, 3000);
  };
  return (
    <>
      {isBuying && <Thanks />}
      <div className="cart-container">
        <h2 className="cart-title">Carrito de compras</h2>
        {cartItems.length === 0 ? (
          <p className="cart-empty">No hay items.</p>
        ) : (
          <ul className="cart-items">
            <MappedItems />
          </ul>
        )}
        <button onClick={handleClearCart}>Limpiar carrito</button>
        <button
          disabled={cartItems.length === 0}
          className="cart-clear-button"
          onClick={handleConfirmPurchase}
        >
          Comprar
        </button>
        <dialog className="modal" ref={modalRef}>
          <div className="modal-style">
            <div className="modal-items">
              <ul className="cart-items">
                <MappedItems />
              </ul>
            </div>
            <label> Confirmar compra</label>
            <button onClick={handleCancelPurchase}> Cancelar </button>
            <button onClick={handleBuy}>Comprar </button>
          </div>
        </dialog>
      </div>
    </>
  );
}
