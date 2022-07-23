
import {projectData} from '../projectData'

const Seconddiv = () => {

    return (
        <>

            <h2  id='projects'> My projects</h2>
            <div className='projectDiv'>
            {projectData.map((project, index) => {
                return (<div className='project'  id='proj' key={project.id}>
                    <img src={project.imgUrl} alt="" className='projectImg' />
                    <h4>{project.name}</h4>
                    <p className='projectDesc'>{project.desc}</p>
                  
                    
                    
                    <div className='liveLink'>
                        <a href={project.links.live} target='_blank' rel='noreferrer' className='Link'> Live </a>
                        <a href={project.links.github}  target='_blank' rel='noreferrer' className='Link'>Github</a>

                    </div>
                </div>)

            })}
               </div>
        </>
    )
}

export default Seconddiv