// SectionHeader.js
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './SectionHeader.scss'; 
import icon from '../../assets/icons/arrow_back-24px.svg'; 

const SectionHeader = ({ title }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigates back to the previous page, but I will set to Link
  };

  return (
    <div className="form-container__header">
      <div className="form-container__icon-title">
        <img 
          src={icon} 
          alt="Icon" 
          className="form-container__icon" 
          onClick={handleBackClick} 
        />
        <h1 className="form-container__title">{title}</h1>
      </div>
      {/* <div className="form-container__divider"></div> */}
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
