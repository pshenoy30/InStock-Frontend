import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import "./EditInventoryFooter.scss";

const EditInventoryFooter = ({
  inventoryId,
  onReset,
  onSubmit,
  isEditMode,
}) => {
  const secondButtonLabel = isEditMode ? "Save" : "+ Add New Warehouse";
  return (
    <div className="editInventory__footer">
      <Link to={`../../inventories`}>
        <Buttons buttonName="Cancel" type="button" onClick={onReset} />
      </Link>
      <Buttons
        buttonName={secondButtonLabel}
        type="submit"
        onClick={onSubmit}
      />
    </div>
  );
};

export default EditInventoryFooter;
