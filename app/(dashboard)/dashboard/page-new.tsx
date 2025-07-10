"use client"
import { useState } from 'react'
import { 
  DashboardCard,
  QuickActionCard, 
  ProgressCard,
  ActivityCard,
  NotificationCard,
  StatCard, 
  FeatureCard 
} from '@/components/dashboard/cards'

export default function DashboardPage() {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'Test yakunlandi',
      message: 'Shaxsiyat testi muvaffaqiyatli yakunlandi',
      type: 'success' as const,
      time: '2 soat oldin',
      read: false
    },
    {
      id: '2', 
      title: 'Yangi ish taklifi',
      message: 'Sizga mos 3 ta yangi vakansiya paydo bo\'ldi',
      type: 'info' as const,
      time: '5 soat oldin',
      read: false
    }
  ])

  const activities = [
    {
      id: '1',
      type: 'Test',
      title: 'Shaxsiyat testi yakunlandi',
      time: '2 soat oldin',
      icon: '🧠'
    },
    {
      id: '2',
      type: 'Chat',
      title: 'AI maslahatchi bilan suhbat',
      time: '3 soat oldin', 
      icon: '🤖'
    },
    {
      id: '3',
      type: 'Career',
      title: 'Frontend Developer kasbi tanlandi',
      time: '1 kun oldin',
      icon: '🎯'
    }
  ]

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'personality':
        window.location.href = '/dashboard/tests/personality'
        break
      case 'iq':
        window.location.href = '/dashboard/tests/iq'
        break
      case 'chat':
        window.location.href = '/dashboard/chat'
        break
      case 'jobs':
        window.location.href = '/dashboard/jobs'
        break
      case 'careers':
        window.location.href = '/dashboard/careers'
        break
    }
  }

  const handleMarkAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    )
  }

  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Welcome Section */}
      <DashboardCard className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🚀 CareerPath Dashboard'ga xush kelibsiz!
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Karyerangizni rivojlantirish uchun testlarni topshing, AI maslahatchi bilan gaplashing 
            va o'zingizga mos kasb yo'nalishini toping.
          </p>
        </div>
      </DashboardCard>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Topshirilgan testlar"
          value={2}
          description="Shaxsiyat va IQ testlari"
          icon="📊"
          trend={{
            value: 100,
            label: "Bu oy",
            isPositive: true
          }}
        />
        
        <StatCard
          title="Kasb tavsiyalari"
          value={5}
          description="AI tavsiya qilgan kasblar"
          icon="🎯"
        />
        
        <StatCard
          title="Ish o'rinlari"
          value={23}
          description="Sizga mos vakansiyalar"
          icon="💼"
          trend={{
            value: 15,
            label: "Haftalik o'sish",
            isPositive: true
          }}
        />
        
        <StatCard
          title="Profil to'liqlik"
          value="85%"
          description="Profile completion"
          icon="👤"
        />
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">Tezkor harakatlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <QuickActionCard
            icon="🧠"
            title="Shaxsiyat testi"
            description="Big Five modeli asosida shaxsingizni tahlil qiling"
            onClick={() => handleQuickAction('personality')}
          />
          
          <QuickActionCard
            icon="🎯"
            title="IQ testi"
            description="Mantiqiy fikrlash qobiliyatingizni sinab ko'ring"
            onClick={() => handleQuickAction('iq')}
          />
          
          <QuickActionCard
            icon="🤖"
            title="AI maslahatchi"
            description="Kasb tanlash bo'yicha AI dan maslahat oling"
            onClick={() => handleQuickAction('chat')}
          />
          
          <QuickActionCard
            icon="💼"
            title="Ish qidirish"
            description="O'zingizga mos vakansiyalar topishni boshlang"
            onClick={() => handleQuickAction('jobs')}
          />
          
          <QuickActionCard
            icon="🎓"
            title="Kasb yo'nalishlari"
            description="Test natijalari asosida kasb tanlang"
            onClick={() => handleQuickAction('careers')}
          />
          
          <QuickActionCard
            icon="📈"
            title="Karyera yo'l xaritasi"
            description="Tanlangan kasb bo'yicha rivojlanish rejasi"
            onClick={() => handleQuickAction('roadmap')}
          />
        </div>
      </div>

      {/* Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProgressCard
          title="Karyera rivojlanish"
          current={3}
          total={5}
          description="Bosqichlar yakunlandi"
          variant="success"
        />
        
        <ProgressCard
          title="Profil to'ldirish"
          current={85}
          total={100}
          description="Ma'lumotlar to'ldirildi"
          variant="warning"
        />
      </div>

      {/* Activity and Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityCard activities={activities} />
        
        <NotificationCard 
          notifications={notifications}
          onMarkAsRead={handleMarkAsRead}
        />
      </div>

      {/* Features Section */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">Platform xususiyatlari</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon="🎯"
            title="AI-powered Matching"
            description="Sun'iy intellekt yordamida sizga eng mos kasb va ish o'rinlarini topadi"
          />
          
          <FeatureCard
            icon="📊"
            title="Ilmiy testlar"
            description="Psixologik va intellektual testlar orqali to'liq shaxsiy tahlil"
          />
          
          <FeatureCard
            icon="🚀"
            title="Karyera yo'l xaritasi"
            description="Tanlangan kasbga erishish uchun bosqichma-bosqich rejalar"
          />
        </div>
      </div>
    </div>
  )
}