"use client"
import { useState } from 'react'
import Link from 'next/link'
import { signInUser } from '@/lib/supabase/server'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function AuthLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await signInUser({ email, password })
    setLoading(false)
    if (res.success) {
      window.location.href = '/dashboard'
    } else {
      alert((res.error as any)?.message || 'Kirishda xatolik yuz berdi')
    }
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
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Kirish...' : 'Kirish'}
          </Button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Hisobingiz yo'qmi?{' '}
          <Link href="/auth/register" className="text-blue-600">
            Ro'yxatdan o'tish
          </Link>
        </p>
      </div>
    </div>
  )
}