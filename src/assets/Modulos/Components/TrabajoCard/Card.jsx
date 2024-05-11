import './Card.css'


export const Card = ({Comercio,descripcion,tecnologias}) => {
  return (
    <section className='CardContainer'>

      <img className='CardContainer__Avatar' src= {Comercio} />

      <aside className='CardContainer-Descripcion'>

        <p className='CardContainer-Descripcion__Parrafo'>{descripcion}</p>

        <div className='CardContainer-Descripcion__Tecnologias' >
        
        {tecnologias.map((tecnologia, index) => (
            <img key={index} src={tecnologia} alt={`tecnología ${index}`}
             />
          ))}

        </div>

        <button className='CardContainer-Descripcion__Button'>Ver Web</button>

      </aside>


    </section>
  )
}
