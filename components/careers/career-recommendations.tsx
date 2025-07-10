"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Career {
  id: string
  title: string
  description: string
  match: number
  skills: string[]
  salary: string
  growth: string
}

const careers: Career[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    description: 'Foydalanuvchi interfeysi va tajribasi bilan ishlaydigan dasturchi',
    match: 95,
    skills: ['React', 'TypeScript', 'CSS', 'JavaScript'],
    salary: '$40,000 - $80,000',
    growth: 'Yuqori'
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    description: 'Foydalanuvchi interfeysi va tajribasini loyihalash',
    match: 87,
    skills: ['Figma', 'Sketch', 'Adobe XD', 'Prototyping'],
    salary: '$35,000 - $70,000',
    growth: 'Yuqori'
  },
  {
    id: '3',
    title: 'Data Analyst',
    description: 'Ma\'lumotlarni tahlil qilish va hisobotlar yaratish',
    match: 82,
    skills: ['Python', 'SQL', 'Excel', 'Tableau'],
    salary: '$45,000 - $85,000',
    growth: 'O\'rta'
  }
]

export default function CareerRecommendations() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Sizga mos kasb tavsiyalari
        </h2>
        <p className="text-gray-600">
          Test natijalaringiz asosida tavsiya qilingan kasblar
        </p>
      </div>

      <div className="grid gap-6">
        {careers.map((career) => (
          <Card key={career.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{career.title}</CardTitle>
                  <p className="text-gray-600 mt-1">{career.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{career.match}%</div>
                  <div className="text-sm text-gray-500">Moslik</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Kerakli ko'nikmalar</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Maosh</h4>
                  <p className="text-gray-600">{career.salary}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">O'sish</h4>
                  <p className="text-gray-600">{career.growth}</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex space-x-3">
                  <Button>Batafsil ma'lumot</Button>
                  <Button variant="outline">Ish o'rinlarini ko'rish</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}