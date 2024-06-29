import { Link} from 'react-router-dom';
import deleteImg from '../../assets/icons/delete_outline-24px.svg';
import editImg from '../../assets/icons/edit-24px.svg';
import arrowImg from '../../assets/icons/chevron_right-24px.svg';
import "./List.scss";

function List({
  id,
  relativePath,
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
  return (
    <article className="list" key={id}>
      <article className="list__left">
        <article className="list__container">
            <div className="list__card">
                <h3 className="list__title">{title1}</h3>
                <Link to={`./${relativePath}`}>  
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
          <img className="list__img" src={deleteImg} alt="delete button"></img>
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

  );
}

export default List;
