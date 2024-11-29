import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import Avatar from '../Avatar/Avatar'
import './navbar.css'
import { setCurrentUser } from '../../action/currentUser'
import * as JWT from 'jwt-decode';


const Navbar= () => {
  const dispatch = useDispatch()
    var User= useSelector((state)=> (state.currentUserReducer))
const Navigate = useNavigate()

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'});
    Navigate('/')
    dispatch(setCurrentUser(null))
  }

  useEffect(() => {
    const token = User?.token
    if(token){
      const decodedToken = JWT(token)
      if(decodedToken.exp * 1000 < new Date().getTime()){
      handleLogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch])

  return (
    <nav className='main-nav'>
      <div className= 'navbar'>
        <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt='logo' height={25} width={120}/>
        </Link>
        <Link to='/about' className='nav-item nav-btn'>About</Link>
        
        <Link to='/ForTeams'className='nav-item nav-btn'>For Teams</Link>
        <form>
            <input type='text' placeholder='Search...'/>
            <img src={search} alt="search" width={18} className='search-icon'/>
        </form>
        { User===null ? 
        <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
        <>
        <Avatar backgroundColor='#f19c60' px= "10px" py="7px" borderRadius="50%" color='white'><Link to={`/Users/${User?.result._id}`} style={{color: "white", textDecoration: "none", paddingRight: "3px", paddingLeft: "3px"}} >{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
        <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
        </>
        }
        
      </div>
      
    </nav>
   
  )
}

export default Navbar
