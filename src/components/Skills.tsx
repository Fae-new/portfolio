
import React from 'react'



const Skills = () => {
  return (
    <div className='skillsDiv'>
      <h3>My skills</h3>
      <div>
<img src={require('../images/html-5.png')}   alt=''></img>
<img src={require('../images/css-3.png')}   alt=''></img>
<img src={require('../images/java-script.png')}   alt=''></img>
</div>
<div>
<img src={require('../images/bootstrap.png')}   alt=''></img>
<img src={require('../images/atom.png')}  className='react' alt=''></img>
<img src={require('../images/typescript.png')}   alt=''></img>

</div>
<div>
<img src={require('../images/github.png')}   alt=''></img>
<img src={require('../images/nodejs.png')}   alt=''></img>
<img src={require('../images/database.png')}   alt=''></img>

</div>
    </div>
  )
}

export default Skills