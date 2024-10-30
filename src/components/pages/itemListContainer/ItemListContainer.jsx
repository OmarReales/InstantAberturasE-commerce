// import ProductCard from "../../common/productCard/ProductCard";
import { useState } from "react";
import { useEffect } from "react";
import "./itemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { products } from "../../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta = productsCollection;

    if (categoryName) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", categoryName)
      );
      consulta = productsCollectionFiltered;
    }
    getDocs(consulta).then((res) => {
      let array = res.docs.map((element) => {
        return { ...element.data(), id: element.id };
      });
      setItems(array);
    });
  }, [categoryName]);

  // const agregarfirebase = () => {
  //   products.forEach((product) => {
  //     addDoc(collection(db, "products"), product);
  //   });
  // };

  return (
    <>
      <ItemList items={items} />;
      {/* <button onClick={agregarfirebase}>agregar a firebase</button> */}
    </>
  );
};

export default ItemListContainer;
