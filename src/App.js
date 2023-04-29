import Login from './components/Login';
import Records from './components/Records';
import PrivateRoute from './utils/PrivateRoute';
import { Route, Switch } from "react-router-dom";
import { DataProvider } from './context/DataContext';
import './app.css'



const App = () => {


  return (
    <>
      <DataProvider>
        <Switch>
          <Route path='/login' component={Login} />
          <PrivateRoute path='/records' component={Records} />
        </Switch>
      </DataProvider>
    </>
  );
}

export default App;
