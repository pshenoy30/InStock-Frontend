import deleteImg from '../../assets/icons/delete_outline-24px.svg';
import editImg from '../../assets/icons/edit-24px.svg';
function Table ({listData, listheader}){
    console.log(listheader);
  return (
    <table className="list__table">
        <thead className="list__header">
            <tr className="list__row">
                {listheader.map((header)=> {
                    <th className="list__columnheader">{header}</th>
                })}    
            </tr>
        </thead>
        {/* <tbody className="list__body">
            <tr className="list__records" key={id}>
                <td className="list__detail list__detail--left">{val1} <img className="list__img" src={arrowImg} alt="expand details button"></img></td>
                <td className="list__detail list__detail--smaller">{val2}</td>
                <td className="list__detail">{val3}</td>
                <td className="list__detail list__detail--larger">{val4}</td>
                {val5 && <td className="list__detail">{val5}</td>}
                <td className="list__actions">
                    <img src={deleteImg} alt="delete button"></img>
                <img src={editImg} alt="edit button"></img>
                </td>
            </tr>
        </tbody> */}
    </table>
  )
}

export default Table;