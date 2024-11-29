import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import RightSidebar from '../RightSidebar/RightSidebar'
import QuestionsDetails from './QuestionsDetails'

const DisplayQuestions = () => {
  return (
    <div className='home-container-1'>
    <LeftSidebar />
    <div className='home-container-2'>
        <QuestionsDetails/>
        <RightSidebar />
    </div>  
</div>
      
  )
}

export default DisplayQuestions
