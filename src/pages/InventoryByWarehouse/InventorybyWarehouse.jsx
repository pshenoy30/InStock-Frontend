import React, { useState, useEffect } from "react";
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

function InventoryByWarehouse() {
  const [warehouseData, setWarehouseData] = useState(null);
  const [inventoryItem, setInventoryItems] = useState(null);
  const [loadingWarehouse, setLoadingWarehouse] = useState(true);
  const [loadingInventory, setLoadingInventory] = useState(true);
  const [error, setError] = useState(false);
  const { warehouseId } = useParams();

  useEffect(() => {
    async function getWarehouseData(id) {
      try {
        const data = await getWarehouseById(id);
        setWarehouseData(data);
        setLoadingWarehouse(false);
      } catch (error) {
        setError(true);
      }
    }

    async function getInventoryData(id) {
      try {
        const data = await getInventoryBasedOnWarehouseById(id);
        setInventoryItems(data);
        setLoadingInventory(false);
      } catch (error) {
        setError(true);
      }
    }

    getWarehouseData(warehouseId);
    getInventoryData(warehouseId);
  }, [warehouseId]);

  if (loadingWarehouse || loadingInventory) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Something went wrong. Please try refreshing the page.</p>;
  }

  const tableHeader = [
    { id: 0, header: "Inventory Item" },
    { id: 1, header: "Category" },
    { id: 2, header: "Status" },
    { id: 3, header: "Qty" },
    { id: 4, header: "Actions" },
  ];

  return (
    <>
      <Header />
      <main className="wrapper">
        <section className="box">
          <EditNav
            id={warehouseId}
            title={warehouseData.warehouse_name}
            buttonText="Edit"
            showButton={true}
            isWarehouse={true}
          />
          <WarehouseDetailsSection warehouseData={warehouseData} />
          <MediaQuery maxWidth={767}>
            {inventoryItem.map((inventory) => {
              const { id, item_name, category, status, quantity } = inventory;
              return (
                <List
                  key={id}
                  id={id}
                  relativePath={`../../inventories/${id}`}
                  listType="inventories"
                  title1="Inventory Item"
                  val1={item_name}
                  title2="Category"
                  val2={category}
                  title3="Status"
                  val3={<StockTag stockStatus={status} />}
                  title4="Qty"
                  val4={quantity}
                />
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

export default InventoryByWarehouse;
