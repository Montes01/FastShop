import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
import { getItemList } from "../../mock/items";

export const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("https://mercado-libre4.p.rapidapi.com/search", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "mercado-libre4.p.rapidapi.com",
        "x-rapidapi-key": "d416f92865msh35102d87e41c76bp15bdc2jsnd17290b4c1b2",
        params: {
          search: "celular",
          country: "AR",
          offset: "0",
          limit: "20",
        },
      },
    })
      .then((items) => items.json())
      .then((items) => {
        setItems(items.results);
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
              description={item.permaLink}
              pictures={item.pictures}
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
