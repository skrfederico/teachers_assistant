import { create } from 'zustand'
// import  create  from 'zustand'
import { devtools } from 'zustand/middleware'

// import groupService from './services/GroupService'
import groupService from './services/GroupService'
import studentService from './services/StudentService'
import registerService from './services/RegisterService'

export const useGroupsStore = create((set) => ({
  groups: [],
  setGroups: (groups) => set({ groups }),
  createGroup: async (group) => {
    const freshGroup = await groupService.createGroup(group)
    set((state) => ({ groups: [...state.groups, freshGroup] }))
  },
  getAllGroups: async () => {
    const groups = await groupService.getAllGroups()
    set({ groups })
  },
  getSingleGroup: async (id) => {
    const results = await groupService.getOneGroup(id)
    set((state) => ({ groups: [results] }))
    return results
  },
  updateGroup: async (
    id,
    group,
    groupId,
    completed,
    category,
    institution,
    days
  ) => {
    const updatedGroup = await groupService.updateGroup(
      id,
      group,
      groupId,
      completed,
      category,
      institution,
      days
    )
    set((state) => ({
      groups: state.groups.map((oldGroup) =>
        oldGroup._id === id ? updatedGroup : oldGroup
      )
    }))
    console.log('Group updated:', updatedGroup)
    // return updatedGroup
  },
  deleteGroup: async (id) => {
    const deletedGroup = await groupService.deleteGroup(id)
    set((state) => ({
      groups: state.groups.filter((group) => group._id !== id)
    }))
    console.log('Deleted Group:', deletedGroup)
  }
}))

// // ZuStand challenging (read documentation)
// useGroupsStore().getState

export const useStudentsStore = create((set) => ({
  students: [],
  setStudents: (students) => set({ students }),
  createStudent: async (student, groupId) => {
    const freshStudent = await studentService.createStudent(student, groupId)
    set((state) => ({ students: [...state.students, freshStudent] }))
  },
  getAllStudents: async () => {
    const students = await studentService.getAllStudents()
    set({ students })
    console.log(students)
  },
  getSingleStudent: async (id) => {
    const result = await studentService.getOneStudent(id)
    set((state) => ({ students: [result] }))
    return result
  },

  updateStudent: async (
    id,
    student,
    email,
    telephone,
    address,
    imgUrl,
    group
  ) => {
    const updatedStudent = await studentService.updateStudent(
      id,
      student,
      email,
      telephone,
      address,
      imgUrl,
      group
    )
    set((state) => ({
      students: state.students.map((oldStudent) =>
        oldStudent._id === id ? updatedStudent : oldStudent
      )
    }))
    console.log('Student updated:', updatedStudent)
    // return updatedStudent
  },
  deleteStudent: async (id) => {
    const deletedStudent = await studentService.deleteStudent(id)
    set((state) => ({
      students: state.students.filter((student) => student._id !== id)
    }))
    console.log('Deleted Student:', deletedStudent)
  }
}))

// useEffect(() => {
//   useStudentsStore.getState().getAllStudents()
// }, [useStudentsStore])

export const useRegistersStore = create(
  devtools((set) => ({
    registers: [],
    setRegisters: (registers) => set({ registers }),
    createRegister: async (registerData) => {
      try {
        const freshRegister = await registerService.createRegister(registerData)
        set((state) => ({ registers: [...state.registers, freshRegister] }))
      } catch (error) {
        console.error(error)
      }
    },
    getAllRegisters: async () => {
      try {
        const registers = await registerService.getAllRegisters()
        set({ registers })
      } catch (error) {
        console.error(error)
      }
    },
    getAllRegistersByStudentId: async (id) => {
      try {
        await useRegistersStore.getState().getAllRegisters()
        const filteredRegisters = useRegistersStore
          .getState()
          .registers.filter((regist) => regist.student === id)
        return filteredRegisters
      } catch (error) {
        console.error(error)
      }
    },
    getSingleRegister: async (id) => {
      try {
        const results = await registerService.getOneRegister(id)
        set({ registers: results })
        return results
      } catch (error) {
        console.error(error)
      }
    },
    deleteRegister: async (id) => {
      try {
        const deletedRegister = await registerService.deleteRegister(id)
        set((state) => ({
          registers: state.registers.filter((register) => register._id !== id)
        }))
        console.log('Deleted Register:', deletedRegister)
      } catch (error) {
        console.error(error)
      }
    },
    updateRegister: async (
      id,
      register,
      student,
      group,
      attendance,
      hwCompletion,
      participation,
      date
    ) => {
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
        set((state) => ({
          registers: state.registers.map((oldRegister) =>
            oldRegister._id === id ? updatedRegister : oldRegister
          )
        }))
        console.log('Register updated:', updatedRegister)
      } catch (error) {
        console.error(error)
      }
    }
  }))
)

// const groupsStore = devtools(groupsStore)
// const studentsStore = devtools(studentsStore)
// const registerStore = devtools(registersStore)

// export const useGroupsStore = create(groupsStore)
// export const useStudentsStore = create(studentsStore)
// export const useRegistersStore = create(registersStore)

// EXAMPLE OF A COMPONENT
// // Then, you can use useStudentsStore to access the functions and state variables in your components. For example:

// import { useStudentsStore } from './studentsStore'

// function StudentList() {
//   const { students, getAllStudents } = useStudentsStore()

//   useEffect(() => {
//     getAllStudents()
//   }, [])

//   return (
//     <ul>
//       {students.map((student) => (
//         <li key={student.id}>{student.name}</li>
//       ))}
//     </ul>
//   )
// }

// SEGUNDA ALTERNATIVA
// const useGroupsStore = create(devtools((set) => ({
//   groups: [],
//   createGroup: (group) =>
//     set((state) => ({ groups: [...state.groups, group] })),
//   deleteGroup: (groupIndex) =>
//     set((state) => ({
//       groups: state.groups.filter((_, index) => index !== groupIndex)
//     })),
//   updateGroup: (groupIndex, updatedGroup) =>
//     set((state) => {
//       const updatedGroups = [...state.groups]
//       updatedGroups[groupIndex] = updatedGroup
//       return { groups: updatedGroups }
//     }),
//   getSingleGroup: (groupIndex) => {
//     const group = { name: '', category: '', institution: '', days: '' }
//     if (groupIndex >= 0 && groupIndex < get().groups.length) {
//       const selectedGroup = get().groups[groupIndex]
//       group.name = selectedGroup.name
//       group.category = selectedGroup.category || ''
//       group.institution = selectedGroup.institution || ''
//       group.days = selectedGroup.days || ''
//     }
//     return group
//   }
// })

// groupsStore = devtools(groupsStore)

// export const useGroupsStore = create(groupsStore)
