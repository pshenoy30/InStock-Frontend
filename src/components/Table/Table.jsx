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
    } else if (listType === "inventoryWarehouseId") {
      listData.forEach((item) => {
        let element = {};
        element.id = item.id;
        element.itemName = item.item_name;
        element.category = item.category;
        element.status = item.status;
        element.quantity = item.quantity;
        tableInfo.push(element);
      });
      return tableInfo;
    }
  }

  createTableInfo();
  if (listType === "warehouse") {
    return (
      <table className="table-element__table">
        <thead className="table-element__header">
          <tr className="table-element__row">
            {listheader.map((headerTitle) => (
              <th className="table-element__columnheader" key={headerTitle.id}>
                <div className="table-element__columnheader--align">
                  {headerTitle.header}{" "}
                  <img
                    className="table-element__sort"
                    src={sortImg}
                    alt="sort button"
                  ></img>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-element__body">
          {tableInfo.map((data) => (
            <tr className="table-element__records" key={data.id}>
              <td className="table-element__detail table-element__detail--left">
                  {data.warehouseName}
                  <img
                    className="list__img"
                    src={arrowImg}
                    alt="expand details button"
                  ></img>
                </td>
                <td className="table-element__detail">
                  {data.address}
                </td>
                <td className="table-element__detail">{data.contactName}</td>
                <td className="table-element__detail">
                  {data.contactInformation}
                </td>
                <td className="table-element__detail table-element__actions">
                  <img src={deleteImg} alt="delete button"></img>
                  <img src={editImg} alt="edit button"></img>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else if (listType === "inventory") {
    return (
      <table className="table-element__table">
        <thead className="table-element__header">
          <tr className="table-element__row">
            {listheader.map((headerTitle) => (
              <th className="table-element__columnheader" key={headerTitle.id}>
                {headerTitle.header}
                <img
                  className="table-element__sort"
                  src={sortImg}
                  alt="sort button"
                ></img>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-element__body">
          {tableInfo.map((data) => (
            <tr className="table-element__records">
              <Link to={`./${data.id}`} className="table-element__link">
                <td className="table-element__detail table-element__detail--left">
                  {data.itemName}
                  <img
                    className="table-element__img"
                    src={arrowImg}
                    alt="expand details button"
                  ></img>
                </td>
              </Link>
              <td className="table-element__detail table-element__detail--smaller">
                {data.category}
              </td>
              <td className="table-element__detail">{data.status}</td>
              <td className="table-element__detail table-element__detail--larger">
                {data.quantity}
              </td>
              <td className="table-element__detail">{data.warehouseName}</td>
              <td className="table-element__actions">
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
  } else if (listType === "inventoryWarehouseId") {
    return (
      <table className="table-element__table">
        <thead className="table-element__header">
          <tr className="table-element__row">
            {listheader.map((headerTitle) => (
              <th className="table-element__columnheader" key={headerTitle.id}>
                {headerTitle.header}
                <img
                  className="table-element__sort"
                  src={sortImg}
                  alt="sort button"
                ></img>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-element__body">
          {tableInfo.map((data) => (
            <tr className="table-element__records">
              <Link to={`./${data.id}`} className="table-element__link">
                <td className="table-element__detail table-element__detail--left">
                  {data.itemName}
                  <img
                    className="table-element__img"
                    src={arrowImg}
                    alt="expand details button"
                  ></img>
                </td>
              </Link>
              <td className="table-element__detail table-element__detail--smaller">
                {data.category}
              </td>
              <td className="table-element__detail">{data.status}</td>
              <td className="table-element__detail table-element__detail--larger">
                {data.quantity}
              </td>
              <td className="table-element__actions">
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
