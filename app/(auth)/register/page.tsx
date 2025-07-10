"use client"
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthYear: '',
    education: 'high-school'
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert("Parollar bir xil emas!")
      return
    }
    
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, send data to API and handle response
      console.log("Form data:", formData)
      
      // Store user in local storage for demo purposes
      localStorage.setItem('user', JSON.stringify({
        id: Date.now().toString(),
        fullName: formData.fullName,
        email: formData.email
      }))
      
      setLoading(false)
      
      // Redirect to dashboard
      router.push('/dashboard')
    }, 1500)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-2 text-center">CareerPath'ga qo'shiling</h1>
        <p className="text-gray-600 mb-6 text-center">Karyerangizni rivojlantirish uchun ro'yxatdan o'ting</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="fullName">To'liq ismingiz</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Ismingizni kiriting"
              required
              className="form-input"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              required
              className="form-input"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="password">Parol</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Kamida 6 ta belgi"
                minLength={6}
                required
                className="form-input"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Parolni tasdiqlang</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Parolni qayta kiriting"
                minLength={6}
                required
                className="form-input"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="birthYear">Tug'ilgan yil</Label>
              <Input
                id="birthYear"
                name="birthYear"
                type="number"
                value={formData.birthYear}
                onChange={handleChange}
                placeholder="Masalan: 1995"
                className="form-input"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="education">Ma'lumot</Label>
              <select
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="form-select"
              >
                <option value="high-school">O'rta maktab</option>
                <option value="college">Kollej</option>
                <option value="bachelor">Bakalavr</option>
                <option value="master">Magistr</option>
                <option value="phd">PhD</option>
              </select>
            </div>
          </div>
          
          <div className="pt-2">
            <Button 
              type="submit" 
              className="btn btn-primary btn-full btn-rounded btn-lg" 
              disabled={loading}
            >
              {loading ? 'Ro\'yxatdan o\'tilmoqda...' : 'Ro\'yxatdan o\'tish'}
            </Button>
          </div>
        </form>
        
        <p className="text-center text-gray-600 mt-6">
          Hisobingiz bormi?{' '}
          <Link href="/login" className="text-blue-600 font-medium">
            Kirish
          </Link>
        </p>
      </div>
    </div>
  )
}