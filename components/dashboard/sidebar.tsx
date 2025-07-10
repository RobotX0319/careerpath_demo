"use client"
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function DashboardSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { icon: '🏠', label: 'Dashboard', href: '/dashboard' },
    { icon: '📊', label: 'Testlar', href: '/dashboard/tests' },
    { icon: '🗺️', label: 'Yo\'l xaritasi', href: '/dashboard/roadmap' },
    { icon: '🤖', label: 'AI Chat', href: '/dashboard/chat' },
    { icon: '🎯', label: 'Kasb yo\'nalishlari', href: '/dashboard/careers' },
    { icon: '💼', label: 'Ish o\'rinlari', href: '/dashboard/jobs' },
    { icon: '📬', label: 'Xabarlar', href: '/dashboard/messages' },
    { icon: '👤', label: 'Profil', href: '/dashboard/profile' }
  ]

  return (
    <div className={`bg-white border-r border-gray-200 h-screen sticky top-0 ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-lg font-bold text-gray-900">CareerPath</h1>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-lg hover:bg-gray-100"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>
      </div>
      
      <nav className="mt-4 px-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg mb-1 text-sm font-medium transition-colors ${
              pathname === item.href
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  )
}