import { useState } from 'react';
import MediaQuery from 'react-responsive';
import deleteImg from "../../assets/icons/delete_outline-24px.svg";
import editImg from "../../assets/icons/edit-24px.svg";
import "./List.scss";
function List({id, title1, val1, title2, val2, title3, val3, title4, val4, title5, val5}) {
    
    return (
    <>
        <MediaQuery maxWidth={767}>
            <article className="list" key={id}>
            <div className="divider"></div>
            <article className="list__left">
                <h3 className="list__title" >{title1}</h3>
                <h3 className="list__detail  list__detail--blue">{val1}</h3>
                <h3 className="list__title" >{title2}</h3>
                <h3 className="list__detail  list__detail--blue list__detail__address">{val2}</h3>
            </article>
            <article className="list__right">
                <h3 className="list__title" >{title3}</h3>
                <h3 className="list__detail  list__detail--blue">{val3}</h3>
                <h3 className="list__title" >{title4}</h3>
                <h3 className="list__detail  list__detail--blue list__detail__address">{val4}</h3>
            </article>
            </article>
        </MediaQuery>
        <MediaQuery minWidth={768}>
            {/* <article className="list"> */}
                <table className="list__table">
                {/* <thead className="list__header">
                    <tr className="list__row">
                    <th className="list__columnheader">{title1}</th>
                    <th className="list__columnheader">{title2}</th>
                    <th className="list__columnheader">{title3}</th>
                    <th className="list__columnheader">{title4}</th>
                    <th className="list__columnheader">ACTIONS</th>
                    </tr>
                </thead> */}
                <tbody className="list__body">
                    <tr className="list__records" key={id}>
                    <td className="list__data">{val1}</td>
                    <td className="list__data">{val2}</td>
                    <td className="list__data">{val3}</td>
                    <td className="list__data">{val4}</td>
                    <td className="list__actions">
                        <img src={deleteImg} alt="delete button"></img>
                        <img src={editImg} alt="edit button"></img>
                    </td>
                    </tr>
                </tbody>
                </table>
            {/* </article> */}
        </MediaQuery>
      </>
  )
}

export default List;