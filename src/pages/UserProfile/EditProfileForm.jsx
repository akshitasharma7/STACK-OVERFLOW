import React, {useState} from 'react'
import './UsersProfile.css'
import {useDispatch} from 'react-redux'
import { updateProfile } from '../../action/users'


const EditProfileForm = ({currentUser, setSwitch}) => {
    const [name, setName] = useState(currentUser?.result?.name)
    const [about, setAbout] = useState(currentUser?.result?.about)
    const [tags, setTags] = useState([])
    

    const dispatch = useDispatch()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if(tags.length === 0){
        dispatch(updateProfile(currentUser?.result?._id, {name, about, tags: currentUser?.result?.tags}))
      } else {
        dispatch(updateProfile(currentUser?.result?._id, {name, about, tags}))
      } 
      setSwitch(false)
    }
  
  
        
  return (
    <div>
      <h1 className='edit-profile-title-1'>
        Edit Your Profile
      </h1>
      <h2 className='edit-profile-title-2'>
        Public Information
      </h2>
      <form className='edit-profile-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>
        <h3>Display Name</h3>
        <input type='text' value={name} id= 'name'onChange={(e) => setName(e.target.value)}/>
        </label>
        <label htmlFor='about'>
            <h3>About Me</h3>
            <textarea id='about' cols='30' rows='10' value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
        </label>
        
        
        <br />
        <input type='submit' value='Save profile' className='user-submit-btn' /> 
        <button type='button' className='user-cancel-btn' onClick={() => setSwitch(false)}>Cancel</button>
      </form>
    </div>
  )
  
  }
export default EditProfileForm
