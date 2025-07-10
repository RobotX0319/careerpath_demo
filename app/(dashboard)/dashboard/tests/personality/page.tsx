"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function PersonalityTestPage() {
  const [isCompleted, setIsCompleted] = useState(false)
  const [testStarted, setTestStarted] = useState(false)

  const handleStartTest = () => {
    setTestStarted(true)
  }

  const handleCompleteTest = async () => {
    setIsCompleted(true)
    
    // Send test completion email
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'test_completion',
          data: {
            email: 'demo@example.com',
            userName: 'Demo User',
            testType: 'personality',
            score: 85
          }
        })
      })
      
      const result = await response.json()
      if (result.success) {
        console.log('📧 Email notification:', result.message)
      }
    } catch (error) {
      console.error('Email error:', error)
    }
  }

  if (isCompleted) {
    return (
      <div className="container mx-auto py-8 max-w-4xl">
        <Card>
          <CardHeader className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <CardTitle className="text-2xl text-green-600">Test muvaffaqiyatli yakunlandi!</CardTitle>
            <p className="text-gray-600">Sizning shaxsiyat tahlili tayyor</p>
          </CardHeader>
          <CardContent className="text-center">
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-4">Sizning natijalaringiz:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-gray-600">Extraversion</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">78%</div>
                  <div className="text-sm text-gray-600">Conscientiousness</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">92%</div>
                  <div className="text-sm text-gray-600">Openness</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">67%</div>
                  <div className="text-sm text-gray-600">Agreeableness</div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-blue-800">
                📧 Test natijalari emailingizga yuborildi! Batafsil tahlil va kasb tavsiyalarini ko'ring.
              </p>
            </div>
            
            <div className="space-x-4">
              <Button onClick={() => window.location.href = '/dashboard/careers'}>
                Kasb tavsiyalarini ko'rish
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/dashboard/tests'}>
                Boshqa testlar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!testStarted) {
    return (
      <div className="container mx-auto py-8 max-w-4xl">
        <Card>
          <CardHeader className="text-center">
            <div className="text-6xl mb-4">🧠</div>
            <CardTitle className="text-2xl">Shaxsiyat testi</CardTitle>
            <p className="text-gray-600">Big Five shaxsiyat modeli asosida</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Test haqida:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 60 ta savol</li>
                  <li>• 15-20 daqiqa vaqt</li>
                  <li>• Big Five modeli</li>
                  <li>• Bepul tahlil</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Sizga beradi:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Shaxsiy xususiyatlar tahlili</li>
                  <li>• Kasb yo'nalishi tavsiyalari</li>
                  <li>• Kuchli tomonlaringiz</li>
                  <li>• Rivojlanish yo'llari</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Button onClick={handleStartTest} size="lg">
                Testni boshlash
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Shaxsiyat testi</CardTitle>
            <div className="text-sm text-gray-600">Savol 30/60</div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div className="bg-blue-600 h-2 rounded-full" style={{width: '50%'}}></div>
          </div>
          
          {/* Question */}
          <div className="mb-8">
            <h3 className="text-lg mb-4">Men yangi odamlar bilan tanishishni yoqtiraman</h3>
            
            <div className="space-y-3">
              {[
                'Mutlaqo rozi emasman',
                'Rozi emasman', 
                'Neytral',
                'Roziman',
                'Mutlaqo roziman'
              ].map((option, index) => (
                <label key={index} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                  <input
                    type="radio"
                    name="question"
                    value={index + 1}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button variant="outline">
              Orqaga
            </Button>
            <Button onClick={handleCompleteTest}>
              Testni yakunlash (Demo)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}