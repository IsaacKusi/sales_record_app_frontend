import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";
import api from '../../api/post';
import { format } from 'date-fns';


const NewRecord = () => {
    const { sales, userAccess, setSales } = useContext(DataContext)
    const [amountItem, setAmountItem] = useState('')
    const [invalid, setInvalid] = useState(false)

    const addRecordHandler = async (e) => {
        e.preventDefault()
        if (amountItem === '') {
            setInvalid(true)
            setTimeout(()=>setInvalid(false), 1500)
        } else {
            try {
                const id = sales.length ? sales[sales.length - 1].item_id + 1 : 1;
                const dateTime = (format(new Date(), 'MMMM dd,yyyy pp')).toString();
                const newSalesObject = { date_str: dateTime, amount: parseInt(amountItem), user_id: userAccess.user_id, item_id: id }
                const response = await api.post('/api/sale', newSalesObject, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                const newSaleItem = [...sales, response.data]
                setSales(newSaleItem)
                setAmountItem('')

            } catch (err) {
                if (err) {
                    console.log(err.response.data)
                    console.log(err.response.status)
                    console.log(err.response.headers)
                } 
            }
        }
    }


    return <>
        <main className="add-record-form">
            <form onSubmit={addRecordHandler} >
                <input type="Number" placeholder="Amount" min={0} className="add-input"
                    value={amountItem} onChange={(e) => setAmountItem(e.target.value)} />
                <button className="newRecord-button">Add Record</button>
            </form>
            {invalid && <p style={{color:'red', fontSize:'small'}}>The amount field cannot be empty</p>}
        </main>
    </>
}

export default NewRecord;