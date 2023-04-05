import React from 'react'
import './App.css'

//State provider
import { ProvideController } from './Controller'
import { Route, Routes } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import GroupPage from './pages/GroupPage'
import StudentPage from './pages/StudentPage'
import TodaysDate from './components/TodaysDate'
import RateStudentPage from './pages/RateStudentPage'

function App() {
  return (
    <div className="App">
      <ProvideController>
        <TodaysDate />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/groups/:id" element={<GroupPage />} />
          <Route path="/students/:id" element={<StudentPage />} />
          <Route
            path="/registers"
            // path="/groups/:id/rate-students"
            element={<RateStudentPage />}
          />
        </Routes>
      </ProvideController>
    </div>
  )
}

export default App
