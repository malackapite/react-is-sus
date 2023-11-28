import React, { useState } from 'react';
import './App.css';
import { adatLista } from './komponens/adatok.jsx';
import { Kep } from './komponens/kep.jsx';

function App() {
  const [kepIndex, setNagykep] = useState(0);
  
  function nagyKepCsere(id){
    console.log("nagyKepCsere",id);
    setNagykep(id);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
      </header>
      <article>

        <div className='fokep'>
          <h3>Kép címe</h3>
          <div className='kep'>
            <Kep adat={adatLista[kepIndex]} />
          </div>
          <p>Leírás</p>
        </div>

        <div className='galeria'>
        {
            adatLista.map((adat, index) => {
              return <Kep key={index} adat={adat} nagyKepCsere={nagyKepCsere}/>
            })
        }
        </div>
      </article>

      <footer>
        ඞඞඞඞඞඞඞඞඞඞඞඞඞඞ
      </footer>
    </div>
  );
}

export default App;
