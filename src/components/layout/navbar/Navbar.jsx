import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container-nav">
      <h3>Instant Aberturas</h3>
      <ul>
        <li>
          <a className="active" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
