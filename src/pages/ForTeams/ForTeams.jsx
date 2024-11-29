import React from 'react'
import forteams from '../../assets/forteams.png'
import text from '../../assets/text.png'
import './ForTeams.css'

const ForTeams = () => {
  return (
    <div>
        <div className='pic'>
      <img src={forteams}  alt='forteams' height={700}/>
      <div className='text'>
      <img src={text} alt='text' height={200} width={600}/>
      </div>
      
      </div>
      
    </div>
  )
}

export default ForTeams
