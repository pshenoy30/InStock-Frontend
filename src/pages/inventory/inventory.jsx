import MediaQuery from "react-responsive";
import SearchNav from "../../components/SearchNav/SearchNav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import List from "../../components/List/List";
import StockTag from "../../components/StockTag/StockTag";
import getInventoriesData from "../../utils/getInventoriesData";
import "./inventory.scss";

const inventoryDetails = await getInventoriesData();
console.log(inventoryDetails);
function Inventory() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <section className="box">
          <SearchNav title="Inventory" buttonText="+ Add New Item" />
          <MediaQuery minWidth={768}>
              <article className="inventory">
                <table className="inventory__table">
                  <thead className="inventory__header">
                    <tr className="inventory__row">
                      <th className="inventory__columnheader">inventory item</th>
                      <th className="inventory__columnheader">category</th>
                      <th className="inventory__columnheader">status</th>
                      <th className="inventory__columnheader">qty</th>
                      <th className="inventory__columnheader">warehouse</th>
                      <th className="inventory__columnheader">actions</th>
                    </tr>
                  </thead>
                </table>
              </article>
            </MediaQuery>
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
                val3={<StockTag stockStatus={status} />}
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
