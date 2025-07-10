"use client"
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
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
            <h2 className="text-lg font-semibold text-gray-900">CareerPath</h2>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? '→' : '←'}
          </Button>
        </div>
      </div>
      
      <nav className="mt-4 px-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 mb-1 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-100 text-blue-600 font-medium' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {!isCollapsed && (
                <span className="ml-3">{item.label}</span>
              )}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}