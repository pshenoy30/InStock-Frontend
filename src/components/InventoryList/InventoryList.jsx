import "./InventoryList.scss";
import deleteImg from "../../assets/icons/delete_outline-24px.svg";
import editImg from "../../assets/icons/edit-24px.svg";

function InventoryList({ inventoryData, warehouseSelected }) {
  
  return (
    <section className="inventoryList">
      <article className="inventoryList__container">
        <table className="inventoryList__table">
          <thead className="inventoryList__header">
            <tr className="inventoryList__row">
              <th className="inventoryList__columnheader">INVENTORY ITEM</th>
              <th className="inventoryList__columnheader">CATEGORY</th>
              <th className="inventoryList__columnheader">STATUS</th>
              <th className="inventoryList__columnheader">QTY</th>
              <th className="inventoryList__columnheader">WAREHOUSE</th>
              <th className="inventoryList__columnheader">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="inventoryList__body">
            {inventoryData.map((inventory) => {
              return (
                <tr className="inventoryList__records" key={inventory.id}>
                  <td className="inventoryList__data">{inventory.item_name}</td>
                  <td className="inventoryList__data">{inventory.category}</td>
                  <td className="inventoryList__data">{inventory.status}</td>
                  <td className="inventoryList__data">{inventory.quantity}</td>
                  <td className="inventoryList__data">{inventory.warehouse_name}</td>
                  <td className="inventoryList__actions">
                    <img src={deleteImg} alt="delete button"></img>
                    <img src={editImg} alt="edit button"></img>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </section>
  );
}

export default InventoryList;
