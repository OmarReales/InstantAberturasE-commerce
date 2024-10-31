const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div style={{ display: "flex" }}>
      <button
        style={{
          backgroundColor: "#088178",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "700",
          padding: "10px 20px",
          borderRadius: "4px",
          cursor: "pointer",
          border: "none",
          outline: "none",
          transition: "0.2s ease",
        }}
        onClick={restar}
      >
        -
      </button>
      <h2 style={{ padding: "10px" }}> {contador} </h2>
      <button
        style={{
          backgroundColor: "#088178",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "700",
          padding: "10px 20px",
          borderRadius: "4px",
          cursor: "pointer",
          border: "none",
          outline: "none",
          transition: "0.2s ease",
        }}
        onClick={sumar}
      >
        +
      </button>
      <button
        style={{
          backgroundColor: "#088178",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "700",
          padding: "10px 20px",
          borderRadius: "4px",
          cursor: "pointer",
          border: "none",
          outline: "none",
          transition: "0.2s ease",
        }}
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
