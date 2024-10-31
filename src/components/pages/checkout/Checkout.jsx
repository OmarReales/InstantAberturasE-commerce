import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import "./checkout.css";

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
      return;
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
    return <div className="loading">Procesando compra...</div>;
  }

  return (
    <div className="checkout-container">
      {orderId ? (
        <div className="success-message">
          <h2>¡Compra realizada con éxito!</h2>
          <p>
            Tu número de orden es: <span className="order-id">{orderId}</span>
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="input-group">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Nombre y Apellido"
              value={user.name}
            />
            {error.name && <span className="error-message">{error.name}</span>}
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              value={user.email}
            />
            {error.email && (
              <span className="error-message">{error.email}</span>
            )}
          </div>

          <div className="input-group">
            <input
              type="number"
              name="phone"
              onChange={handleChange}
              placeholder="Teléfono"
              value={user.phone}
            />
            {error.phone && (
              <span className="error-message">{error.phone}</span>
            )}
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={!user.name || !user.email || !user.phone}
          >
            Finalizar Compra
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
