"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Demo login - skip Supabase
    setTimeout(() => {
      setLoading(false)
      window.location.href = '/dashboard'
    }, 1000)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">CareerPath'ga kirish</h1>
        <p className="text-gray-600 mb-6">Hisobingizga kirish uchun ma'lumotlaringizni kiriting</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="email@example.com"
              required
              className="form-input"
            />
          </div>
          <div>
            <Label htmlFor="password">Parol</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Parolingizni kiriting"
              required
              className="form-input"
            />
          </div>
          <Button type="submit" className="btn btn-primary btn-full btn-rounded" disabled={loading}>
            {loading ? 'Kirish...' : 'Kirish'}
          </Button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Hisobingiz yo'qmi?{' '}
          <Link href="/register" className="text-blue-600">
            Ro'yxatdan o'tish
          </Link>
        </p>
      </div>
    </div>
  )
}