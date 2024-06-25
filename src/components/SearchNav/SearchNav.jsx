import Buttons from "../Buttons/Buttons";
import "./SearchNav.scss";

function SearchNav() {
  return (
    <>
      <section className="searchNav">
        <h1 className="searchNav_title">INVENTORY</h1>
        <div className="searchNav__card">
          <input
            type="text"
            id="searchNavBar"
            className="searchNav__search"
            placeholder="Search"
          />
          <Buttons  showEdit />
        </div>
      </section>
    </>
  );
}

export default SearchNav;
