import Buttons from "../Buttons/Buttons";
import "./SearchNav.scss";

function SearchNav({title, buttonText, hideSearch}) {
  let searchClass = "searchNav__search";
  if (hideSearch) {
    searchClass += " searchNav__search--hidden";
  }

  return (
    <>
      <section className="searchNav">
        <h1 className="searchNav__title">{title}</h1>
        <div className="searchNav__card">
          <input
            type="text"
            id="searchNavBar"
            className={searchClass} 
            placeholder="Search..."
          />
          <Buttons buttonName={buttonText} />
        </div>
      </section>
    </>
  );
}

export default SearchNav;
