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

    // </>
    // <div>
    //   {showPrimaryWarehouse && (
    //     <button type="submit" className="button__primary">
    //       + Add New Warehouse
    //     </button>
    //   )}
    //   {showPrimaryItem && (
    //     <button type="submit" className="button__primary">
    //       + Add New Item
    //     </button>
    //   )}
    //   {showSecondary && (
    //     <button type="submit" className="button__secondary">
    //       Cancel
    //     </button>
    //   )}
    //   {showDelete && (
    //     <button type="submit" className="button__delete">
    //       Delete
    //     </button>
    //   )}
    //   {showEdit && (
    //     <button type="submit" className="button__edit">
    //       Edit
    //     </button>
    //   )}
    // </div>
  );
}

export default Buttons;
