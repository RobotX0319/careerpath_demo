import * as React from "react"
import { cn } from "@/lib/utils"

interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  side?: "top" | "bottom" | "left" | "right"
  className?: string
  disabled?: boolean
}

const Tooltip: React.FC<TooltipProps> = ({ 
  content, 
  children, 
  side = "top",
  className,
  disabled = false
}) => {
  const [isVisible, setIsVisible] = React.useState(false)

  if (disabled) {
    return <>{children}</>
  }

  const sideClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2", 
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
  }

  const arrowClasses = {
    top: "top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-900",
    bottom: "bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-gray-900",
    left: "left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-gray-900", 
    right: "right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-gray-900"
  }

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded whitespace-nowrap",
            sideClasses[side],
            className
          )}
        >
          {content}
          {/* Arrow */}
          <div
            className={cn(
              "absolute w-0 h-0 border-4",
              arrowClasses[side]
            )}
          />
        </div>
      )}
    </div>
  )
}

export { Tooltip }