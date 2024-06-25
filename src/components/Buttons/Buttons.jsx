import "./Buttons.scss";

function Buttons() {
    return (
        <div>
            <button type="submit" className="button__primary">
                + Add New Warehouse
            </button>
            <button type="submit" className="button__secondary">
                Cancel
            </button>
            <button type="submit" className="button__delete">
                Delete
            </button>
        </div>
    );
}

export default Buttons;