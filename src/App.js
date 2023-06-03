import { AuthProvider } from './context/AuthContext';
import { AppMetaContextProvider } from './context/AppMetaContext';
import { RecordProvider } from './context/RecordContext';
import MainContainer from './components/MainContainer'


const App = () => {
  return (
    <>
      <AuthProvider>
        <RecordProvider>
          <AppMetaContextProvider>
            <MainContainer />
          </AppMetaContextProvider>
        </RecordProvider>
      </AuthProvider>
    </>
  );
}

export default App;
