import { cn } from "../../utils/cn"

export function Checkbox({ className, ...props }) {
  return (
    <input
      type="checkbox"
      className={cn(
        "h-4 w-4 rounded border border-gray-300 dark:border-gray-700 text-blue-600 focus:ring-blue-500",
        className,
      )}
      {...props}
    />
  )
}

