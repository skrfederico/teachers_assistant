import { logOut } from '../utilities/users-service'

export default function UserLogOut({ setUser }) {
  function handleLogOut() {
    logOut()
    setUser(null)
  }

  return (
    <div>
      <button className="btn-sm" onClick={handleLogOut}>
        LOG OUT
      </button>
    </div>
  )
}
