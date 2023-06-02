import { DataProvider } from './context/DataContext';
import { AppMetaContextProvider } from './context/AppMetaContext';
import MainContainer from './components/MainContainer'

const App = () => {
  return (
    <>
      <DataProvider>
        <AppMetaContextProvider>
          <MainContainer />
        </AppMetaContextProvider>
      </DataProvider>
    </>
  );
}

export default App;
