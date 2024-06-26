import axios from "axios";
import { useState, useEffect } from "react";
import "./List.scss";

//TODO: pass in selectedWarehouse as prop
function List() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [inventories, setInventories] = useState(null);

  const getInventories = async (id) => {
    try {
      const inventoriesData = await axios.get(`${API_URL}/inventories`);
      console.log(`${API_URL}/warehouse/${id}/inventories`);
      console.log(inventoriesData.data);
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
    return <p> Loading video data... </p>;
  }

  if (error) {
    return <p> Something went wrong. Please try refreshing the page</p>;
  }
  console.log(inventories);

  return (
    <section className="inventoryList">
      <article>
        <table>
          <thead>
            <tr>
              <th>INVENTORY ITEM</th>
              <th>CATEGORY</th>
              <th>STATUS</th>
              <th>QTY</th>
              <th>WAREHOUSE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {inventories.map((inventory) => {
              return (
                <tr key={inventory.id}>
                  <td> {inventory.item_name}</td>
                  <td> {inventory.category}</td>
                  <td> {inventory.status}</td>
                  <td> {inventory.quantity}</td>
                  <td> {inventory.warehouse_name} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </section>
  );
}

// TODO: replace with warehouse name

export default List;
