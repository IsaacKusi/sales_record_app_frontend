
import { FaTrashAlt } from "react-icons/fa";

const RecordTableBody = ({items})=>{
 return <>
    <tr className="tbody-row">
        <td>{items.date}</td>
        <td>{items.amount}</td>
        <td><FaTrashAlt style={{color:'red'}}/></td>
    </tr>
 </>
}

export default RecordTableBody;