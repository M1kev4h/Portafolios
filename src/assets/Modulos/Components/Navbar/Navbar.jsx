import React, { useEffect, useState } from 'react';
import Images from '../../../img/Images';
import './Navbar.css';

export const Navbar = ({ visible }) => {
  const [animacionClass, setAnimacionClass] = useState('');
  const [homeActivo, setHomeActivo] = useState(true);
  const [workActivo, setWorkActivo] = useState(false);
  const [userActivo, setUserActivo] = useState(false);
  const [phoneActivo, setPhoneActivo] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [icono, setIcono] = useState(false);
  

  const Push = (id) => {
    if (id === 'home') {
      setHomeActivo(!homeActivo);
      setWorkActivo(false);
      setUserActivo(false);
      setPhoneActivo(false);
    } else if (id === 'work') {
      setWorkActivo(!workActivo);
      setHomeActivo(false);
      setUserActivo(false);
      setPhoneActivo(false);
    }else if (id === 'user') {
      setUserActivo(!userActivo);
      setHomeActivo(false);
      setWorkActivo(false);
      setPhoneActivo(false);
    }else if (id === 'phone') {
        setPhoneActivo(!phoneActivo);
        setHomeActivo(false);
        setUserActivo(false);
        setWorkActivo(false);
    }    
    setIcono(!icono);
    setShadow(!shadow);
  };

  

  useEffect(() => {
    if (visible) {
      setAnimacionClass('visible');
    } else {
      setAnimacionClass('hidden');
    }
  }, [visible]);
  return (
    <nav className={`Container-NavBar ${animacionClass}`}>
    <div className="Container-NavBar__Images">
      <a
        href='#Home'
        className={`Container-NavBar__Image
         ${homeActivo  ? 'activo' : ''}`}
        onClick={() => Push('home')}
      >
        <img className={`Container-NavBar__Img1 
        ${homeActivo ? 'activo1' : ''}`} 
        src={homeActivo ? Images.HomeCopy : Images.Home} 
        alt="" />
      </a>
      <a href='#Work'
        className={`Container-NavBar__Image 
        ${workActivo ? 'activo' : ''} `}
        onClick={() => Push('work')}
      >
        <img className={`Container-NavBar__Img2 
        ${workActivo ? 'activo2' : ''}`}  
        src={workActivo ? Images.WorkCopy : Images.Work} 
        alt="" />
       
      </a>

      <a href='#User'
      className={`Container-NavBar__Image 
      ${userActivo ? 'activo' : ''} `}
      onClick={() => Push('user')}>
        
        
        <img 
        className={`Container-NavBar__Imgen3 
        ${userActivo ? 'activo3' : ''}`}   
        src={userActivo ? Images.UserCopy:Images.User} 
        alt="" />
      </a>

      <a href='#Phone'
      className={`Container-NavBar__Image 
      ${phoneActivo ? 'activo' : ''} `}
      onClick={() => Push('phone')}>

      <img 
      className={`Container-NavBar__Img4 
      ${phoneActivo ? 'activo4' : ''}`}  
      src={phoneActivo ? Images.PhoneCopy : Images.Phone} 
      alt="" />

      </a>
    </div>
  </nav>
);
};