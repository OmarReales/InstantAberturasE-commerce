import ProductCard from "../../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alyngItems: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "20px",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ItemList;
