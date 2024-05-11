import './Header.css'
import Flecha from '../../../img/Flecha.webp'
import { useState } from 'react'

export const Header = ({setNavMargen,setNavbarVisible}) => {
      const [animacion, setAnimacion] = useState(0)
      const [headerMargin,setHeadermargin] = useState(0)

      const Giro = () => {
        setHeadermargin (headerMargin === -100 ? 0 : -100)
       setAnimacion(animacion+180)
       setNavMargen(prev => !prev)
       setNavbarVisible((prev) => !prev)
      }
  return (
    <header className= 'Container-Header' style={{marginLeft: `${headerMargin}px`}}>
      <div className="Container-Header__Images">
        <div className="Container-Header__Image" > 
        <img className='Container-Header__Img' src={Flecha} 
        style={{ transform: `rotate(${animacion}deg)`, transition: 'transform 0.5s' }}
        onClick={Giro} alt="Imagen" />
        </div>
      </div>
    </header>
  )
}

