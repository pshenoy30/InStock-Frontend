import axios from "axios";
import { useState, useEffect } from "react";
import "./InventoryItem.scss";

//function to get a single item
function InventoryItem(id) {
  const API_URL = import.meta.env.VITE_API_URL;

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [inventoriesItemData, setInventoriesItemData] = useState(null);

  const getInventoriesItemData = async () => {
    try {
      const response = await axios.get(`${API_URL}/inventory/${id}`);
      setInventoriesItemData(response.data);
      console.log(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  useEffect(() => {
    getInventoriesItemData();
  }, []);

  if (isLoading) {
    return <p> Loading inventory data... </p>;
  }

  if (error) {
    return <p> Something went wrong. Please try refreshing the page</p>;
  }

  const { id, item_name, description, category, quantity, status, warehouse_name } = inventoriesItemData;
  return (
    <section>
        {/* <SearchNav /> */}
        <article>
         <div>
            <h3>ITEM DESCRIPTION:</h3>
            {description}
            <h3>CATEGORY:</h3>
            {category}
         </div>
         <div>
            <div>
                <h3>STATUS:</h3>
                {status}
                <h3>QUANTITY:</h3>
                {quantity}
            </div>
            <h3>WAREHOUSE:</h3>
            {warehouse_name}
         </div>
        </article>
    </section>
  )
}

export default InventoryItem;
