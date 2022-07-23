import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



export default function Header() {
  const [toggleNav,setToggleNav]=useState<boolean>(false)
  return (
    <>
    <nav id='nav'>
        <h1>Jibola</h1>
        <div className='textnav'>
          <p>Projects</p>
          <p>About me</p>
          <a href="#contact"><p>Contact</p></a>
        
        </div>
{toggleNav?<CloseIcon onClick={()=>{setToggleNav(prev=>!prev)}} id='toggleNav'/>: 
<MenuIcon  onClick={()=>{setToggleNav(prev=>!prev)}} id='toggleNav'/>}
    </nav>
  
    <div className={toggleNav?'mobileNav':'mobileNav-off'}>
         <p>Projects</p>
          <p>About me</p>
          <a href="#contact"> <p>Contact</p></a>
    
        </div>
    </>
  )
}
