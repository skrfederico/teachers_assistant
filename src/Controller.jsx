import React, { createContext, useContext, useState, useEffect } from 'react'
import groupService from './services/GroupService'
import studentService from './services/StudentService'
// import registerService from './services/RegisterService'

//2) this is where we create context
const ControllerContext = createContext({})

//3) we wrap that context around any children that are "passed" l7 to the provider
export function ProvideController({ children }) {
  //what this provider is doing is providing the context
  // const provider = controller();
  const provider = useHook()
  return (
    //4) this value is where the context comes from
    <ControllerContext.Provider value={provider}>
      {children}
    </ControllerContext.Provider>
  )
}

export const useController = () => {
  return useContext(ControllerContext)
}

// 1)whatever we are doimg here is going to be available because of context
// function controller() {
function useHook() {
  const [groups, setGroups] = useState([])
  const [students, setStudents] = useState([])

  useEffect(() => {
    getAllGroups()
  }, [])

  // groups
  async function createGroup(group) {
    // groupService.createGroup(group)
    console.log({ group })
    console.log(group)
    try {
      // const data = await response.json()
      const freshGroup = await groupService.createGroup(group)
      setGroups((oldGroups) => [...oldGroups, freshGroup])
    } catch (error) {
      console.error(error)
    }
  }
  async function getAllGroups() {
    try {
      const results = await groupService.getAllGroups()
      setGroups(results)
      console.log(results)
    } catch (error) {
      console.error(error)
    }
  }
  async function getSingleGroup(id) {
    try {
      const results = await groupService.getOneGroup(id)
      setGroups(results)
      return results
    } catch (error) {
      console.error(error)
    }
  }
  async function updateGroup(id, group, groupId, completed, category, days) {
    try {
      const updatedGroup = await groupService.updateGroup(
        id,
        group,
        groupId,
        completed,
        category,
        days
      )
      setGroups((oldGroups) =>
        oldGroups.map((oldGroup) =>
          oldGroup._id === id ? updatedGroup : oldGroup
        )
      )
      console.log('Group updated:', updatedGroup)
      // return updatedGroup
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteGroup(id) {
    try {
      const deletedGroup = await groupService.deleteGroup(id)
      setGroups(groups.filter((group) => group._id !== id))
      console.log('Deleted Group:', deletedGroup)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAllStudents()
  }, [])

  // // Students
  async function createStudent(student, group, groupId) {
    // studentService.createStudent(student)
    console.log({ student })
    console.log(student)
    console.log(group)
    console.log(groupId)
    try {
      // const data = await response.json()
      const freshStudent = await studentService.createStudent(student, groupId)
      setStudents((oldStudents) => [...oldStudents, freshStudent])
    } catch (error) {
      console.error(error)
    }
  }
  async function getAllStudents() {
    try {
      const results2 = await studentService.getAllStudents()
      setStudents(results2)
      console.log(results2)
    } catch (error) {
      console.error(error)
    }
  }
  async function getSingleStudent(id) {
    try {
      const results = await studentService.getOneStudent(id)
      setStudents(results)
      return results
    } catch (error) {
      console.error(error)
    }
  }
  async function updateStudent(id, student, email, telephone, address, group) {
    try {
      const updatedStudent = await studentService.updateStudent(
        id,
        student,
        email,
        telephone,
        address,
        group
      )
      setStudents((oldStudents) =>
        oldStudents.map((oldStudent) =>
          // const newStudents = students.map((oldStudent) =>
          oldStudent._id === id ? updatedStudent : oldStudent
        )
      )
      console.log('Student updated:', updatedStudent)
      // setStudents(newStudents)
      // return updatedStudent
    } catch (error) {
      console.error(error)
    }
  }
  async function deleteStudent(id) {
    try {
      const deletedStudent = await studentService.deleteStudent(id)
      setStudents(students.filter((student) => student._id !== id))
      console.log('Deleted Student:', deletedStudent)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    createGroup,
    groups,
    getAllGroups,
    getSingleGroup,
    updateGroup,
    deleteGroup,
    // activeGroup,

    createStudent,
    students,
    getAllStudents,
    getSingleStudent,
    updateStudent,
    deleteStudent
  }
}
