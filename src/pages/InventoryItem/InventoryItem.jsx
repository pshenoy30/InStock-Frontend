import "./InventoryItem.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EditNav from "../../components/EditNav/EditNav";
import StockTag from "../../components/StockTag/StockTag";
import getInventoryItem from "../../utils/getInventoryItem"

function InventoryItem() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [inventoriesItemData, setInventoriesItemData] = useState(null);
  const { inventoryId } = useParams();

  useEffect(() => {

    async function getInventoryData(id) {
      try {
        setInventoriesItemData(await getInventoryItem(id));
        setIsLoading(false);
      } catch (err) {
        console.log("Error fetching data", err)
      }
    }

    getInventoryData(inventoryId);
  },[]);

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

  if(!isLoading){
    return (
      <div>
        <Header />
        <main className="wrapper">
        <section className="box">
          <EditNav inventoryId={id} title={item_name} buttonText="Edit" showButton={true}/>
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
              <article className="inventoryItem__card inventoryItem__card--divider">
                <article className="inventoryItem__subcard">
                  <div className="inventoryItem__subcontainer">
                    <h3 className="inventoryItem__title">STATUS:</h3>
                    <h3 className="inventoryItem__detail">{<StockTag stockStatus={status} />}</h3>
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
        </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default InventoryItem;