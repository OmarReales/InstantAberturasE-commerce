import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

const saveLocalCart = JSON.parse(localStorage.getItem("cart") || "[]");

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(saveLocalCart);

  const addToCart = (product) => {
    const exist = cart.find((element) => element.id === product.id);

    if (exist) {
      const newQuantity = exist.quantity + product.quantity;
      if (newQuantity > product.stock) {
        return;
      }
      const newArray = cart.map((element) =>
        element.id === product.id
          ? { ...element, quantity: newQuantity }
          : element
      );
      setCart(newArray);
    } else {
      if (product.quantity > product.stock) {
        return;
      }
      setCart([...cart, product]);
    }
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

  const getTotalQuantityById = (id) => {
    const product = cart.find((element) => element.id === id);
    return product?.quantity || 1;
  };

  const updateQuantity = (id, newQuantity) => {
    const product = cart.find((item) => item.id === id);
    if (!product || newQuantity > product.stock || newQuantity < 1) return;

    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const contextValue = {
    cart,
    addToCart,
    clearCart,
    deleteFromCart,
    getTotalPrice,
    getTotalItems,
    getTotalQuantityById,
    updateQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
