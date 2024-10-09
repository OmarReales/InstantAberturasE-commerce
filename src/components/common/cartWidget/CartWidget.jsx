import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  return (
    <div>
      <Badge
        badgeContent={getTotalItems()}
        color="primary"
        max={10}
        showZero={true}
      >
        <ShoppingCartIcon color="action" />
      </Badge>
    </div>
  );
};
export default CartWidget;
