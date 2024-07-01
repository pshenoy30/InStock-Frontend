// FormFooter.jsx
import React from "react";
import Buttons from "../Buttons/Buttons";
import "./FormFooter.scss";

const FormFooter = ({
  onReset,
  onSubmit,
  isEditMode,
  onAddItem,
  isAddWarehouseMode,
}) => {
  const secondButtonLabel = isEditMode ? "Save" : "+ Add New Warehouse";
  const thirdButtonLabel = "+ Add Item";

  return (
    <div className="form-footer">
      <Buttons buttonName="Cancel" type="button" clickHandler={onReset} />
      {isAddWarehouseMode ? (
        <Buttons
          buttonName={secondButtonLabel}
          type="submit"
          clickHandler={onSubmit}
        />
      ) : (
        <Buttons
          buttonName={thirdButtonLabel}
          type="submit"
          clickHandler={onSubmit}
        />
      )}
    </div>
  );
};

export default FormFooter;
