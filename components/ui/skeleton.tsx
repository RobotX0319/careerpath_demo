import * as React from "react"
import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular"
  width?: string | number
  height?: string | number
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = "rectangular", width, height, style, ...props }, ref) => {
    const variantClasses = {
      text: "rounded h-4",
      circular: "rounded-full",
      rectangular: "rounded"
    }

    const combinedStyle = {
      width,
      height,
      ...style
    }

    return (
      <div
        ref={ref}
        className={cn(
          "animate-pulse bg-gray-200",
          variantClasses[variant],
          className
        )}
        style={combinedStyle}
        {...props}
      />
    )
  }
)
Skeleton.displayName = "Skeleton"

// Pre-built skeleton components
export const SkeletonCard: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("space-y-3 p-4", className)}>
    <Skeleton variant="rectangular" className="h-[200px] w-full" />
    <div className="space-y-2">
      <Skeleton variant="text" className="h-4 w-3/4" />
      <Skeleton variant="text" className="h-4 w-1/2" />
    </div>
  </div>
)

export const SkeletonAvatar: React.FC<{ size?: "sm" | "md" | "lg"; className?: string }> = ({ 
  size = "md", 
  className 
}) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12"
  }

  return (
    <Skeleton 
      variant="circular" 
      className={cn(sizeClasses[size], className)} 
    />
  )
}

export const SkeletonText: React.FC<{ 
  lines?: number
  className?: string 
}> = ({ lines = 3, className }) => (
  <div className={cn("space-y-2", className)}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        variant="text"
        className={cn(
          "h-4",
          i === lines - 1 ? "w-3/4" : "w-full"
        )}
      />
    ))}
  </div>
)

export { Skeleton }