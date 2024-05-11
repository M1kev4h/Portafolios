import './SobreMi.css'
import Iinicio from '../../img/Inicio'
import Tecnologias from '../../img/Tecnologias'

export const SobreMi = () => {
  return (
    <main id='User' className='SobreMi'>
      <section className='SobreMi-Container'>

        <article className='SobreMi-Container__Descripcion'>
          <img className='SobreMi-Container__Descripcion-Img' src={Iinicio.AvatarC} />
          <div className='SobreMi-Container__Descripcion-P'>
          <p >Soy un programador frontend junior
            proactivo y curioso, apasionado por
            aprender cosas nuevas y trabajar en
            equipo para desarrollar soluciones
            creativas y eficientes en el mundo
            digital.</p>
          <p>
            También me encuentro actualmente realizando trabajos prácticos como Frontend-React_Developer en una simulación de empleo real en No Country
          </p>
          </div>


        </article>

        <aside className='SobreMi-Container__Tecnologias'>
          <img className='SobreMi-Container__Tecnologias-Item' src={Tecnologias.html5} />
          <img className='SobreMi-Container__Tecnologias-Item' src={Tecnologias.css} />
          <img className='SobreMi-Container__Tecnologias-Item' src={Tecnologias.JS} />
          <img className='SobreMi-Container__Tecnologias-Item' src={Tecnologias.SASS} />
          <img className='SobreMi-Container__Tecnologias-Item' src={Tecnologias.REACT} />
          <img className='SobreMi-Container__Tecnologias-Item' src={Tecnologias.Git} />
        </aside>

        <div className='SobreMi-Container__Redes'>
          <a className='Red-Git2' href=""><img src={Iinicio.Git} alt="" /></a>
          <a className='Red-Linkedin2' href=""><img src={Iinicio.Linkedin} alt="" /></a>
          <a className='Red-Whatsapp2' href=""><img src={Iinicio.Whatsapp} alt="" /></a>
        </div>

      </section>
    </main >
  )
}
