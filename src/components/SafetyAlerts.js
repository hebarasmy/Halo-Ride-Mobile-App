"use client"

import { useState } from "react"
import { AlertTriangle, CloudRain, MapPin, Clock, ThumbsUp, ThumbsDown, AlertCircle, Eye, Route } from "lucide-react"

export function SafetyAlerts() {
  const [activeTab, setActiveTab] = useState("current")

  return (
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

            <div className="flex border rounded-md overflow-hidden">
              <button
                className={`flex-1 py-2 text-sm ${activeTab === "current" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                onClick={() => setActiveTab("current")}
              >
                Current
              </button>
              <button
                className={`flex-1 py-2 text-sm ${activeTab === "history" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                onClick={() => setActiveTab("history")}
              >
                History
              </button>
              <button
                className={`flex-1 py-2 text-sm ${activeTab === "settings" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                onClick={() => setActiveTab("settings")}
              >
                Settings
              </button>
            </div>
          </div>

          {activeTab === "current" && (
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-500/10 dark:bg-amber-900/20 border border-amber-500/20 dark:border-amber-700/30">
                <AlertTriangle size={24} className="text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-amber-700 dark:text-amber-400">Construction Zone Ahead</p>
                      <p className="text-sm text-amber-600/90 dark:text-amber-300/70 mt-1">
                        Construction reported on Main St between 5th and 7th Ave. Expect delays and lane closures.
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
                        Light rain expected in your area starting at 4:00 PM. Consider adjusting your travel plans.
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
                    <Clock size={12} />
                    <span>Starting in 2 hours</span>
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
                        Multi-vehicle accident on Main Road Southbound. Right lane blocked. Expect delays of 15-20
                        minutes.
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

          {activeTab === "history" && (
            <div className="space-y-3">
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

          {activeTab === "settings" && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Alert Types</h3>
              <div className="space-y-3">
                {[
                  {
                    name: "Accident Alerts",
                    icon: <AlertCircle size={16} className="text-red-500" />,
                    bgClass: "bg-red-500/10 dark:bg-red-900/20",
                  },
                  {
                    name: "Road Hazard Alerts",
                    icon: <AlertTriangle size={16} className="text-amber-500" />,
                    bgClass: "bg-amber-500/10 dark:bg-amber-900/20",
                  },
                  {
                    name: "Weather Alerts",
                    icon: <CloudRain size={16} className="text-blue-500" />,
                    bgClass: "bg-blue-500/10 dark:bg-blue-900/20",
                  },
                  {
                    name: "Blind Spot Alerts",
                    icon: <Eye size={16} className="text-purple-500" />,
                    bgClass: "bg-purple-500/10 dark:bg-purple-900/20",
                  },
                  {
                    name: "Speed Limit Alerts",
                    icon: <Route size={16} className="text-green-500" />,
                    bgClass: "bg-green-500/10 dark:bg-green-900/20",
                  },
                ].map((alert, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${alert.bgClass} flex items-center justify-center`}>
                        {alert.icon}
                      </div>
                      <label htmlFor={`alert-${index}`} className="flex-1">
                        {alert.name}
                      </label>
                    </div>
                    <div className="relative inline-flex items-center">
                      <input type="checkbox" id={`alert-${index}`} className="sr-only" defaultChecked />
                      <div className="h-6 w-11 rounded-full bg-gray-200 dark:bg-gray-700 peer-checked:bg-blue-500"></div>
                      <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-all peer-checked:left-5"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

