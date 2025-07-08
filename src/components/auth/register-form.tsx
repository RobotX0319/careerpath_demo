"use client"
import { useState } from 'react'

export default function RegisterForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    // TODO: NextAuth signUp
    setTimeout(() => {
      setLoading(false)
      setError("Demo: Auth backend yo'q")
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Ism</label>
        <input type="text" className="w-full border rounded px-3 py-2" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input type="email" className="w-full border rounded px-3 py-2" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div>
        <label className="block mb-1">Parol</label>
        <input type="password" className="w-full border rounded px-3 py-2" value={password} onChange={e => setPassword(e.target.value)} required />
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button type="submit" className="w-full bg-primary text-white py-2 rounded" disabled={loading}>
        {loading ? "+ Ro'yxatdan o'tmoqda..." : "+ Ro'yxatdan o'tish"}
      </button>
    </form>
  )
}