"use client"

export default function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-600">Xush kelibsiz, Demo User!</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:text-gray-900">🔔</button>
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
            DU
          </div>
        </div>
      </div>
    </header>
  )
}