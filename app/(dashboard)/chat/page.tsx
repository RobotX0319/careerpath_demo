import ChatInterface from '@/components/chat/chat-interface'

export default function ChatPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">AI Chat</h1>
        <p className="text-gray-600 mt-2">
          AI bilan suhbatlashib, qiziqishlaringizni aniqlang va kasb tavsiyalari oling
        </p>
      </div>
      
      <ChatInterface />
    </div>
  )
}