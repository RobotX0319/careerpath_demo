import * as React from "react"
import { cn } from "@/lib/utils"

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  variant?: "default" | "dashed" | "dotted"
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = "horizontal", variant = "default", ...props }, ref) => {
    const orientationClasses = {
      horizontal: "w-full h-px",
      vertical: "h-full w-px"
    }

    const variantClasses = {
      default: "bg-gray-200",
      dashed: "border-t border-dashed border-gray-300",
      dotted: "border-t border-dotted border-gray-300"
    }

    return (
      <div
        ref={ref}
        className={cn(
          orientationClasses[orientation],
          variant === "default" ? variantClasses[variant] : "",
          className
        )}
        style={variant !== "default" ? { background: "none" } : undefined}
        {...props}
      />
    )
  }
)
Separator.displayName = "Separator"

export { Separator }