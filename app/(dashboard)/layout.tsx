"use client"
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import DashboardSidebar from '@/components/dashboard/sidebar'
import DashboardHeader from '@/components/dashboard/header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}