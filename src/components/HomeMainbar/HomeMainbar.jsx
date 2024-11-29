import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import {useSelector} from 'react-redux'

const HomeMainbar = () => {
  const navigate= useNavigate();
  const location= useLocation();
  const user=1;

  const questionList = useSelector((state) => state.questionsReducer)
 //console.log(questionList)

  
  const checkAuth= () => {
    if(user === null){
      alert("Login or Signup to ask a question");
      navigate('/Auth');
    }
    else{
      navigate('/AskQuestion');
    }
  }
  
  
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
          <div className='fixed-txt' >Top Questions Asked By</div> 
          
          <ul className='moving-txt'>
            <li><span>Developers....</span></li>
            <li><span>Freelancers....</span></li>
            <li><span>Designers....</span></li>
            <li><span>Students....</span></li>
          </ul>
          
          
  
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionList.data === null ? <h1>Loading...</h1> :
          <>
            <p>{questionList.data.length} questions</p>
            <QuestionList questionList={questionList.data} />
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
