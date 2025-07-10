"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleNavigation = async (path: string, actionId: string) => {
    setLoading(actionId)
    await new Promise(resolve => setTimeout(resolve, 500))
    window.location.href = path
  }

  const stats = [
    {
      title: "Topshirilgan testlar",
      value: 2,
      description: "Shaxsiyat va IQ testlari",
      icon: "📊"
    },
    {
      title: "Kasb tavsiyalari",
      value: 5,
      description: "AI tavsiya qilgan kasblar",
      icon: "🎯"
    },
    {
      title: "Ish o'rinlari",
      value: 23,
      description: "Sizga mos vakansiyalar",
      icon: "💼"
    },
    {
      title: "Profil to'liqlik",
      value: "85%",
      description: "Ma'lumotlar to'ldirildi",
      icon: "👤"
    }
  ]

  const actions = [
    {
      id: 'personality',
      title: "Shaxsiyat testi",
      description: "Big Five modeli asosida shaxsingizni tahlil qiling",
      icon: "🧠",
      href: "/dashboard/tests/personality"
    },
    {
      id: 'iq',
      title: "IQ testi",
      description: "Mantiqiy fikrlash qobiliyatingizni sinab ko'ring",
      icon: "🎯",
      href: "/dashboard/tests/iq"
    },
    {
      id: 'chat',
      title: "AI maslahatchi",
      description: "Kasb tanlash bo'yicha AI dan maslahat oling",
      icon: "🤖",
      href: "/dashboard/chat"
    },
    {
      id: 'jobs',
      title: "Ish qidirish",
      description: "O'zingizga mos vakansiyalar topishni boshlang",
      icon: "💼",
      href: "/dashboard/jobs"
    },
    {
      id: 'careers',
      title: "Kasb yo'nalishlari",
      description: "Test natijalari asosida kasb tanlang",
      icon: "🎓",
      href: "/dashboard/careers"
    },
    {
      id: 'roadmap',
      title: "Karyera yo'l xaritasi",
      description: "Tanlangan kasb bo'yicha rivojlanish rejasi",
      icon: "📈",
      href: "/dashboard/roadmap"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🚀 Dashboard'ga xush kelibsiz!
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Karyerangizni rivojlantirish uchun testlarni topshing, AI maslahatchi bilan gaplashing 
            va o'zingizga mos kasb yo'nalishini toping.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className="text-2xl">{stat.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-600 mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">Tezkor harakatlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((action) => (
            <Card key={action.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl text-center mb-2">{action.icon}</div>
                <CardTitle className="text-center">{action.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-center">{action.description}</p>
                {loading === action.id ? (
                  <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                  </div>
                ) : (
                  <Button 
                    className="w-full"
                    onClick={() => handleNavigation(action.href, action.id)}
                  >
                    Boshlash
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Oxirgi faollik</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { icon: "🧠", title: "Shaxsiyat testi yakunlandi", time: "2 soat oldin" },
              { icon: "🤖", title: "AI maslahatchi bilan suhbat", time: "3 soat oldin" },
              { icon: "🎯", title: "Frontend Developer kasbi tanlandi", time: "1 kun oldin" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-2xl">{activity.icon}</span>
                <div className="flex-1">
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Features Section */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">Platform xususiyatlari</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🎯",
              title: "AI-powered Matching",
              description: "Sun'iy intellekt yordamida sizga eng mos kasb va ish o'rinlarini topadi"
            },
            {
              icon: "📊",
              title: "Ilmiy testlar",
              description: "Psixologik va intellektual testlar orqali to'liq shaxsiy tahlil"
            },
            {
              icon: "🚀",
              title: "Karyera yo'l xaritasi",
              description: "Tanlangan kasbga erishish uchun bosqichma-bosqich rejalar"
            }
          ].map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}