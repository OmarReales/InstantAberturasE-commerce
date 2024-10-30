import CartWidget from "../../common/cartWidget/CartWidget";
import { categories } from "./categories";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="container-nav">
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>
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
