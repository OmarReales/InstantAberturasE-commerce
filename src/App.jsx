import Navbar from "./components/layout/navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route
          path={"/category/:categoryName"}
          element={<ItemListContainer />}
        />
        <Route path={"/itemDetail/:id"} element={<ItemDetailContainer />} />
        <Route path={"/cart"} element={<h2>carrito</h2>} />
        <Route path={"*"} element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
