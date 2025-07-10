interface MessageBubbleProps {
  message: string
  sender: 'user' | 'ai'
  timestamp: Date
}

export default function MessageBubble({ message, sender, timestamp }: MessageBubbleProps) {
  return (
    <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          sender === 'user'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-900'
        }`}
      >
        {sender === 'ai' && (
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs">
              AI
            </div>
            <span className="ml-2 text-xs font-medium">Kasb Maslahatchi</span>
          </div>
        )}
        
        <p className="text-sm leading-relaxed">{message}</p>
        
        <div className={`text-xs mt-2 ${sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
          {timestamp.toLocaleTimeString('uz-UZ', {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      </div>
    </div>
  )
}