
import { createContext, useState} from "react";

const RecordContext = createContext({})

export const RecordProvider = ({children})=>{
   const [editSales, setEditSales] = useState()
    
    return <RecordContext.Provider value={{
        editSales, setEditSales
    }}>
        {children}
    </RecordContext.Provider>
}

export default RecordContext;