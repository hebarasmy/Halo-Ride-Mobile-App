"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import { ThemeToggle } from "../components/ThemeToggle"
import { Input } from "../components/ui/Input"
import { Label } from "../components/ui/Label"
import { Checkbox } from "../components/ui/Checkbox"
import { Button } from "../components/ui/Button"

function LoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      navigate("/dashboard")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="p-4 flex justify-between items-center">
        <button
          onClick={() => navigate("/")}
          className="h-10 w-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ArrowLeft size={20} />
        </button>
        <ThemeToggle />
      </div>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-[320px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-gray-500 dark:text-gray-400">Sign in to your HaloRide account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base block">
                Email
              </Label>
              <Input id="email" type="email" placeholder="your.email@example.com" required className="h-12 text-base" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-base">
                  Password
                </Label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="h-12 text-base pr-10"
                />
                <button
                  type="button"
                  className="absolute right-0 top-0 h-full px-3 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm font-normal">
                Remember me for 30 days
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-md shadow-lg disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          <div className="text-center text-sm">
            <p className="text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LoginPage

