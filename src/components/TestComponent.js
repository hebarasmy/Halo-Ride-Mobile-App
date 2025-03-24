import { Link } from "react-router-dom"

function TestComponent() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Navigation Test</h1>
      <p className="mb-4">Click the links below to test navigation:</p>
      <div className="space-y-2">
        <div>
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </div>
        <div>
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
        <div>
          <Link to="/signup" className="text-blue-500 hover:underline">
            Signup
          </Link>
        </div>
        <div>
          <Link to="/dashboard" className="text-blue-500 hover:underline">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TestComponent

