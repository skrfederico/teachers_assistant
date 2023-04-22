import { logOut } from '../utilities/users-service'

export default function UserLogOut({ user, setUser }) {
  function handleLogOut() {
    logOut()
    setUser(null)
  }

  return (
    <div>
      <button
        onClick={handleLogOut}
        className="btn-sm bg-transparent text-white border border-white rounded-md shadow-lg hover:bg-white hover:text-purple-500 hover:shadow-none transition-all duration-300 ease-in-out"
      >
        LOG OUT
      </button>
    </div>
  )
}
