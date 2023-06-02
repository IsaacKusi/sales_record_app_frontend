
import DataContext from "../../context/DataContext";
import AppMetaContext from "../../context/AppMetaContext";
import RecordTableBody from "./RecordTableBody";
import { useContext } from "react";

const RecordTableContainer = () => {
 const{sales} = useContext(DataContext)
 const{state} = useContext(AppMetaContext)
    return <>
        <main id="table-items">
            <div className="container-items" style={{backgroundColor:state.recordContainerBackgound,  boxShadow:`17px 28px 53px -17px ${state.shadowColor}`}}>
                <table>
                    <thead className="table-head">
                        <tr style={{color: state.textColor}}>
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