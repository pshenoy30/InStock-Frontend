import MediaQuery from "react-responsive";
import SearchNav from "../../components/SearchNav/SearchNav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import List from "../../components/List/List";
import StockTag from "../../components/StockTag/StockTag";
import Table from "../../components/Table/Table";
import getInventoriesData from "../../utils/getInventoriesData";
import "./Inventory.scss";

const inventoryDetails = await getInventoriesData();
function Inventory() {
  const tableHeader = [
    { id: 0, header: "Inventory Item" },
    { id: 1, header: "Category" },
    { id: 2, header: "Status" },
    { id: 3, header: "Qty" },
    { id: 4, header: "Warehouse" },
    { id: 5, header: "Actions" },
  ];
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
              relativePath="inventories"
            />
          </MediaQuery>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Inventory;
