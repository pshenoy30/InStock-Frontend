import "./Buttons.scss";

function Buttons({ showPrimary, showSecondary, showDelete, showEdit }) {
  return (
    <div>
      {showPrimary && (
        <button type="submit" className="button__primary">
          + Add New Warehouse
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
