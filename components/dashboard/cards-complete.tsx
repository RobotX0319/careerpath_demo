import React from 'react'

// Helper function for className merging
function cn(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

interface DashboardCardProps {
  children: React.ReactNode
  className?: string
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ children, className = '' }) => {
  return (
    <div className={cn("bg-white rounded-lg shadow-md", className)}>
      {children}
    </div>
  )
}

interface QuickActionCardProps {
  icon: string
  title: string
  description: string
  onClick: () => void
}

export const QuickActionCard: React.FC<QuickActionCardProps> = ({ icon, title, description, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

interface ProgressCardProps {
  title: string
  current: number
  total: number
  description: string
  variant: 'success' | 'warning' | 'info'
}

export const ProgressCard: React.FC<ProgressCardProps> = ({ title, current, total, description, variant }) => {
  const percentage = (current / total) * 100
  const colorClass = variant === 'success' ? 'bg-green-500' : variant === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div 
          className={`h-2 rounded-full ${colorClass}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-sm font-medium text-gray-900 mt-1">{current}/{total}</p>
    </div>
  )
}

interface Activity {
  id: string
  type: string
  title: string
  time: string
  icon: string
}

interface ActivityCardProps {
  activities: Activity[]
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activities }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">So'nggi faoliyat</h3>
      <div className="space-y-3">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center space-x-3">
            <div className="text-xl">{activity.icon}</div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface Notification {
  id: string
  title: string
  message: string
  type: 'success' | 'info' | 'warning' | 'error'
  time: string
  read: boolean
}

interface NotificationCardProps {
  notifications: Notification[]
  onMarkAsRead: (id: string) => void
}

export const NotificationCard: React.FC<NotificationCardProps> = ({ notifications, onMarkAsRead }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Bildirishnomalar</h3>
      <div className="space-y-3">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`p-3 rounded-lg border ${notification.read ? 'bg-gray-50' : 'bg-blue-50'}`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
              </div>
              {!notification.read && (
                <button
                  onClick={() => onMarkAsRead(notification.id)}
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  Belgilash
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface StatCardProps {
  title: string
  value: number | string
  description: string
  icon: string
  trend?: {
    value: number
    label: string
    isPositive: boolean
  }
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, description, icon, trend }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="text-2xl">{icon}</div>
        {trend && (
          <div className={cn(
            "text-xs px-2 py-1 rounded-full",
            trend.isPositive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          )}>
            {trend.isPositive ? "+" : "-"}{trend.value}% {trend.label}
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        <p className="text-sm font-medium text-gray-900 mt-1">{title}</p>
        <p className="text-xs text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  )
}

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}