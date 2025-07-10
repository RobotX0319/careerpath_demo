"use client"
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CareerCard from './career-card'

interface Career {
  id: string
  title: string
  description: string
  required_skills: string[]
  education: string
  salary_range: {
    min: number
    max: number
    currency: string
  }
  growth_rate: string
  category: string
}

interface CareerRecommendationsProps {
  userProfile?: {
    personalityResults?: any
    iqResults?: any
    interests?: string[]
    skills?: string[]
  }
}

export default function CareerRecommendations({ userProfile }: CareerRecommendationsProps) {
  const [allCareers, setAllCareers] = useState<Career[]>([])
  const [recommendedCareers, setRecommendedCareers] = useState<Career[]>([])
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadCareers()
  }, [])

  useEffect(() => {
    if (allCareers.length > 0 && userProfile) {
      generateRecommendations()
    }
  }, [allCareers, userProfile])

  const loadCareers = async () => {
    try {
      const response = await fetch('/data/careers.json')
      const careers = await response.json()
      setAllCareers(careers)
      setLoading(false)
    } catch (error) {
      console.error('Error loading careers:', error)
      setLoading(false)
    }
  }

  const generateRecommendations = () => {
    // Simple recommendation algorithm based on user profile
    let scored = allCareers.map(career => {
      let score = 0
      
      // Score based on personality (demo logic)
      if (userProfile?.personalityResults) {
        if (career.category === 'IT' && userProfile.personalityResults.openness > 60) score += 20
        if (career.category === 'Marketing' && userProfile.personalityResults.extraversion > 60) score += 20
        if (career.category === 'Ta\'lim' && userProfile.personalityResults.agreeableness > 60) score += 20
      }
      
      // Score based on IQ (demo logic)
      if (userProfile?.iqResults?.estimatedIQ) {
        if (career.category === 'IT' && userProfile.iqResults.estimatedIQ > 110) score += 15
        if (career.category === 'Tibbiyot' && userProfile.iqResults.estimatedIQ > 115) score += 15
      }
      
      // Random factor for demo
      score += Math.random() * 10
      
      return { ...career, score }
    })
    
    // Sort by score and take top 6
    scored.sort((a, b) => b.score - a.score)
    setRecommendedCareers(scored.slice(0, 6))
  }

  const handleSelectCareer = async (career: Career) => {
    setSelectedCareer(career)
    
    // Save selection (demo)
    try {
      // In real app, save to user_careers table
      console.log('Selected career:', career.id)
      alert(`${career.title} kasbi tanlandi! Yo'l xaritasini ko'rish uchun "Yo'l xaritasi" sahifasiga o'ting.`)
    } catch (error) {
      console.error('Error saving career selection:', error)
    }
  }

  if (loading) {
    return <div className="text-center py-8">Kasblar yuklanmoqda...</div>
  }

  return (
    <div className="space-y-6">
      {/* AI Recommendations */}
      {userProfile && recommendedCareers.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🤖 AI tavsiyalari
              <span className="text-sm font-normal text-gray-600">
                Sizning testlar natijangiz asosida
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedCareers.map(career => (
                <CareerCard
                  key={career.id}
                  career={career}
                  onSelect={handleSelectCareer}
                  isSelected={selectedCareer?.id === career.id}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Careers */}
      <Card>
        <CardHeader>
          <CardTitle>Barcha kasblar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allCareers.map(career => (
              <CareerCard
                key={career.id}
                career={career}
                onSelect={handleSelectCareer}
                isSelected={selectedCareer?.id === career.id}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Selected Career Details */}
      {selectedCareer && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Tanlangan kasb: {selectedCareer.title}
              <Button 
                onClick={() => window.location.href = '/dashboard/roadmap'}
                className="ml-4"
              >
                Yo'l xaritasini ko'rish
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Tavsif:</h4>
                <p className="text-gray-600 mb-4">{selectedCareer.description}</p>
                
                <h4 className="font-semibold mb-2">Zarur ko'nikmalar:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedCareer.required_skills.map((skill, index) => (
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
                <h4 className="font-semibold mb-2">Kasb ma'lumotlari:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Kategoriya:</span>
                    <span className="font-medium">{selectedCareer.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maosh diapazoni:</span>
                    <span className="font-medium text-green-600">
                      ${selectedCareer.salary_range.min}-{selectedCareer.salary_range.max}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>O'sish sur'ati:</span>
                    <span className="font-medium text-green-600">{selectedCareer.growth_rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ta'lim:</span>
                    <span className="font-medium">{selectedCareer.education}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}