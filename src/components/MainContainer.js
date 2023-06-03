import Login from './Login';
import Records from './Records';
import PrivateRoute from '../utils/PrivateRoute';
import { Route, Switch } from "react-router-dom";
import { useContext } from 'react';
import AppMetaContext from '../context/AppMetaContext';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './MainContainer.css'

const MainContainer = () => {
    const { state} = useContext(AppMetaContext)

    return <>
    <HelmetProvider>
    <Helmet>
              <title>
                SRA
              </title>
              <meta name='description' content='record all your daily sales'/>
              <meta name='keywords' content='records, sales'/>
    </Helmet>
    </HelmetProvider>
    <div id='main-container' style={{backgroundColor:state.mainBackgroundColor}}>
        <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute path='/records' component={Records} />
        </Switch>
    </div>
    </>
}


export default MainContainer;