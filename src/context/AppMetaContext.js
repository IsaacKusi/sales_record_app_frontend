
import { createContext } from "react";




const AppMetaContext = createContext({})

export const AppMetaContextProvider = ({children})=>{

    return <>
    <AppMetaContext.Provider value={{

    }}>
        {children}
    </AppMetaContext.Provider>
    
    </>
}

export default AppMetaContext;