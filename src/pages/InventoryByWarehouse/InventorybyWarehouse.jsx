import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MediaQuery from "react-responsive";
import EditNav from "../../components/EditNav/EditNav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import List from "../../components/List/List";
import StockTag from "../../components/StockTag/StockTag";
import Table from "../../components/Table/Table";
import WarehouseDetailsSection from "../../components/WarehouseDetailsSection/WarehouseDetailsSection";
import getWarehouseById from "../../utils/editwarehouseApi";
import getInventoryBasedOnWarehouseById from "../../utils/getInventoryItemsBasedOnWarehouseId";
import "./InventoryByWarehouse.scss";

function InventorybyWarehouse() {
  const [warehouseData, setWarehouseData] = useState(null);
  const [inventoryItem, setInventoryItems] = useState(null);
  const [loadingWarehouse, setLoadingWarehouse] = useState(true);
  const [loadingInventory, setLoadingInventory] = useState(true);
  const [error, setError] = useState(false);
  const { warehouseId } = useParams();

  useEffect(() => {
    async function getWarehouseData(id) {
      try {
        setWarehouseData(await getWarehouseById(id));
        setLoadingWarehouse(false);
      } catch (error) {
        console.log("Error fetching data", error);
        setError(true);
      }
    }

    async function getInventoryData(id) {
      try {
        setInventoryItems(await getInventoryBasedOnWarehouseById(id));
        setLoadingInventory(false);
      } catch (error) {
        console.log("Error fetching data", error)
      }
    }

    getWarehouseData(warehouseId);
    getInventoryData(warehouseId);
  });

  if (loadingWarehouse) {
    return <p> Loading warehouse data... </p>;
  }

  if (loadingInventory) {
    return <p> Loading inventory data... </p>;
  }

  if (error) {
    return <p> Something went wrong. Please try refreshing the page</p>;
  }

  const tableHeader = [
    { id: 0, header: "Inventory Item" },
    { id: 1, header: "Category" },
    { id: 2, header: "Status" },
    { id: 3, header: "Qty" },
    { id: 4, header: "Actions" },
  ];

  if(!loadingWarehouse && !loadingInventory){
    return (
      <>
        <Header />
        <main className="wrapper">
          <section className="box">
            <EditNav title={warehouseData.warehouse_name} buttonText="Edit" showButton={true} />
            <WarehouseDetailsSection warehouseData={warehouseData} />
            <MediaQuery maxWidth={767}>
              {inventoryItem.map((inventory) => {
                const { id, item_name, category, status, quantity } = inventory;
                return (
                  <>
                    <List
                      id={id}
                      relativePath={"../../edit-inventory/" + id}
                      title1="Inventory Item"
                      val1={item_name}
                      title2="Category"
                      val2={category}
                      title3="Status"
                      val3={<StockTag stockStatus={status} />}
                      title4="Qty"
                      val4={quantity}
                    />
                  </>
                );
              })}
            </MediaQuery>
            <MediaQuery minWidth={768}>
              <Table
                listheader={tableHeader}
                listData={inventoryItem}
                listType="inventoryWarehouseId"
              />
            </MediaQuery>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default InventorybyWarehouse;
