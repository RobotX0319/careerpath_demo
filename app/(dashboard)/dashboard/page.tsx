"use client"
import { useState, useEffect } from 'react'

export default function DashboardPage() {
  const [userName, setUserName] = useState('Foydalanuvchi')
  
  useEffect(() => {
    // Get user info from localStorage in client-side
    const userStr = localStorage.getItem('user')
    if (userStr) {
      try {
        const user = JSON.parse(userStr)
        if (user.fullName) {
          setUserName(user.fullName)
        }
      } catch (e) {
        console.error('Failed to parse user data', e)
      }
    }
  }, [])
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-blue-50 rounded-xl p-8 mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Xush kelibsiz, {userName}!
        </h1>
        <p className="text-gray-700 mb-6">
          CareerPath platformasi sizning karyera yo'lingizni aniqlashda yordam beradi. 
          Quyida boshlash uchun maslahatlar:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold mb-2">Testlarni bajaring</h3>
            <p className="text-sm text-gray-600 mb-4">Shaxsiyat va IQ testlarini topshiring</p>
            <button 
              onClick={() => window.location.href = '/dashboard/tests'}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Testlar
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-semibold mb-2">AI bilan suhbatlashing</h3>
            <p className="text-sm text-gray-600 mb-4">Kasb yo'nalishi bo'yicha maslahat oling</p>
            <button 
              onClick={() => window.location.href = '/dashboard/chat'}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              Chat
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold mb-2">Kasb tanlang</h3>
            <p className="text-sm text-gray-600 mb-4">O'zingizga mos kasb yo'nalishini toping</p>
            <button 
              onClick={() => window.location.href = '/dashboard/careers'}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Kasblar
            </button>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b">Sizga tavsiya etilgan manbalar</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">📚 Ta'lim kurslari</h3>
            <p className="text-gray-600 text-sm">IT va boshqa sohalarda onlayn kurslar</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">💼 Ish imkoniyatlari</h3>
            <p className="text-gray-600 text-sm">Sizga mos ish o'rinlari va vakansiyalar</p>
          </div>
        </div>
      </div>
    </div>
  )
}