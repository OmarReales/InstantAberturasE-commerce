import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (products) => {
    let existe = cart.some((element) => element.id === products.id);
    if (existe) {
      let nuevoArray = cart.map((element) => {
        return element.id === products.id
          ? { ...element, quantity: products.quantity }
          : element;
      });
      setCart(nuevoArray);
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
    return product ? product.quantity : 0;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteFromCart,
    getTotalPrice,
    getTotalItems,
    getTotalQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
