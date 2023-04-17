import React from 'react'
import UserLogOut from './UserLogOut'

export default function FooterSmall(props, user, setUser) {
  return (
    <>
      <footer className="w-full bottom-0 bg-gray-900">
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-gray-700" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-red font-semibold py-1">
                {/* Copyright © {new Date().getFullYear()}{' '} */}
                {/* <button onClick={handleLogout}>Log Out</button> */}
                <UserLogOut user={user} setUser={setUser} />
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <button
                    onClick={() => window.history.back()}
                    className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                  >
                    Back
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
