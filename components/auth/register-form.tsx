"use client"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    if (formData.password !== formData.confirmPassword) {
      alert('Parollar mos kelmadi!')
      setLoading(false)
      return
    }
    
    // Simulate registration
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Redirect to dashboard
    window.location.href = '/dashboard'
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Ro'yxatdan o'tish</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Ism</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Ismingizni kiriting"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Parol</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Parolingizni kiriting"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Parolni tasdiqlash</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Parolni qaytadan kiriting"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Ro\'yxatdan o\'tilyapti...' : 'Ro\'yxatdan o\'tish'}
          </Button>
          
          <div className="text-center text-sm text-gray-600">
            Hisobingiz bormi?{' '}
            <a href="/login" className="text-blue-600 hover:underline">
              Kirish
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}