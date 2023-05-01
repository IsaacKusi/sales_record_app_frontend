
import { useContext } from "react"
import DataContext from "../../context/DataContext"


const RecordNav = () => {
    const {logoutHandler} = useContext(DataContext)

    return <>
        <main id="record-nav-main">
            <div className="record-child-h1">
                <h1>Sales</h1>
            </div>
            <div className="record-child">
                <p>Welcome Isaac</p>
            </div>
            <div className="record-child">
                <button onClick={logoutHandler}>Logout</button>
            </div>
        </main>
    </>
}

export default RecordNav;