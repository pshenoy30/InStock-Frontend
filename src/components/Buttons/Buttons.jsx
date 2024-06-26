import "./Buttons.scss";

function Buttons({buttonName}) {
  const classToBeAssigned = ((buttonName ===  "+ Add New Warehouse" || buttonName ===  "+ Add New Item")? "button__primary" : 
                             (buttonName ===  "Cancel" ? "button__secondary" : 
                             (buttonName ===  "Delete" ? "button__delete" : 
                             (buttonName ===  "Edit"? "button__edit" : "" ))))

  
  return (
    <button type="submit" className={classToBeAssigned}>
      {buttonName}
    </button>
  );
}

export default Buttons;
