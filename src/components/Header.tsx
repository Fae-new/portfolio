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
        <a href='#projects'><p>Projects</p></a>
          <p>About me</p>
          <a href="#contact"><p style={{outline:'1px solid #a6e1fa',padding:'3px',borderRadius:'5px',marginTop:'13px',width:'70px',textAlign:'center'}}>Contact</p></a>
        
        </div>
{toggleNav?<CloseIcon onClick={()=>{setToggleNav(prev=>!prev)}} id='toggleNav'/>: 
<MenuIcon  onClick={()=>{setToggleNav(prev=>!prev)}} id='toggleNav'/>}
    </nav>
  
    <div className={toggleNav?'mobileNav':'mobileNav-off'}>
          <a href='#projects'><p>Projects</p></a>
          <p>About me</p>
          <a href="#contact"> <p style={{outline:'1px solid #a6e1fa',padding:'3px'}}>Contact</p></a>
    
        </div>
    </>
  )
}
