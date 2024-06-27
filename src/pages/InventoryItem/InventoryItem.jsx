import "./InventoryItem.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchNav from "../../components/SearchNav/SearchNav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function InventoryItem() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [inventoriesItemData, setInventoriesItemData] = useState(null);
  const { inventoryId } = useParams();

  const getInventoriesItemData = async () => {
    try {
      const response = await axios.get(`${API_URL}/inventory/${inventoryId}`);
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

  const {
    id,
    item_name,
    description,
    category,
    quantity,
    status,
    warehouse_name
  } = inventoriesItemData;

  return (
    <div>
      <Header />
      <main>
        <SearchNav title={item_name} hideSearch="true" buttonText="Edit" />
        <section className="inventoryItem">
          <article className="inventoryItem__container">
            <article className="inventoryItem__card">
              <div className="inventoryItem__subcontainer">
                <h3 className="inventoryItem__title">ITEM DESCRIPTION:</h3>
                <h3 className="inventoryItem__detail">{description}</h3>
              </div>
              <div className="inventoryItem__subcontainer">
                <h3 className="inventoryItem__title">CATEGORY:</h3>
                <h3 className="inventoryItem__detail">{category}</h3>
              </div>
            </article>
            <article className="inventoryItem__card">
              <article className="inventoryItem__subcard">
                <div className="inventoryItem__subcontainer">
                  <h3 className="inventoryItem__title">STATUS:</h3>
                  <h3 className="inventoryItem__detail">{status}</h3>
                </div>
                <div className="inventoryItem__subcontainer">
                  <h3 className="inventoryItem__title">QUANTITY:</h3>
                  <h3 className="inventoryItem__detail">{quantity}</h3>
                </div>
              </article>
              <div className="inventoryItem__subcontainer">
                <h3 className="inventoryItem__title">WAREHOUSE:</h3>
                <h3 className="inventoryItem__detail">{warehouse_name}</h3>
              </div>
            </article>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default InventoryItem;
