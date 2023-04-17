import React, { useState } from 'react'
import './App.css'

import LandingPage from './pages/LandingPage'
import GroupPage from './pages/GroupPage'
import StudentPage from './pages/StudentPage'
import TodaysDate from './components/TodaysDate'
// import RateStudentPage from './pages/RateStudentPage'
import ReportPage from './pages/ReportPage'
import RegisterPage from './pages/RegisterPage'
import FooterSmall from './components/FooterSmall'

//State provider
import { ProvideController } from './Controller'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './components/AuthPage'
import { getUser } from '../src/utilities/users-service'

function App() {
  // REMOVE {} / getUser() TO MAKE USER FALSEY AND ACCESS WITHOUT AUTH
  // const [user, setUser] = useState()
  const [user, setUser] = useState(getUser())
  return (
    <div className="App">
      <ProvideController>
        {user ? (
          <>
            <TodaysDate />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/groups/:id" element={<GroupPage />} />
              <Route path="/students/:id" element={<StudentPage />} />
              <Route path="/report/:id" element={<ReportPage />} />
              <Route path="/registers/:id" element={<RegisterPage />} />
            </Routes>
            <FooterSmall user={user} setUser={setUser} />
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </ProvideController>
    </div>
  )
}

export default App
