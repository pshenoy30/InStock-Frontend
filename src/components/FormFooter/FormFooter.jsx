// components/FormFooter/FormFooter.js

import React from "react";
import Buttons from "../Buttons/Buttons";
import "./FormFooter.scss";

const FormFooter = ({ onReset, onSubmit, isEditMode }) => {
  const secondButtonLabel = isEditMode ? "Save" : "+ Add New Warehouse";

  return (
    <div className="form__footer">
      <Buttons buttonName="Cancel" type="button" onClick={onReset} />
      <Buttons buttonName={secondButtonLabel} type="submit" onClick={onSubmit} />
    </div>
  );
};

export default FormFooter;
