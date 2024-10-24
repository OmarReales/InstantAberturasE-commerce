// import ProductCard from "../../common/productCard/ProductCard";
import { useState } from "react";
import { useEffect } from "react";
import "./itemListContainer.css";
import ItemList from "../ItemListContainer/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  // useEffect(() => {
  //   const filteredProducts = products.filter(
  //     (product) => product.category === categoryName
  //   );
  //   const getProduct = new Promise((res, rej) => {
  //     let isLogged = true;
  //     if (isLogged) {
  //       res(categoryName ? filteredProducts : products);
  //     } else {
  //       rej({ message: "No estas logueado" });
  //     }
  //   });
  //   getProduct
  //     .then((res) => {
  //       console.log("entro a then", res);
  //       setItems(res);
  //     })
  //     .catch((error) => {
  //       console.log("entro a catch", error);
  //     });
  // }, [categoryName]);
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
