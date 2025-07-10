"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    confirm_password: '',
    phone: '',
    birth_date: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Demo registration
    setTimeout(async () => {
      // Send welcome email
      try {
        await fetch('/api/email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'welcome',
            data: {
              email: formData.email,
              name: formData.full_name
            }
          })
        })
      } catch (error) {
        console.error('Welcome email error:', error)
      }
      
      setIsLoading(false)
      alert('Muvaffaqiyatli ro\'yxatdan o\'tdingiz! Email yuborildi.')
      window.location.href = '/dashboard'
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="full_name">To'liq ism</Label>
        <Input
          id="full_name"
          value={formData.full_name}
          onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
          placeholder="Ism Familiya"
          required
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          placeholder="example@email.com"
          required
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="phone">Telefon</Label>
        <Input
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          placeholder="+998901234567"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="birth_date">Tug'ilgan sana</Label>
        <Input
          id="birth_date"
          type="date"
          value={formData.birth_date}
          onChange={(e) => setFormData(prev => ({ ...prev, birth_date: e.target.value }))}
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
          placeholder="Kamida 6 ta belgi"
          required
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="confirm_password">Parolni tasdiqlang</Label>
        <Input
          id="confirm_password"
          type="password"
          value={formData.confirm_password}
          onChange={(e) => setFormData(prev => ({ ...prev, confirm_password: e.target.value }))}
          placeholder="Parolni qayta kiriting"
          required
          className="mt-1"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? 'Ro\'yxatdan o\'tilmoqda...' : 'Ro\'yxatdan o\'tish'}
      </Button>
    </form>
  )
}