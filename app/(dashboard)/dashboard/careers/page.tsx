"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Career {
  id: string
  title: string
  description: string
  match: number
  salary: string
  growth: string
  skills: string[]
  education: string
}

export default function CareersPage() {
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null)

  const careers: Career[] = [
    {
      id: '1',
      title: 'Frontend Developer',
      description: 'Foydalanuvchi interfeysi va veb-saytlar yaratish',
      match: 95,
      salary: '$800-2500',
      growth: '+25%',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'TypeScript'],
      education: 'Oliy ta\'lim (IT) yoki bootcamp'
    },
    {
      id: '2', 
      title: 'UX/UI Designer',
      description: 'Foydalanuvchi tajribasi va interfeys dizayni',
      match: 88,
      salary: '$600-2000',
      growth: '+20%',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      education: 'Dizayn yo\'nalishi yoki o\'z-o\'zini o\'rgatish'
    },
    {
      id: '3',
      title: 'Data Analyst',
      description: 'Ma\'lumotlar tahlili va business insights',
      match: 82,
      salary: '$700-2200',
      growth: '+30%',
      skills: ['Python', 'SQL', 'Excel', 'Tableau'],
      education: 'Matematik, statistika yoki IT ta\'limi'
    },
    {
      id: '4',
      title: 'Product Manager',
      description: 'Mahsulot rivojlanish strategiyasi va boshqaruv',
      match: 78,
      salary: '$1000-3000',
      growth: '+18%',
      skills: ['Analytics', 'Leadership', 'Market Research', 'Agile'],
      education: 'Biznes, IT yoki muhandislik ta\'limi'
    },
    {
      id: '5',
      title: 'Digital Marketing Specialist',
      description: 'Raqamli marketing va brendni rivojlantirish',
      match: 75,
      salary: '$400-1500',
      growth: '+22%',
      skills: ['SMM', 'Google Ads', 'Analytics', 'Content Creation'],
      education: 'Marketing yoki aloqalar ta\'limi'
    }
  ]

  const handleSelectCareer = async (career: Career) => {
    setSelectedCareer(career)
    
    // Send career recommendation email
    try {
      await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'career_recommendation',
          data: {
            email: 'demo@example.com',
            userName: 'Demo User',
            careers: [career.title]
          }
        })
      })
    } catch (error) {
      console.error('Email error:', error)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Kasb tavsiyalari</h1>
        <p className="text-gray-600 mt-2">
          Test natijalaringiz va AI tahlili asosida sizga mos kasb yo'nalishlari
        </p>
      </div>

      {/* AI Recommendation Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <div className="text-2xl mr-3">🤖</div>
          <h2 className="text-xl font-semibold text-gray-900">AI Kasb Tahlili</h2>
        </div>
        <p className="text-gray-700 mb-4">
          Sizning shaxsiyat testi natijalaringiz va AI suhbatlari asosida 
          quyidagi kasb yo'nalishlari eng mos keladi:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="text-lg font-semibold text-blue-600">95% mos kelish</div>
            <div className="text-sm text-gray-600">Frontend Development</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-lg font-semibold text-green-600">Yuqori o'sish</div>
            <div className="text-sm text-gray-600">IT sohasida +25% yillik</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-lg font-semibold text-purple-600">Kuchli jihat</div>
            <div className="text-sm text-gray-600">Ijodkorlik va mantiq</div>
          </div>
        </div>
      </div>

      {/* Career Cards */}
      <div className="grid grid-cols-1 gap-6">
        {careers.map((career) => (
          <Card key={career.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <CardTitle className="text-xl">{career.title}</CardTitle>
                    <div className="ml-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {career.match}% mos
                    </div>
                  </div>
                  <p className="text-gray-600">{career.description}</p>
                </div>
                <Button 
                  onClick={() => handleSelectCareer(career)}
                  className={`ml-4 ${selectedCareer?.id === career.id ? 'bg-green-600' : 'bg-blue-600'}`}
                >
                  {selectedCareer?.id === career.id ? 'Tanlangan ✓' : 'Tanlash'}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <div className="text-sm text-gray-600">Oylik maosh</div>
                  <div className="font-semibold text-green-600">{career.salary}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">O'sish sur'ati</div>
                  <div className="font-semibold text-blue-600">{career.growth}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Ta'lim</div>
                  <div className="font-semibold text-gray-700">{career.education}</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Zarur ko'nikmalar:</h4>
                <div className="flex flex-wrap gap-2">
                  {career.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {selectedCareer?.id === career.id && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🎯 Karyera yo'l xaritasi:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span>1-3 oy: Asosiy ko'nikmalarni o'rganing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                      <span>3-6 oy: Portfolio loyihalari yarating</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span>6-12 oy: Junior lavozimga ariza bering</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                      <span>1-2 yil: Middle darajasiga o'ting</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      📧 Tanlangan kasb bo'yicha batafsil yo'l xaritasi emailingizga yuborildi!
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Keyingi qadamlar</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button 
            onClick={() => window.location.href = '/dashboard/jobs'}
            className="bg-green-600 hover:bg-green-700"
          >
            💼 Ish o'rinlarini ko'rish
          </Button>
          <Button 
            onClick={() => window.location.href = '/dashboard/chat'}
            variant="outline"
          >
            🤖 AI bilan suhbat
          </Button>
          <Button 
            onClick={() => window.location.href = '/dashboard/tests'}
            variant="outline"
          >
            📊 Boshqa testlar
          </Button>
        </div>
      </div>
    </div>
  )
}