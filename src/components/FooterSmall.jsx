import React from 'react'
import UserLogOut from './UserLogOut'

export default function FooterSmall({ user, setUser }) {
  return (
    <>
      <footer className="w-full bottom-0 bg-zinc-500">
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-gray-700" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="my-2 flex flex-col items-center">
                <UserLogOut
                  user={user}
                  setUser={setUser}
                  className="text-xl mb-2"
                />
                <div className="text-sm text-white">{user.email}</div>
              </div>
              <div className="text-sm text-red font-semibold py-1"></div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <button
                    onClick={() => window.history.back()}
                    className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Back
                  </button>{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
