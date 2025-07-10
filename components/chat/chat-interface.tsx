"use client"
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

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
      content: 'Salom! Men sizning karyera maslahatchangizman. Qanday yordam bera olaman?',
      sender: 'ai',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    // Simulate AI response
    await new Promise(resolve => setTimeout(resolve, 1000))

    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: `Bu juda qiziq savol! Sizning "${input}" haqidagi savolingizga javob beraman. Karyera rivojlantirish bo'yicha boshqa savollaringiz bormi?`,
      sender: 'ai',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, aiResponse])
    setLoading(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  return (
    <div className="h-[600px] flex flex-col">
      <Card className="flex-1 flex flex-col">
        <CardContent className="flex-1 p-4">
          <div className="h-full overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-900'
                  }`}
                >
                  <p>{message.content}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="mt-4 flex space-x-2">
        <Input
          placeholder="Savolingizni yozing..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading}
        />
        <Button onClick={sendMessage} disabled={loading || !input.trim()}>
          Yuborish
        </Button>
      </div>
    </div>
  )
}