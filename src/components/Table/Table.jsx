import deleteImg from '../../assets/icons/delete_outline-24px.svg';
import editImg from '../../assets/icons/edit-24px.svg';
import arrowImg from '../../assets/icons/chevron_right-24px.svg';

function Table ({listData, listType, listheader}){
    let tableInfo = [];

    function createTableInfo(){
        if(listType === "warehouse"){
            listData.forEach((item) => {
                let element = {};
                element.warehouseName = item.warehouse_name;
                element.address = item.address+", "+item.city+", "+item.country;
                element.contactName = item.contact_name;
                element.contactInformation= item.contact_phone+" "+item.contact_email;
                tableInfo.push(element);
            })
        }
        return tableInfo;
    }
    console.log(createTableInfo());
if(listType === "warehouse"){
  return (
    <table className="list__table">
        <thead className="list__header">
            <tr className="list__row">
                {listheader.map((headerTitle) => (
                    <th className="list__columnheader" key={headerTitle.id}>
                        {headerTitle.header}
                    </th>
                ))}    
            </tr>
        </thead>
        <tbody className="list__body">
        {tableInfo.map((data) => (
            <tr className="list__records" key={data.id}>
                <td className="list__detail list__detail--left">{data.warehouseName}<img className="list__img" src={arrowImg} alt="expand details button"></img></td>
                <td className="list__detail list__detail--smaller">{data.address}</td>
                <td className="list__detail">{data.contactName}</td>
                <td className="list__detail list__detail--larger">{data.contactInformation}</td>
                <td className="list__actions">
                    <img src={deleteImg} alt="delete button"></img>
                    <img src={editImg} alt="edit button"></img>
                </td>
            </tr>
        ))}
        </tbody>
    </table>
  )
  index++;
} else {
    return (
        <table className="list__table">
            <thead className="list__header">
                <tr className="list__row">
                    {listheader.map((headerTitle,index) => (
                        <th className="list__columnheader" key={headerTitle}>
                            {headerTitle}
                        </th>
                    ))}    
                </tr>
            </thead>
            <tbody className="list__body">
            {listData.map((data) => (
                <tr className="list__records" key={data.id}>
                    <td className="list__detail list__detail--left">{data.item_name}<img className="list__img" src={arrowImg} alt="expand details button"></img></td>
                    <td className="list__detail list__detail--smaller">{data.category}</td>
                    <td className="list__detail">{data.status}</td>
                    <td className="list__detail list__detail--larger">{data.quantity}</td>
                    <td className="list__detail">{data.warehouse_name}</td>
                    <td className="list__actions">
                        <img src={deleteImg} alt="delete button"></img>
                        <img src={editImg} alt="edit button"></img>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
      )
}
}

export default Table;