import { create } from 'zustand'
// import  create  from 'zustand'
import { devtools } from 'zustand/middleware'
import groupService from './services/GroupService'

import { groupService } from './services/GroupService'
import { studentService } from './services/StudentService'
import { registerService } from './services/RegisterService'

const useGroupsStore = create(
  devtools((set) => ({
    groups: [],
    setGroups: (groups) => set({ groups }),
    createGroup: async (group) => {
      // addGroup: async (group) => {
      try {
        const freshGroup = await groupService.createGroup(group)
        set((state) => ({ groups: [...state.groups, freshGroup] }))
      } catch (error) {
        console.error(error)
      }
    },
    getAllGroups: async () => {
      // fetchGroups: async () => {
      try {
        const groups = await groupService.getAllGroups()
        set({ groups })
      } catch (error) {
        console.error(error)
      }
    },
    getSingleGroup: async (id) => {
      try {
        const results = await groupService.getOneGroup(id)
        set((state) => ({ groups: [results] }))
        return results
      } catch (error) {
        console.error(error)
      }
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
        set((state) => ({
          groups: state.groups.map((oldGroup) =>
            oldGroup._id === id ? updatedGroup : oldGroup
          )
        }))
        console.log('Group updated:', updatedGroup)
        // return updatedGroup
      } catch (error) {
        console.error(error)
      }
    },
    deleteGroup: async (id) => {
      try {
        const deletedGroup = await groupService.deleteGroup(id)
        set((state) => ({
          groups: state.groups.filter((group) => group._id !== id)
        }))
        console.log('Deleted Group:', deletedGroup)
      } catch (error) {
        console.error(error)
      }
    }
  }))
)
// // ZuStand challenging (read documentation)
// useGroupsStore().getState

const useStudentsStore = create(
  devtools((set) => ({
    students: [],
    setStudents: (students) => set({ students }),

    getAllStudents: async () => {
      try {
        const results2 = await studentService.getAllStudents()
        set({ students: results2 })
        console.log(results2)
      } catch (error) {
        console.error(error)
      }
    },
    getSingleStudent: async (id) => {
      try {
        const result = await studentService.getOneStudent(id)
        set({ students: result })
        return result
      } catch (error) {
        console.error(error)
      }
    },
    createStudent: async (student, group, groupId) => {
      try {
        const freshStudent = await studentService.createStudent(
          student,
          groupId
        )
        set((state) => ({ students: [...state.students, freshStudent] }))
      } catch (error) {
        console.error(error)
      }
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
      try {
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
      } catch (error) {
        console.error(error)
      }
    },
    deleteStudent: async (id) => {
      try {
        const deletedStudent = await studentService.deleteStudent(id)
        set((state) => ({
          students: state.students.filter((student) => student._id !== id)
        }))
        console.log('Deleted Student:', deletedStudent)
      } catch (error) {
        console.error(error)
      }
    }
  }))
)

// useEffect(() => {
//   useStudentsStore.getState().getAllStudents()
// }, [useStudentsStore])

const useRegisterStore = create(
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
        await useRegisterStore.getState().getAllRegisters()
        const filteredRegisters = useRegisterStore
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

groupsStore = devtools(groupsStore)
studentsStore = devtools(studentsStore)
registerStore = devtools(registerStore)

export const useGroupsStore = create(groupsStore)
export const useStudentsStore = create(studentsStore)
export const useRegisterStore = create(registerStore)

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
