import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface StatsCardProps {
  title: string
  value: string | number
  description: string
  icon: string
  trend?: {
    value: number
    label: string
    isPositive: boolean
  }
}

export default function StatsCard({ title, value, description, icon, trend }: StatsCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-2xl">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-gray-600 mt-1">{description}</p>
        {trend && (
          <div className={`text-xs mt-2 ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.isPositive ? '+' : '-'}{trend.value}% {trend.label}
          </div>
        )}
      </CardContent>
    </Card>
  )
}