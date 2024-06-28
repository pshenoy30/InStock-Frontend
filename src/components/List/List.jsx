import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import deleteImg from '../../assets/icons/delete_outline-24px.svg';
import editImg from '../../assets/icons/edit-24px.svg';
import arrowImg from '../../assets/icons/chevron_right-24px.svg';
import closeImg from '../../assets/icons/close-24px.svg'
import Buttons from '../Buttons/Buttons';
import Modal from 'react-modal';
import deleteWarehouseDetails from '../../utils/deleteWarehouse';
import deleteInventoryDetails from '../../utils/deleteInventoryItem';
import { useState } from 'react';
import "./List.scss";

function List({
  id,
  listType,
  title1,
  val1,
  title2,
  val2,
  title3,
  val3,
  title4,
  val4,
  title5,
  val5,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal(){
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function deleteModal(event) {
    event.preventDefault;
    if(listType === "warehouse"){
      console.log("delete");
      deleteWarehouseDetails(id);
      setIsOpen(false);
    }
    else if (listType === "inventories"){
      console.log("delete");
      deleteInventoryDetails(id);
      setIsOpen(false);
    }
    
  }

  return (
    <>
      <MediaQuery maxWidth={767}>
        <article className="list" key={id}>
          <article className="list__left">
            <article className="list__container">
                <div className="list__card">
                    <h3 className="list__title">{title1}</h3>
                    <Link to={`./${listType}/${id}`}>  
                      <div className="list__subcard">
                            <h3 className="list__entry list__entry--interactive">{val1}</h3>
                            <img className="list__img" src={arrowImg} alt="expand details button"></img> 
                      </div>
                    </Link> 
                </div>
                <div className="list__card">
                    <h3 className="list__title">{title2}</h3>
                    <h3 className="list__detail">{val2}</h3>
                </div>
            </article>
            <button type='button' onClick={openModal}> 
              <img className="list__img" src={deleteImg} alt="delete button"></img>
            </button>
          </article>
          <article className="list__right">
            <div className="list__card">
              <h3 className="list__title">{title3}</h3>
              <h3 className="list__detail">{val3}</h3>
            </div>
            <div className="list__card">
              <h3 className="list__title">{title4}</h3>
              <h3 className="list__detail">{val4}</h3>
            </div>
            {title5 && val5 && <div className="list__card">
              <h3 className="list__title">{title5}</h3>
              <h3 className="list__detail">{val5}</h3>
            </div>}
            <img className="list__img list__img--right" src={editImg} alt="edit button"></img>
          </article>
        </article>
        <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Delete a warehouse" className="list__modal">
          <>
            <button className='list__modal__close' onClick={closeModal}>
              <img className="list__img" src={closeImg} alt="edit button"></img>
            </button>
            <section className='list__modal__container'>
              <article className='list__modal__text-container'>
                <h1 className='list__modal__title'>Delete {val1} warehouse?</h1>
                <p className='list__modal__text'>Please confirm that you'd like to delete the {val1} from the list of warehouses. You wont be able to undo this action</p>
              </article>
              <article className='list__modal__button-container'>
                <Buttons buttonName="Cancel" clickHandler={closeModal} />
                <Buttons buttonName="Delete" clickHandler={deleteModal} />
              </article>
            </section>
          </>
        </Modal>
      </MediaQuery>
      <MediaQuery minWidth={768}>
            <tr className="list__records" key={id}>
              <td className="list__detail list__detail--left">{val1} <img className="list__img" src={arrowImg} alt="expand details button"></img></td>
              <td className="list__detail list__detail--smaller">{val2}</td>
              <td className="list__detail">{val3}</td>
              <td className="list__detail list__detail--larger">{val4}</td>
              {val5 && <td className="list__detail">{val5}</td>}
              <td className="list__actions">
                <button type='button' onClick={openModal}> 
                  <img src={deleteImg} alt="delete button"></img>
                </button>
                <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Delete a warehouse" className='list__modal'>
                  <>
                    <button className='list__modal__close' onClick={closeModal}>
                      <img className="list__img" src={closeImg} alt="edit button"></img>
                    </button>
                    <section className='list__modal__container'>
                      <article className='list__modal__text-container'>
                        <h1 className='list__modal__title'>Delete {val1} warehouse?</h1>
                        <p1 className='list__modal__text'>Please confirm that you'd like to delete the {val1} from the list of warehouses. You wont be able to undo this action</p1>
                      </article>
                      <article className='list__modal__button-container'>
                        <Buttons buttonName="Cancel" clickHandler={closeModal} />
                        <Buttons buttonName="Delete" clickHandler={deleteModal} />
                      </article>
                    </section>
                  </>
                </Modal>
                <img src={editImg} alt="edit button"></img>
              </td>
            </tr>
      </MediaQuery>
    </>
  );
}

export default List;
