// FormInputs.jsx
import React from "react";
import FormField from "../FormField/FormField";

const FormInputs = ({ formData, onChange }) => {
  const fieldData = {
    warehouseDetails: [
      {
        label: "Warehouse Name",
        name: "warehouseName",
        type: "text",
        placeholder: "Warehouse Name",
      },
      {
        label: "Address",
        name: "address",
        type: "text",
        placeholder: "Street address",
      },
      { label: "City", name: "city", type: "text", placeholder: "City" },
      {
        label: "Country",
        name: "country",
        type: "text",
        placeholder: "Country",
      },
    ],
    contactDetails: [
      {
        label: "Contact Name",
        name: "contactName",
        type: "text",
        placeholder: "Contact Name",
      },
      {
        label: "Contact Position",
        name: "contactPosition",
        type: "text",
        placeholder: "Position",
      },
      {
        label: "Contact Phone",
        name: "contactPhone",
        type: "text",
        placeholder: "Phone Number",
      },
      {
        label: "Contact Email",
        name: "contactEmail",
        type: "email",
        placeholder: "Enter contact email",
      },
    ],
  };

  const renderFormField = (field) => (
    <FormField
      key={field.name}
      label={field.label}
      name={field.name}
      type={field.type}
      value={formData[field.name]}
      onChange={onChange}
      placeholder={field.placeholder}
    />
  );

  return (
    <div className="form-inputs">
      {Object.keys(fieldData).map((sectionKey, index) => (
        <div key={index} className="form-inputs__section">
          <h2 className="form-inputs__title">
            {sectionKey === "warehouseDetails"
              ? "Warehouse Details"
              : "Contact Details"}
          </h2>
          {fieldData[sectionKey].map(renderFormField)}
        </div>
      ))}
    </div>
  );
};

export default FormInputs;
