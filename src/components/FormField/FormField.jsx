// FormField.jsx
import React from "react";

const FormField = ({ label, name, type, value, onChange, placeholder }) => {
  return (
    <div className="form-inputs__group">
      <label className="form-inputs__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="form-inputs__input"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
};

export default FormField;
