import { Link } from "react-router-dom";
import deleteImg from "../../assets/icons/delete_outline-24px.svg";
import editImg from "../../assets/icons/edit-24px.svg";
import arrowImg from "../../assets/icons/chevron_right-24px.svg";
import sortImg from "../../assets/icons/sort-24px.svg";
import closeImg from '../../assets/icons/close-24px.svg'
import deleteWarehouseDetails from '../../utils/deleteWarehouse';
import deleteInventoryDetails from '../../utils/deleteInventoryItem';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Buttons from '../Buttons/Buttons';
import "./Table.scss";

function Table({ listData, listType, listheader }) {
  let tableInfo = [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  function createTableInfo() {
    if (listType === "warehouse") {
      listData.forEach((item) => {
        let element = {};
        element.id = item.id;
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

  function closeModal() {
    setIsModalOpen(false);
  }

  function deleteModal(event) {
    event.preventDefault;
    if(listType === "warehouse"){
      deleteWarehouseDetails(modalData.id);
      setIsModalOpen(false);
    }
    else if (listType === "inventories"){
      deleteInventoryDetails(modalData.id);
      setIsModalOpen(false);
    }
  }

  if (listType === "warehouse") {
    return (
      <>
      {modalData && (
                <Modal destroyOnClose isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Delete a warehouse"  ariaHideApp={false} className="modal">
                  <>
                    <button className='modal__close' onClick={closeModal}>
                      <img className="table-element__img" src={closeImg} alt="edit button"></img>
                    </button>
                    <section className='modal__container'>
                      <article className='modal__text-container'>
                        <h1 className='modal__title'>Delete {modalData.warehouseName} warehouse?</h1>
                        <p className='modal__text'>Please confirm that you'd like to delete the {modalData.warehouseName} from the list of warehouses. You wont be able to undo this action</p>
                      </article>
                      <article className='modal__button-container'>
                        <Buttons buttonName="Cancel" clickHandler={closeModal} />
                        <Buttons buttonName="Delete" clickHandler={deleteModal} />
                      </article>
                    </section>
                  </>
                </Modal> 
                ) }
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
            <>
            <tr className="table-element__records" key={data.id}>
              <td className="table-element__detail table-element__detail--left">
                <Link to={`/warehouse/${data.id}`} className="table-element__link">
                      {data.warehouseName}
                    <img
                      className="list__img"
                      src={arrowImg}
                      alt="expand details button"
                    ></img>
                </Link>
              </td>
              <td className="table-element__detail">
                  {data.address}
              </td>
                <td className="table-element__detail">{data.contactName}</td>
                <td className="table-element__detail">
                  {data.contactInformation}
                </td>
                <td className="table-element__detail table-element__actions">
                <button className="table-element__button"  type='button' onClick={()=>{
                  setModalData(data);
                  setIsModalOpen(true);}}>                   
                  <img src={deleteImg} alt="delete button"></img>
                </button>
                  <img src={editImg} alt="edit button"></img>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      </>
    );
  } else if (listType === "inventory") {
    return (
      <>
        {modalData && (<Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Delete a warehouse" className="modal" >
                  <>
                    <button className='modal__close' onClick={closeModal}>
                      <img className="img" src={closeImg} alt="edit button"></img>
                    </button>
                    <section className='modal__container'>
                      <article className='modal__text-container'>
                        <h1 className='modal__title'>Delete {modalData.itemName} inventory item?</h1>
                        <p className='modal__text'>Please confirm that you'd like to delete the {modalData.itemName} from the inventory list. You wont be able to undo this action</p>
                      </article>
                      <article className='modal__button-container'>
                        <Buttons buttonName="Cancel" clickHandler={closeModal} />
                        <Buttons buttonName="Delete" clickHandler={deleteModal} />
                      </article>
                    </section>
                  </>
                </Modal>)}
      <table className="table-element__table">
        <thead className="table-element__header">
          <tr className="table-element__row">
            {listheader.map((headerTitle) => (
              <th className="table-element__columnheader table-element__columnheader--inventory" key={headerTitle.id}>
                <div className="table-element__columnheader--flex">
                  {headerTitle.header}
                  <img
                    className="table-element__sort"
                    src={sortImg}
                    alt="sort button"
                   />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-element__body">
          {tableInfo.map((data) => (
            <tr className="table-element__records">
              <Link to={`./inventories/${data.id}`} className="table-element__link">
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
              <td className="table-element__detail table-element__actions table-element__actions--inventory">
              <button className="table-element__button" type='button' onClick={()=>{setModalData(data.itemName); setIsModalOpen(true);}}> 
                <img src={deleteImg} alt="delete button"></img>
              </button>
                <Link to={`../edit-inventory/${data.id}`}>
                  <img src={editImg} alt="edit button"></img>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
    );
  } else if (listType === "inventoryWarehouseId") {
    return (
      <>
        {modalData && (<Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Delete a warehouse" className="modal" >
                  <>
                    <button className='modal__close' onClick={closeModal}>
                      <img className="img" src={closeImg} alt="edit button"></img>
                    </button>
                    <section className='modal__container'>
                      <article className='modal__text-container'>
                        <h1 className='modal__title'>Delete {modalData.itemName} inventory item?</h1>
                        <p className='modal__text'>Please confirm that you'd like to delete the {modalData.itemName} from the inventory list. You wont be able to undo this action</p>
                      </article>
                      <article className='modal__button-container'>
                        <Buttons buttonName="Cancel" clickHandler={closeModal} />
                        <Buttons buttonName="Delete" clickHandler={deleteModal} />
                      </article>
                    </section>
                  </>
                </Modal>)}
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
              <Link to={`./inventories/${data.id}`} className="table-element__link">
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
              <td className="table-element__detail table-element__actions">
              <button className="table-element__button" type='button' onClick={openModal}> 
                <img src={deleteImg} alt="delete button"></img>
              </button> 
                <Link to={`../edit-inventory/${data.id}`}>
                  <img src={editImg} alt="edit button"></img>
                </Link>
              </td>
              {modalData && <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Delete a warehouse" portalClassName="modal">
                  <>
                    <button className='modal__close' onClick={closeModal}>
                      <img className="list__img" src={closeImg} alt="edit button"></img>
                    </button>
                    <section className='modal__container'>
                      <article className='modal__text-container'>
                        <h1 className='modal__title'>Delete {modalData.itemName} inventory item?</h1>
                        <p className='modal__text'>Please confirm that you'd like to delete the {modalData.itemName} from the list of warehouses. You wont be able to undo this action</p>
                      </article>
                      <article className='modal__button-container'>
                        <Buttons buttonName="Cancel" clickHandler={closeModal} />
                        <Buttons buttonName="Delete" clickHandler={deleteModal} />
                      </article>
                    </section>
                  </>
                </Modal>}
            </tr>
          ))}
        </tbody>
      </table>
      </>
    );
  }
}
export default Table;
