import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./cart.css";

export const Cart = ({
  cart,
  clearCart,
  deleteFromCart,
  total,
  updateQuantity,
}) => {
  const clearCartAlert = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, vaciar carrito",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado", "", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Operación cancelada", "", "info");
      }
    });
  };

  return (
    <div className="shopping-cart">
      <h1>Carrito de compra</h1>
      {cart.length > 0 ? (
        <div className="cart-content">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="product-info">
                      <div className="product-image">
                        <img
                          src={item.imageURL}
                          alt={item.title}
                          width={64}
                          height={64}
                        />
                      </div>
                      <span>{item.title}</span>
                    </div>
                  </td>
                  <td>
                    <div className="quantity-control">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        aria-label="Increase quantity"
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="price">${item.price.toFixed(2)}</td>
                  <td className="subtotal">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td>
                    <button
                      className="remove-item"
                      onClick={() => deleteFromCart(item.id)}
                      aria-label="Remove item"
                    >
                      Quitar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <div className="cart-actions">
              <button className="clear-cart" onClick={clearCartAlert}>
                Limpiar carrito
              </button>
              <Link to="/" className="continue-shopping">
                <button>Continuar comprando</button>
              </Link>
            </div>
            <div className="cart-total">
              <span>Total: ${total.toFixed(2)}</span>
              <Link to="/checkout">
                <button className="checkout-button">Pagar</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <p>Tu carrito esta vacío!</p>
          <Link to="/">
            <button>Empezar a comprar</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
