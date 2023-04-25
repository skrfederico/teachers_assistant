import React, { useState, useEffect } from 'react'
import './App.css'

import LandingPage from './pages/LandingPage'
import GroupPage from './pages/GroupPage'
import StudentPage from './pages/StudentPage'
import TodaysDate from './components/TodaysDate'
import ReportPage from './pages/ReportPage'
import RegisterPage from './pages/RegisterPage'
import FooterSmall from './components/FooterSmall'
import AuthPage from './pages/AuthPage'

//State provider
import { Route, Routes } from 'react-router-dom'
import { getUser } from '../src/utilities/users-service'
import { useGroupsStore } from './store'
import { useStudentsStore } from './store'
import { useRegistersStore } from './store'

function App() {
  // REMOVE {} / getUser() TO MAKE USER FALSEY AND ACCESS WITHOUT AUTH
  // const [user, setUser] = useState()
  const [user, setUser] = useState(getUser())
  const { getAllGroups } = useGroupsStore()
  const { getAllStudents } = useStudentsStore()
  const { getAllRegisters } = useRegistersStore()
  useEffect(function () {
    Promise.all([getAllGroups(), getAllStudents(), getAllRegisters()])

      // Promise.all([
      //   getAllGroups({ createdBy: user.id }),
      //   getAllStudents({ createdBy: user.id }),
      //   getAllRegisters({ createdBy: user.id })
      // ])

      .then()
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div className="App">
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
    </div>
  )
}

export default App
