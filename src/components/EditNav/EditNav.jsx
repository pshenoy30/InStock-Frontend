import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import icon from "../../assets/icons/arrow_back-24px.svg";
import Buttons from "../Buttons/Buttons";
import "./EditNav.scss";

const EditNav = ({ inventoryId, title, buttonText, showButton }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <section className="editNav__header">
      <div className="editNav__img">
        <img
          src={icon}
          alt="Icon"
          className="editNav__icon"
          onClick={handleBackClick}
        />
        <h1 className="editNav__title">{title}</h1>
      </div>
      {showButton ? (
        <Link to={`../edit-warehouse/${inventoryId}`}>
          <Buttons buttonName={buttonText} className="editNav__btn"/>
        </Link>
      ) : (
        <div className="editNav__btn--hidden"></div>
      )}
    </section>
  );
};

export default EditNav;
