import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './components/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestions from './components/Questions/DisplayQuestions'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'
import EditProfileForm from './pages/UserProfile/EditProfileForm'
import About from './pages/About/About'
import ForTeams from './pages/ForTeams/ForTeams'
const AllRoutes = ({ slideIn, handleSlideIn }) => {
  return (
   <Routes>
        <Route
        path="/"
        element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route
        path="/Questions"
        element={<Questions slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Questions/:id"
        element={
          <DisplayQuestions slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route
        path="/Tags"
        element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Users"
        element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Users/:id"
        element={
          <UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route
        path="/EditProfile"
        element={
          <EditProfileForm slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route
        path="/About"
        element={
          <About slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route
        path="/ForTeams"
        element={
          <ForTeams slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
    </Routes>
  )
}

export default AllRoutes
