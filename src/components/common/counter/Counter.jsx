const Counter = ({ contador, sumar, restar }) => {
  return (
    <div>
      <button onClick={sumar}>sumar</button>
      <h1>{contador}</h1>
      <button onClick={restar}>restar</button>
    </div>
  );
};

export default Counter;
