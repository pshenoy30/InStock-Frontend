import "./Header.scss";
import InStockLogo from "../../assets/logo/InStock-Logo_1x.png";

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
        <h3 className="header__navItem">Warehouses</h3>
        <h3 className="header__navItem">Inventory</h3>
      </nav>
    </header>
  );
}

export default Header;
