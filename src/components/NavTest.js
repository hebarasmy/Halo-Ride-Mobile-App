import { Link } from "react-router-dom"

function NavTest() {
  return (
    <div className="fixed top-0 left-0 z-50 bg-blue-500 text-white p-2 rounded-br-lg">
      <div className="flex gap-2">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        |
        <Link to="/login" className="hover:underline">
          Login
        </Link>{" "}
        |
        <Link to="/signup" className="hover:underline">
          Signup
        </Link>{" "}
        |
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
      </div>
    </div>
  )
}

export default NavTest

