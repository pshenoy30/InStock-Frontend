import "./Buttons.scss";

function Buttons({ showPrimaryWarehouse, showPrimaryItem, showSecondary, showDelete, showEdit }) {
  return (
    <div>
      {showPrimaryWarehouse && (
        <button type="submit" className="button__primary">
          + Add New Warehouse
        </button>
      )}
      {showPrimaryItem && (
        <button type="submit" className="button__primary">
          + Add New Item
        </button>
      )}
      {showSecondary && (
        <button type="submit" className="button__secondary">
          Cancel
        </button>
      )}
      {showDelete && (
        <button type="submit" className="button__delete">
          Delete
        </button>
      )}
      {showEdit && (
        <button type="submit" className="button__edit">
          Edit
        </button>
      )}
    </div>
  );
}

export default Buttons;
