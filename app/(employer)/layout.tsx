import Link from 'next/link'

export default function EmployerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Employer Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl">🏢</span>
                <h1 className="text-xl font-bold text-gray-900">CareerPath Employer</h1>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/employer/dashboard" className="text-gray-600 hover:text-gray-900">
                  Dashboard
                </Link>
                <Link href="/employer/jobs" className="text-gray-600 hover:text-gray-900">
                  Ish o'rinlari
                </Link>
                <Link href="/employer/candidates" className="text-gray-600 hover:text-gray-900">
                  Nomzodlar
                </Link>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <span className="text-xl">🔔</span>
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">👤</span>
                </div>
                <span className="hidden md:block text-gray-700">Company Admin</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="p-6">
        {children}
      </main>
    </div>
  )
}