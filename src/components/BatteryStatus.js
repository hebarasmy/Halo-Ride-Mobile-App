"use client"

import { useState } from "react"
import { BatteryFull, BatteryLow, BatteryMedium, BatteryWarning, Clock } from "lucide-react"

export function BatteryStatus() {
  const [timeframe, setTimeframe] = useState("day")

  const batteryLevel = 78
  const estimatedHours = 6
  const estimatedMinutes = 45

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

  const getUsageData = () => {
    return [20, 35, 50, 65, 80, 95, 70]
  }

  const getLabels = () => {
    return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  }

  return (
    <div className="space-y-4 mt-4 pb-20">
      <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
        <div className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              {getBatteryIcon(batteryLevel)}
              <div>
                <h2 className="text-2xl font-bold">{batteryLevel}%</h2>
                <p className="text-gray-500 dark:text-gray-400">Battery Remaining</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Clock className="h-8 w-8 text-blue-500" />
              <div>
                <h2 className="text-2xl font-bold">
                  {estimatedHours}h {estimatedMinutes}m
                </h2>
                <p className="text-gray-500 dark:text-gray-400">Estimated Time Remaining</p>
              </div>
            </div>

            <div>
              <div className="relative h-4 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-full bg-blue-500" style={{ width: `${batteryLevel}%` }} />
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

      {/* Battery Usage History */}
      <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
        <div className="p-4">
          <div className="flex flex-col gap-4 mb-4">
            <h3 className="text-lg font-medium">Battery Usage History</h3>
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
            </div>
          </div>

          <div className="h-64 relative">
            <div className="absolute inset-0 flex items-end">
              {getUsageData().map((level, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full max-w-[30px] bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"
                    style={{ height: `${level * 0.6}%` }}
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
        </div>
      </div>
    </div>
  )
}

