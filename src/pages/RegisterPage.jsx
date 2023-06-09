import React, { useEffect, useState } from 'react'
// import { act } from 'react-dom/test-utils'
import { useParams } from 'react-router-dom'
import { useRegistersStore } from '../store'

export default function RegisterPage() {
  const { id } = useParams()

  const { getSingleRegister } = useRegistersStore()

  const [loading, setLoading] = useState(false)
  const [activeRegister, setActiveRegister] = useState()

  const fetchAndLoadRegister = async () => {
    setLoading(true)
    try {
      const register = await getSingleRegister(id)
      setActiveRegister(register)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAndLoadRegister()
  }, [])

  useEffect(() => {}, [activeRegister])

  return (
    <div>
      {loading && <p>loading...</p>}
      {!loading && activeRegister && (
        <>
          <main className="profile-page">
            <section className="relative block" style={{ height: '500px' }}>
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
                }}
              ></div>
              <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                style={{ height: '70px' }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-gray-300 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
            </section>
            <section className="relative py-16 bg-gray-300">
              <div className="container mx-auto px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                  <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div className="relative"></div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4 lg:order-1">
                        <div className="flex justify-center py-4 lg:pt-4 pt-8"></div>
                      </div>
                    </div>
                    <div className="text-center mt-12">
                      <h2 className="text-3xl">
                        {activeRegister.student.body}
                      </h2>
                      <p>Group: {activeRegister.group.body}</p>
                      <h4 className="text-2xl">
                        {new Date(activeRegister.date).toLocaleDateString()}
                      </h4>
                    </div>
                    <div className="mt-10 py-10 border-t border-gray-300 text-center">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12 px-4">
                          <div>
                            <p>
                              Attendance:{' '}
                              {activeRegister.attendance ? (
                                <i className="fas fa-check-square"></i>
                              ) : (
                                <i className="fas fa-times"></i>
                              )}
                            </p>
                            <p>
                              Homework Completion:{' '}
                              {activeRegister.hwCompletion ? (
                                <i className="fas fa-check-square"></i>
                              ) : (
                                <i className="fas fa-times"></i>
                              )}
                            </p>
                            <p>Participation: {activeRegister.participation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </div>
  )
}
