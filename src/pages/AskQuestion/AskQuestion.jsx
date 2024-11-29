import React, {useState} from 'react'
import './AskQuestion.css'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { askQuestion } from '../../action/questions.js'


const Askquestions = () => {
const [questionTitle, setQuestionTitle] = useState('')
const [questionBody, setQuestionBody] = useState('')
const [questionTags, setQuestionTags] = useState('')


const dispatch = useDispatch()
const User = useSelector((state) => (state.currentUserReducer))
const navigate = useNavigate()

const handleSubmit =(e) => {
  e.preventDefault()
 // console.log({questionTitle, questionBody, questionTags})
 dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted: User.result.name, userId: User?.result._id}, navigate))
}
const handleEnter= (e) => {
  if(e.key === 'Enter'){
  setQuestionBody(questionBody + '\n')
  }
}
  return (
    <div className='ask-ques'>
        <div className='ask-ques-container'>
          <h1>Ask a public question</h1>
          <form onSubmit={handleSubmit}>
            <div className='ask-form-container'>
              <label htmlFor='ask-ques-title'>
                <h4>Title</h4>
                <p>Be specific and imagine you are asking a question to another person</p>
                <input type='text' id='ask-ques-title' onChange={(e)=>{setQuestionTitle(e.target.value)}} placeholder='e.g. Is there a R function?'></input>
              </label>
              <label htmlFor='ask-ques-body'>
                <h4>Body</h4>
                <p>Include the information someone would need to answer your question</p>
                <textarea type='text' id='ask-ques-body' onChange={(e)=>{setQuestionBody(e.target.value)}} cols={30} rows={10} onKeyPress={handleEnter}></textarea>
              </label>
              
              <label htmlFor='ask-ques-tags'>
                <h4>Tags</h4>
                <p>Add upto 5 tags to describe what your question is about</p>
                <input type='text' id='ask-ques-tags' placeholder='e.g. xml(typescript wordpress)' onChange={(e)=>{setQuestionTags(e.target.value.split(' '))}}></input>
              </label>
            </div>
            <input type='submit' value='Review your question' className='review-btn'/>
          </form>
        </div>

    </div>
  )
  
     
  }

export default Askquestions
