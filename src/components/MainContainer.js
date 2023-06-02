import Login from './Login';
import Records from './Records';
import PrivateRoute from '../utils/PrivateRoute';
import { Route, Switch } from "react-router-dom";
import { useContext } from 'react';
import AppMetaContext from '../context/AppMetaContext';
import './MainContainer.css'

const MainContainer = () => {
    const { state} = useContext(AppMetaContext)

    return <div id='main-container' style={{backgroundColor:state.mainBackgroundColor}}>
        <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute path='/records' component={Records} />
        </Switch>
    </div>
}


export default MainContainer;