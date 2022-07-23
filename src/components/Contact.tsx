import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
const Contact = () => {
  return (
    <>
    <h3>Get in touch</h3>
    <div className='contactDiv'id='contact'>
      <a href="mailto:faluyiaji@gmail.com"><MailOutlineIcon sx={{fontSize:'40px',color:'#4285f4'}}/></a>
      <a href='tel:+2349166167371'><ContactPhoneIcon sx={{fontSize:'40px',color:'#34A853'}}/></a>
       <TwitterIcon  sx={{fontSize:'40px',color:'#4285f4'}}/>
      <a  target='_blank' rel='noreferrer' href='https://github.com/Fae-new'><GitHubIcon sx={{fontSize:'40px',color:'#36454f'}}/></a>


    </div>
    </>
  )
}

export default Contact;