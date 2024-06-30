// import { useParams } from "react-router-dom";
// import { useEffect,useState } from "react";
// import MediaQuery from "react-responsive";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import SearchNav from "../../components/SearchNav/SearchNav";
// import List from "../../components/List/List.jsx";
// import getWarehouseById from "../../utils/getSingleWarehouse.jsx";
// import getInventoryBasedOnWarehouseById from "../../utils/getInventoryItemsBasedOnWarehouseId.jsx";
// import "./Warehouse.scss";

// function Warehouse() {
//   const [warehouseDetails, setWarehouseDetails] = useState(null);
//   const [inventoryItems, setInventoryItems] = useState(null)
//   const {warehouseId} = useParams();
//   const [loadingWarehouseDetails, setLoadingWarehouseDetails] = useState(true);
//   const [loadingInventoryDetails, setLoadingInventoryDetails] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async function getWarehouseData(id){
//       try {
//         setWarehouseDetails(await getWarehouseById(id));
//         setLoadingWarehouseDetails(false);
//       } catch (error) {
//         console.log("Couldn't fetch data", error);
//         setError(true)
//       }
//     }
  
//     async function getInventoryData(id){
//       try {
//         setInventoryItems(await getInventoryBasedOnWarehouseById(id));
//         setLoadingInventoryDetails(false);
//       } catch (error) {
        
//       }
//     }
    
//     getWarehouseData(warehouseId);
//     getInventoryData(warehouseId);
//   },[])

//   if (loadingWarehouseDetails) {
//     return <p> Loading warehouse data... </p>;
//   }

//   if (loadingInventoryDetails) {
//     return <p> Loading inventory data... </p>;
//   }
    
//   if (error) {
//     return <p> Something went wrong. Please try refreshing the page</p>;
//   }

//   if(!loadingWarehouseDetails&&!loadingInventoryDetails){
//     console.log(inventoryItems);
//     return (
//       <>
//       <Header />
//       <main className="wrapper">
//       <section className="box">
//       <SearchNav title={warehouseDetails.warehouse_name} buttonText="Edit"/>
//         <MediaQuery minWidth={768}>
//               <article className="list">
//                 <table className="list__table">
//                   <thead className="list__header">
//                     <tr className="list__row">
//                       <th className="list__columnheader">inventory item</th>
//                       <th className="list__columnheader">category</th>
//                       <th className="list__columnheader">status</th>
//                       <th className="list__columnheader">qty</th>
//                       <th className="list__columnheader">ACTIONS</th>
//                     </tr>
//                   </thead>
//                 </table>
//               </article>
//             </MediaQuery>
//             {inventoryItems.map((item) => {
//               const {
//                 id,
//                 category,
//                 item_name,
//                 status,
//                 quantity
//               } = item;
//               return (
//                 <>
//                   <List
//                     id={id}
//                     relativePath={"/" + id}
//                     title1="inventory item"
//                     val1={item_name}
//                     title2="category"
//                     val2={category}
//                     title3="status"
//                     val3={status}
//                     title4="qty"
//                     val4={quantity}
//                   />
//                 </>
//               );
//             })}
//       </section>
//       </main> 
//       <Footer />
//       </>
//     );
//   }
// }

// export default Warehouse;
