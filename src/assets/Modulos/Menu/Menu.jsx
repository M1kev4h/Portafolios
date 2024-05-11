import { Header } from '../Components/Header/Header'
import { Navbar } from '../Components/Navbar/Navbar'
import './Menu.css'
import { useState } from 'react'
import { BackGround } from '../Components/BackGround/BackGround'
export const Menu = ({ setNavMargen }) => {

  const [navbarVisible,setNavbarVisible] = useState (true)
  return (
    
    <div className="Menu">
    <BackGround />
    <Header setNavMargen={setNavMargen} setNavbarVisible={setNavbarVisible} />
    <Navbar visible={navbarVisible}/>
    </div>
  
  )
}
