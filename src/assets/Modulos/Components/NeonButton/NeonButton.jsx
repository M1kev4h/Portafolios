import { saveAs } from 'file-saver';
import { useState } from 'react';
import './NeonButton.css';

export const NeonButton = (prop) => {
  const [neonActivo, setneonActivo] = useState(false)
  
  const ClickNeon = () => {
    setneonActivo(!neonActivo)
    const PdfURL= 'src/assets/Cv Programador.pdf'
    saveAs(PdfURL,'Cv Programador.pdf')
  }

  return (
    <div className='Button-Container'>
        <button className={`NeonButton ${neonActivo ? 'Activo' : ''}`} onClick={ClickNeon}>{prop.Texto}</button>
    </div>
  )
}
