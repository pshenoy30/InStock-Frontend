import "./Buttons.scss";

function Buttons({buttonName}) {
  const classToBeAssigned = ((buttonName ===  "+ Add New Warehouse" || buttonName ===  "+ Add New Item")? "button__primary" : 
                             (buttonName ===  "Cancel" ? "button__secondary" : 
                             (buttonName ===  "Delete" ? "button__delete" : 
                             (buttonName ===  "Edit"? "button__edit" : "" ))))
  let buttonText = "";                           
  if (buttonName !== "Edit"){
    buttonText = buttonName
  }
  return (
    <button type="submit" className={classToBeAssigned}>
      {buttonText}
    </button>
  );
}

export default Buttons;
