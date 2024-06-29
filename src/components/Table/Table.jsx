import { Link } from "react-router-dom";
import deleteImg from "../../assets/icons/delete_outline-24px.svg";
import editImg from "../../assets/icons/edit-24px.svg";
import arrowImg from "../../assets/icons/chevron_right-24px.svg";
import sortImg from "../../assets/icons/sort-24px.svg";
import "./Table.scss";

function Table({ listData, listType, listheader }) {
  let tableInfo = [];

  function createTableInfo() {
    if (listType === "warehouse") {
      listData.forEach((item) => {
        let element = {};
        element.warehouseName = item.warehouse_name;
        element.address = item.address + ", " + item.city + ", " + item.country;
        element.contactName = item.contact_name;
        element.contactInformation =
          item.contact_phone + " " + item.contact_email;
        tableInfo.push(element);
      });
    } else if (listType === "inventory") {
      listData.forEach((item) => {
        let element = {};
        element.id = item.id;
        element.itemName = item.item_name;
        element.category = item.category;
        element.status = item.status;
        element.quantity = item.quantity;
        element.warehouseName = item.warehouse_name;
        tableInfo.push(element);
      });
    }
    return tableInfo;
  }

  createTableInfo();
  if (listType === "warehouse") {
    return (
      <table className="list__table">
        <thead className="list__header">
          <tr className="list__row">
            {listheader.map((headerTitle) => (
              <th className="list__columnheader" key={headerTitle.id}>
                {headerTitle.header}{" "}
                <img
                  className="list__sort"
                  src={sortImg}
                  alt="sort button"
                ></img>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="list__body">
          {tableInfo.map((data) => (
            <tr className="list__records" key={data.id}>
              <td className="list__detail list__detail--left">
                {data.warehouseName}
                <img
                  className="list__img"
                  src={arrowImg}
                  alt="expand details button"
                ></img>
              </td>
              <td className="list__detail list__detail--smaller">
                {data.address}
              </td>
              <td className="list__detail">{data.contactName}</td>
              <td className="list__detail list__detail--larger">
                {data.contactInformation}
              </td>
              <td className="list__actions">
                <img src={deleteImg} alt="delete button"></img>
                <img src={editImg} alt="edit button"></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return (
      <table className="list__table">
        <thead className="list__header">
          <tr className="list__row">
            {listheader.map((headerTitle) => (
              <th className="list__columnheader" key={headerTitle.id}>
                {headerTitle.header}
                <img
                  className="list__sort"
                  src={sortImg}
                  alt="sort button"
                ></img>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="list__body">
          {tableInfo.map((data) => (
            <tr className="list__records">
              <Link to={`./${data.id}`} className="list__link">
                <td className="list__detail list__detail--left">
                  {data.itemName}
                  <img
                    className="list__img"
                    src={arrowImg}
                    alt="expand details button"
                  ></img>
                </td>
              </Link>
              <td className="list__detail list__detail--smaller">
                {data.category}
              </td>
              <td className="list__detail">{data.status}</td>
              <td className="list__detail list__detail--larger">
                {data.quantity}
              </td>
              <td className="list__detail">{data.warehouseName}</td>
              <td className="list__actions">
                <img src={deleteImg} alt="delete button"></img>
                <Link to={`../edit-inventory/${data.id}`}>
                  <img src={editImg} alt="edit button"></img>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
