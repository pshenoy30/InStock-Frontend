// FormInputs.jsx
import React from "react";

const FormInputs = ({
  sectionTitle,
  fields,
  formData,
  formErrors,
  handleChange,
}) => {
  return (
    <div className="form__section">
      <h2 className="form__heading">{sectionTitle}</h2>
      {fields.map((field) => (
        <div className="form__group" key={field.name}>
          <label className="form__label" htmlFor={field.name}>
            {field.label}
          </label>
          <input
            className="form__input"
            type={field.type}
            id={field.name}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
          />
          {formErrors[field.name] && (
            <div className="form__error">{formErrors[field.name]}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FormInputs;
