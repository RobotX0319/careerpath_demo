import * as React from "react"
import { cn } from "@/lib/utils"

interface SelectProps {
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
  disabled?: boolean
}

interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

interface SelectItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  children: React.ReactNode
}

const SelectContext = React.createContext<{
  value?: string
  onValueChange?: (value: string) => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}>({
  isOpen: false,
  setIsOpen: () => {}
})

const Select: React.FC<SelectProps> = ({ value, onValueChange, children, disabled }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <SelectContext.Provider value={{ value, onValueChange, isOpen, setIsOpen }}>
      <div className={cn("relative", disabled && "opacity-50 pointer-events-none")}>
        {children}
      </div>
    </SelectContext.Provider>
  )
}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { isOpen, setIsOpen } = React.useContext(SelectContext)

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
        {...props}
      >
        {children}
        <span className="ml-2">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>
    )
  }
)
SelectTrigger.displayName = "SelectTrigger"

const SelectValue: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
  const { value } = React.useContext(SelectContext)
  return <span>{value || placeholder}</span>
}

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, ...props }, ref) => {
    const { isOpen, setIsOpen } = React.useContext(SelectContext)

    if (!isOpen) return null

    return (
      <>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 z-10"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Content */}
        <div
          ref={ref}
          className={cn(
            "absolute top-full left-0 z-20 mt-1 w-full rounded-md border border-slate-200 bg-white py-1 shadow-lg animate-in fade-in-0 zoom-in-95",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </>
    )
  }
)
SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef<HTMLButtonElement, SelectItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const { value: currentValue, onValueChange, setIsOpen } = React.useContext(SelectContext)
    const isSelected = currentValue === value

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "relative flex w-full cursor-pointer select-none items-center px-3 py-2 text-sm outline-none hover:bg-slate-100 focus:bg-slate-100",
          isSelected && "bg-blue-50 text-blue-600",
          className
        )}
        onClick={() => {
          onValueChange?.(value)
          setIsOpen(false)
        }}
        {...props}
      >
        {isSelected && <span className="mr-2">✓</span>}
        {children}
      </button>
    )
  }
)
SelectItem.displayName = "SelectItem"

const SelectLabel: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn("px-3 py-1.5 text-sm font-semibold text-slate-900", className)}
    {...props}
  />
)

const SelectSeparator: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn("mx-1 my-1 h-px bg-slate-200", className)}
    {...props}
  />
)

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator,
}