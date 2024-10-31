import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
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
              <button onClick={clearCartAlert}>Limpiar carrito</button>
              <Link to="/">
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
      <style>{`
        .shopping-cart {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          font-size: 24px;
          margin-bottom: 20px;
        }
        .cart-table {
          width: 100%;
          border-collapse: collapse;
        }
        .cart-table th,
        .cart-table td {
          padding: 10px;
          border-bottom: 1px solid #eee;
          text-align: left;
        }
        .product-info {
          display: flex;
          align-items: center;
        }
        .product-image {
          margin-right: 10px;
        }
        .quantity-control {
          display: flex;
          align-items: center;
        }
        .quantity-control button {
          background: none;
          border: 1px solid #ddd;
          padding: 5px 10px;
          font-size: 14px;
          cursor: pointer;
        }
        .quantity-control span {
          margin: 0 10px;
        }
        .remove-item {
          background: none;
          border: none;
          color: #ff0000;
          cursor: pointer;
        }
        .cart-summary {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }
        .cart-actions button,
        .cart-total button {
          margin-right: 10px;
          padding: 10px 15px;
          background-color: #f0f0f0;
          border: none;
          cursor: pointer;
        }
        .checkout-button {
          background-color: #4caf50;
          color: black;
        }
        .empty-cart {
          text-align: center;
          margin-top: 50px;
        }
        .empty-cart button {
          margin-top: 20px;
          padding: 10px 15px;
          background-color: #4caf50;
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Cart;
