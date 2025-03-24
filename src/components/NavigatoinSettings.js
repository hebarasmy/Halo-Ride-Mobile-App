import { Map, Search, Navigation, MapPin } from "lucide-react"

export function NavigationSettings() {
  return (
    <div className="space-y-4 mt-4 pb-20">
      <div className="rounded-lg border bg-white dark:bg-gray-800 shadow-sm">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-4">Navigation</h3>

          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search destination..."
              className="w-full h-12 pl-10 pr-4 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
              size={18}
            />
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
  )
}

