import axios from "axios";
import { useState, useEffect } from "react";
import "./InventoryList.scss";
import deleteImg from "../../assets/icons/delete_outline-24px.svg";
import editImg from "../../assets/icons/edit-24px.svg";

function InventoryList() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [inventories, setInventories] = useState(null);

  const getInventories = async (id) => {
    try {
      const inventoriesData = await axios.get(`${API_URL}/inventories`);
      console.log(`${API_URL}/warehouse/${id}/inventories`);
      setInventories(inventoriesData.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  useEffect(() => {
    getInventories();
  }, []);

  if (isLoading) {
    return <p> Loading inventory data... </p>;
  }

  if (error) {
    return <p> Something went wrong. Please try refreshing the page</p>;
  }
  console.log(inventories);

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
            {inventories.map((inventory) => {
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
