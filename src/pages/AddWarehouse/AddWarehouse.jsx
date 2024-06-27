// src/pages/AddWarehouse/AddWarehouse.jsx
import React, { useState } from "react";
import "./AddWarehouse.scss";
import FormInputs from "../../components/FormInputs/FormInputs";
import { defaultFormData } from "../../components/formUtils";

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

const validatePhoneNumber = (phoneNumber) => {
  const re = /^\+?[1-9]\d{1,14}$/;
  return re.test(String(phoneNumber));
};

const validateFormData = (data) => {
  const errors = {};

  if (!data.warehouseName) errors.warehouseName = "Warehouse Name is required";
  if (!data.address) errors.address = "Address is required";
  if (!data.city) errors.city = "City is required";
  if (!data.country) errors.country = "Country is required";
  if (!data.contactName) errors.contactName = "Contact Name is required";
  if (!data.contactPosition) errors.contactPosition = "Position is required";
  if (!data.contactPhone) {
    errors.contactPhone = "Phone Number is required";
  } else if (!validatePhoneNumber(data.contactPhone)) {
    errors.contactPhone = "Phone Number is invalid";
  }
  if (!data.contactEmail) {
    errors.contactEmail = "Email is required";
  } else if (!validateEmail(data.contactEmail)) {
    errors.contactEmail = "Email is invalid";
  }

  return errors;
};

const AddWarehouse = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateFormData(formData);
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully", formData);
    } else {
      setFormErrors(errors);
    }
  };

  const handleReset = () => {
    setFormData(defaultFormData);
    setFormErrors({});
  };

  return (
    <div className="form-container">
      <div className="form-container__header">
        <h1>Add New Warehouse</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__section">
          <h2 className="form__heading">Warehouse Details</h2>
          <div className="form__group">
            <label className="form__label" htmlFor="warehouseName">
              Warehouse Name
            </label>
            <input
              className="form__input"
              type="text"
              id="warehouseName"
              name="warehouseName"
              placeholder="Warehouse Name"
              value={formData.warehouseName}
              onChange={handleChange}
            />
            {formErrors.warehouseName && (
              <div className="form__error">{formErrors.warehouseName}</div>
            )}
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="address">
              Street Address
            </label>
            <input
              className="form__input"
              type="text"
              id="address"
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleChange}
            />
            {formErrors.address && (
              <div className="form__error">{formErrors.address}</div>
            )}
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="city">
              City
            </label>
            <input
              className="form__input"
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            {formErrors.city && (
              <div className="form__error">{formErrors.city}</div>
            )}
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="country">
              Country
            </label>
            <input
              className="form__input"
              type="text"
              id="country"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />
            {formErrors.country && (
              <div className="form__error">{formErrors.country}</div>
            )}
          </div>
        </div>
        <div className="form__section">
          <h2 className="form__heading">Contact Details</h2>
          <div className="form__group">
            <label className="form__label" htmlFor="contactName">
              Contact Name
            </label>
            <input
              className="form__input"
              type="text"
              id="contactName"
              name="contactName"
              placeholder="Contact Name"
              value={formData.contactName}
              onChange={handleChange}
            />
            {formErrors.contactName && (
              <div className="form__error">{formErrors.contactName}</div>
            )}
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="contactPosition">
              Position
            </label>
            <input
              className="form__input"
              type="text"
              id="contactPosition"
              name="contactPosition"
              placeholder="Position"
              value={formData.contactPosition}
              onChange={handleChange}
            />
            {formErrors.contactPosition && (
              <div className="form__error">{formErrors.contactPosition}</div>
            )}
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="contactPhone">
              Phone Number
            </label>
            <input
              className="form__input"
              type="text"
              id="contactPhone"
              name="contactPhone"
              placeholder="Phone Number"
              value={formData.contactPhone}
              onChange={handleChange}
            />
            {formErrors.contactPhone && (
              <div className="form__error">{formErrors.contactPhone}</div>
            )}
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="contactEmail">
              Email
            </label>
            <input
              className="form__input"
              type="email"
              id="contactEmail"
              name="contactEmail"
              placeholder="Email"
              value={formData.contactEmail}
              onChange={handleChange}
            />
            {formErrors.contactEmail && (
              <div className="form__error">{formErrors.contactEmail}</div>
            )}
          </div>
        </div>
      </form>
      <div className="form__footer">
        <button className="form__reset" type="button" onClick={handleReset}>
          Cancel
        </button>
        <button className="form__submit" type="submit" onClick={handleSubmit}>
          + Add Warehouse
        </button>
      </div>
    </div>
  );
};

export default AddWarehouse;
