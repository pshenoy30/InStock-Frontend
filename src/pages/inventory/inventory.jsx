import SearchNav from "../../components/SearchNav/SearchNav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import List from "../../components/List/List";
import getInventoriesData from "../../utils/getInventoriesData";
import "./Inventory.scss";

const inventoryDetails = await getInventoriesData();
console.log(inventoryDetails);
function Inventory() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <section className="box">
          <SearchNav title="Inventory" buttonText="+ Add New Item" />
          {inventoryDetails.map((inventory) => {
            const {
              id,
              warehouse_name,
              item_name,
              category,
              status,
              quantity,
            } = inventory;
            return (
              <List
                id={id}
                relativePath={id}
                title1="Inventory Item"
                val1={item_name}
                title2="Category"
                val2={category}
                title3="Status"
                val3={status}
                title4="Qty"
                val4={quantity}
                title5="Warehouse"
                val5={warehouse_name}
              />
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Inventory;
