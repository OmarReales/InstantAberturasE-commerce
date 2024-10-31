import "./counter.css";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div className="counter">
      <div className="counter-controls">
        <button className="counter-button" onClick={restar}>
          -
        </button>
        <span className="counter-value">{contador}</span>
        <button className="counter-button" onClick={sumar}>
          +
        </button>
      </div>
      <button
        className="add-to-cart"
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
