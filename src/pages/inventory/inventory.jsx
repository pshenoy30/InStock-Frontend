import MediaQuery from "react-responsive";
import SearchNav from "../../components/SearchNav/SearchNav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import List from "../../components/List/List";
import StockTag from "../../components/StockTag/StockTag";
import Table from "../../components/Table/Table";
import getInventoriesData from "../../utils/getInventoriesData";
import { useState, useEffect } from "react";
import "./Inventory.scss";

function Inventory() {
  const [inventoryDetails, setInventoryDetails] = useState(null);
  const [loadingInventoryDetails, setLoadingInventoryDetails] = useState(true);
  const [error, setError] = useState(false);

  const tableHeader = [
    { id: 0, header: "Inventory Item" },
    { id: 1, header: "Category" },
    { id: 2, header: "Status" },
    { id: 3, header: "Qty" },
    { id: 4, header: "Warehouse" },
    { id: 5, header: "Actions" },
  ];

  useEffect(() => {
    async function getInventoryData(){
      try {
        setInventoryDetails(await getInventoriesData());
        setLoadingInventoryDetails(false);
      } catch (error) {
        console.log("Couldn't fetch data", error);
        setError(true)
      }
    }
    getInventoryData();
  });

  if (loadingInventoryDetails) {
    return <p> Loading inventory data... </p>;
  }

  if (error) {
    return <p> Something went wrong. Please try refreshing the page</p>;
  }
    
  if(!loadingInventoryDetails){

  return (
    <>
      <Header />
      <main className="wrapper">
        <section className="box">
          <SearchNav title="Inventory" buttonText="+ Add New Item" />
          <MediaQuery maxWidth={767}>
            {inventoryDetails.map((inventory) => {
              const {
                id,
                item_name,
                warehouse_name,
                category,
                status,
                quantity,
              } = inventory;
              return (
                <>
                  <List
                    id={id}
                    relativePath={id}
                    title1="Inventory Item"
                    val1={item_name}
                    title2="Category"
                    val2={category}
                    title3="Status"
                    val3={<StockTag stockStatus={status} />}
                    title4="Qty"
                    val4={quantity}
                    title5="Warehouse"
                    val5={warehouse_name}
                  />
                </>
              );
            })}
            ;
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <Table
              listheader={tableHeader}
              listData={inventoryDetails}
              listType="inventory"
            />
          </MediaQuery>
        </section>
      </main>
      <Footer />
    </>
  );
}
}

export default Inventory;
