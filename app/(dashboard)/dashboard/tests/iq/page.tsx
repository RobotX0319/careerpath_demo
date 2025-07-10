"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function IQTestPage() {
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
            testType: 'iq',
            score: 125
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
            <div className="text-6xl mb-4">🎯</div>
            <CardTitle className="text-2xl text-green-600">IQ testi muvaffaqiyatli yakunlandi!</CardTitle>
            <p className="text-gray-600">Sizning intellektual qobiliyat darajangiz</p>
          </CardHeader>
          <CardContent className="text-center">
            <div className="bg-green-50 p-8 rounded-lg mb-6">
              <div className="text-6xl font-bold text-green-600 mb-2">125</div>
              <div className="text-lg font-semibold text-gray-700">IQ Darajangiz</div>
              <div className="text-sm text-gray-600 mt-2">
                O'rtachadan yuqori - ajoyib natija! 🎉
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg border">
                <div className="text-2xl font-bold text-blue-600">85%</div>
                <div className="text-sm text-gray-600">Mantiqiy fikrlash</div>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <div className="text-2xl font-bold text-purple-600">92%</div>
                <div className="text-sm text-gray-600">Matematik qobiliyat</div>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <div className="text-2xl font-bold text-orange-600">78%</div>
                <div className="text-sm text-gray-600">Fazoviy fikrlash</div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-blue-800">
                📧 Test natijalari emailingizga yuborildi! IQ darajangizga mos kasb tavsiyalarini ko'ring.
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
            <div className="text-6xl mb-4">🎯</div>
            <CardTitle className="text-2xl">IQ testi</CardTitle>
            <p className="text-gray-600">Intellektual qobiliyat va mantiqiy fikrlash testi</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Test haqida:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 40 ta savol</li>
                  <li>• 30 daqiqa vaqt</li>
                  <li>• Mantiqiy ketma-ketlik</li>
                  <li>• Matematik muammolar</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Baholanadi:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Mantiqiy fikrlash</li>
                  <li>• Matematik qobiliyat</li>
                  <li>• Fazoviy tasavvur</li>
                  <li>• Muammo hal qilish</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-yellow-800 mb-2">⏰ Muhim:</h3>
              <p className="text-yellow-700 text-sm">
                Test vaqti cheklangan. Har bir savolga diqqat bilan javob bering. 
                Vaqt tugagach test avtomatik yakunlanadi.
              </p>
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
            <CardTitle>IQ testi</CardTitle>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">Savol 15/40</div>
              <div className="text-sm font-semibold text-red-600">⏰ 18:32</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div className="bg-orange-600 h-2 rounded-full" style={{width: '37.5%'}}></div>
          </div>
          
          {/* Question */}
          <div className="mb-8">
            <h3 className="text-lg mb-4">Keyingi raqam qaysi?</h3>
            <p className="text-xl font-mono mb-6 text-center bg-gray-50 p-4 rounded-lg">
              2, 4, 8, 16, ?
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {['24', '32', '28', '36'].map((option, index) => (
                <button
                  key={index}
                  className="p-4 text-lg font-semibold border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button variant="outline">
              Orqaga
            </Button>
            <Button onClick={handleCompleteTest} className="bg-orange-600 hover:bg-orange-700">
              Testni yakunlash (Demo)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}