export default function MessagesPage() {
  return (
    <div className="container mx-auto py-8 h-[600px]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Xabarlar</h1>
        <p className="text-gray-600 mt-2">
          Ish beruvchilar va boshqa foydalanuvchilar bilan suhbatlashing
        </p>
      </div>

      <div className="bg-white rounded-lg shadow h-full flex">
        {/* Conversations List */}
        <div className="w-1/3 border-r">
          <div className="p-4 border-b">
            <input 
              type="text"
              placeholder="Suhbat qidirish..."
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          
          <div className="overflow-y-auto">
            {[
              {
                name: "TechCorp HR",
                lastMessage: "Sizning arizangiz ko'rib chiqilmoqda",
                time: "10:30",
                unread: 2,
                avatar: "🏢"
              },
              {
                name: "StartupHub",
                lastMessage: "Intervyu uchun vaqt belgilaymizmi?",
                time: "Kecha",
                unread: 0,
                avatar: "🚀"
              },
              {
                name: "DigitalAgency",
                lastMessage: "Portfolio ko'rishni xohlaymiz",
                time: "2 kun oldin",
                unread: 1,
                avatar: "💼"
              },
              {
                name: "Creative Studio",
                lastMessage: "Ajoyib portfolio!",
                time: "1 hafta",
                unread: 0,
                avatar: "🎨"
              }
            ].map((conversation, index) => (
              <div key={index} className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xl">{conversation.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">{conversation.name}</h3>
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <div className="w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center ml-2">
                      {conversation.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b flex items-center">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-lg">🏢</span>
            </div>
            <div>
              <h3 className="font-semibold">TechCorp HR</h3>
              <p className="text-sm text-gray-600">Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-xs">
                <p className="text-sm">Salom! Sizning React Developer pozitsiyasiga arizangizni ko'rib chiqdik.</p>
                <span className="text-xs text-gray-500">14:20</span>
              </div>
            </div>
            
            <div className="flex justify-end">
              <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">
                <p className="text-sm">Salom! Rahmat, javobingizni kutaman.</p>
                <span className="text-xs text-blue-100">14:22</span>
              </div>
            </div>
            
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-xs">
                <p className="text-sm">Sizning arizangiz ko'rib chiqilmoqda. Portfolio juda yaxshi ko'rinadi!</p>
                <span className="text-xs text-gray-500">14:25</span>
              </div>
            </div>
            
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-xs">
                <p className="text-sm">Keyingi bosqich uchun intervyu belgilaymizmi?</p>
                <span className="text-xs text-gray-500">14:26</span>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input 
                type="text"
                placeholder="Xabar yozing..."
                className="flex-1 px-3 py-2 border rounded-md"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
                Yuborish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}