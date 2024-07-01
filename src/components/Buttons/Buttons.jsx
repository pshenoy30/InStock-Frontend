import React from 'react';
import "./Buttons.scss";

function Buttons({ buttonName, type = "submit", clickHandler }) {
  const getClassToBeAssigned = (buttonName) => {
    switch (buttonName) {
      case "+ Add New Warehouse":
      case "+ Add New Item":
      return "button__primary" 
      case "+ Add Item":
        return "button__primary button__primary--item";
        
      case "Cancel":
        return "button__secondary";
      case "Delete":
        return "button__delete";
      case "Edit":
        return "button__edit";
      case "Save":
        return "button__save";
        
      default:
        return "";
    }
  };

  return (
    <button type={type} className={getClassToBeAssigned(buttonName)} onClick={clickHandler}>
      {buttonName}
    </button>
  );
}

export default Buttons;