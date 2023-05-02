
import { FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import api from '../../api/post';



const RecordTableBody = ({ items }) => {
    const { sales, setSales } = useContext(DataContext)

    const deleteHandler = async (ID, user) => {
        try {
            await api.delete(`api/sale/${ID}/${user}`)
            const newItems = sales.filter((sale) => (sale.item_id !== ID && sale.user_id === user))
            setSales(newItems)
        } catch (err) {
            if (err) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } else {
                console.log(err)
            }

        }

    }

    return <>
        <tr className="tbody-row">
            <td>{items.date_str}</td>
            <td>{items.amount}</td>
            <td><FaTrashAlt style={{ color: 'red', cursor:'pointer' }} onClick={() => deleteHandler(items.item_id, items.user_id)} /></td>
        </tr>
    </>
}

export default RecordTableBody;