const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div>
      <button className="normal" onClick={restar}>
        -
      </button>
      <h2>{contador}</h2>
      <button className="normal" onClick={sumar}>
        +
      </button>
      <button
        className="normal addcart"
        onClick={() => {
          onAdd(contador);
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
