import "./productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, imageURL, brand, id }) => {
  return (
    <div
      style={{
        width: "23%",
        minWidth: "250px",
        padding: "10px 12px",
        border: "1px solid #cce7d0",
        borderRadius: "25px",
        cursor: "pointer",
        boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.02)",
        margin: "15px 0",
        transition: "0.2s ease",
        position: "relative",
      }}
    >
      <img
        style={{ width: "100%", borderRadius: "20px" }}
        src={imageURL}
        alt={title}
      />
      <div
        style={{
          textAlign: "start",
          padding: "10px 0",
        }}
      >
        <span style={{ color: "#606063", fontSize: "12px" }}>{brand}</span>
        <h3 style={{ paddingTop: "7px", color: "#1a1a1a", fontSize: "14px" }}>
          {title}
        </h3>
        <h4
          style={{
            paddingTop: "7px",
            fontSize: "15px",
            fontWeight: "700",
            color: "#088178",
          }}
        >
          ${price}
        </h4>
      </div>
      <Link to={`/itemDetail/${id}`}>
        <button>Ver detalles</button>
      </Link>
    </div>
  );
};

export default ProductCard;
