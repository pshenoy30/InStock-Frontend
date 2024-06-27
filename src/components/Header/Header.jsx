import "./Header.scss";
import InStockLogo from "../../assets/logo/InStock-Logo_1x.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <section className="header__logo">
        <img
          className="header__img"
          src={InStockLogo}
          alt="InStock Logo"
        ></img>
      </section>
      <nav className="header__nav">
      <Link to="/" className="header__selected">
        <h3 className="header__navItem">Warehouses</h3>
      </Link>
        <h3 className="header__navItem">Inventory</h3>
      </nav>
    </header>
  );
}

export default Header;
