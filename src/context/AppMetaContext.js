
import { createContext } from "react";
import { useState,useReducer, useEffect } from "react";

const initialColorStates = {
    textColor:'',
    buttonColor: '',
    mainBackgroundColor: '',
    navBackgroundColor: '',
    recordContainerBackgound: '',
    shadowColor:'',
}

const reducer = (state,action)=>{
  switch(action.type){
    case 'textColor': return {...state, textColor:action.payload }
    case 'buttonColor': return {...state, buttonColor:action.payload }
    case 'mainBackgroundColor': return {...state, mainBackgroundColor:action.payload }
    case 'navBackgroundColor': return {...state, navBackgroundColor:action.payload }
    case 'recordContainerBackgound': return {...state, recordContainerBackgound:action.payload }
    case 'shadowColor': return {...state, shadowColor:action.payload }

    default:throw new Error()
  }

}


const AppMetaContext = createContext({})

export const AppMetaContextProvider = ({children})=>{
    const [showNightMode, setShowNightMode]= useState(false)
    const [showLightMode, setShowLightMode] = useState (true)
    const [nightMode, setNightMode] = useState(false)
    const [lightMode, setLightMode] = useState(false)
    const [state, dispatch] = useReducer(reducer, initialColorStates)

    useEffect(()=>{
        setNightMode(JSON.parse(localStorage.getItem('nightModeStore')))
        setLightMode(JSON.parse(localStorage.getItem('lightModeStore')))
    },[])

    return <>
    <AppMetaContext.Provider value={{
        showNightMode, setShowNightMode,showLightMode, setShowLightMode, state,dispatch,
        nightMode, setNightMode,lightMode, setLightMode
    }}>
        {children}
    </AppMetaContext.Provider>
    
    </>
}

export default AppMetaContext;