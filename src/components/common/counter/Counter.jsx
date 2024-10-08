const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div>
      <button onClick={restar}>restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>sumar</button>
      <button
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
