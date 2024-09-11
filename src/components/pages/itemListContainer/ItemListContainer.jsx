// import ProductCard from "../../common/productCard/ProductCard";
import "./itemListContainer.css";
const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container-itemList">
      <p className="saludo">{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
