import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import List from "../../components/List/List.jsx";
import MediaQuery from "react-responsive";
import SearchNav from "../../components/SearchNav/SearchNav";
import getAllWarehouseDetails from "../../utils/getAllWarehouse.jsx";
import { useEffect,useState } from "react";
import "./Homepage.scss"

const warehouseDetails = await getAllWarehouseDetails();

export default function Homepage() {
  const [warehouseDetails, setWarehouseDetails] = useState(null);
  const [loadingWarehouseDetails, setLoadingWarehouseDetails] = useState(true);

  useEffect(() => {
    async function getWarehouseDetails(){
      try {
        setWarehouseDetails(await await getAllWarehouseDetails());
        setLoadingWarehouseDetails(false);
      } catch (error) {
        console.log("Couldn't fetch data", error);
        setError(true)
      }
    }
    getWarehouseDetails();
  })

  if(!loadingWarehouseDetails){
    return (
      <>
        <Header />
        <main className="wrapper">
          <section className="box">
            <SearchNav title="Warehouse" buttonText="+ Add New Warehouse" />
              <MediaQuery minWidth={768}>
                  <table className="list__table">
                    {/* <thead className="list__header"> */}
                      <tr className="list__row">
                        <th className="list__columnheader">warehouse</th>
                        <th className="list__columnheader">Address</th>
                        <th className="list__columnheader">Contact Name</th>
                        <th className="list__columnheader">Contact information</th>
                        <th className="list__columnheader">ACTIONS</th>
                      </tr>
                    {/* </thead> */}
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
              </table>
              </MediaQuery>
          </section>
        </main>
        <Footer />
      </>
    )
  }
}
