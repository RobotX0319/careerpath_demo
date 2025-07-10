"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function NewJobPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requirements: '',
    skills: '',
    salary_min: '',
    salary_max: '',
    location: '',
    work_type: 'office',
    employment_type: 'full_time'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Job data:', formData)
    alert('Ish o\'rni muvaffaqiyatli yaratildi! (Demo)')
    window.location.href = '/employer/jobs'
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Yangi ish o'rni yaratish</h1>
        <p className="text-gray-600 mt-2">
          Vakansiya ma'lumotlarini to'ldiring va nomzodlarni jalb qiling
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ish o'rni ma'lumotlari</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Job Title */}
            <div>
              <Label htmlFor="title">Ish o'rni nomi *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Masalan: Senior Frontend Developer"
                required
                className="mt-1"
              />
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description">Tavsif *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Ish o'rni haqida batafsil ma'lumot..."
                rows={5}
                required
                className="mt-1"
              />
            </div>

            {/* Requirements */}
            <div>
              <Label htmlFor="requirements">Talablar *</Label>
              <Textarea
                id="requirements"
                value={formData.requirements}
                onChange={(e) => handleInputChange('requirements', e.target.value)}
                placeholder="• Oliy ta'lim (IT yo'nalishi)&#10;• 3+ yil tajriba&#10;• Ingliz tili bilimi"
                rows={4}
                required
                className="mt-1"
              />
            </div>

            {/* Skills */}
            <div>
              <Label htmlFor="skills">Zarur ko'nikmalar</Label>
              <Input
                id="skills"
                value={formData.skills}
                onChange={(e) => handleInputChange('skills', e.target.value)}
                placeholder="React, JavaScript, TypeScript, Node.js"
                className="mt-1"
              />
            </div>

            {/* Salary Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="salary_min">Minimal maosh (USD)</Label>
                <Input
                  id="salary_min"
                  type="number"
                  value={formData.salary_min}
                  onChange={(e) => handleInputChange('salary_min', e.target.value)}
                  placeholder="500"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="salary_max">Maksimal maosh (USD)</Label>
                <Input
                  id="salary_max"
                  type="number"
                  value={formData.salary_max}
                  onChange={(e) => handleInputChange('salary_max', e.target.value)}
                  placeholder="1500"
                  className="mt-1"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <Label htmlFor="location">Joylashuv *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="Toshkent, O'zbekiston"
                required
                className="mt-1"
              />
            </div>

            {/* Work Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="work_type">Ish turi *</Label>
                <select
                  id="work_type"
                  value={formData.work_type}
                  onChange={(e) => handleInputChange('work_type', e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-200 rounded-md"
                  required
                >
                  <option value="office">Ofis</option>
                  <option value="remote">Masofaviy</option>
                  <option value="hybrid">Gibrid</option>
                </select>
              </div>
              <div>
                <Label htmlFor="employment_type">Bandlik turi *</Label>
                <select
                  id="employment_type"
                  value={formData.employment_type}
                  onChange={(e) => handleInputChange('employment_type', e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-200 rounded-md"
                  required
                >
                  <option value="full_time">To'liq vaqt</option>
                  <option value="part_time">Qisman vaqt</option>
                  <option value="contract">Shartnoma</option>
                  <option value="internship">Stajirovka</option>
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-6">
              <Button type="submit" className="flex-1">
                Ish o'rni yaratish
              </Button>
              <Button 
                type="button" 
                variant="outline"
                onClick={() => window.location.href = '/employer/jobs'}
                className="flex-1"
              >
                Bekor qilish
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}