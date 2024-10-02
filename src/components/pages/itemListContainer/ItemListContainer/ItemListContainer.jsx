// import ProductCard from "../../common/productCard/ProductCard";
import { useState } from "react";
import { useEffect } from "react";
import { products } from "../../../../productsMock";
import "./itemListContainer.css";
import ItemList from "../ItemListContainer/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === categoryName
    );
    const getProduct = new Promise((res, rej) => {
      let isLogged = true;
      if (isLogged) {
        res(categoryName ? filteredProducts : products);
      } else {
        rej({ message: "No estas logueado" });
      }
    });
    getProduct
      .then((res) => {
        console.log("entro a then", res);
        setItems(res);
      })
      .catch((error) => {
        console.log("entro a catch", error);
      });
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
