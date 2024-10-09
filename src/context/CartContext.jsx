import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (products) => {
    setCart([...cart, products]);
  };
  const clearCart = () => {
    setCart([]);
  };
  const deleteFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };
  const getTotalPrice = () => {
    return cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };
  const getTotalItems = () => {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteFromCart,
    getTotalPrice,
    getTotalItems,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
