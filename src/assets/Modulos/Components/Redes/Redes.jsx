import Iinicio from '../../../img/Inicio'
import './Redes.css'

export const Redes = () => {
    const Git = "https://github.com/M1kev4h"
    const Linkedin ="https://www.linkedin.com/in/michael-venade-1934112b1"
    const Whatsapp =""
    return (
        <div className='Redes'>
            <a className='Red-Git' href={Git} target='blank'><img src={Iinicio.Git} alt="" /></a>
            <a className='Red-Linkedin' href={Linkedin} target='blank'><img src={Iinicio.Linkedin} alt="" /></a>
            <a className='Red-Whatsapp' href={Whatsapp} target='blank'><img src={Iinicio.Whatsapp} alt="" /></a>
        </div>
    )
}
