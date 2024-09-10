import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container-nav">
      <h3>Instant Aberturas</h3>
      <ul>
        <li>Todo</li>
        <li>Puertas</li>
        <li>Ventanas</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
