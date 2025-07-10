import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface StatsCardProps {
  title: string
  value: string
  description: string
  icon: string
  color: 'blue' | 'green' | 'purple' | 'orange'
}

export default function StatsCard({ title, value, description, icon, color }: StatsCardProps) {
  const colorClasses = {
    blue: 'text-blue-600 bg-blue-50',
    green: 'text-green-600 bg-green-50',
    purple: 'text-purple-600 bg-purple-50',
    orange: 'text-orange-600 bg-orange-50',
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${colorClasses[color]}`}>
          <span className="text-lg">{icon}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-gray-600 mt-1">{description}</p>
      </CardContent>
    </Card>
  )
}