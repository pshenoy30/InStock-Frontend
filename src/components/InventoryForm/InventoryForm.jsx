// InventoryForm.jsx
import React from "react";
import PropTypes from "prop-types";
import "./InventoryForm.scss";

const InventoryForm = ({ sectionTitle, fields, formData, formErrors, handleChange }) => {
  return (
    <div className="form__section">
      <h2 className="form__heading">{sectionTitle}</h2>
      {fields.map((field) => (
        <div key={field.name} className="form__group">
          <label htmlFor={field.name} className="form__label">
            {field.label}
          </label>
          {field.type === "select" ? (
            <div className="form__select-wrapper">
              <select
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className={`form__input form__input--${field.name} ${formErrors[field.name] && "is-invalid"}`}
              >
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="form__select-wrapper__custom-select-arrow"></div>
            </div>
          ) : field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className={`form__textarea form__textarea--${field.name} ${formErrors[field.name] && "is-invalid"}`}
            />
          ) : field.type === "radio" ? (
            <div className="form__radio-group">
              {field.options.map((option) => (
                <label key={option.value} className={`form__radio-label form__radio-label--${field.name}__${option.value}`}>
                  <input
                    type="radio"
                    id={option.value}
                    name={field.name}
                    value={option.value}
                    checked={formData[field.name] === option.value}
                    onChange={handleChange}
                    className={`form__radio form__radio--${field.name}__${option.value} ${formErrors[field.name] && "is-invalid"}`}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className={`form__input form__input--${field.name} ${formErrors[field.name] && "is-invalid"}`}
            />
          )}
          {formErrors[field.name] && (
            <div className="form__error">{formErrors[field.name]}</div>
          )}
        </div>
      ))}
    </div>
  );
};

InventoryForm.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["text", "email", "number", "select", "textarea", "radio"]).isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ),
      placeholder: PropTypes.string,
    })
  ).isRequired,
  formData: PropTypes.object.isRequired,
  formErrors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InventoryForm;
