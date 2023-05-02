
import DataContext from "../../context/DataContext";
import RecordTableBody from "./RecordTableBody";
import { useContext } from "react";

const RecordTableContainer = () => {
 const{sales} = useContext(DataContext)
    return <>
        <main id="table-items">
            <div className="container-items">
                <table>
                    <thead className="table-head">
                        <tr>
                        <th className="table-date">Date</th>
                        <th className="table-amount">Amount(USD) </th>
                        <th className="table-actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       {sales?.map((items)=><RecordTableBody items={items} key={items.item_id}/>)}
                    </tbody>
                </table>
            </div>
        </main>
    </>
}

export default RecordTableContainer;