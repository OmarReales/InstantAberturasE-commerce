import { useContext } from "react";
import { Cart } from "./Cart";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, deleteFromCart, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  return (
    <Cart
      cart={cart}
      clearCart={clearCart}
      deleteFromCart={deleteFromCart}
      total={total}
    />
  );
};

export default CartContainer;
