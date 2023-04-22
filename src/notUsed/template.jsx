return (
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
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative"></div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8"></div>
                </div>
              </div>
              <div className="text-center mt-12">
                <p>some text top part</p>
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      some text bottom part
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
)

//StudentPage
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGroupsStore } from '../store'

export default function StudentPage() {
  const { id } = useParams()

  const { getSingleStudent, deleteStudent, updateStudent } = useController()

  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(false)
  const [activeStudent, setActiveStudent] = useState({
    _id: '',
    body: '',
    group: '',
    email: '',
    telephone: '',
    address: ''
  })

  const [updatedBody, setUpdatedBody] = useState('')
  const [updatedEmail, setUpdatedEmail] = useState('')
  const [updated, setUpdatedTelephone] = useState('')
  const [updatedAddress, setUpdatedAddress] = useState('')
  const [updatedGroup, setUpdatedGroup] = useState('')

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
  }, [])

  useEffect(() => {
    if (editing && activeStudent.body) {
      setUpdatedBody(activeStudent.body)
      setUpdatedEmail(activeStudent.email)
      setUpdatedTelephone(activeStudent.telephone)
      setUpdatedAddress(activeStudent.address)
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
      updatedGroup
    )
    setActiveStudent((prev) => ({
      _id: prev._id,
      body: updatedBody,
      email: updatedEmail,
      telephone: updated,
      address: updatedAddress,
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
    } else if (e.target.name === 'group') {
      setUpdatedGroup(e.target.value)
    }
  }

  const handleDelete = () => {
    deleteStudent(activeStudent._id)
  }

  const handleEditToggle = () => {
    if (editing) {
      updateStudentAndRefresh()
    }
    setEditing((prev) => !prev)
  }

  return (
    <div>
      {loading && <p>loading...</p>}
      {!loading && activeStudent && (
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
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative"></div>
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
                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                          <strong>Email:</strong> {activeStudent.email} <br />
                          <strong>Telephone:</strong> {activeStudent.telephone}{' '}
                          <br />
                          <strong>Address:</strong> {activeStudent.address}{' '}
                          <br />{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  )
  //   <div>
  //     <h1>Student Page</h1>
  //     {loading && <p>loading...</p>}
  //     {!loading && activeStudent && (
  //       <>
  //         <button onClick={handleEditToggle}>
  //           {editing ? 'Save' : 'Edit'}
  //         </button>{' '}
  //         {!editing && <button onClick={handleDelete}>Delete</button>}
  //         {editing ? (
  //           <>
  //             <label>
  //               Body:
  //               <input
  //                 type="text"
  //                 value={updatedBody}
  //                 onChange={handleEditForm}
  //                 name="body"
  //                 style={{
  //                   width: 300
  //                 }}
  //               />
  //             </label>
  //             <br />
  //             <label>
  //               Email:
  //               <input
  //                 type="text"
  //                 value={updatedEmail}
  //                 onChange={handleEditForm}
  //                 name="email"
  //               />
  //             </label>
  //             <br />
  //             <label>
  //               Telephone:
  //               <input
  //                 type="text"
  //                 value={updatedTelephone}
  //                 onChange={handleEditForm}
  //                 name="telephone"
  //               />
  //             </label>
  //             <br />
  //             <label>
  //               Address:
  //               <input
  //                 type="text"
  //                 value={updatedAddress}
  //                 onChange={handleEditForm}
  //                 name="address"
  //               />
  //             </label>
  //             <br />
  //           </>
  //         ) : (
  //           <p>
  //             <strong>Body:</strong> {activeStudent.body} <br />
  //             <strong>Email:</strong> {activeStudent.email} <br />
  //             <strong>Telephone:</strong> {activeStudent.telephone} <br />
  //             <strong>Address:</strong> {activeStudent.address} <br />
  //           </p>
  //         )}
  //       </>
  //     )}
  //   </div>
  // )
}
