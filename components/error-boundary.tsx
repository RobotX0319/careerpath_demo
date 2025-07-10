"use client"
import React from 'react'
// import { ErrorBoundary } from '@/components/ui/error'
import { ErrorBoundary } from './ui/error'

interface AppErrorBoundaryProps {
  children: React.ReactNode
}

const AppErrorBoundary: React.FC<AppErrorBoundaryProps> = ({ children }) => {
  return (
    <ErrorBoundary
      fallback={({ error, resetError }) => (
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="text-center space-y-4 max-w-md">
            <div className="text-6xl">😵</div>
            <h2 className="text-2xl font-bold text-gray-900">
              CareerPath'da xatolik yuz berdi
            </h2>
            <p className="text-gray-600">
              Dastur ishlamay qoldi. Iltimos sahifani yangilab ko'ring.
            </p>
            <div className="space-y-2">
              <button
                onClick={resetError}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mr-2"
              >
                Qaytadan urinish
              </button>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Sahifani yangilash
              </button>
            </div>
            <details className="text-left mt-4">
              <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                Texnik ma'lumotlar
              </summary>
              <pre className="mt-2 text-xs bg-gray-100 p-3 rounded overflow-auto max-h-32">
                {error.message}
                {'\n'}
                {error.stack}
              </pre>
            </details>
          </div>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  )
}

export default AppErrorBoundary