import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
import { getItemList } from "../../mock/items";

export const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((items) => items.json())
      .then((items) => {
        setItems(items);
        console.log(items);
        setIsLoading(false);
      });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Filtrar por nombre"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <main className="product-main">
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          filteredItems.map((item) => (
            <ProductCard
              description={item.description}
              image={item.image}
              price={item.price}
              title={item.title}
              id={item.id}
            />
          ))
        )}
      </main>
    </>
  );
};
