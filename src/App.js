import './App.scss';
import Header from './Components/Header';
import CheckBox from './Components/CheckBox';
import { useState } from 'react';
import Table from './Components/Table';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <section className='main-section'>
          <Table />
        </section>
      </main>
    </div>
  );
}

export default App;
