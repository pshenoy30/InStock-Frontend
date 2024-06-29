import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import List from "../../components/List/List.jsx";
import MediaQuery from "react-responsive";
import SearchNav from "../../components/SearchNav/SearchNav";
import getAllWarehouseDetails from "../../utils/getAllWarehouse.jsx";
import Table from "../../components/Table/Table.jsx";
import "./Homepage.scss";

const warehouseDetails = await getAllWarehouseDetails();

export default function Homepage() {
  const tableHeader = [
    { id: 0, header: "Warehouse" },
    { id: 1, header: "Address" },
    { id: 2, header: "Contact Name" },
    { id: 3, header: "Contact information" },
    { id: 4, header: "Actions" },
  ];

  return (
    <>
      <Header />
      <main className="wrapper">
        <section className="box">
          <SearchNav TitlePage="Warehouse" buttonText="+ Add New Warehouse" />
          <MediaQuery maxWidth={767}>
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
                    listType="warehouse"
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
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <Table
              listheader={tableHeader}
              listData={warehouseDetails}
              listType="warehouse"
            />
          </MediaQuery>
        </section>
      </main>
      <Footer />
    </>
  );
}
