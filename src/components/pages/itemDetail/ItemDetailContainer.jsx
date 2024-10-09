import ItemDetail from "./ItemDetail";
import { useState, useEffect, useContext } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  const onAdd = (quantity) => {
    console.log(`Agregaste ${quantity} productos al carrito`);
    let productsForCart = { ...item, quantity };
    addToCart(productsForCart);
  };

  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;
