import * as React from "react"
import { cn } from "@/lib/utils"

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallback?: React.ComponentType<{ error: Error; resetError: () => void }> }>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{ fallback?: React.ComponentType<{ error: Error; resetError: () => void }> }>) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return <FallbackComponent error={this.state.error} resetError={this.resetError} />
    }

    return this.props.children
  }
}

// Default error fallback component
const DefaultErrorFallback: React.FC<{ error: Error; resetError: () => void }> = ({ 
  error, 
  resetError 
}) => (
  <div className="min-h-[400px] flex items-center justify-center p-8">
    <div className="text-center space-y-4 max-w-md">
      <div className="text-6xl">😵</div>
      <h2 className="text-2xl font-bold text-gray-900">Xatolik yuz berdi</h2>
      <p className="text-gray-600">
        Nimadir noto'g'ri ketdi. Iltimos qaytadan urinib ko'ring.
      </p>
      <details className="text-left">
        <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
          Texnik ma'lumotlar
        </summary>
        <pre className="mt-2 text-xs bg-gray-100 p-3 rounded overflow-auto max-h-32">
          {error.message}
        </pre>
      </details>
      <button
        onClick={resetError}
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Qaytadan urinish
      </button>
    </div>
  </div>
)

// Error alert component
interface ErrorAlertProps {
  error: string | Error
  onClose?: () => void
  variant?: "error" | "warning" | "info"
  className?: string
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ 
  error, 
  onClose, 
  variant = "error",
  className 
}) => {
  const errorMessage = typeof error === 'string' ? error : error.message

  const variantClasses = {
    error: "bg-red-50 border-red-200 text-red-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800", 
    info: "bg-blue-50 border-blue-200 text-blue-800"
  }

  const iconMap = {
    error: "❌",
    warning: "⚠️",
    info: "ℹ️"
  }

  return (
    <div className={cn(
      "flex items-start space-x-3 p-4 border rounded-lg",
      variantClasses[variant],
      className
    )}>
      <span className="text-lg">{iconMap[variant]}</span>
      <div className="flex-1">
        <p className="font-medium">
          {variant === "error" ? "Xatolik" : variant === "warning" ? "Ogohlantirish" : "Ma'lumot"}
        </p>
        <p className="text-sm mt-1">{errorMessage}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          ✕
        </button>
      )}
    </div>
  )
}

// Error message component for forms
const ErrorMessage: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <p className={cn("text-sm text-red-600 mt-1", className)}>
    {children}
  </p>
)

// 404 Not Found component
const NotFound: React.FC<{ 
  title?: string
  description?: string
  actionLabel?: string
  onAction?: () => void
}> = ({ 
  title = "Sahifa topilmadi", 
  description = "Siz qidirayotgan sahifa mavjud emas yoki o'chirilgan.",
  actionLabel = "Bosh sahifaga qaytish",
  onAction
}) => (
  <div className="min-h-[600px] flex items-center justify-center p-8">
    <div className="text-center space-y-6 max-w-md">
      <div className="text-8xl">🔍</div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">404</h1>
        <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      {onAction && (
        <button
          onClick={onAction}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </div>
  </div>
)

export { 
  ErrorBoundary, 
  ErrorAlert, 
  ErrorMessage, 
  NotFound,
  DefaultErrorFallback 
}