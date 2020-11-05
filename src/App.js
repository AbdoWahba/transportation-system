import './App.scss';
import Header from './Components/Header';
import CompaniesList from './Pages/CompaniesList';
import { Route, BrowserRouter } from 'react-router-dom';
import TransportationsFormAdd from './Pages/TransportationsForm/TransportationsFormAdd';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCountries, getVihcle } from './store/actions';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVihcle());
    dispatch(getCountries());
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <main>
          <section className='main-section'>
            <Route exact path='/' component={CompaniesList} />
            <Route
              exact
              path='/companyDetails/add'
              component={TransportationsFormAdd}
            />
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
