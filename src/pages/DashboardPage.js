"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  Battery,
  Map,
  Settings,
  Music,
  AlertTriangle,
  BarChart3,
  Menu,
  Home,
  LogOut,
  User,
  Bell,
  Search,
  MapPin,
  BatteryFull,
  BatteryMedium,
  BatteryLow,
  BatteryWarning,
  Clock,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Volume2,
  ThumbsUp,
  ThumbsDown,
  CloudRain,
  Thermometer,
  TrendingUp,
  Route,
  Calendar,
  Eye,
  Shield,
  Wifi,
  Bluetooth,
  Download,
  Share2,
  X,
  AlertCircle,
  Navigation,
  Zap,
  Award,
  Flame,
} from "lucide-react"
import { ThemeToggle } from "../components/ThemeToggle"


function DashboardPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("home")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [safetyTab, setSafetyTab] = useState("current")
  const [statsTimeframe, setStatsTimeframe] = useState("week")
  const [statsType, setStatsType] = useState("distance")
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log("Dashboard mounted with activeTab:", activeTab)
  }, [activeTab])

  const handleLogout = () => {
    console.log("Logging out")
    navigate("/")
  }

  const getBatteryIcon = (level) => {
    if (level >= 75) {
      return <BatteryFull className="h-8 w-8 text-green-500" />
    } else if (level >= 50) {
      return <BatteryMedium className="h-8 w-8 text-yellow-500" />
    } else if (level >= 25) {
      return <BatteryWarning className="h-8 w-8 text-orange-500" />
    } else {
      return <BatteryLow className="h-8 w-8 text-red-500" />
    }
  }

  const getChartData = () => {
    if (statsTimeframe === "week") {
      switch (statsType) {
        case "distance":
          return [12.4, 8.7, 0, 15.2, 9.8, 0, 14.5]
        case "time":
          return [28, 19, 0, 35, 22, 0, 32]
        case "speed":
          return [42, 38, 0, 45, 40, 0, 43]
        default:
          return [12.4, 8.7, 0, 15.2, 9.8, 0, 14.5]
      }
    } else if (statsTimeframe === "month") {
      switch (statsType) {
        case "distance":
          return [65, 72, 58, 80]
        case "time":
          return [145, 160, 130, 175]
        case "speed":
          return [41, 39, 42, 40]
        default:
          return [65, 72, 58, 80]
      }
    } else {
      switch (statsType) {
        case "distance":
          return [2.1, 0, 3.5, 1.8, 4.2, 3.7, 2.9, 0]
        case "time":
          return [15, 0, 22, 12, 28, 25, 18, 0]
        case "speed":
          return [38, 0, 42, 35, 44, 41, 39, 0]
        default:
          return [2.1, 0, 3.5, 1.8, 4.2, 3.7, 2.9, 0]
      }
    }
  }

  const getLabels = () => {
    if (statsTimeframe === "week") {
      return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    } else if (statsTimeframe === "month") {
      return ["Week 1", "Week 2", "Week 3", "Week 4"]
    } else {
      return ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM"]
    }
  }

  const getUnit = () => {
    switch (statsType) {
      case "distance":
        return "km"
      case "time":
        return "min"
      case "speed":
        return "km/h"
      default:
        return ""
    }
  }

  const getTotal = () => {
    const data = getChartData()
    return data.reduce((a, b) => a + b, 0).toFixed(1)
  }

  const getAverage = () => {
    const data = getChartData()
    const nonZeroValues = data.filter((value) => value > 0)
    return (nonZeroValues.reduce((a, b) => a + b, 0) / nonZeroValues.length).toFixed(1)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuOpen && !event.target.closest(".user-menu-container")) {
        setUserMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [userMenuOpen])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Test Navigation */}
      {/* <NavTest /> */}

      <header className="fixed top-0 left-0 right-0 z-10 border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarOpen(true)}
              className="h-10 w-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Menu size={20} />
            </button>
            <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              HaloRide
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="hidden sm:inline">Connected</span>
            </div>
            <ThemeToggle />
            <button className="h-10 w-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
              <Bell size={20} />
            </button>
            {/* <button className="h-10 w-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
              <User size={20} />
            </button> */}
            <div className="relative">
              <button
                className="h-10 w-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <User size={20} />
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      role="menuitem"
                      onClick={() => {
                        setUserMenuOpen(false)
                        navigate("/")
                      }}
                    >
                      Home
                    </button>
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      role="menuitem"
                      onClick={() => {
                        setUserMenuOpen(false)
                        navigate("/login")
                      }}
                    >
                      Login
                    </button>
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      role="menuitem"
                      onClick={() => {
                        setUserMenuOpen(false)
                        navigate("/signup")
                      }}
                    >
                      Signup
                    </button>
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      role="menuitem"
                      onClick={() => {
                        setUserMenuOpen(false)
                        setActiveTab("settings")
                      }}
                    >
                      Settings
                    </button>
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                      role="menuitem"
                      onClick={() => {
                        setUserMenuOpen(false)
                        handleLogout()
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setSidebarOpen(false)}>
          <div
            className="fixed inset-y-0 left-0 w-[280px] bg-white dark:bg-gray-900 p-0 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                    HaloRide
                  </h2>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center shadow-lg">
                    <span className="font-bold text-white">JD</span>
                  </div>
                  <div>
                    <p className="font-medium">User name</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">user.mail@example.com</p>
                  </div>
                </div>
              </div>
              <nav className="flex-1 p-2 overflow-y-auto">
                <div className="space-y-1">
                  <button
                    className={`w-full flex items-center justify-start h-12 text-base px-3 rounded-md ${
                      activeTab === "home"
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => {
                      setActiveTab("home")
                      setSidebarOpen(false)
                    }}
                  >
                    <Home size={18} className="mr-3" />
                    <span>Home</span>
                  </button>
                  <button
                    className={`w-full flex items-center justify-start h-12 text-base px-3 rounded-md ${
                      activeTab === "navigation"
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => {
                      setActiveTab("navigation")
                      setSidebarOpen(false)
                    }}
                  >
                    <Map size={18} className="mr-3" />
                    <span>Navigation</span>
                  </button>
                  <button
                    className={`w-full flex items-center justify-start h-12 text-base px-3 rounded-md ${
                      activeTab === "battery"
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => {
                      setActiveTab("battery")
                      setSidebarOpen(false)
                    }}
                  >
                    <Battery size={18} className="mr-3" />
                    <span>Battery</span>
                  </button>
                  <button
                    className={`w-full flex items-center justify-start h-12 text-base px-3 rounded-md ${
                      activeTab === "music"
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => {
                      setActiveTab("music")
                      setSidebarOpen(false)
                    }}
                  >
                    <Music size={18} className="mr-3" />
                    <span>Music</span>
                  </button>
                  <button
                    className={`w-full flex items-center justify-start h-12 text-base px-3 rounded-md ${
                      activeTab === "safety"
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => {
                      setActiveTab("safety")
                      setSidebarOpen(false)
                    }}
                  >
                    <AlertTriangle size={18} className="mr-3" />
                    <span>Safety</span>
                  </button>
                  <button
                    className={`w-full flex items-center justify-start h-12 text-base px-3 rounded-md ${
                      activeTab === "stats"
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => {
                      setActiveTab("stats")
                      setSidebarOpen(false)
                    }}
                  >
                    <BarChart3 size={18} className="mr-3" />
                    <span>Analytics</span>
                  </button>
                  <button
                    className={`w-full flex items-center justify-start h-12 text-base px-3 rounded-md ${
                      activeTab === "settings"
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => {
                      setActiveTab("settings")
                      setSidebarOpen(false)
                    }}
                  >
                    <Settings size={18} className="mr-3" />
                    <span>Settings</span>
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                    Device Info
                  </h3>
                  <div className="space-y-1">
                    <div className="px-3 py-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Battery</span>
                        <span className="text-sm font-medium text-green-500">78%</span>
                      </div>
                    </div>
                    <div className="px-3 py-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Firmware</span>
                        <span className="text-sm font-medium">up to date</span>
                      </div>
                    </div>
                    <div className="px-3 py-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Last Synced</span>
                        <span className="text-sm font-medium">10:42 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="p-4 border-t">
                <button
                  className="w-full flex items-center justify-start h-12 text-base px-3 rounded-md text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={handleLogout}
                >
                  <LogOut size={18} className="mr-3" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 pt-16 pb-20 px-4">
        <div className="max-w-lg mx-auto">
          {/* Home Tab Content */}
          {activeTab === "home" && (
            <div className="space-y-4">
              {/* Welcome Card */}
              <div className="mt-4 rounded-lg border bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 text-white">
                  <h2 className="text-xl font-bold">Welcome, User!</h2>
                  <p className="text-blue-100">Ready for your next ride?</p>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <Calendar size={20} className="text-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Today</p>
                        <p className="font-medium">Monday, March 24</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <CloudRain size={20} className="text-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Weather</p>
                        <p className="font-medium">22°C, Partly Cloudy</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        <Map size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Commute to Work</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">12.4 km • Est. 28 min</p>
                      </div>
                    </div>
                    <button className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                      <Navigation size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Helmet Status Card */}
              <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Helmet Status</h3>
                    <div className="flex items-center gap-1 text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>Connected</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Battery</span>
                        <span className="text-green-500 dark:text-green-400">78%</span>
                      </div>
                      <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                        <div className="h-full bg-blue-500" style={{ width: "78%" }} />
                      </div>
                    </div>
                    <div>
                     
                    </div>
                    <div className="pt-2">
                     
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions Card */}
              <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
                <div className="p-4">
                  <h3 className="font-medium">Quick Actions</h3>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <button
                      className="h-12 flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setActiveTab("navigation")}
                    >
                      <Map size={16} />
                      Navigation
                    </button>
                    <button
                      className="h-12 flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setActiveTab("music")}
                    >
                      <Music size={16} />
                      Music
                    </button>
                    <button
                      className="h-12 flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setActiveTab("safety")}
                    >
                      <AlertTriangle size={16} />
                      Safety
                    </button>
                    <button
                      className="h-12 flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setActiveTab("stats")}
                    >
                      <BarChart3 size={16} />
                      Stats
                    </button>
                  </div>
                </div>
              </div>

              {/* Safety Alerts Card */}
              <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Safety Alerts</h3>
                    <button
                      className="text-sm text-blue-500 hover:text-blue-600"
                      onClick={() => setActiveTab("safety")}
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-500/10 dark:bg-amber-900/20 border border-amber-500/20 dark:border-amber-700/30">
                      <AlertTriangle size={20} className="text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-amber-700 dark:text-amber-400">Construction Zone Ahead</p>
                        <p className="text-sm text-amber-600/90 dark:text-amber-300/70">
                          Construction reported on Main St between 5th and 7th Ave.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-500/10 dark:bg-blue-900/20 border border-blue-500/20 dark:border-blue-700/30">
                      <CloudRain size={20} className="text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-blue-700 dark:text-blue-400">Weather Alert</p>
                        <p className="text-sm text-blue-600/90 dark:text-blue-300/70">
                          Light rain expected in your area starting at 4:00 PM.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Rides Card */}
              <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Recent Rides</h3>
                    <button className="text-sm text-blue-500 hover:text-blue-600" onClick={() => setActiveTab("stats")}>
                      View All
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded bg-gray-100 dark:bg-gray-700">
                      <div>
                        <p className="font-medium">Morning Commute</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Today, 8:30 AM</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">12.4 km</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">28 min</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded bg-gray-100 dark:bg-gray-700">
                      <div>
                        <p className="font-medium">Evening Ride</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Yesterday, 6:15 PM</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">8.7 km</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">19 min</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded bg-gray-100 dark:bg-gray-700">
                      <div>
                        <p className="font-medium">Weekend Trip</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Mar 22, 10:20 AM</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">45.2 km</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">1h 32m</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements Card */}
              <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Achievements</h3>
                    <button className="text-sm text-blue-500 hover:text-blue-600">View All</button>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="flex flex-col items-center p-3 rounded-lg bg-amber-500/10 dark:bg-amber-900/20 border border-amber-500/20 dark:border-amber-700/30">
                      <Award size={24} className="text-amber-500 dark:text-amber-400 mb-2" />
                      <p className="text-xs font-medium text-center text-amber-700 dark:text-amber-400">100km Club</p>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-blue-500/10 dark:bg-blue-900/20 border border-blue-500/20 dark:border-blue-700/30">
                      <Zap size={24} className="text-blue-500 dark:text-blue-400 mb-2" />
                      <p className="text-xs font-medium text-center text-blue-700 dark:text-blue-400">Speed Demon</p>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-green-500/10 dark:bg-green-900/20 border border-green-500/20 dark:border-green-700/30">
                      <Flame size={24} className="text-green-500 dark:text-green-400 mb-2" />
                      <p className="text-xs font-medium text-center text-green-700 dark:text-green-400">Eco Rider</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Tab Content */}
          {activeTab === "navigation" && (
            <div className="space-y-4 mt-4 pb-20">
                {/* AR Display Personalization Section */}
<div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
  <div className="p-4">
    <h3 className="text-lg font-medium mb-4">AR Display Personalization</h3>
    
    <div className="space-y-4">
      
      {/* Color Selection */}
      <div>
        <label className="block text-sm font-medium mb-2">Display Color</label>
        <div className="grid grid-cols-3 gap-2">
          <button className="p-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-blue-500 mb-1"></div>
            <span className="text-xs text-gray-500 dark:text-gray-400">Blue</span>
          </button>
          <button className="p-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex flex-col items-center bg-blue-50 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700">
            <div className="w-6 h-6 rounded-full bg-green-500 mb-1"></div>
            <span className="text-xs text-gray-500 dark:text-gray-400">Green</span>
          </button>
          <button className="p-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-black mb-1"></div>
            <span className="text-xs text-gray-500 dark:text-gray-400">Black</span>
          </button>
        </div>
      </div>
      
      {/* Size Selection */}
      <div>
        <label className="block text-sm font-medium mb-2">Text Size</label>
        <div className="grid grid-cols-3 gap-2">
          <button className="p-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex flex-col items-center">
            <span className="text-sm mb-1">Aa</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Small</span>
          </button>
          <button className="p-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex flex-col items-center bg-blue-50 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700">
            <span className="text-base mb-1">Aa</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Medium</span>
          </button>
          <button className="p-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex flex-col items-center">
            <span className="text-lg mb-1">Aa</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Large</span>
          </button>
        </div>
      </div>
      
      <button className="w-full h-12 mt-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Apply Changes
      </button>
    </div>
  </div>
</div>
              <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-4">Navigation</h3>

                  <div className="relative mb-4">
                    <input
                      type="text"
                      placeholder="Search destination..."
                      className="w-full h-12 pl-10 pr-4 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
                      <Search size={18} />
                    </div>
                  </div>

                  <div className="relative h-60 rounded-md overflow-hidden mb-4 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <Map size={48} className="text-gray-400 dark:text-gray-600" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-500 dark:text-gray-400">Map preview</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded bg-gray-100 dark:bg-gray-700">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <MapPin size={16} className="text-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium">Home</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">123 Main St, City</p>
                        </div>
                      </div>
                      <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600">
                        <Navigation size={18} className="text-blue-500" />
                      </button>
                    </div>

                    <div className="flex justify-between items-center p-3 rounded bg-gray-100 dark:bg-gray-700">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <MapPin size={16} className="text-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium">Work</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">456 Office Blvd, City</p>
                        </div>
                      </div>
                      <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600">
                        <Navigation size={18} className="text-blue-500" />
                      </button>
                    </div>

                    <div className="flex justify-between items-center p-3 rounded bg-gray-100 dark:bg-gray-700">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <MapPin size={16} className="text-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium">Gym</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">789 Fitness Ave, City</p>
                        </div>
                      </div>
                      <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600">
                        <Navigation size={18} className="text-blue-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Battery Tab Content */}
          {activeTab === "battery" && (
            <div className="space-y-4 mt-4 pb-20">
              <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
                <div className="p-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      {getBatteryIcon(78)}
                      <div>
                        <h2 className="text-2xl font-bold">78%</h2>
                        <p className="text-gray-500 dark:text-gray-400">Battery Remaining</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Clock className="h-8 w-8 text-blue-500" />
                      <div>
                        <h2 className="text-2xl font-bold">6h 45m</h2>
                        <p className="text-gray-500 dark:text-gray-400">Estimated Time Remaining</p>
                      </div>
                    </div>

                    <div>
                      <div className="relative h-4 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                        <div className="h-full bg-blue-500" style={{ width: "78%" }} />
                      </div>
                      <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
                <div className="p-4">
                  <div className="flex flex-col gap-4 mb-4">
                    <h3 className="text-lg font-medium">Battery Usage History</h3>
                    <div className="flex border rounded-md overflow-hidden">
                      <button className="flex-1 py-2 text-sm bg-blue-500 text-white">Day</button>
                      <button className="flex-1 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                        Week
                      </button>
                      <button className="flex-1 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                        Month
                      </button>
                    </div>
                  </div>

                  <div className="h-64 relative">
                    <div className="absolute inset-0 flex items-end">
                      {[20, 35, 50, 65, 80, 95, 70].map((level, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div
                            className="w-full max-w-[30px] bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"
                            style={{ height: `${level * 0.6}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 flex justify-between pt-2 border-t">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((label, index) => (
                        <div
                          key={index}
                          className="text-xs text-gray-500 dark:text-gray-400 text-center"
                          style={{ width: `${100 / 7}%` }}
                        >
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-4">Battery Health</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Overall Health</span>
                        <span className="text-green-500 dark:text-green-400">Excellent (92%)</span>
                      </div>
                      <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                        <div className="h-full bg-green-500" style={{ width: "92%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Charge Cycles</span>
                        <span>124 of 1000</span>
                      </div>
                      <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                        <div className="h-full bg-blue-500" style={{ width: "12%" }} />
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="flex justify-between text-sm">
                        <span>Last Full Charge</span>
                        <span className="text-gray-500 dark:text-gray-400">Yesterday, 9:15 PM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Battery Age</span>
                        <span className="text-gray-500 dark:text-gray-400">4 months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-4">Power Consumption</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded bg-gray-100 dark:bg-gray-700">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <Map size={16} className="text-blue-500" />
                        </div>
                        <span>AR Navigation</span>
                      </div>
                      <span className="text-blue-500">42%</span>
                    </div>

                    <div className="flex justify-between items-center p-3 rounded bg-gray-100 dark:bg-gray-700">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                          <Music size={16} className="text-purple-500" />
                        </div>
                        <span>Audio System</span>
                      </div>
                      <span className="text-purple-500">28%</span>
                    </div>

                    <div className="flex justify-between items-center p-3 rounded bg-gray-100 dark:bg-gray-700">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                          <AlertTriangle size={16} className="text-amber-500" />
                        </div>
                        <span>Safety Systems</span>
                      </div>
                      <span className="text-amber-500">18%</span>
                    </div>

                    <div className="flex justify-between items-center p-3 rounded bg-gray-100 dark:bg-gray-700">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                          <Shield size={16} className="text-green-500" />
                        </div>
                        <span>System & Other</span>
                      </div>
                      <span className="text-green-500">12%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Music Tab Content */}
          {activeTab === "music" && (
            <div className="space-y-4 mt-4 pb-20">
              <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
                <div className="p-4">
                  <div className="flex flex-col items-center">
                    <div className="w-48 h-48 rounded-lg bg-gray-200 dark:bg-gray-700 mb-4 flex items-center justify-center">
                      <Music size={64} className="text-gray-400 dark:text-gray-500" />
                    </div>

                    <h3 className="text-xl font-bold">Song Title</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">Artist Name</p>

                    <div className="w-full mb-4">
                      <div className="relative h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div className="absolute h-full w-1/3 bg-blue-500 rounded-full"></div>
                        <div className="absolute h-3 w-3 bg-blue-500 rounded-full top-1/2 left-1/3 transform -translate-y-1/2"></div>
                      </div>
                      <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                        <span>1:23</span>
                        <span>3:45</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mb-6">
                      <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                        <SkipBack size={24} />
                      </button>
                      <button
                        className="p-4 rounded-full bg-blue-500 text-white hover:bg-blue-600"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                        <SkipForward size={24} />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 w-full">
                      <Volume2 size={18} className="text-gray-500 dark:text-gray-400" />
                      <div className="relative flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div className="absolute h-full w-2/3 bg-blue-500 rounded-full"></div>
                        <div className="absolute h-3 w-3 bg-blue-500 rounded-full top-1/2 left-2/3 transform -translate-y-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
                <div className="p-4">
                  <h3 className="font-medium mb-4">Playlist</h3>
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div
                        key={item}
                        className={`flex items-center gap-3 p-2 rounded-md ${item === 1 ? "bg-blue-500/10" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                      >
                        <div className="w-10 h-10 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                          <Music size={16} className="text-gray-400 dark:text-gray-500" />
                        </div>
                        <div className="flex-1">
                          <p className={`font-medium ${item === 1 ? "text-blue-500" : ""}`}>Song Title {item}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Artist Name</p>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">3:45</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Safety Tab Content */}
          {activeTab === "safety" && (
            <div className="space-y-4 mt-4 pb-20">
              <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
                <div className="p-4">
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 flex items-center justify-center text-white">
                        <AlertTriangle size={24} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">Safety Alerts</h2>
                        <p className="text-gray-500 dark:text-gray-400">Real-time hazard detection</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label htmlFor="safety-system" className="font-medium">
                        Safety System
                      </label>
                      <div className="relative inline-flex items-center">
                        <input type="checkbox" id="safety-system" className="sr-only" defaultChecked />
                        <div className="h-6 w-11 rounded-full bg-gray-200 dark:bg-gray-700 peer-checked:bg-blue-500"></div>
                        <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-all peer-checked:left-5"></div>
                      </div>
                    </div>

                    <div className="flex border rounded-md overflow-hidden">
                      <button
                        className={`flex-1 py-2 text-sm ${safetyTab === "current" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                        onClick={() => setSafetyTab("current")}
                      >
                        Current
                      </button>
                      <button
                        className={`flex-1 py-2 text-sm ${safetyTab === "history" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                        onClick={() => setSafetyTab("history")}
                      >
                        History
                      </button>
                      <button
                        className={`flex-1 py-2 text-sm ${safetyTab === "settings" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                        onClick={() => setSafetyTab("settings")}
                      >
                        Settings
                      </button>
                    </div>
                  </div>

                  {safetyTab === "current" && (
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-500/10 dark:bg-amber-900/20 border border-amber-500/20 dark:border-amber-700/30">
                        <AlertTriangle size={24} className="text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium text-amber-700 dark:text-amber-400">Construction Zone Ahead</p>
                              <p className="text-sm text-amber-600/90 dark:text-amber-300/70 mt-1">
                                Construction reported on Main St between 5th and 7th Ave. Expect delays and lane
                                closures.
                              </p>
                            </div>
                            <div className="flex gap-1">
                              <button className="h-8 w-8 flex items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <ThumbsUp size={16} />
                              </button>
                              <button className="h-8 w-8 flex items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <ThumbsDown size={16} />
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-2 text-xs text-amber-600/90 dark:text-amber-300/70">
                            <MapPin size={12} />
                            <span>0.8 miles ahead</span>
                            <Clock size={12} className="ml-2" />
                            <span>Updated 15 min ago</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-500/10 dark:bg-blue-900/20 border border-blue-500/20 dark:border-blue-700/30">
                        <CloudRain size={24} className="text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium text-blue-700 dark:text-blue-400">Weather Alert</p>
                              <p className="text-sm text-blue-600/90 dark:text-blue-300/70 mt-1">
                                Light rain expected in your area starting at 4:00 PM. Consider adjusting your travel
                                plans.
                              </p>
                            </div>
                            <div className="flex gap-1">
                              <button className="h-8 w-8 flex items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <ThumbsUp size={16} />
                              </button>
                              <button className="h-8 w-8 flex items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <ThumbsDown size={16} />
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-2 text-xs text-blue-600/90 dark:text-blue-300/70">
                            <Thermometer size={12} />
                            <span>32°C</span>
                            <CloudRain size={12} className="ml-2" />
                            <span>40% chance of rain</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 dark:bg-red-900/20 border border-red-500/20 dark:border-red-700/30">
                        <AlertCircle size={24} className="text-red-500 dark:text-red-400 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium text-red-700 dark:text-red-400">Accident Reported</p>
                              <p className="text-sm text-red-600/90 dark:text-red-300/70 mt-1">
                                Multi-vehicle accident on Main Road Southbound. Right lane blocked. Expect delays of
                                15-20 minutes.
                              </p>
                            </div>
                            <div className="flex gap-1">
                              <button className="h-8 w-8 flex items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <ThumbsUp size={16} />
                              </button>
                              <button className="h-8 w-8 flex items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <ThumbsDown size={16} />
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-2 text-xs text-red-600/90 dark:text-red-300/70">
                            <MapPin size={12} />
                            <span>2.4 miles ahead</span>
                            <Clock size={12} className="ml-2" />
                            <span>Updated 5 min ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {safetyTab === "history" && (
                    <div className="space-y-4">
                      {[
                        {
                          title: "Speed Limit Change",
                          description: "Speed limit changed from 45 mph to 35 mph",
                          time: "Today, 10:42 AM",
                          icon: <Route size={20} className="text-blue-500" />,
                        },
                        {
                          title: "Blind Spot Alert",
                          description: "Vehicle detected in right blind spot",
                          time: "Today, 9:15 AM",
                          icon: <Eye size={20} className="text-amber-500" />,
                        },
                        {
                          title: "Hazardous Road Conditions",
                          description: "Slippery road detected due to rain",
                          time: "Yesterday, 5:30 PM",
                          icon: <AlertTriangle size={20} className="text-red-500" />,
                        },
                        {
                          title: "Traffic Congestion",
                          description: "Heavy traffic on Main Street",
                          time: "Yesterday, 4:45 PM",
                          icon: <AlertCircle size={20} className="text-amber-500" />,
                        },
                        {
                          title: "Weather Alert",
                          description: "Strong winds in downtown area",
                          time: "Mar 22, 2:20 PM",
                          icon: <CloudRain size={20} className="text-blue-500" />,
                        },
                      ].map((alert, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded bg-gray-100 dark:bg-gray-700">
                          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center shrink-0">
                            {alert.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <p className="font-medium">{alert.title}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{alert.time}</p>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{alert.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {safetyTab === "settings" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Alert Types</h3>
                        <div className="space-y-3">
                          {[
                            {
                              name: "Accident Alerts",
                              icon: <AlertCircle size={16} className="text-red-500" />,
                              bgClass: "bg-red-500/10 dark:bg-red-900/20",
                              checked: true,
                            },
                            {
                              name: "Road Hazard Alerts",
                              icon: <AlertTriangle size={16} className="text-amber-500" />,
                              bgClass: "bg-amber-500/10 dark:bg-amber-900/20",
                              checked: true,
                            },
                            {
                              name: "Weather Alerts",
                              icon: <CloudRain size={16} className="text-blue-500" />,
                              bgClass: "bg-blue-500/10 dark:bg-blue-900/20",
                              checked: true,
                            },
                            {
                              name: "Blind Spot Alerts",
                              icon: <Eye size={16} className="text-purple-500" />,
                              bgClass: "bg-purple-500/10 dark:bg-purple-900/20",
                              checked: true,
                            },
                            {
                              name: "Speed Limit Alerts",
                              icon: <Route size={16} className="text-green-500" />,
                              bgClass: "bg-green-500/10 dark:bg-green-900/20",
                              checked: true,
                            },
                          ].map((alert, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-8 h-8 rounded-full ${alert.bgClass} flex items-center justify-center`}
                                >
                                  {alert.icon}
                                </div>
                                <label htmlFor={`alert-${index}`} className="flex-1">
                                  {alert.name}
                                </label>
                              </div>
                              <div className="relative inline-flex items-center">
                                <input
                                  type="checkbox"
                                  id={`alert-${index}`}
                                  className="sr-only"
                                  defaultChecked={alert.checked}
                                />
                                <div className="h-6 w-11 rounded-full bg-gray-200 dark:bg-gray-700 peer-checked:bg-blue-500"></div>
                                <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-all peer-checked:left-5"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-4">Alert Settings</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <label htmlFor="alert-distance" className="flex-1">
                              Alert Distance (miles)
                            </label>
                            <div className="flex items-center gap-2">
                              <button className="h-10 w-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-md">
                                -
                              </button>
                              <span className="w-8 text-center">2.5</span>
                              <button className="h-10 w-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-md">
                                +
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <label htmlFor="voice-alerts" className="flex-1">
                              Voice Alerts
                            </label>
                            <div className="relative inline-flex items-center">
                              <input type="checkbox" id="voice-alerts" className="sr-only" defaultChecked />
                              <div className="h-6 w-11 rounded-full bg-gray-200 dark:bg-gray-700 peer-checked:bg-blue-500"></div>
                              <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-all peer-checked:left-5"></div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <label htmlFor="visual-alerts" className="flex-1">
                              Visual Alerts
                            </label>
                            <div className="relative inline-flex items-center">
                              <input type="checkbox" id="visual-alerts" className="sr-only" defaultChecked />
                              <div className="h-6 w-11 rounded-full bg-gray-200 dark:bg-gray-700 peer-checked:bg-blue-500"></div>
                              <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-all peer-checked:left-5"></div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <label htmlFor="haptic-feedback" className="flex-1">
                              Haptic Feedback
                            </label>
                            <div className="relative inline-flex items-center">
                              <input type="checkbox" id="haptic-feedback" className="sr-only" defaultChecked />
                              <div className="h-6 w-11 rounded-full bg-gray-200 dark:bg-gray-700 peer-checked:bg-blue-500"></div>
                              <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-all peer-checked:left-5"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-4">Roads to Avoid</h3>
                  <div className="space-y-3">
                    {[
                      { road: "Main Street Bridge", issue: "Major Construction", until: "April 15, 2025" },
                      { road: "Highway 101 North", issue: "Lane Closures", until: "March 30, 2025" },
                      { road: "Mountain Pass", issue: "Weather Conditions", until: "Weather Dependent" },
                      { road: "Downtown Area", issue: "Accident Cleanup", until: "Today, 8:00 PM" },
                      { road: "East-West Connector", issue: "Roadworks", until: "May 5, 2025" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 rounded bg-gray-100 dark:bg-gray-700"
                      >
                        <div>
                          <p className="font-medium">{item.road}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {item.issue} • Until {item.until}
                          </p>
                        </div>
                        <button className="h-8 w-8 flex items-center justify-center rounded-md text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600">
                          <MapPin size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Stats Tab Content */}
          {activeTab === "stats" && (
            <div className="space-y-4 mt-4 pb-20">
              <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
                <div className="p-4">
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white">
                        <BarChart3 size={24} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">Ride Analytics</h2>
                        <p className="text-gray-500 dark:text-gray-400">Track your riding patterns</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="flex-1 py-1 px-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md flex items-center justify-center gap-1">
                        <Download size={14} />
                        <span>Export</span>
                      </button>
                      <button className="flex-1 py-1 px-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md flex items-center justify-center gap-1">
                        <Share2 size={14} />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex border rounded-md overflow-hidden">
                        <button
                          className={`flex-1 py-2 text-sm ${statsTimeframe === "day" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                          onClick={() => setStatsTimeframe("day")}
                        >
                          Day
                        </button>
                        <button
                          className={`flex-1 py-2 text-sm ${statsTimeframe === "week" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                          onClick={() => setStatsTimeframe("week")}
                        >
                          Week
                        </button>
                        <button
                          className={`flex-1 py-2 text-sm ${statsTimeframe === "month" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                          onClick={() => setStatsTimeframe("month")}
                        >
                          Month
                        </button>
                        <button
                          className={`flex-1 py-2 text-sm ${statsTimeframe === "year" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                          onClick={() => setStatsTimeframe("year")}
                        >
                          Year
                        </button>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex border rounded-md overflow-hidden">
                        <button
                          className={`flex-1 py-2 text-sm ${statsType === "distance" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                          onClick={() => setStatsType("distance")}
                        >
                          Distance
                        </button>
                        <button
                          className={`flex-1 py-2 text-sm ${statsType === "time" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                          onClick={() => setStatsType("time")}
                        >
                          Time
                        </button>
                        <button
                          className={`flex-1 py-2 text-sm ${statsType === "speed" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                          onClick={() => setStatsType("speed")}
                        >
                          Speed
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="h-64 relative mb-6">
                    <div className="absolute inset-0 flex items-end">
                      {getChartData().map((value, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div
                            className={`w-full max-w-[40px] ${
                              value > 0 ? "bg-gradient-to-t from-blue-600 to-blue-400" : "bg-gray-200 dark:bg-gray-700"
                            } rounded-t`}
                            style={{
                              height: `${value > 0 ? (value / Math.max(...getChartData().filter((v) => v > 0))) * 80 : 0}%`,
                            }}
                          ></div>
                        </div>
                      ))}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 flex justify-between pt-2 border-t">
                      {getLabels().map((label, index) => (
                        <div
                          key={index}
                          className="text-xs text-gray-500 dark:text-gray-400 text-center"
                          style={{ width: `${100 / getLabels().length}%` }}
                        >
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-4 rounded bg-gray-100 dark:bg-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={16} className="text-blue-500" />
                        <span className="font-medium">
                          Total {statsType === "distance" ? "Distance" : statsType === "time" ? "Time" : "Speed"}
                        </span>
                      </div>
                      <div className="text-2xl font-bold">
                        {getTotal()} {getUnit()}
                      </div>
                    </div>

                    <div className="p-4 rounded bg-gray-100 dark:bg-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 size={16} className="text-blue-500" />
                        <span className="font-medium">
                          Average {statsType === "distance" ? "Distance" : statsType === "time" ? "Time" : "Speed"}
                        </span>
                      </div>
                      <div className="text-2xl font-bold">
                        {getAverage()} {getUnit()}
                      </div>
                    </div>

                    <div className="p-4 rounded bg-gray-100 dark:bg-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <Route size={16} className="text-blue-500" />
                        <span className="font-medium">Active Days</span>
                      </div>
                      <div className="text-2xl font-bold">
                        {getChartData().filter((value) => value > 0).length} / {getChartData().length}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-4">Recent Rides</h3>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Morning Commute",
                        date: "Today, 8:30 AM",
                        distance: "12.4 km",
                        time: "28 min",
                        avgSpeed: "26.6 km/h",
                      },
                      {
                        title: "Evening Ride",
                        date: "Yesterday, 6:15 PM",
                        distance: "8.7 km",
                        time: "19 min",
                        avgSpeed: "27.5 km/h",
                      },
                      {
                        title: "Weekend Trip",
                        date: "Mar 22, 10:20 AM",
                        distance: "45.2 km",
                        time: "1h 32m",
                        avgSpeed: "29.4 km/h",
                      },
                      {
                        title: "City Tour",
                        date: "Mar 20, 2:45 PM",
                        distance: "15.8 km",
                        time: "42 min",
                        avgSpeed: "22.6 km/h",
                      },
                    ].map((ride, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 rounded bg-gray-100 dark:bg-gray-700"
                      >
                        <div>
                          <p className="font-medium">{ride.title}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                            <Calendar size={12} />
                            <span>{ride.date}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">{ride.distance}</p>
                          <div className="flex items-center justify-end gap-2 text-xs text-gray-500 dark:text-gray-400">
                            <Clock size={12} />
                            <span>{ride.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}

                    <button className="w-full h-12 border border-gray-300 dark:border-gray-700 rounded-md">
                      View All Rides
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-4">Frequent Routes</h3>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Home to Work",
                        frequency: "20 times this month",
                        distance: "12.4 km",
                        time: "Avg. 28 min",
                      },
                      { title: "Gym Route", frequency: "12 times this month", distance: "8.7 km", time: "Avg. 19 min" },
                      {
                        title: "Weekend Loop",
                        frequency: "8 times this month",
                        distance: "45.2 km",
                        time: "Avg. 1h 32m",
                      },
                      { title: "Downtown", frequency: "6 times this month", distance: "15.8 km", time: "Avg. 42 min" },
                    ].map((route, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 rounded bg-gray-100 dark:bg-gray-700"
                      >
                        <div>
                          <p className="font-medium">{route.title}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{route.frequency}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">{route.distance}</p>
                          <div className="flex items-center justify-end gap-2 text-xs text-gray-500 dark:text-gray-400">
                            <Clock size={12} />
                            <span>{route.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab Content */}
          {activeTab === "settings" && (
            <div className="mt-4 rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-6">Settings</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Display Settings</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="units" className="block text-sm font-medium">
                          Units
                        </label>
                        <select
                          id="units"
                          className="h-12 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3"
                          defaultValue="km"
                        >
                          <option value="km">Kilometers (km/h)</option>
                          <option value="mi">Miles (mph)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="theme" className="block text-sm font-medium">
                          AR Display Theme
                        </label>
                        <select
                          id="theme"
                          className="h-12 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3"
                          defaultValue="auto"
                        >
                          <option value="auto">Auto (Day/Night)</option>
                          <option value="light">Light</option>
                          <option value="dark">Dark</option>
                          <option value="high-contrast">High Contrast</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium">AR Display Brightness</label>
                        <div className="flex items-center gap-2">
                          <button className="h-10 w-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-md">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
                              <path d="M12 2v2" />
                              <path d="M12 20v2" />
                              <path d="m4.9 4.9 1.4 1.4" />
                              <path d="m17.7 17.7 1.4 1.4" />
                              <path d="M2 12h2" />
                              <path d="M20 12h2" />
                              <path d="m6.3 17.7-1.4 1.4" />
                              <path d="m19.1 4.9-1.4 1.4" />
                            </svg>
                          </button>
                          <div className="relative flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="absolute h-full w-3/4 bg-blue-500 rounded-full"></div>
                            <div className="absolute h-4 w-4 bg-blue-500 rounded-full top-1/2 left-3/4 transform -translate-y-1/2"></div>
                          </div>
                          <button className="h-10 w-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-md">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="9" />
                              <path d="M12 3v18" />
                              <path d="M3 12h18" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Notification Settings</h3>
                    <div className="space-y-3">
                      {[
                        { name: "Safety Alerts", checked: true },
                        { name: "Navigation Alerts", checked: true },
                        { name: "Battery Alerts", checked: true },
                        { name: "Incoming Calls", checked: true },
                        { name: "Messages", checked: false },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <label htmlFor={`setting-${index}`} className="flex-1 text-sm font-medium">
                            {item.name}
                          </label>
                          <div className="relative inline-flex items-center">
                            <input
                              type="checkbox"
                              id={`setting-${index}`}
                              className="sr-only"
                              defaultChecked={item.checked}
                            />
                            <div className="h-6 w-11 rounded-full bg-gray-200 dark:bg-gray-700 peer-checked:bg-blue-500"></div>
                            <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-all peer-checked:left-5"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Device Settings</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="firmware" className="block text-sm font-medium">
                          Firmware Version
                        </label>
                        <div className="flex gap-2">
                          <input
                            id="firmware"
                            value=""
                            readOnly
                            className="h-12 flex-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3"
                          />
                          <button className="h-12 px-4 border border-gray-300 dark:border-gray-700 rounded-md">
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="connection" className="block text-sm font-medium">
                          Connection
                        </label>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between p-3 rounded-md border border-gray-300 dark:border-gray-700">
                            <div className="flex items-center gap-3">
                              <Bluetooth size={18} className="text-blue-500" />
                              <span>Bluetooth</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                              <span className="text-sm text-green-500">Connected</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-md border border-gray-300 dark:border-gray-700">
                            <div className="flex items-center gap-3">
                              <Wifi size={18} className="text-blue-500" />
                              <span>Wi-Fi</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                              <span className="text-sm text-green-500">Connected</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="app-version" className="block text-sm font-medium">
                          App Version
                        </label>
                        <div className="flex items-center justify-between p-3 rounded-md border border-gray-300 dark:border-gray-700">
                          <span>HaloRide </span>
                          <button className="text-sm text-blue-500">Check for Updates</button>
                        </div>
                      </div>

                      <div className="pt-4 space-y-2">
                        <button className="w-full h-12 border border-gray-300 dark:border-gray-700 rounded-md">
                          Reset All Settings
                        </button>
                        <button className="w-full h-12 text-red-500 border border-gray-300 dark:border-gray-700 rounded-md">
                          Factory Reset
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 border-t bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="px-4 py-2">
          <nav className="flex justify-between">
            <button
              className={`h-14 w-14 flex flex-col items-center justify-center gap-1 ${
                activeTab === "home" ? "text-blue-500" : "text-gray-500 dark:text-gray-400"
              }`}
              onClick={() => setActiveTab("home")}
            >
              <Home size={20} />
              <span className="text-[10px]">Home</span>
            </button>
            <button
              className={`h-14 w-14 flex flex-col items-center justify-center gap-1 ${
                activeTab === "navigation" ? "text-blue-500" : "text-gray-500 dark:text-gray-400"
              }`}
              onClick={() => setActiveTab("navigation")}
            >
              <Map size={20} />
              <span className="text-[10px]">Map</span>
            </button>
            <button
              className={`h-14 w-14 flex flex-col items-center justify-center gap-1 ${
                activeTab === "music" ? "text-blue-500" : "text-gray-500 dark:text-gray-400"
              }`}
              onClick={() => setActiveTab("music")}
            >
              <Music size={20} />
              <span className="text-[10px]">Music</span>
            </button>
            <button
              className={`h-14 w-14 flex flex-col items-center justify-center gap-1 ${
                activeTab === "safety" ? "text-blue-500" : "text-gray-500 dark:text-gray-400"
              }`}
              onClick={() => setActiveTab("safety")}
            >
              <AlertTriangle size={20} />
              <span className="text-[10px]">Safety</span>
            </button>
            <button
              className={`h-14 w-14 flex flex-col items-center justify-center gap-1 ${
                activeTab === "stats" ? "text-blue-500" : "text-gray-500 dark:text-gray-400"
              }`}
              onClick={() => setActiveTab("stats")}
            >
              <BarChart3 size={20} />
              <span className="text-[10px]">Stats</span>
            </button>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default DashboardPage
