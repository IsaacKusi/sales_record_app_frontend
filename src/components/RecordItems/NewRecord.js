import { useContext, useState} from "react";
import DataContext from "../../context/DataContext";
import { format } from 'date-fns';


const NewRecord = () => {
    const { sales,userAccess,setSales } = useContext(DataContext)
    const [amountItem, setAmountItem] = useState()

    const addRecordHandler = (e) => {
        e.preventDefault()
        const id = sales.length ? sales.length + 1 : 1 ;
        const dateTime = format(new Date(), 'MM dd,yyyy pp');
        const newSalesObject= {date:dateTime, amount:amountItem, user_id:userAccess.user_id, item_id:id}
        const newRecord = [...sales, newSalesObject]
        setSales(newRecord)
        setAmountItem('')
    }


    return <>
        <main className="add-record-form">
            <form onSubmit={addRecordHandler} >
                <input type="Number" placeholder="Amount" min={0} className="add-input"
                    value={amountItem} onChange={(e) => setAmountItem(e.target.value)} />
                <button className="newRecord-button">Add Record</button>
            </form>
        </main>
    </>
}

export default NewRecord;