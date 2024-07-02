import "./Header.scss";
import InStockLogo from "../../assets/logo/InStock-Logo_1x.png";
import CustomNavLink from "../CustomNavLink/CustomNavLink";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <section className="header__logo">
        <img className="header__img" src={InStockLogo} alt="InStock Logo"></img>
      </section>
      <nav className="header__nav">
      <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'header__link header__link--active' : 'header__link'
          }
        >
          <h3 className="header__navItem">Warehouses</h3>
        </NavLink>
        <CustomNavLink to1="/inventories" to2="/edit-inventory*">
          <h3 className="header__navItem">Inventory</h3>
        </CustomNavLink>
      </nav>
    </header>
  );
}

export default Header;
