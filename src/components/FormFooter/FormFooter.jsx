// FormFooter.jsx
import React from "react";
import Buttons from "../Buttons/Buttons";
import "./FormFooter.scss";
import { useNavigate } from "react-router-dom";

const FormFooter = ({
  onReset,
  onSubmit,
  isEditMode,
  isAddWarehouseMode,
  isAddInventoryMode,
  cancelPath = "/",
  submitPath = "/",
}) => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isFormValid = await onSubmit(event);
    if (isFormValid) {
      navigate(submitPath);
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    onReset();
    navigate(cancelPath);
  };

  const secondButtonLabel = isEditMode ? "Save" : (isAddWarehouseMode ? "+ Add New Warehouse" : (isAddInventoryMode ? "+ Add Item" : "+ Add New Item"));

  return (
    <div className="form-footer">
      <Buttons buttonName="Cancel" type="button" clickHandler={handleCancel} />
      <Buttons
        buttonName={secondButtonLabel}
        type="submit"
        clickHandler={handleSubmit}
      />
    </div>
  );
};

export default FormFooter;
