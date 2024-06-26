import SearchNav from "../../components/SearchNav/SearchNav";
import getAllWarehouseDetails from "../../utils/api";
import { useState, useEffect } from "react";


const warehouseDetails = await getAllWarehouseDetails();
function Warehouse() {
  return (
    <section className="warehouse">
      <SearchNav title = "Warehouse" buttonText = "+ Add New Warehouse"/>
      {warehouseDetails.map((warehouseData) => {
        <article className="warehouse__details" key={warehouseData.id}>
          
        </article>
      })}
    </section>
  )
}

export default Warehouse;