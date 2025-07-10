"use client"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Message {
  id: number
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Salom! Men CareerPath AI yordamchisiman. Kasb tanlash va karyera rivojlantirish bo'yicha sizga yordam beraman. Qanday savolingiz bor?",
      sender: 'ai',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async () => {
    if (!inputMessage.trim()) return
    
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    const currentInput = inputMessage
    setInputMessage('')
    setIsLoading(true)

    try {
      // Real AI API call
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput })
      })
      
      if (!response.ok) {
        throw new Error('API response not ok')
      }
      
      const data = await response.json()
      
      const aiResponse: Message = {
        id: Date.now(),
        text: data.response || 'Uzr, javob berishda xatolik yuz berdi.',
        sender: 'ai',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
    } catch (error) {
      console.error('AI API error:', error)
      const errorResponse: Message = {
        id: Date.now(),
        text: 'Uzr, hozirda AI xizmati mavjud emas. Demo rejimida ishlayapman.\n\n' + getAIResponse(currentInput),
        sender: 'ai',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorResponse])
    }
    
    setIsLoading(false)
  }

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes('dasturchi') || input.includes('it') || input.includes('kod')) {
      return "IT sohasida karyera boshlash uchun:\n\n1. Dasturlash tilini o'rganing (Python, JavaScript)\n2. Portfolio yarating\n3. GitHub'da loyihalar joylashtiring\n4. Bootcamp yoki kursga yozing\n5. Internship qidiring\n\nQaysi dasturlash tilini o'rganishni xohlaysiz?"
    }
    
    if (input.includes('test') || input.includes('baholash')) {
      return "Shaxsiyat va IQ testlarini topshirish juda muhim:\n\n• Testlar sizning kuchli tomonlaringizni aniqlaydi\n• Mos kasb yo'nalishlarini tavsiya qiladi\n• Karyera yo'l xaritasini yaratishga yordam beradi\n\nTestlar bo'limiga o'tib, testlarni topshing!"
    }
    
    if (input.includes('maosh') || input.includes('oylik')) {
      return "O'zbekistonda IT sohasida oylik maoshlar:\n\n• Junior Developer: $300-800\n• Middle Developer: $800-1500\n• Senior Developer: $1500-3000\n• Team Lead: $2000-4000\n\nMaosh tajriba, ko'nikma va kompaniyaga bog'liq."
    }
    
    return "Bu qiziq savol! Men sizga kasb tanlash, ko'nikma rivojlantirish va karyera yo'llarini rejalashtirish bo'yicha yordam bera olaman.\n\nQuyidagilar haqida so'rashingiz mumkin:\n• Kasb yo'nalishlari\n• Zarur ko'nikmalar\n• Ta'lim yo'llari\n• Maosh ma'lumotlari\n• Test natijalari tahlili"
  }

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">AI Kasb Maslahatchi</h1>
        <p className="text-gray-600 mt-2">
          Sun'iy intellekt yordamida kasb maslahatini oling
        </p>
      </div>

      <Card className="h-[600px] flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center">
            <span className="text-2xl mr-2">🤖</span>
            AI Yordamchi
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-96">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {message.sender === 'ai' && (
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs">
                        AI
                      </div>
                      <span className="ml-2 text-xs font-medium">Kasb Maslahatchi</span>
                    </div>
                  )}
                  
                  <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                  
                  <div className={`text-xs mt-2 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString('uz-UZ', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div className="animate-pulse">🤖</div>
                    <span className="text-sm text-gray-600">Javob yozilmoqda...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={(el) => el?.scrollIntoView({ behavior: 'smooth' })} />
          </div>

          {/* Input */}
          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Savolingizni yozing..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              disabled={isLoading}
            />
            <Button onClick={sendMessage} disabled={isLoading || !inputMessage.trim()}>
              Yuborish
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Questions */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Tez-tez so'raladigan savollar:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            variant="outline"
            onClick={() => setInputMessage("IT sohasida qanday qilib boshlash mumkin?")}
            className="text-left h-auto p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 hover:from-blue-100 hover:to-blue-200"
          >
            <div>
              <div className="font-semibold text-blue-700">💻 IT sohasida boshlash</div>
              <div className="text-sm text-blue-600">Dasturlash o'rganish yo'llari</div>
            </div>
          </Button>
          
          <Button
            variant="outline"
            onClick={() => setInputMessage("Testlarni qanday talqin qilish kerak?")}
            className="text-left h-auto p-4 bg-gradient-to-r from-green-50 to-green-100 border-green-200 hover:from-green-100 hover:to-green-200"
          >
            <div>
              <div className="font-semibold text-green-700">📊 Test natijalari</div>
              <div className="text-sm text-green-600">Shaxsiyat va IQ tahlili</div>
            </div>
          </Button>
          
          <Button
            variant="outline"
            onClick={() => setInputMessage("Qaysi kasblar eng yuqori maosh beradi?")}
            className="text-left h-auto p-4 bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200 hover:from-purple-100 hover:to-purple-200"
          >
            <div>
              <div className="font-semibold text-purple-700">💰 Maosh ma'lumotlari</div>
              <div className="text-sm text-purple-600">Kasb bo'yicha oylik</div>
            </div>
          </Button>
        </div>
      </div>

      {/* Demo Badge */}
      <div className="fixed bottom-4 right-4">
        <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium border border-orange-200">
          📝 Demo versiya
        </div>
      </div>
    </div>
  )
}