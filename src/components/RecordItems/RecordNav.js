
import { useContext } from "react"
import DataContext from "../../context/DataContext"


const RecordNav = () => {
    const {logoutHandler, userAccess} = useContext(DataContext)

    return <>
        <main id="record-nav-main">
            <div className="record-child-h1">
                <h1>Sales</h1>
            </div>
            <div className="record-child">
               {userAccess? <p>Welcome {userAccess.username}</p> : null }
            </div>
            <div className="record-child">
                <button onClick={logoutHandler}>Logout</button>
            </div>
        </main>
    </>
}

export default RecordNav;