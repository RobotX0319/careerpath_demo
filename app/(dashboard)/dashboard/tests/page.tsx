"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function TestsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Testlar</h1>
        <p className="text-gray-600 mt-2">
          Shaxsiyat va qobiliyat testlarini topshirib, o'zingizni yaxshiroq tanishtiring
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Personality Test */}
        <Card>
          <CardHeader>
            <div className="text-center">
              <div className="text-6xl mb-4">🧠</div>
              <CardTitle className="text-2xl">Shaxsiyat testi</CardTitle>
              <p className="text-gray-600 mt-2">
                Big Five shaxsiyat modeli asosida o'zingizning xususiyatlaringizni aniqlang
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Vaqt:</span> 15-20 daqiqa
                </div>
                <div>
                  <span className="font-semibold">Savollar:</span> 60 ta
                </div>
                <div>
                  <span className="font-semibold">Turi:</span> Likert shkala
                </div>
                <div>
                  <span className="font-semibold">Natija:</span> Darhol
                </div>
              </div>
            </div>

            <Button
              onClick={() => window.location.href = '/dashboard/tests/personality'}
              className="w-full"
            >
              Testni boshlash
            </Button>
          </CardContent>
        </Card>

        {/* IQ Test */}
        <Card>
          <CardHeader>
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <CardTitle className="text-2xl">IQ testi</CardTitle>
              <p className="text-gray-600 mt-2">
                Mantiqiy fikrlash va muammo hal qilish qobiliyatlaringizni sinab ko'ring
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Vaqt:</span> 30 daqiqa
                </div>
                <div>
                  <span className="font-semibold">Savollar:</span> 40 ta
                </div>
                <div>
                  <span className="font-semibold">Turi:</span> Ko'p tanlov
                </div>
                <div>
                  <span className="font-semibold">Natija:</span> IQ ball
                </div>
              </div>
            </div>

            <Button
              onClick={() => window.location.href = '/dashboard/tests/iq'}
              className="w-full"
            >
              Testni boshlash
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">Muhim eslatmalar:</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>• Testlarni tinch muhitda, diqqat bilan topshiring</li>
          <li>• Har bir savolga samimiy javob bering</li>
          <li>• Vaqt chegarasi mavjud, shuning uchun tez qaror qabul qiling</li>
          <li>• Testlarni faqat bir marta topshirish mumkin</li>
          <li>• Natijalar kasb tavsiyalari uchun ishlatiladi</li>
        </ul>
      </div>
    </div>
  )
}