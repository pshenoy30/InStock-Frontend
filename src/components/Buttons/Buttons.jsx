import "./Buttons.scss";

function Buttons({ buttonName, type = "submit", clickHandler }) {
  const classToBeAssigned = (buttonName) => {
    switch (buttonName) {
      case "+ Add New Warehouse":
      case "+ Add New Item":
        return "button__primary";
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
    <button type={type} className={classToBeAssigned(buttonName)} onClick={clickHandler}>
      {buttonName}
    </button>
  );
}

export default Buttons;
