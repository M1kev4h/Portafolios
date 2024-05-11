
import Iinicio from '../../img/Inicio'
import { NeonButton } from '../Components/NeonButton/NeonButton'
import { Redes } from '../Components/Redes/Redes'
import './Inicio.css'


export const Inicio = () => {
    return (
        <>
            <main id='Home' className='Inicio'>
                <div className='Inicio-Fondo'></div>
                <section className='Inicio-FlexContainer'>
                    <div className='Inicio-FlexContainer__Img'>
                    <img className='Inicio-FlexContainer__Avatar' src={Iinicio.Avatar} />
                    <Redes className='Inicio-FlexContainer__Redes'/>
                    </div>
                    <aside className='Inicio-FlexContainer__Info'>
                        <h1 className='Inicio-FlexContainer__Titulo'> Michael Venade</h1>
                        <div className='Inicio-FlexContainer__Presentacion'>
                            <p className='Inicio-FlexContainer__SubTitulo'> DESAROLLADOR FRONTEND JUNIOR</p>
                            <a className='Inicio-FlexContainer__Correo' href=''>Michaelvenadehuertas@gmail.com</a>
                        </div>
                       <NeonButton Texto = "Descargar CV" />

                    </aside>
                </section>
            </main>
        </>
    )
}
