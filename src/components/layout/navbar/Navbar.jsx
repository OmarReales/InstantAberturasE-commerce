import CartWidget from "../../common/cartWidget/CartWidget";
import { categories } from "./categories";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container-nav">
      <Link to="/">Instant Aberturas</Link>
      <ul>
        {categories.map(({ tittle, path }) => (
          <Link key={tittle} to={path}>
            {tittle}
          </Link>
        ))}
      </ul>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;
