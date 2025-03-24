"use client"

import { useState } from "react"
import { Calendar, Clock, BarChart3, TrendingUp, Route } from "lucide-react"

export function RideStats() {
  const [timeframe, setTimeframe] = useState("week")
  const [statType, setStatType] = useState("distance")

  const weeklyDistance = [12.4, 8.7, 0, 15.2, 9.8, 0, 14.5]
  const weeklyTime = [28, 19, 0, 35, 22, 0, 32]
  const weeklySpeed = [42, 38, 0, 45, 40, 0, 43]

  const getChartData = () => {
    if (statType === "distance") return weeklyDistance
    if (statType === "time") return weeklyTime
    return weeklySpeed
  }

  const getUnit = () => {
    if (statType === "distance") return "km"
    if (statType === "time") return "min"
    return "km/h"
  }

  const getTotal = () => {
    return getChartData()
      .reduce((a, b) => a + b, 0)
      .toFixed(1)
  }

  const getAverage = () => {
    const nonZeroValues = getChartData().filter((value) => value > 0)
    return (nonZeroValues.reduce((a, b) => a + b, 0) / nonZeroValues.length).toFixed(1)
  }

  return (
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

            <div className="flex border rounded-md overflow-hidden">
              <button
                className={`flex-1 py-2 text-sm ${timeframe === "day" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                onClick={() => setTimeframe("day")}
              >
                Day
              </button>
              <button
                className={`flex-1 py-2 text-sm ${timeframe === "week" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                onClick={() => setTimeframe("week")}
              >
                Week
              </button>
              <button
                className={`flex-1 py-2 text-sm ${timeframe === "month" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                onClick={() => setTimeframe("month")}
              >
                Month
              </button>
              <button
                className={`flex-1 py-2 text-sm ${timeframe === "year" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                onClick={() => setTimeframe("year")}
              >
                Year
              </button>
            </div>

            <div className="flex border rounded-md overflow-hidden">
              <button
                className={`flex-1 py-2 text-sm ${statType === "distance" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                onClick={() => setStatType("distance")}
              >
                Distance
              </button>
              <button
                className={`flex-1 py-2 text-sm ${statType === "time" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                onClick={() => setStatType("time")}
              >
                Time
              </button>
              <button
                className={`flex-1 py-2 text-sm ${statType === "speed" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                onClick={() => setStatType("speed")}
              >
                Speed
              </button>
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

          <div className="grid grid-cols-1 gap-3">
            <div className="p-4 rounded bg-gray-100 dark:bg-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={16} className="text-blue-500" />
                <span className="font-medium">
                  Total {statType === "distance" ? "Distance" : statType === "time" ? "Time" : "Speed"}
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
                  Average {statType === "distance" ? "Distance" : statType === "time" ? "Time" : "Speed"}
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
              },
              {
                title: "Evening Ride",
                date: "Yesterday, 6:15 PM",
                distance: "8.7 km",
                time: "19 min",
              },
              {
                title: "Weekend Trip",
                date: "Mar 9, 10:20 AM",
                distance: "45.2 km",
                time: "1h 32m",
              },
            ].map((ride, index) => (
              <div key={index} className="flex justify-between items-center p-3 rounded bg-gray-100 dark:bg-gray-700">
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
          </div>
        </div>
      </div>
    </div>
  )
}


