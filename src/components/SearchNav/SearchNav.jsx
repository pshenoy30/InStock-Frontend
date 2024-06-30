import Buttons from "../Buttons/Buttons";
import "./SearchNav.scss";

function SearchNav({ title, buttonText }) {
  return (
    <>
      <section className="searchNav">
        <h1 className="searchNav__title">{title}</h1>
        <div className="searchNav__card">
          <input
            type="text"
            id="searchNavBar"
            className="searchNav__search"
            placeholder="Search"
          />
          <Buttons buttonName={buttonText}/>
        </div>
      </section>
    </>
  );
}

export default SearchNav;
