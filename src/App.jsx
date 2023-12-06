import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { Products } from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/CartContext";
function App() {
  return (
    <>
      <Header />
      <CartProvider>
        <Routes>
          <Route path="/" Component={Products} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/cart" Component={Cart} />
        </Routes>
      </CartProvider>
      {/* <Footer /> */}
    </>
  );
}

export default App;
