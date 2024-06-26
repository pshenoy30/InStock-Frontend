// src/components/FormField/FormField.jsx
import React from 'react';

const FormField = ({ label, name, type, value, onChange, error, placeholder }) => {
  return (
    <div className="add-warehouse__field">
      <label className="add-warehouse__label">{label}</label>
      <input
        className="add-warehouse__input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder} 
      />
      {error && <span className="add-warehouse__error">{error}</span>}
    </div>
  );
};

export default FormField;
