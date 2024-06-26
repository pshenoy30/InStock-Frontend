// src/components/FormInputs/FormInputs.jsx
import React from 'react';
import FormField from '../FormField/FormField';

const FormInputs = ({ formData, errors, onChange }) => {
  return (
    <>
      <div className="add-warehouse__section">
        <h2 className="add-warehouse__title">Warehouse Details</h2>
        <FormField
          label="Warehouse Name"
          name="warehouseName"
          type="text"
          value={formData.warehouseName}
          onChange={onChange}
          error={errors.warehouseName}
          placeholder="Warehouse Name"
        />
        <FormField
          label="Address"
          name="address"
          type="text"
          value={formData.address}
          onChange={onChange}
          error={errors.address}
          placeholder="Street address"
        />
        <FormField
          label="City"
          name="city"
          type="text"
          value={formData.city}
          onChange={onChange}
          error={errors.city}
          placeholder="City"
        />
        <FormField
          label="Country"
          name="country"
          type="text"
          value={formData.country}
          onChange={onChange}
          error={errors.country}
          placeholder="Country"
        />
      </div>
      <hr className="add-warehouse__divider" /> 
      <div className="add-warehouse__section">
        <h2 className="add-warehouse__title">Contact Details</h2>
        <FormField
          label="Contact Name"
          name="contactName"
          type="text"
          value={formData.contactName}
          onChange={onChange}
          error={errors.contactName}
          placeholder="Contact Name"
        />
        <FormField
          label="Contact Position"
          name="contactPosition"
          type="text"
          value={formData.contactPosition}
          onChange={onChange}
          error={errors.contactPosition}
          placeholder="Position"
        />
        <FormField
          label="Contact Phone"
          name="contactPhone"
          type="text"
          value={formData.contactPhone}
          onChange={onChange}
          error={errors.contactPhone}
          placeholder="Phone Number"
        />
        <FormField
          label="Contact Email"
          name="contactEmail"
          type="email"
          value={formData.contactEmail}
          onChange={onChange}
          error={errors.contactEmail}
          placeholder="Enter contact email"
        />
      </div>
    </>
  );
};

export default FormInputs;
