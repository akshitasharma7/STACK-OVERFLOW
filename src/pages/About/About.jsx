import React from 'react'
import stackorange from '../../assets/stackorange.png'
import './About.css'

const about = () => {
  return (
    <div className='about'>
         <img src={stackorange} alt='logo' height={60} width={60}/>
      <div className='top-heading'>
      <h1> Empowering the world to develop technology </h1>
      </div>
      <div className='sub-heading'>
      <h1> through collective knowledge. </h1>
      </div>
      <div className='para'>
      <p> Our products and tools enable people to ask, share and learn at work or at home. </p>
      </div>
    </div>
    

  )
}

export default about
