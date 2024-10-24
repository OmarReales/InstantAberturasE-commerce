import { Skeleton } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  if (items.length === 0) {
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
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton variant="text" width={210} />
        <Skeleton variant="text" width={210} />
        <Skeleton variant="rounded" width={210} />
      </div>
    );
  }

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
