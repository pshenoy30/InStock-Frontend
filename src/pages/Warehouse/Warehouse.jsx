import SearchNav from "../../components/SearchNav/SearchNav";
import getAllWarehouseDetails from "../../utils/api";
import List from "../../components/List/List.jsx";
import MediaQuery from "react-responsive";
import "./Warehouse.scss";

const warehouseDetails = await getAllWarehouseDetails();
function Warehouse() {
  return (
    <section className="warehouse">
      <SearchNav title="Warehouse" buttonText="+ Add New Warehouse" />
      <MediaQuery minWidth={768}>
        <article className="list">
          <table className="list__table">
            <thead className="list__header">
              <tr className="list__row">
                <th className="list__columnheader">warehouse</th>
                <th className="list__columnheader">Address</th>
                <th className="list__columnheader">Contact Name</th>
                <th className="list__columnheader">Contact information</th>
                <th className="list__columnheader">ACTIONS</th>
              </tr>
            </thead>
          </table>
        </article>
      </MediaQuery>
      {warehouseDetails.map((warehouse) => {
        const {
          id,
          warehouse_name,
          address,
          city,
          country,
          contact_name,
          contact_phone,
          contact_email,
        } = warehouse;
        return (
          <>
            <List
              id={id}
              title1="Warehouse"
              val1={warehouse_name}
              title2="Address"
              val2={address + ", " + city + ", " + country}
              title3="Contact Name"
              val3={contact_name}
              title4="Contact information"
              val4={contact_phone + " " + contact_email}
            />
          </>
        );
      })}
    </section>
  );
}

export default Warehouse;
