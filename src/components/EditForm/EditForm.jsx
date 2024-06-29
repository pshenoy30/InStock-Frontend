import React from "react";

const EditForm = ({
  sectionTitle,
  fields,
  formData,
  formErrors,
  handleChange,
}) => {
  return (
    <section className="form__section">
      <h2 className="form__heading">{sectionTitle}</h2>
      {fields.map((field) => {
        const { name, label, type, placeholder, options } = field;
        return (
          <div key={name} className="form__group">
            <label htmlFor={name} className="form__label">
              {label}
            </label>
            {type === "drop-down" ? (
              <select
                className="form__input"
                name={name}
                value={formData[name] || ""}
                onChange={handleChange}
              >
                <option value="" disabled>
                  {placeholder}
                </option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : type === "radio" ? (
              options.map((option, index) => (
                <div key={index}>
                  <input
                    className="form__radio"
                    type="radio"
                    name={name}
                    value={option}
                    checked={formData[name] === option}
                    onChange={handleChange}
                  />
                  {option}
                </div>
              ))
            ) : type === "textarea" ? (
              <textarea
                className="form__textarea"
                name={name}
                placeholder={placeholder}
                value={formData[name] || ""}
                onChange={handleChange}
              />
            ) : (
              <input
                className="form__input"
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name] || ""}
                onChange={handleChange}
              />
            )}
            {formErrors[name] && (
              <span className="error">{formErrors[name]}</span>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default EditForm;
