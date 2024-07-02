// SectionHeader.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./SectionHeader.scss";
import icon from "../../assets/icons/arrow_back-24px.svg";

const SectionHeader = ({ title, backLink }) => {
  return (
    <div className="form-container__header">
      <div className="form-container__icon-title">
        <Link to={backLink} className="form-container__icon-link">
          <img src={icon} alt="Back Icon" className="form-container__icon" />
        </Link>
        <h1 className="form-container__title">{title}</h1>
      </div>
      <div className="form-container__divider"></div>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  backLink: PropTypes.string.isRequired,
};

export default SectionHeader;
