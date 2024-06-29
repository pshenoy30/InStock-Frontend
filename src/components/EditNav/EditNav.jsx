import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/icons/arrow_back-24px.svg'; 
import './EditNav.scss';

const EditNav = ({ title }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigates back to the previous page, but I will set to Link
  };

  return (
    <div className="editNav__header">
      <div className="editNav__img">
        <img 
          src={icon} 
          alt="Icon" 
          className="editNav__icon" 
          onClick={handleBackClick} 
        />
        <h1 className="editNav__title">{title}</h1>
      </div>
    </div>
  );
};

EditNav.propTypes = {
  title: PropTypes.string.isRequired,
};

export default EditNav;