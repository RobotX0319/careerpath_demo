"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import CareerRecommendations from '@/components/careers/career-recommendations'

export default function CareersPage() {
  const [userProfile, setUserProfile] = useState<any>(null)
  const [hasTests, setHasTests] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    // Demo: Load user test results
    const demoProfile = {
      personalityResults: {
        extraversion: 75,
        agreeableness: 65,
        conscientiousness: 80,
        neuroticism: 40,
        openness: 85
      },
      iqResults: {
        estimatedIQ: 118,
        percentage: 82
      },
      interests: ['texnologiya', 'ijodkorlik', 'muammo hal qilish'],
      skills: ['dasturlash', 'dizayn', 'tahlil']
    }
    
    setUserProfile(demoProfile)
    setHasTests(true)
  }, [])

  const careers = [
    {
      id: 'software-developer',
      title: 'Dasturchi',
      description: 'Dasturiy ta\'minot yaratish va qo\'llab-quvvatlash',
      category: 'IT',
      salary: '$500-3000',
      growth: '22%',
      skills: ['dasturlash', 'muammo hal qilish', 'mantiqiy fikrlash'],
      match: 95
    },
    {
      id: 'data-scientist',
      title: 'Ma\'lumotlar olimi',
      description: 'Katta hajmdagi ma\'lumotlarni tahlil qilish',
      category: 'IT',
      salary: '$800-4000',
      growth: '35%',
      skills: ['statistika', 'dasturlash', 'ma\'lumotlar tahlili'],
      match: 88
    },
    {
      id: 'graphic-designer',
      title: 'Grafik dizayner',
      description: 'Vizual dizayn va grafik materiallar yaratish',
      category: 'Dizayn',
      salary: '$300-1500',
      growth: '8%',
      skills: ['ijodkorlik', 'dizayn', 'grafik dasturlar'],
      match: 82
    },
    {
      id: 'marketing-manager',
      title: 'Marketing menejeri',
      description: 'Marketing strategiyalarini ishlab chiqish',
      category: 'Marketing',
      salary: '$600-2500',
      growth: '18%',
      skills: ['marketing', 'muloqot', 'tahlil'],
      match: 78
    }
  ]

  const categories = ['all', 'IT', 'Dizayn', 'Marketing', 'Sog\'liqni saqlash']

  const filteredCareers = selectedCategory === 'all' 
    ? careers 
    : careers.filter(career => career.category === selectedCategory)

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Kasb yo'nalishlari</h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Test natijalari asosida sizga mos kasb yo'nalishlarini ko'ring
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="rounded-full"
          >
            {category === 'all' ? 'Barchasi' : category}
          </Button>
        ))}
      </div>

      {/* Careers grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {filteredCareers.map(career => (
          <Card key={career.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{career.title}</CardTitle>
                  <p className="text-sm text-gray-500">{career.category}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Mos kelish</div>
                  <div className="text-lg font-bold text-green-600">{career.match}%</div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-gray-600">{career.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Maosh</div>
                  <div className="font-semibold">{career.salary}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">O'sish</div>
                  <div className="font-semibold text-green-600">{career.growth}</div>
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-500 mb-2">Talab qilinadigan ko'nikmalar</div>
                <div className="flex flex-wrap gap-1">
                  {career.skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1">
                  Tanlash
                </Button>
                <Button variant="outline" className="flex-1">
                  Batafsil
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to action */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 mb-8">
        <CardContent className="p-8 text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Testlarni topshiring
          </h3>
          <p className="text-gray-600 mb-4">
            Shaxsiyat va IQ testlarini topshing va aniq kasb tavsiyalarini oling
          </p>
          <Button onClick={() => window.location.href = '/dashboard/tests'}>
            Testlarni boshlash
          </Button>
        </CardContent>
      </Card>

      {!hasTests && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
          <div className="flex items-start">
            <div className="text-yellow-400 text-2xl mr-4">⚠️</div>
            <div>
              <h3 className="font-semibold text-yellow-800">Testlarni topshiring</h3>
              <p className="text-yellow-700 mt-1 mb-4">
                Sizga mos kasb tavsiyalari olish uchun avval shaxsiyat va IQ testlarini topshiring.
              </p>
              <div className="flex space-x-4">
                <Button 
                  onClick={() => window.location.href = '/dashboard/tests/personality'}
                  variant="outline"
                >
                  Shaxsiyat testi
                </Button>
                <Button 
                  onClick={() => window.location.href = '/dashboard/tests/iq'}
                  variant="outline"
                >
                  IQ testi
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <CareerRecommendations />

      {/* Additional Resources */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl mb-3">🎯</div>
          <h3 className="font-semibold mb-2">Yo'l xaritasi</h3>
          <p className="text-gray-600 text-sm mb-4">
            Tanlagan kasbingiz bo'yicha batafsil yo'l xaritasini ko'ring
          </p>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.location.href = '/dashboard/roadmap'}
          >
            Ko'rish
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl mb-3">💼</div>
          <h3 className="font-semibold mb-2">Ish o'rinlari</h3>
          <p className="text-gray-600 text-sm mb-4">
            Tanlagan sohangiz bo'yicha mavjud ish o'rinlarini ko'ring
          </p>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.location.href = '/dashboard/jobs'}
          >
            Qidirish
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl mb-3">🤖</div>
          <h3 className="font-semibold mb-2">AI maslahat</h3>
          <p className="text-gray-600 text-sm mb-4">
            AI bilan suhbatlashib qo'shimcha maslahat oling
          </p>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.location.href = '/dashboard/chat'}
          >
            Suhbat
          </Button>
        </div>
      </div>
    </div>
  )
}