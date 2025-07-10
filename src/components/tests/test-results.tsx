"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface TestResultsProps {
  testType: 'personality' | 'iq'
  results: any
}

export default function TestResults({ testType, results }: TestResultsProps) {
  if (testType === 'personality') {
    const traits = [
      { name: 'Extraversion', value: results.extraversion, color: 'bg-blue-500' },
      { name: 'Agreeableness', value: results.agreeableness, color: 'bg-green-500' },
      { name: 'Conscientiousness', value: results.conscientiousness, color: 'bg-purple-500' },
      { name: 'Neuroticism', value: results.neuroticism, color: 'bg-red-500' },
      { name: 'Openness', value: results.openness, color: 'bg-orange-500' }
    ]

    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <span className="text-2xl mr-2">🧠</span>
            Shaxsiyat test natijalari
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {traits.map((trait) => (
              <div key={trait.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{trait.name}</span>
                  <span>{trait.value}%</span>
                </div>
                <Progress value={trait.value} className="h-2" />
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Xulosalar:</strong> Sizda yuqori ijodkorlik va ochiqlik ko'rsatkichlari mavjud. 
              Bu IT va dizayn sohalarida muvaffaqiyat qozonish imkoniyatini beradi.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (testType === 'iq') {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <span className="text-2xl mr-2">🎯</span>
            IQ test natijalari
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {results.estimatedIQ}
            </div>
            <p className="text-gray-600">Baholangan IQ darajasi</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-xl font-bold text-green-600">
                {results.correctAnswers}/{results.totalQuestions}
              </div>
              <p className="text-sm text-green-600">To'g'ri javoblar</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-xl font-bold text-blue-600">
                {results.percentage}%
              </div>
              <p className="text-sm text-blue-600">Foiz ko'rsatkichi</p>
            </div>
          </div>

          <div className="p-3 bg-purple-50 rounded-lg">
            <p className="text-sm text-purple-700">
              <strong>Tahlil:</strong> Sizning natijangiz o'rtacha darajadan yuqori. 
              Bu murakkab muammolarni hal qilish va analitik ishlarda muvaffaqiyat 
              qozonish imkoniyatini ko'rsatadi.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return null
}