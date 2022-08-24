import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';





const Contact = () => {
  return (
    <>
    <h3 >Get in touch</h3>
    <div  className='contactDivMobile' id='contact'>
      <div>
      <a  target='_blank' rel='noreferrer' href='https://github.com/Fae-new'> <p>Github</p>  <GitHubIcon sx={{marginLeft:'4px',color:'#36454f'}}/> </a>
      <a href="mailto:faluyiaji@gmail.com"> <p> Email</p> <MailOutlineIcon sx={{marginLeft:'4px',color:'#4285f4'}}/> </a>
      </div>
      <div>
      <a href='tel:+2348123878400'> <p>Telephone</p> <ContactPhoneIcon sx={{marginLeft:'4px',color:'#34A853'}}/> </a>
      <a href="#contact"> <p> Twitter</p> <TwitterIcon  sx={{marginLeft:'4px',color:'#4285f4'}}/></a>
     </div>
    </div>

    <div  className='contactDiv'>
     
      <a  target='_blank' rel='noreferrer' href='https://github.com/Fae-new'> <p>Github</p>  <GitHubIcon sx={{marginLeft:'4px',color:'#36454f'}}/> </a>
      <a href="mailto:faluyiaji@gmail.com"> <p> Email</p> <MailOutlineIcon sx={{marginLeft:'4px',color:'#4285f4'}}/> </a>
     
      <a href='tel:+2348123878400'> <p>Telephone</p> <ContactPhoneIcon sx={{marginLeft:'4px',color:'#34A853'}}/> </a>
      <a href="#contact"> <p> Twitter</p> <TwitterIcon  sx={{marginLeft:'4px',color:'#4285f4'}}/></a>
    
    </div>
    
    </>
  )
}

export default Contact;
