"use client"
import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Message {
  id: string
  content: string
  sender: 'user' | 'ai'
  timestamp: Date
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Salom! Men sizning kasb yo\'nalishi bo\'yicha maslahatchi AIman. Qiziqishlaringiz va maqsadlaringiz haqida gapirishdan boshlaylik. Sizni qanday soha qiziqtiradi?',
      sender: 'ai',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      // Demo uchun fake AI response
      setTimeout(() => {
        const aiResponses = [
          'Bu juda qiziq! Ushbu sohada muvaffaqiyat qozonish uchun qanday ko\'nikmalaringiz bor?',
          'Ajoyib! Bu soha haqida ko\'proq ma\'lumot olish uchun qanday tadbirlar ko\'rdingiz?',
          'Zo\'r! Kelajakda o\'zingizni qanday kasb egasi sifatida ko\'rasiz?',
          'Juda yaxshi! Sizning ta\'lim darajangiz qanday? Bu sohada qo\'shimcha o\'rganishni rejalashtirmoqdamisiz?',
          'Bu ma\'lumotlar asosida sizga bir nechta kasb tavsiya qila olaman. Testlarni ham topshirib ko\'rishni tavsiya qilaman.'
        ]
        
        const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]
        
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: randomResponse,
          sender: 'ai',
          timestamp: new Date()
        }
        
        setMessages(prev => [...prev, aiMessage])
        setIsLoading(false)
      }, 1000 + Math.random() * 1000)

    } catch (error) {
      console.error('Chat error:', error)
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="max-w-4xl mx-auto h-[600px] flex flex-col">
      <Card className="flex-1 flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🤖 AI Kasb Maslahatchi
            <span className="text-sm font-normal text-green-600">Online</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <div className="text-xs opacity-70 mt-1">
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
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Xabaringizni yozing..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
            >
              {isLoading ? 'Yuborilmoqda...' : 'Yuborish'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="text-center">
            <div className="text-2xl mb-2">📝</div>
            <h3 className="font-semibold text-sm">Testlarni topshirish</h3>
            <p className="text-xs text-gray-600">Shaxsiyat va IQ testlari</p>
          </div>
        </Card>
        
        <Card className="p-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="text-center">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold text-sm">Kasb tavsiyalari</h3>
            <p className="text-xs text-gray-600">AI tavsiyalari olish</p>
          </div>
        </Card>
        
        <Card className="p-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="text-center">
            <div className="text-2xl mb-2">🗺️</div>
            <h3 className="font-semibold text-sm">Yo'l xaritasi</h3>
            <p className="text-xs text-gray-600">Karyera rejasi tuzish</p>
          </div>
        </Card>
      </div>
    </div>
  )
}