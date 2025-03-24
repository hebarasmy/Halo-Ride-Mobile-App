import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ThemeToggle } from "../components/ThemeToggle"

function Homepage() {
  console.log("Homepage component rendering")
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="border-b py-4 px-4 flex justify-between items-center">
        <div></div>
        <ThemeToggle />
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-full max-w-[320px] space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="relative w-24 h-24 mb-4">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              HaloRide
            </h1>
            <p className="text-gray-500 dark:text-gray-400">Your intelligent helmet companion for safer journeys</p>
          </div>

          <div className="space-y-4 pt-6">
            <Link
              to="/login"
              className="w-full h-12 flex items-center justify-center text-base bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-md shadow-lg"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="w-full h-12 flex items-center justify-center text-base border border-gray-300 dark:border-gray-700 rounded-md"
            >
              Create Account
            </Link>
            <Link
              to="/dashboard"
              className="w-full flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              Preview Demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400">
      </footer>
    </div>
  )
}

export default Homepage

