import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const Cart = ({ cart, clearCart, deleteFromCart, total }) => {
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
    <div className="container">
      <h1 className="title">Cart</h1>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: ${product.price}</p>
            <p>Subtotal: ${product.price * product.quantity}</p>
            <button onClick={() => deleteFromCart(product.id)}>Eliminar</button>
          </div>
        );
      })}

      {total > 0 && (
        <>
          <button onClick={clearCartAlert}>Vaciar carrito</button>
          <p>Total: ${total}</p>

          <Link to="/checkout">
            <button>Finalizar compra</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
