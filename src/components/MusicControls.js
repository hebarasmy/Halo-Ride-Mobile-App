"use client"

import { useState } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, Music } from "lucide-react"

export function MusicControls() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
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
  )
}

