import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useController } from '../Controller'
import defaultImage from '../assets/img/default.jpeg'

export default function StudentPage() {
  const { id } = useParams()

  const {
    getSingleStudent,
    deleteStudent,
    updateStudent,
    getAllRegisters,
    registers
  } = useController()

  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(false)
  const [registersState, setRegistersState] = useState([])
  const [activeStudent, setActiveStudent] = useState({
    _id: '',
    body: '',
    group: '',
    email: '',
    telephone: '',
    address: '',
    imgUrl: ''
  })

  const [updatedBody, setUpdatedBody] = useState('')
  const [updatedEmail, setUpdatedEmail] = useState('')
  const [updatedTelephone, setUpdatedTelephone] = useState('')
  const [updatedAddress, setUpdatedAddress] = useState('')
  const [updatedImgUrl, setUpdatedImgUrl] = useState('')
  const [updatedGroup, setUpdatedGroup] = useState('')

  const fetchAndLoadRegisters = async () => {
    setLoading(true)
    try {
      // const registersFromDb = await getAllRegistersByStudentId(id)

      await getAllRegisters()
      const filteredRegisters = registers.filter((regist) => {
        console.log(regist.student)
        if (regist.student === id) {
          return regist
        }
        return null
      })
      setRegistersState(filteredRegisters)
      // setRegisters(registersFromDb.filter((regist) => regist.student === id))
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  console.log('registersState', registersState)

  const fetchAndLoadStudent = async () => {
    setLoading(true)
    try {
      const group = await getSingleStudent(id)
      setActiveStudent(group)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAndLoadStudent()
    fetchAndLoadRegisters()
  }, [])
  console.log('registers line50', registers)

  useEffect(() => {
    if (editing && activeStudent.body) {
      setUpdatedBody(activeStudent.body)
      setUpdatedEmail(activeStudent.email)
      setUpdatedTelephone(activeStudent.telephone)
      setUpdatedAddress(activeStudent.address)
      setUpdatedImgUrl(activeStudent.imgUrl)
      setUpdatedGroup(activeStudent.group)
    }
  }, [editing])

  const updateStudentAndRefresh = async () => {
    await updateStudent(
      activeStudent._id,
      updatedBody,
      updatedEmail,
      updatedTelephone,
      updatedAddress,
      updatedImgUrl,
      updatedGroup
    )
    setActiveStudent((prev) => ({
      _id: prev._id,
      body: updatedBody,
      email: updatedEmail,
      telephone: updatedTelephone,
      address: updatedAddress,
      imgUrl: updatedImgUrl,
      group: updatedGroup
    }))
  }

  const handleEditForm = (e) => {
    if (e.target.name === 'body') {
      setUpdatedBody(e.target.value)
    } else if (e.target.name === 'email') {
      setUpdatedEmail(e.target.value)
    } else if (e.target.name === 'telephone') {
      setUpdatedTelephone(e.target.value)
    } else if (e.target.name === 'address') {
      setUpdatedAddress(e.target.value)
    } else if (e.target.name === 'imgUrl') {
      setUpdatedImgUrl(e.target.value)
    } else if (e.target.name === 'group') {
      setUpdatedGroup(e.target.value)
    }
  }

  const handleDelete = () => {
    deleteStudent(activeStudent._id)
    window.history.back()
  }

  const handleEditToggle = () => {
    if (editing) {
      updateStudentAndRefresh()
    }
    setEditing((prev) => !prev)
  }
  const imageUrl = activeStudent.imgUrl || defaultImage

  return (
    <div>
      {loading && <p>loading...</p>}
      {!loading && activeStudent && (
        <>
          <main className="profile-page">
            <section className="relative block" style={{ height: '500px' }}>
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
                }}
              >
                {/* <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-50 bg-black"
                ></span> */}
              </div>
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
                      <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center items-center">
                        <div className="h-auto">
                          <img
                            alt="..."
                            src={
                              imageUrl
                                ? imageUrl
                                : 'src/assets/img/default.jpeg'
                            }
                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                            style={{ maxWidth: '150px' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8"></div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h2 className="text-3xl">{activeStudent.body}</h2>
                  </div>
                  <div className="mt-10 py-10 border-t border-gray-300 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        {editing ? (
                          <>
                            <label>
                              <strong>Name:</strong>
                              <input
                                type="text"
                                name="body"
                                style={{ width: 300 }}
                                value={updatedBody}
                                onChange={handleEditForm}
                                className="mt-1 ml-2 mb-1 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                              />
                            </label>
                            <br />
                            <label>
                              <strong>Email:</strong>

                              <input
                                type="text"
                                name="email"
                                style={{ width: 300 }}
                                value={updatedEmail}
                                onChange={handleEditForm}
                                className="mt-1 ml-2 mb-1 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                              />
                            </label>
                            <br />
                            <label>
                              <strong>Telephone:</strong>
                              <input
                                type="text"
                                name="telephone"
                                style={{ width: 300 }}
                                value={updatedTelephone}
                                onChange={handleEditForm}
                                className="mt-1 ml-2 mb-1 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                              />
                            </label>
                            <br />
                            <label>
                              <strong>Address:</strong>
                              <input
                                type="text"
                                name="address"
                                style={{ width: 300 }}
                                value={updatedAddress}
                                onChange={handleEditForm}
                                className="mt-1 ml-2 mb-1 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                              />
                            </label>
                            <br />
                            <label>
                              <strong>Image URL:</strong>
                              <input
                                type="text"
                                name="imgUrl"
                                style={{ width: 300 }}
                                value={updatedImgUrl}
                                onChange={handleEditForm}
                                className="mt-1 ml-2 mb-1 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                              />
                            </label>
                            <br />
                            {/* <button onClick={handleEditToggle}>
                                {editing ? 'Save' : 'Edit'}
                              </button>{' '}
  */}
                            <button
                              onClick={handleEditToggle}
                              className="bg-purple-500 text-white active:bg-purple-600 mt-4 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                            >
                              {editing ? 'Save' : 'Edit'}
                            </button>{' '}
                            <button
                              onClick={handleDelete}
                              className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                            >
                              Delete
                            </button>
                          </>
                        ) : (
                          <>
                            <p className="mb-4 text-lg leading-relaxed text-gray-800">
                              <strong>Email:</strong> {activeStudent.email}{' '}
                              <br />
                              <strong>Telephone:</strong>{' '}
                              {activeStudent.telephone} <br />
                              <strong>Address:</strong> {activeStudent.address}{' '}
                              <br />{' '}
                            </p>
                            <button
                              onClick={handleEditToggle}
                              className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                            >
                              {editing ? 'Save' : 'Edit'}
                            </button>{' '}
                            <button
                              onClick={handleDelete}
                              className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 class="font-bold italic">Registers</h3>
              {registersState.length === 0 ? (
                <p>No registers available</p>
              ) : (
                <ul>
                  {registersState.map((register) => (
                    <li key={register._id}>
                      <Link to={`/registers/${register._id}`}>
                        {new Date(register.date).toLocaleDateString()}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </main>
        </>
      )}
    </div>
  )
}
