import {useEffect} from 'react'
import {projectData} from '../projectData'
import { motion,useAnimation } from 'framer-motion'
import {useInView} from 'react-intersection-observer'

const Projects = () => {

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
    animation.start({opacity:0,y:'20vh'})
}


},[inView,animation])


    return (
        <>

            <h2  id='projects'> My projects</h2>
            < motion.div ref={ref} className='projectDiv'  animate={animation}  >
            {projectData.map((project, index) => {
                return (<div  className='project' key={project.id}   >
                 

                 <img src={project.imgUrl} alt="" />
                    <h4>{project.name}</h4>
                    <div className='liveLink'>
                        <a href={project.links.live} target='_blank' rel='noreferrer' className='Link'> Live </a>
                        <a href={project.links.github}  target='_blank' rel='noreferrer' className='Link'>Github</a>

                    </div>
                </div>)

            })}
               </motion.div>
        </>
    )
}

export default Projects