import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import List from "../../components/List/List.jsx";
import MediaQuery from "react-responsive";
import SearchNav from "../../components/SearchNav/SearchNav";
import getAllWarehouseDetails from "../../utils/getAllWarehouse.jsx";
import Table from "../../components/Table/Table.jsx";
import { useState, useEffect } from "react";
import "./Homepage.scss";

export default function Homepage() {
  const [warehouseDetails, setWarehouseDetails] = useState(null);
  const [loadingWarehouseDetails, setLoadingWarehouseDetails] = useState(true);
  const [error, setError] = useState(false);

  const tableHeader = [
    { id: 0, header: "Warehouse" },
    { id: 1, header: "Address" },
    { id: 2, header: "Contact Name" },
    { id: 3, header: "Contact information" },
    { id: 4, header: "Actions" },
  ];

  useEffect(() => {
    async function getWarehouseData() {
      try {
        setWarehouseDetails(await getAllWarehouseDetails());
        setLoadingWarehouseDetails(false);
      } catch (error) {
        console.log("Couldn't fetch data", error);
        setError(true);
      }
    }
    getWarehouseData();
  }, []);

  if (loadingWarehouseDetails) {
    return <p>Loading warehouse data...</p>;
  }

  if (error) {
    return <p>Something went wrong. Please try refreshing the page</p>;
  }

  if (!loadingWarehouseDetails) {
    return (
      <>
        <Header />
        <main className="wrapper">
          <section className="box">
            <SearchNav title="Warehouse" buttonText="+ Add New Warehouse" linkTo="/add-warehouse" />
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
                  <List
                    key={id}
                    id={id}
                    relativePath={"warehouse/" + id}
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
}
