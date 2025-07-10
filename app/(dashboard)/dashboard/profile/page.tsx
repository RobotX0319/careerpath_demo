"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    name: 'Demo User',
    email: 'demo@example.com',
    phone: '+998 90 123 45 67',
    dateOfBirth: '1995-05-15',
    location: 'Toshkent, O\'zbekiston',
    bio: 'Men IT sohasida ishlashni yoqtiradigan va yangi texnologiyalarni o\'rganishga qiziqadigan odamman.',
    education: 'Toshkent Davlat Texnika Universiteti - Kompyuter Injiniring',
    experience: '3 yil Frontend Developer',
    skills: ['JavaScript', 'React', 'TypeScript', 'HTML', 'CSS', 'Node.js'],
    languages: ['O\'zbek', 'Ingliz', 'Rus'],
    interests: ['Programming', 'Design', 'Technology', 'Music']
  })

  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }))
  }

  const handleSkillsChange = (skills: string) => {
    setProfileData(prev => ({ 
      ...prev, 
      skills: skills.split(',').map(skill => skill.trim()).filter(Boolean)
    }))
  }

  const handleLanguagesChange = (languages: string) => {
    setProfileData(prev => ({ 
      ...prev, 
      languages: languages.split(',').map(lang => lang.trim()).filter(Boolean)
    }))
  }

  const handleInterestsChange = (interests: string) => {
    setProfileData(prev => ({ 
      ...prev, 
      interests: interests.split(',').map(interest => interest.trim()).filter(Boolean)
    }))
  }

  const handleSave = async () => {
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsEditing(false)
    setLoading(false)
    
    // Success message
    alert('Profil muvaffaqiyatli yangilandi!')
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset form if needed
  }

  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Profil</h1>
          <p className="text-gray-600 mt-1">Shaxsiy ma'lumotlaringizni boshqaring</p>
        </div>
        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={handleCancel}>
                Bekor qilish
              </Button>
              <Button onClick={handleSave} disabled={loading}>
                {loading ? 'Saqlanmoqda...' : 'Saqlash'}
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)}>
              Tahrirlash
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Image & Basic Info */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profil rasmi</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">
                  {profileData.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-semibold">{profileData.name}</h3>
              <p className="text-gray-600">{profileData.email}</p>
              {isEditing && (
                <Button variant="outline" className="mt-4">
                  Rasm yuklash
                </Button>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Statistika</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Topshirilgan testlar</span>
                <span className="font-semibold">2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Kasb tavsiyalari</span>
                <span className="font-semibold">5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Ish o'rinlari</span>
                <span className="font-semibold">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Profil to'liqlik</span>
                <span className="font-semibold text-green-600">85%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Profile Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Shaxsiy ma'lumotlar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Ism va familiya</Label>
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefon raqami</Label>
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label htmlFor="dateOfBirth">Tug'ilgan sana</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={profileData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="location">Joylashuv</Label>
                  <Input
                    id="location"
                    value={profileData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="bio">Biografiya</Label>
                  <Textarea
                    id="bio"
                    value={profileData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    disabled={!isEditing}
                    rows={3}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education & Experience */}
          <Card>
            <CardHeader>
              <CardTitle>Ta'lim va tajriba</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="education">Ta'lim</Label>
                <Input
                  id="education"
                  value={profileData.education}
                  onChange={(e) => handleInputChange('education', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="experience">Ish tajribasi</Label>
                <Input
                  id="experience"
                  value={profileData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </CardContent>
          </Card>

          {/* Skills & Languages */}
          <Card>
            <CardHeader>
              <CardTitle>Ko'nikmalar va tillar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="skills">Ko'nikmalar (vergul bilan ajrating)</Label>
                <Input
                  id="skills"
                  value={profileData.skills.join(', ')}
                  onChange={(e) => handleSkillsChange(e.target.value)}
                  disabled={!isEditing}
                  placeholder="JavaScript, React, Python"
                />
                {!isEditing && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {profileData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <div>
                <Label htmlFor="languages">Tillar (vergul bilan ajrating)</Label>
                <Input
                  id="languages"
                  value={profileData.languages.join(', ')}
                  onChange={(e) => handleLanguagesChange(e.target.value)}
                  disabled={!isEditing}
                  placeholder="O'zbek, Ingliz, Rus"
                />
                {!isEditing && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {profileData.languages.map((language, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="interests">Qiziqishlar (vergul bilan ajrating)</Label>
                <Input
                  id="interests"
                  value={profileData.interests.join(', ')}
                  onChange={(e) => handleInterestsChange(e.target.value)}
                  disabled={!isEditing}
                  placeholder="Programming, Design, Music"
                />
                {!isEditing && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {profileData.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}