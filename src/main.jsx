import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Inicio } from './assets/Modulos/Inicio/Inicio'
import { Trabajo } from './assets/Modulos/Trabajo/Trabajo'
import { Menu } from './assets/Modulos/Menu/Menu'
import { SobreMi } from './assets/Modulos/Sobre Mi/SobreMi'
import { Contactame } from './assets/Modulos/Contactame/Contactame'
import './main.css'

const App = () => {
  const [navMargen, setNavMargen] = useState(true);

  return (
    <React.StrictMode>
      <>
        <Menu setNavMargen={setNavMargen} />
        <main className={`MainContainer ${navMargen ? 'Activo' : ''}`}>
          <Inicio />
          <div className='FlexContainer'>
            <Trabajo />
            <SobreMi />
            <Contactame />
          </div>
        </main>
      </>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);