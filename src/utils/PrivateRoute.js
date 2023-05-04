
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const PrivateRoute = ({children, ...rest})=>{
    const{userAccess} = useContext(DataContext)
    return <>
     <Route {...rest}>
        {!userAccess ? <Redirect to='/'/> : children}
        </Route>
    </>
}

export default PrivateRoute;