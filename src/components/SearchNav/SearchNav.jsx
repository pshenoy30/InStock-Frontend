import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import "./SearchNav.scss";

function SearchNav({ title, buttonText, linkTo }) {
  return (
    <section className="searchNav">
      <h1 className="searchNav__title">{title}</h1>
      <div className="searchNav__card">
        <input
          type="text"
          id="searchNavBar"
          className="searchNav__search"
          placeholder="Search"
        />
        <Link to={linkTo}>
          <Buttons buttonName={buttonText} />
        </Link>
      </div>
    </section>
  );
}

export default SearchNav;
