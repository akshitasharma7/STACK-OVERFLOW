import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/globe.png'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className='side-nav-links' activeClassName='active'>
                <p>Home</p>
            </NavLink>
            <div className='side-nav-div'>
                <div><p>PUBLIC</p></div>
                <NavLink to='/Questions' className='side-nav-links'activeClassName='active'>
                    <img src={Globe} alt="Globe" height={17} width={17}></img>
                    <p style={{paddingLeft: "10px"}}>Questions</p>
                </NavLink>
                <NavLink to='/Tags' className='side-nav-links'activeClassName='active'>
                <p style={{paddingLeft: "30px"}}>Tags</p>
                </NavLink>
                <NavLink to='/Users' className='side-nav-links'activeClassName='active'>
                <p style={{paddingLeft: "30px"}}>Users</p>
                </NavLink>
            </div>
        </nav>
      
    </div>
  )
}

export default LeftSidebar
