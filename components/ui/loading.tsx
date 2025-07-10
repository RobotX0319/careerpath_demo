import * as React from "react"
import { cn } from "@/lib/utils"

interface LoadingProps {
  size?: "sm" | "md" | "lg"
  variant?: "spinner" | "dots" | "pulse"
  text?: string
  className?: string
}

const Loading: React.FC<LoadingProps> = ({ 
  size = "md", 
  variant = "spinner", 
  text,
  className 
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  }

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base", 
    lg: "text-lg"
  }

  const renderSpinner = () => (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-gray-300 border-t-blue-600",
        sizeClasses[size]
      )}
    />
  )

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            "bg-blue-600 rounded-full animate-pulse",
            size === "sm" ? "w-2 h-2" : size === "md" ? "w-3 h-3" : "w-4 h-4"
          )}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: "0.8s"
          }}
        />
      ))}
    </div>
  )

  const renderPulse = () => (
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
    </div>
  )

  const renderLoader = () => {
    switch (variant) {
      case "dots":
        return renderDots()
      case "pulse":
        return renderPulse()
      default:
        return renderSpinner()
    }
  }

  return (
    <div className={cn("flex flex-col items-center justify-center space-y-2", className)}>
      {renderLoader()}
      {text && (
        <p className={cn("text-gray-600", textSizeClasses[size])}>
          {text}
        </p>
      )}
    </div>
  )
}

// Loading overlay for full screen
export const LoadingOverlay: React.FC<{ isLoading: boolean; text?: string }> = ({ 
  isLoading, 
  text = "Yuklanmoqda..." 
}) => {
  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <Loading size="lg" text={text} />
    </div>
  )
}

// Loading button state
export const LoadingButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
  loadingText?: string
}> = ({ 
  children, 
  isLoading, 
  loadingText, 
  disabled, 
  className,
  ...props 
}) => (
  <button
    className={cn(
      "inline-flex items-center justify-center space-x-2",
      className
    )}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <Loading size="sm" />}
    <span>{isLoading ? loadingText : children}</span>
  </button>
)

export { Loading }