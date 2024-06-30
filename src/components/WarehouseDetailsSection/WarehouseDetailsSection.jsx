import React from "react";
import "./WarehouseDetailsSection.scss";

function WarehouseDetailsSection({ warehouseData }) {
  console.log(warehouseData);
  const {
    id,
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  } = warehouseData;
  return (
    <section className="details">
      <article className="details__container">
        <h4 className="details__title">Warehouse Address</h4>
        <div className="details__subcontainer">
          <p2 className="details__data">{address + ", "}</p2>
          <p2 className="details__data">{city + ", " + country}</p2>
        </div>
      </article>
      <article className="details__card">
        <div className="details__subcard">
          <h4 className="details__title">Contact Name</h4>
          <div className="details__person">
            <p2 className="details__data">{contact_name}</p2>
            <p2 className="details__data">{contact_position}</p2>
          </div>
        </div>
        <div className="details__subcard">
          <h4 className="details__title">Contact Information</h4>
          <div className="details__info">
            <p2 className="details__data">{contact_phone}</p2>
            <p2 className="details__data">{contact_email}</p2>
          </div>
        </div>
      </article>
    </section>
  );
}

export default WarehouseDetailsSection;
