"use client"
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import TestResults from '@/components/tests/test-results'

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    full_name: 'Demo User',
    email: 'demo@example.com',
    phone: '+998901234567',
    birth_date: '1995-01-01',
    gender: 'male',
    address: 'Toshkent, O\'zbekiston',
    education_level: 'Oliy ta\'lim',
    current_status: 'Talaba',
    bio: 'Men dasturlash va texnologiya sohasiga qiziqaman.'
  })
  
  const [testResults, setTestResults] = useState({
    personality: [
      { trait: 'extraversion', score: 75, category: 'Personality', description: 'Extraversion' },
      { trait: 'agreeableness', score: 65, category: 'Personality', description: 'Agreeableness' },
      { trait: 'conscientiousness', score: 80, category: 'Personality', description: 'Conscientiousness' },
      { trait: 'neuroticism', score: 40, category: 'Personality', description: 'Neuroticism' },
      { trait: 'openness', score: 85, category: 'Personality', description: 'Openness' }
    ],
    iq: [
      { trait: 'estimatedIQ', score: 118, category: 'IQ', description: 'Estimated IQ Score' },
      { trait: 'percentage', score: 82, category: 'IQ', description: 'Percentile Ranking' },
      { trait: 'correctAnswers', score: 16, category: 'IQ', description: 'Correct Answers' },
      { trait: 'totalQuestions', score: 20, category: 'IQ', description: 'Total Questions' }
    ]
  })
  
  const [selectedCareer, setSelectedCareer] = useState({
    title: 'Dasturchi',
    category: 'IT',
    progress: 25
  })
  
  const [skills, setSkills] = useState(['JavaScript', 'React', 'Python', 'Dizayn'])
  const [interests, setInterests] = useState(['Texnologiya', 'Ijodkorlik', 'O\'rganish'])
  const [isEditing, setIsEditing] = useState(false)

  const handleSave = () => {
    // Demo: Save profile changes
    console.log('Profile saved:', profile)
    setIsEditing(false)
    alert('Profil ma\'lumotlari saqlandi!')
  }

  const generateResume = () => {
    // Demo: Generate resume
    alert('Resume yaratilmoqda... (Demo funksiya)')
  }

  return (
    <div className="container mx-auto py-8 max-w-6xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Mening profilim</h1>
        <p className="text-gray-600 mt-2">
          Shaxsiy ma'lumotlaringiz va karyera rivojlanishingiz
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Shaxsiy ma'lumotlar</CardTitle>
              <Button 
                variant="outline" 
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Bekor qilish' : 'Tahrirlash'}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="full_name">To'liq ism</Label>
                  <Input
                    id="full_name"
                    value={profile.full_name}
                    onChange={(e) => setProfile({...profile, full_name: e.target.value})}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="birth_date">Tug'ilgan sana</Label>
                  <Input
                    id="birth_date"
                    type="date"
                    value={profile.birth_date}
                    onChange={(e) => setProfile({...profile, birth_date: e.target.value})}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="education_level">Ta'lim darajasi</Label>
                  <Input
                    id="education_level"
                    value={profile.education_level}
                    onChange={(e) => setProfile({...profile, education_level: e.target.value})}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="current_status">Hozirgi holat</Label>
                  <Input
                    id="current_status"
                    value={profile.current_status}
                    onChange={(e) => setProfile({...profile, current_status: e.target.value})}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Manzil</Label>
                  <Input
                    id="address"
                    value={profile.address}
                    onChange={(e) => setProfile({...profile, address: e.target.value})}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    disabled={!isEditing}
                    className="mt-1"
                    rows={3}
                  />
                </div>
              </div>
              
              {isEditing && (
                <div className="mt-6 flex space-x-4">
                  <Button onClick={handleSave}>Saqlash</Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Bekor qilish
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Skills & Interests */}
          <Card>
            <CardHeader>
              <CardTitle>Ko'nikmalar va qiziqishlar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Ko'nikmalar</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Qiziqishlar</h4>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Avatar */}
          <Card>
            <CardHeader>
              <CardTitle>Profil rasmi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👤</span>
                </div>
                <Button variant="outline" size="sm">
                  Rasm yuklash
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Selected Career */}
          <Card>
            <CardHeader>
              <CardTitle>Tanlangan kasb</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <h3 className="font-semibold text-lg">{selectedCareer.title}</h3>
                <span className="text-sm text-gray-600">{selectedCareer.category}</span>
                
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{selectedCareer.progress}%</span>
                  </div>
                  <Progress value={selectedCareer.progress} className="h-2" />
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4"
                  onClick={() => window.location.href = '/dashboard/roadmap'}
                >
                  Yo'l xaritasi
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Tez harakatlar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={generateResume}
                >
                  📄 Resume yaratish
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.location.href = '/dashboard/careers'}
                >
                  🎯 Kasb tanlash
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.location.href = '/dashboard/jobs'}
                >
                  💼 Ish qidirish
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Test Results */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TestResults results={testResults.personality} />
        <TestResults results={testResults.iq} />
      </div>
    </div>
  )
}