"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Demo login - any email/password works
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = '/dashboard'
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          placeholder="demo@example.com"
          required
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="password">Parol</Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          placeholder="password"
          required
          className="mt-1"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? 'Kirilmoqda...' : 'Kirish'}
      </Button>

      <div className="text-center">
        <p className="text-sm text-gray-600 mt-4">
          Demo uchun: Istalgan email va parol ishlatishingiz mumkin
        </p>
      </div>
    </form>
  )
}