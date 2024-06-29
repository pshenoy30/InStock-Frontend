
import React from "react";
import Buttons from "../Buttons/Buttons";
import "./EditInventoryFooter.scss"

const EditInventoryFooter = ({ onReset, onSubmit, isEditMode }) => {
  const secondButtonLabel = isEditMode ? "Save" : "+ Add New Warehouse";

  return (
    <div className="editInventory__footer">
      <Buttons buttonName="Cancel" type="button" onClick={onReset} />
      <Buttons buttonName={secondButtonLabel} type="submit" onClick={onSubmit} />
    </div>
  );
};

export default EditInventoryFooter;