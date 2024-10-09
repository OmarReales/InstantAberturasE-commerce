import Navbar from "./components/layout/navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import CartContainer from "./components/pages/cart/CartContainer";
function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route
            path={"/category/:categoryName"}
            element={<ItemListContainer />}
          />
          <Route path={"/itemDetail/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<CartContainer />} />
          <Route path={"*"} element={<h1>404 Not Found</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
