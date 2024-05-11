import './Contactame.css'
import { useState } from 'react'


export const Contactame = () => {

  const [inputValue, setInputValue] = useState('Michaelvenadehuertas@gmail.com')

  const handleInputChange= (event) => {
    setInputValue(event.target.value)
  }

  const  copyToClipboard= () => {
    const input = document.getElementById('Correo')
    input.select()
    navigator.clipboard.writeText(input.value)
    .then(() => {
      console.log('Texto copiado al portapapeles');
    })
    .catch((err) => {
      console.error('Error al copiar el texto: ', err);
    })
    
  }
  const openEmailClient = () => {
    const emailAddress = inputValue;
    const mailtoLink = `mailto:${emailAddress}`;
    window.open(mailtoLink, '_blank');
  }
  return (
    <main id='Phone' className='Contactame'>
        <footer className='Contactame-Container'>
            <form action="">
                <input  id='Correo' className='Contactame-Container__Imput' type="email" value={inputValue} readOnly />
                <button type="button" 
                onClick={copyToClipboard}
                className='Contactame-Container__Btn-Copiar'>Copiar</button>
                <a href='mailto:Michaelvenadehuertas@gmail.com' target='blank'
                className='Contactame-Container__Btn-Contactar'>Contactar</a>
            </form>
           
        </footer>
    </main>
  )
  }

