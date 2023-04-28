import React from 'react'
import { useGroupsStore } from '../store'

export default function AllGroups() {
  const { deleteGroup, groups } = useGroupsStore()

  console.log(groups)
  return (
    <div className="allgroups">
      {groups.length < 1 && <p>You have no groups!</p>}
      {groups.length > 1 && (
        <>
          <div className="single-group-column">
            {groups.map((group, index) => {
              if (index % 3 === 0) {
                return (
                  <div
                    className="relative flex flex-col min-w-0 break-words bg-red rounded mb-6 xl:mb-0 shadow-custom"
                    key={group._id}
                  >
                    <div className="text">
                      <div className="textBody">
                        <a href={`/groups/${group._id}`}>{group.body}</a>
                      </div>
                      <div className="textP">
                        <p onClick={(event) => deleteGroup(group._id)}>x</p>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            })}
          </div>

          <div className="single-group-column">
            {groups.map((group, index) => {
              if (index % 3 === 1) {
                return (
                  <div
                    className="relative flex flex-col min-w-0 break-words bg-red rounded mb-6 xl:mb-0 shadow-custom"
                    key={group._id}
                  >
                    <div className="text">
                      <div className="textBody">
                        <a href={`/groups/${group._id}`}>{group.body}</a>
                      </div>
                      <div className="textP">
                        <p onClick={(event) => deleteGroup(group._id)}>x</p>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            })}
          </div>

          <div className="single-group-column">
            {groups.map((group, index) => {
              if (index % 3 === 2) {
                return (
                  <div
                    className="relative flex flex-col min-w-0 break-words bg-red rounded mb-6 xl:mb-0 shadow-custom"
                    key={group._id}
                  >
                    <div className="text">
                      <div className="textBody">
                        <a href={`/groups/${group._id}`}>{group.body}</a>
                      </div>
                      <div className="textP">
                        <p onClick={(event) => deleteGroup(group._id)}>x</p>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            })}
          </div>
        </>
      )}
    </div>
  )
}
