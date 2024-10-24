import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({ name: "", phone: "", email: "" });

    if (user.name.length < 4) {
      setErrors({
        ...error,
        name: "El nombre debe tener al menos cuatro caracteres",
      });
    }

    setIsLoading(true);

    let total = getTotalPrice();

    const order = {
      buyer: user,
      items: cart,
      total,
    };

    let orders = collection(db, "orders");
    addDoc(orders, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });

    order.items.forEach((element) => {
      updateDoc(doc(db, "products", element.id), {
        stock: element.stock - element.quantity,
      });
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  if (isLoading) {
    return <h2>Procesando compra...</h2>;
  }

  return (
    <div>
      {orderId ? (
        <>
          <h2>Compra realizada con exito</h2>
          <p>Numero de orden: {orderId}</p>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Nombre y Apellido"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="number"
            name="phone"
            onChange={handleChange}
            placeholder="Telefono"
          />
          <button>Comprar</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
