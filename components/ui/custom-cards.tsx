import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "./badge"
import { Button } from "./button"

interface StatCardProps {
  title: string
  value: string | number
  description?: string
  icon?: React.ReactNode
  trend?: {
    value: number
    label: string
    isPositive: boolean
  }
  className?: string
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  icon,
  trend,
  className
}) => (
  <div className={cn(
    "bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow",
    className
  )}>
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
      </div>
      {icon && (
        <div className="ml-4 text-2xl text-blue-600">
          {icon}
        </div>
      )}
    </div>
    
    {trend && (
      <div className="mt-4 flex items-center">
        <Badge
          variant={trend.isPositive ? "success" : "danger"}
          size="sm"
          className="mr-2"
        >
          {trend.isPositive ? "↗" : "↘"} {Math.abs(trend.value)}%
        </Badge>
        <span className="text-sm text-gray-600">{trend.label}</span>
      </div>
    )}
  </div>
)

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  action,
  className
}) => (
  <div className={cn(
    "bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-md transition-shadow",
    className
  )}>
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    {action && (
      <Button onClick={action.onClick} variant="outline" size="sm">
        {action.label}
      </Button>
    )}
  </div>
)

interface InfoCardProps {
  title: string
  children: React.ReactNode
  variant?: "default" | "success" | "warning" | "danger" | "info"
  className?: string
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  children,
  variant = "default",
  className
}) => {
  const variantClasses = {
    default: "border-gray-200 bg-white",
    success: "border-green-200 bg-green-50",
    warning: "border-yellow-200 bg-yellow-50",
    danger: "border-red-200 bg-red-50",
    info: "border-blue-200 bg-blue-50"
  }

  const titleVariantClasses = {
    default: "text-gray-900",
    success: "text-green-800",
    warning: "text-yellow-800", 
    danger: "text-red-800",
    info: "text-blue-800"
  }

  return (
    <div className={cn(
      "rounded-lg border p-4",
      variantClasses[variant],
      className
    )}>
      <h3 className={cn(
        "font-semibold mb-2",
        titleVariantClasses[variant]
      )}>
        {title}
      </h3>
      <div className="text-sm">
        {children}
      </div>
    </div>
  )
}

interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon = "📭",
  title,
  description,
  action,
  className
}) => (
  <div className={cn(
    "text-center py-12 px-4",
    className
  )}>
    <div className="text-6xl mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-6 max-w-sm mx-auto">{description}</p>
    {action && (
      <Button onClick={action.onClick}>
        {action.label}
      </Button>
    )}
  </div>
)

export { StatCard, FeatureCard, InfoCard, EmptyState }