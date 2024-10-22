import { useState } from "react";
import Counter from "./counter";

const CounterContainer = ({ onAdd, stock, totalItems }) => {
  const [contador, setContador] = useState(totalItems);
  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  let childProps = { contador, sumar, restar, onAdd };
  return <Counter {...childProps} />;
};

export default CounterContainer;
