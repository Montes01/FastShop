import "./Products.css";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const ProductCard = ({ title, description, price, pictures, id }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    let item = { title, description, price, pictures, id };
    addToCart(item);
  };

  return (
    <div className="product-card">
      <img src={pictures.stack.normal} alt="Product" />

      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <span className="product-price">{price.amount}</span>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
