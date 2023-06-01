
import { useContext } from "react"
import DataContext from "../../context/DataContext"
import { FaMoon, FaSun } from "react-icons/fa"


const RecordNav = () => {
    const { logoutHandler, userAccess } = useContext(DataContext)

    return <>
        <main id="record-nav-main">
            <div className="record-child-h1">
                <h1>Sales</h1>
            </div>
            <div className="record-child">
                {userAccess ? <p>Welcome {userAccess.username}</p> : null}
            </div>
            <div className="record-child">
                <div className="fa-items">
                    <FaMoon className="fa-moon" />
                    <FaSun className="fa-sun" />
                </div>

                <button onClick={logoutHandler}>Logout</button>
            </div>
        </main>
    </>
}

export default RecordNav;