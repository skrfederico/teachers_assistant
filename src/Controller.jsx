import React, { createContext, useContext, useState, useEffect } from 'react'
import groupService from './services/GroupService'
import studentService from './services/StudentService'
import registerService from './services/RegisterService'
// import RegisterService from './services/RegisterService'

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
  const [registers, setRegisters] = useState([])

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
  async function updateGroup(
    id,
    group,
    groupId,
    completed,
    category,
    institution,
    days
  ) {
    try {
      const updatedGroup = await groupService.updateGroup(
        id,
        group,
        groupId,
        completed,
        category,
        institution,
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

  // const registerService = new RegisterService()
  // registers
  // const newRegister=  await registerService.createRegister(register)
  // setRegisters([...registers, newRegister])
  // }

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
      console.log('this is getSingle', results)

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
  useEffect(() => {
    getAllRegisters()
  }, [])

  // // Registers 2
  async function createRegister(registerData) {
    // registerService.createRegister(register)

    console.log({ registerData })
    console.log('register Data here', registerData)
    // console.log(group)
    try {
      // const data = await response.json()
      const freshRegister = await registerService.createRegister(registerData)
      setRegisters((oldRegisters) => [...oldRegisters, freshRegister])
    } catch (error) {
      console.error(error)
    }
  }
  async function getAllRegisters() {
    try {
      const results3 = await registerService.getAllRegisters()
      setRegisters(results3)
      console.log(results3)
      console.log('The registers are:', results3)
    } catch (error) {
      console.error(error)
    }
  }

  async function getAllRegistersByStudentId(id) {
    await getAllRegisters()
    const filteredRegisters = registers.filter((regist) => regist.student == id)
    // setRegisters(filteredRegisters)
    return filteredRegisters
  }
  async function getSingleRegister(id) {
    try {
      const results = await registerService.getOneRegister(id)
      setRegisters(results)
      return results
    } catch (error) {
      console.error(error)
    }
  }
  async function updateRegister(
    id,
    register,
    student,
    group,
    attendance,
    hwCompletion,
    participation,
    date
  ) {
    try {
      const updatedRegister = await registerService.updateRegister(
        id,
        register,
        student,
        group,
        attendance,
        hwCompletion,
        participation,
        date
      )
      setRegisters((oldRegisters) =>
        oldRegisters.map((oldRegister) =>
          // const newRegisters = students.map((oldRegister) =>
          oldRegister._id === id ? updatedRegister : oldRegister
        )
      )
      console.log('Register updated:', updatedRegister)
      // setRegisters(newRegisters)
      // return updatedRegister
    } catch (error) {
      console.error(error)
    }
  }
  async function deleteRegister(id) {
    try {
      const deletedRegister = await registerService.deleteRegister(id)
      setRegisters(students.filter((register) => register._id !== id))
      console.log('Deleted Register:', deletedRegister)
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
    deleteStudent,

    createRegister,
    registers,
    getAllRegisters,
    getSingleRegister,
    getAllRegistersByStudentId,
    updateRegister,
    deleteRegister
  }
}
