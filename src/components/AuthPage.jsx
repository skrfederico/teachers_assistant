import React, { useState } from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from '../pages/Login'

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true)
  return (
    <main className="">
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 'SIGN UP' : 'LOG IN'}
        </h3>
      </div>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  )
}
