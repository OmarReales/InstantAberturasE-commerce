export const Cart = ({ cart, clearCart, deleteFromCart, total }) => {
  return (
    <div>
      <h1>Cart</h1>
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
      <button onClick={clearCart}>Vaciar carrito</button>
      <button>Finalizar compra</button>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Cart;
