import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

const saveLocalCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(saveLocalCart);

  const addToCart = (products) => {
    let exist = cart.some((element) => element.id === products.id);
    if (exist) {
      let newArray = cart.map((element) => {
        return element.id === products.id
          ? { ...element, quantity: products.quantity }
          : element;
      });
      setCart(newArray);
    } else {
      setCart([...cart, products]);
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
    let product = cart.find((element) => element.id === id);
    return product ? product.quantity : 1;
  };

  const updateQuantity = (id, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteFromCart,
    getTotalPrice,
    getTotalItems,
    getTotalQuantityById,
    updateQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
