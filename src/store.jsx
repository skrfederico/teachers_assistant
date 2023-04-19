import create from 'zustand'
import { devtools } from 'zustand/middleware'
import groupService from './services/GroupService'

const useGroupsStore = create(
  devtools((set) => ({
    groups: [],
    setGroups: (groups) => set({ groups }),
    addGroup: async (group) => {
      try {
        const freshGroup = await groupService.createGroup(group)
        set((state) => ({ groups: [...state.groups, freshGroup] }))
      } catch (error) {
        console.error(error)
      }
    },
    fetchGroups: async () => {
      try {
        const groups = await groupService.getAllGroups()
        set({ groups })
      } catch (error) {
        console.error(error)
      }
    }
  }))
)

export default useGroupsStore

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
