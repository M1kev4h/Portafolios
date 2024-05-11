import React from 'react'
import './Trabajo.css'
import { Card } from '../Components/TrabajoCard/Card'
import Tecnologias from '../../img/Tecnologias'
import Iinicio from '../../img/Inicio'


export const Trabajo = () => {
  const trabajosRealizados = [
    {
      descripcion:"Alex_Nails es una empresa de manicura,a la cual se le construyo un menu de registro e inicio de sesión como a su ves una forma de mostrar posibilidad, productos una lista de precios, galería de trabajos anteriores y una agenda para los clientes asi como una forma de pago.",
      Comercio: Iinicio.Alex_nails,
      tecnologias: [Tecnologias.html5,Tecnologias.css,Tecnologias.SASS,Tecnologias.JS,Tecnologias.REACT]
    },
  ];

  const trabajosEnDesarrollo = [

    {
      descripcion:"Alex_Nails es una empresa de manicura,a la cual se le construyo un menu de registro e inicio de sesión como a su ves una forma de mostrar posibilidad, productos una lista de precios, galería de trabajos anteriores y una agenda para los clientes asi como una forma de pago.",
      Comercio: Iinicio.Alex_nails,
      tecnologias: [Tecnologias.html5,Tecnologias.css,Tecnologias.SASS,Tecnologias.JS,Tecnologias.REACT]
    }
  ];

  return (
    <>
   <main id='Work' className='Trabajo'>
   <section className='Trabajo-Realizados'>
    <h2>Trabajos Realizados</h2>
    <div className='Cards'>
    {trabajosRealizados.map((trabajo, index) => (
            <Card key={index}  Comercio={trabajo.Comercio} descripcion={trabajo.descripcion} tecnologias={trabajo.tecnologias} />
          ))}
    
    </div>
    </section>
    
    <section className='Trabajo-Desarrollo'>
    <h2>Trabajos En Desarollo</h2>
    <div className='Cards'>
    {trabajosEnDesarrollo.map((trabajo, index) => (
            <Card key={index} descripcion={trabajo.descripcion} Comercio={trabajo.Comercio}  tecnologias={trabajo.tecnologias} />
          ))}
    </div>
    </section>
   </main>
    </>
  )
}
 