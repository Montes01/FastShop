import "./Products.css";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const ProductCard = ({ title, description, price, image, id }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    let item = { title, description, price, image, id };
    addToCart(item);
  };

  return (
    <div className="product-card">
      <img src={image} alt="Product" />

      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <span className="product-price">{price}</span>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
