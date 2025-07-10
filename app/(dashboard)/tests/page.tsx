"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Loading icon component
const Loader2 = ({ className }: { className?: string }) => (
  <svg className={className || "animate-spin h-4 w-4"} viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
    <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
  </svg>
)

export default function TestsPage() {
  const [loading, setLoading] = useState<string | null>(null)
  const router = useRouter() // 2. Initialize router

  const tests = [
    {
      id: 'personality',
      title: 'Shaxsiyat testi',
      description: 'Big Five modeli asosida shaxsiyat xususiyatlarini aniqlash',
      duration: '10-15 daqiqa',
      questions: '15 ta savol',
      icon: '🧠',
      color: 'from-blue-500 to-blue-600',
      href: '/tests/personality'
    },
    {
      id: 'iq',
      title: 'IQ testi',
      description: 'Mantiqiy fikrlash va kognitiv qobiliyatlarni baholash',
      duration: '20-30 daqiqa',
      questions: '10 ta savol',
      icon: '🎯',
      color: 'from-green-500 to-green-600',
      href: '/tests/iq'
    }
  ]

  const handleStartTest = (test: typeof tests[0]) => {
    setLoading(test.id)
    // 3. Use router.push for navigation
    router.push(test.href)
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Psixologik testlar
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Shaxsiyatingiz va kognitiv qobiliyatlaringizni baholash orqali 
          o'zingizga eng mos kasb yo'nalishini toping
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tests.map((test) => (
          <Card key={test.id} className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${test.color}`} />
            
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">{test.icon}</div>
              <CardTitle className="text-2xl">{test.title}</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-center">{test.description}</p>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-500">Davomiyligi</div>
                  <div className="font-semibold">{test.duration}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-500">Savollar</div>
                  <div className="font-semibold">{test.questions}</div>
                </div>
              </div>

              <Button 
                className="w-full" 
                size="lg"
                onClick={() => handleStartTest(test)}
                disabled={loading === test.id} // 4. Disable button while loading
              >
                {loading === test.id ? (
                  <Loader2 className="animate-spin w-6 h-6" />
                ) : (
                  'Testni boshlash'
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-8 text-center">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Test natijalari
          </h3>
          <p className="text-gray-600 mb-4">
            Testlarni yakunlangandan so'ng sizga mos kasb yo'nalishlari va 
            rivojlanish tavsiyalari beriladi
          </p>
          <Button variant="outline">
            Natijalarga qarang
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}