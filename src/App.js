import './App.scss';
import Header from './Components/Header';
import Table from './Components/Table';
import CompaniesList from './Pages/CompaniesList';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <section className='main-section'>
          <CompaniesList />
        </section>
      </main>
    </div>
  );
}

export default App;
