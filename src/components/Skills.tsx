
import React,{useEffect} from 'react'

import { motion,useAnimation } from 'framer-motion'
import {useInView} from 'react-intersection-observer'



const Skills = () => {
  const {ref,inView}=useInView()
const animation= useAnimation()

useEffect(()=>{

if(inView){
   animation.start({
       y:0,
       opacity:1,
    transition:{
duration :0.5
    }
   })
}
if(!inView){
   animation.start({y:'20vh',opacity:0})
}


},[inView,animation])
  return (
    <motion.div className='skillsDiv'  ref={ref}  animate={animation} >
      <h3>My skills</h3>
      <div>
<img src={require('../images/html-5.png')}   alt=''></img>
<img src={require('../images/css-3.png')}   alt=''></img>
<img src={require('../images/java-script.png')}   alt=''></img>
</div>
<div >
<img src={require('../images/bootstrap.png')}   alt=''></img>
<img src={require('../images/atom.png')}  className='react' alt=''></img>
<img src={require('../images/typescript.png')}   alt=''></img>

</div>
<div>
<img src={require('../images/github.png')}   alt=''></img>
<img src={require('../images/nodejs.png')}   alt=''></img>
<img src={require('../images/database.png')}   alt=''></img>

</div>
    </motion.div>
  )
}

export default Skills