import React from 'react'
import './UsersProfile.css'
import './ProfileBio.css'


const ProfileBio = ({currentProfile}) => {
  
  return (
    <div>
        
      <div className='profile-content'>
        {
            currentProfile?.about ? (
                <>
                    <h4 className='about-style'>About</h4>
                    <p>{currentProfile?.about}</p>
                </>
            ) : (
              <h4 className='about-style'>About</h4>
            )
        }
      </div>
    
      
      
      
    </div>
  )
}

export default ProfileBio
