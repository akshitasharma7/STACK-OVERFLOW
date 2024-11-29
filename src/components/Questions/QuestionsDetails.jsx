import React, {useState} from 'react'
import { Link, useParams, useNavigate, useLocation} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import copy from 'copy-to-clipboard'

import upvote from '../../assets/upvote.jpg'
import downvote from '../../assets/downvote.jpg'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswers from './DisplayAnswers'
import { postAnswer } from '../../action/questions'
import { deleteQuestion, voteQuestion } from '../../action/questions'



const QuestionsDetails= () => {
 const {id} = useParams()
 const questionList = useSelector((state) => state.questionsReducer)
 //console.log(questionList)
 const [Answer, setAnswer] = useState(' ')
 const Navigate = useNavigate()
 const dispatch = useDispatch()
 const location = useLocation()
 const User = useSelector((state) => (state.currentUserReducer))
 const url ='http://localhost:3000'
 const[videos, setVideos] = useState([]);

 const handleShare = () => {
    copy(url+location.pathname)
    alert('Copied URL:'+url+location.pathname)
 }
 const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate))
 }
 const handleUpVote = () => {
    dispatch(voteQuestion(id, 'upVote', User.result._id))
 }
 const handleDownVote = () => {
    dispatch(voteQuestion(id, 'downVote', User.result._id))
 }

 const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (User === null ){
    alert ('Login or Signup to answer a question')
    Navigate('/Auth'); }
    else{
        if(Answer === ''){
        alert ('Enter an answer before submitting')
    } else {
        dispatch(postAnswer({id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id}))
        //setAnswer('');
    }
 }
 
}
        
    
  return (
   
      <div className='question-details-page'>
        {
            questionList.data === null ?
            <h1>Loading...</h1> :
            <>
                {
                    questionList.data.filter(question => question._id === id).map(question => (
                        <div key={question._id}>
                            <section className='question-details-container'>
                                <h1>{question.questionTitle}</h1>
                                <div className='question-details-container-2'>
                                    <div className='question-votes'>
                                        <img src={upvote} alt='upvote' width={23} className='votes-icon' onClick={handleUpVote}/>
                                        <p>{question.upVote.length - question.downVote.length}</p>
                                        <img src={downvote} alt='downvote' width={23} className='votes-icon' onClick={handleDownVote}/>
                                    </div>
                                    <div style={{width: '100%'}} >
                                    <p className='question-body'>{question.questionBody}</p>
                                    <div className='question-details-tags'>
                                        {
                                            question.questionTags.map((tag)=> (
                                                <p key={tag}>{tag}</p>
                                            )
                                                
                                            )
                                        }
                                    </div>
                                    <div className='question-actions-user'>
                                        <div>
                                        <button type='button' className='edit-question-btn' onClick={handleShare}>Share</button>
                                        {
                                            User?.result?._id === question?.userId && (
                                        
                                        <button type='button' className='edit-question-btn' onClick={handleDelete}>Delete</button>
                                            )
                                        }
                                        </div>
                                        
                                    
                                    <div>
                                        <p>asked {moment(question.askedOn).fromNow()}</p>
                                        <Link to={`/Users/${question.userId}`} className='user-link' style={{color: '#0086d8', textDecoration: 'none'}}>
                                        <Avatar backgroundColor= 'orange' px='8px' py='5px' borderRadius='4px'>
                                            {question.userPosted.charAt(0).toUpperCase()}
                                        </Avatar>
                                        <div>
                                            {question.userPosted}
                                        </div>
                                        </Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                
                            </section>
                            
                                    
                            {
                                
                                question.noOfAnswers != 0 && (
                                    <section>
                                        <h3>{question.noOfAnswers} answers</h3>
                                        <DisplayAnswers key={question._id} question={question} handleShare= {handleShare}/>
                                    </section>
                                )
                            }
                            
                            <section className='post-ans-container'>
                                <h3>Your Answer</h3>
                                <form onSubmit={ (e) =>{handlePostAns(e, question.answer.length) ;
                                }}>
                                    <textarea name='' id='' cols='30' rows='10' value={Answer} onChange= {(e) => setAnswer(e.target.value)} placeholder= 'Post Your Answer'></textarea><br />
                                <input type="Submit"className='post-ans-btn' value= 'Post Your Answer' />
                                </form>
                                <p>
                                    Browse other Question tagged
                                    {
                                        question.questionTags.map((tag) =>(
                                            <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                        ))
                                    } or
                                    <Link to='/AskQuestion' style={{textDecoration: 'none', color: '#009dff'}}> Ask your own question</Link>
                                </p>
                            </section>

                        </div>
                    ))
                }
            </>
        }
        
      </div>

  )}

export default QuestionsDetails
