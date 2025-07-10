import * as React from "react"
import { cn } from "@/lib/utils"

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: "sm" | "md" | "lg"
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, fallback, size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "h-8 w-8",
      md: "h-10 w-10", 
      lg: "h-12 w-12"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex shrink-0 overflow-hidden rounded-full",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt || "Avatar"}
            className="aspect-square h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-100 text-slate-600 font-medium">
            {fallback || "👤"}
          </div>
        )}
      </div>
    )
  }
)
Avatar.displayName = "Avatar"

export { Avatar }