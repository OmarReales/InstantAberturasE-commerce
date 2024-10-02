import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={0} color="primary" max={10} showZero={true}>
        <ShoppingCartIcon color="action" />
      </Badge>
    </div>
  );
};
export default CartWidget;
