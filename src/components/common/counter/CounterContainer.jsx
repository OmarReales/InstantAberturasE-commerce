import { useState } from "react";
import Counter from "./counter";

const CounterContainer = ({ onAdd, stock }) => {
  const [contador, setContador] = useState(1);
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
