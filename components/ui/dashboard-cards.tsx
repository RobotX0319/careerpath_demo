import * as React from "react"
import { cn } from "@/lib/utils"

interface DashboardCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

const DashboardCard: React.FC<DashboardCardProps> = ({ 
  children, 
  className, 
  hover = true 
}) => (
  <div className={cn(
    "bg-white rounded-lg border border-gray-200 shadow-sm",
    hover && "hover:shadow-md transition-shadow duration-200",
    className
  )}>
    {children}
  </div>
)

interface QuickActionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  onClick: () => void
  className?: string
  disabled?: boolean
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({
  icon,
  title,
  description,
  onClick,
  className,
  disabled = false
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={cn(
      "w-full text-left p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group",
      disabled && "opacity-50 cursor-not-allowed hover:border-gray-200 hover:shadow-sm",
      className
    )}
  >
    <div className="flex items-start space-x-4">
      <div className="text-3xl group-hover:scale-110 transition-transform duration-200">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
        →
      </div>
    </div>
  </button>
)

interface ProgressCardProps {
  title: string
  current: number
  total: number
  description?: string
  variant?: "default" | "success" | "warning"
  className?: string
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  current,
  total,
  description,
  variant = "default",
  className
}) => {
  const percentage = Math.min((current / total) * 100, 100)
  
  const variantClasses = {
    default: "bg-blue-600",
    success: "bg-green-600",
    warning: "bg-yellow-600"
  }

  return (
    <DashboardCard className={cn("p-6", className)}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <span className="text-sm text-gray-600">
          {current}/{total}
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
        <div 
          className={cn("h-3 rounded-full transition-all duration-500", variantClasses[variant])}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-gray-900">
          {Math.round(percentage)}%
        </span>
        {description && (
          <span className="text-sm text-gray-600">{description}</span>
        )}
      </div>
    </DashboardCard>
  )
}

interface ActivityCardProps {
  activities: Array<{
    id: string
    type: string
    title: string
    time: string
    icon?: React.ReactNode
  }>
  className?: string
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activities, className }) => (
  <DashboardCard className={cn("p-6", className)}>
    <h3 className="font-semibold text-gray-900 mb-4">Oxirgi faollik</h3>
    
    <div className="space-y-4">
      {activities.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <div className="text-4xl mb-2">📝</div>
          <p>Hali faollik yo'q</p>
        </div>
      ) : (
        activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className="text-lg">
              {activity.icon || "•"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-xs text-gray-600">{activity.type}</p>
            </div>
            <div className="text-xs text-gray-500">
              {activity.time}
            </div>
          </div>
        ))
      )}
    </div>
  </DashboardCard>
)

interface NotificationCardProps {
  notifications: Array<{
    id: string
    title: string
    message: string
    type: "info" | "success" | "warning" | "error"
    time: string
    read?: boolean
  }>
  onMarkAsRead?: (id: string) => void
  className?: string
}

const NotificationCard: React.FC<NotificationCardProps> = ({ 
  notifications, 
  onMarkAsRead,
  className 
}) => {
  const typeIcons = {
    info: "ℹ️",
    success: "✅", 
    warning: "⚠️",
    error: "❌"
  }

  return (
    <DashboardCard className={cn("p-6", className)}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-900">Bildirishnomalar</h3>
        <span className="text-sm text-gray-600">
          {notifications.filter(n => !n.read).length} yangi
        </span>
      </div>
      
      <div className="space-y-3">
        {notifications.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <div className="text-4xl mb-2">🔔</div>
            <p>Bildirishnomalar yo'q</p>
          </div>
        ) : (
          notifications.slice(0, 5).map((notification) => (
            <div 
              key={notification.id}
              className={cn(
                "p-3 rounded-lg border transition-colors",
                notification.read 
                  ? "bg-gray-50 border-gray-200" 
                  : "bg-blue-50 border-blue-200"
              )}
            >
              <div className="flex items-start space-x-3">
                <span className="text-lg">{typeIcons[notification.type]}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {notification.title}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {notification.time}
                  </p>
                </div>
                {!notification.read && onMarkAsRead && (
                  <button
                    onClick={() => onMarkAsRead(notification.id)}
                    className="text-xs text-blue-600 hover:text-blue-800"
                  >
                    O'qildi
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </DashboardCard>
  )
}

export { 
  DashboardCard, 
  QuickActionCard, 
  ProgressCard, 
  ActivityCard, 
  NotificationCard 
}