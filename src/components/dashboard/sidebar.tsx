"use client"
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: '🏠' },
    { href: '/dashboard/tests', label: 'Testlar', icon: '📝' },
    { href: '/dashboard/chat', label: 'AI Chat', icon: '🤖' },
    { href: '/dashboard/careers', label: 'Kasblar', icon: '🎯' },
    { href: '/dashboard/roadmap', label: 'Yo\'l xaritasi', icon: '🗺️' },
    { href: '/dashboard/jobs', label: 'Ish o\'rinlari', icon: '💼' },
    { href: '/dashboard/messages', label: 'Xabarlar', icon: '💬' },
    { href: '/dashboard/profile', label: 'Profil', icon: '👤' },
  ]

  return (
    <div className={`bg-white shadow-sm border-r transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-xl font-bold text-primary">CareerPath</h2>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-lg hover:bg-gray-100"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>
      </div>

      <nav className="mt-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                  pathname === item.href
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="text-lg mr-3">{item.icon}</span>
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {!isCollapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-primary/5 rounded-lg p-3 text-center">
            <p className="text-sm text-gray-600">Demo versiya</p>
          </div>
        </div>
      )}
    </div>
  )
}