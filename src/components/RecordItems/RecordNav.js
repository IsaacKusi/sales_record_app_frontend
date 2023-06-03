
import { useContext, useEffect } from "react"
import AuthContext from "../../context/AuthContext"
import { FaMoon, FaSun } from "react-icons/fa"
import AppMetaContext from "../../context/AppMetaContext"


const RecordNav = () => {
    const { logoutHandler, userAccess } = useContext(AuthContext)
    const { showNightMode, setShowNightMode, showLightMode,
        setShowLightMode, state, dispatch, setNightMode, setLightMode, nightMode, lightMode } = useContext(AppMetaContext)

    useEffect(() => {
        if (nightMode) {
            const nightModeHandler = () => {
                setShowLightMode(true)
                setShowNightMode(false)
                dispatch({ type: 'textColor', payload: 'white' })
                dispatch({ type: 'navBackgroundColor', payload: `orange` })
                dispatch({ type: 'buttonColor', payload: `orange` })
                dispatch({ type: 'mainBackgroundColor', payload: `#2a2b36` })
                dispatch({ type: 'recordContainerBackgound', payload: `#22232c` })
                dispatch({ type: 'shadowColor', payload: `black` })
                localStorage.setItem('nightModeStore', JSON.stringify(true))
                localStorage.setItem('lightModeStore', JSON.stringify(false))
            }
            nightModeHandler()
            setLightMode(false)
        }
    }, [dispatch, nightMode, setLightMode, setShowLightMode, setShowNightMode])


    useEffect(() => {
        if (lightMode) {
            const lightModeHandler = () => {
                setShowNightMode(true)
                setShowLightMode(false)
                dispatch({ type: 'textColor', payload: 'black' })
                dispatch({ type: 'navBackgroundColor', payload: `blue` })
                dispatch({ type: 'buttonColor', payload: `blue` })
                dispatch({ type: 'mainBackgroundColor', payload: `white` })
                dispatch({ type: 'recordContainerBackgound', payload: `white` })
                dispatch({ type: 'shadowColor', payload: `rgba(70, 68, 68, 0.7)` })
                localStorage.setItem('nightModeStore', JSON.stringify(false))
                localStorage.setItem('lightModeStore', JSON.stringify(true))
            }
           
            lightModeHandler()
            setNightMode(false)
        }
    }, [dispatch, lightMode, setNightMode, setShowLightMode, setShowNightMode])




    return <>
        <main id="record-nav-main" style={{ background: `linear-gradient(107.85deg, ${state.navBackgroundColor} -144.58%, ${state.navBackgroundColor} -144.58%, rgba(217, 217, 217, 0) 104.83%)` }}>
            <div className="record-child-h1" >
                <h1 style={{ color: state.textColor }}>Sales</h1>
            </div>
            <div className="record-child">
                {userAccess ? <p style={{ color: state.textColor }}>Welcome {userAccess.username} !!!</p> : null}
            </div>
            <div className="record-child">
                <div className="fa-items">
                   {showNightMode && <FaMoon className="fa-moon" onClick={() => setNightMode(true)} />} 
                    {showLightMode && <FaSun className="fa-sun" onClick={() => setLightMode(true)} style={{ color: state.textColor }} />}
                </div>

                <button style={{ backgroundColor: state.buttonColor }} onClick={logoutHandler}>Logout</button>
            </div>
        </main>
    </>
}

export default RecordNav;