"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Question {
  id: number
  question: string
  category: string
  type: string
  reverse?: boolean
}

const personalityQuestions: Question[] = [
  {
    id: 1,
    question: "Men yangi odamlar bilan tanishishni yoqtiraman",
    category: "extraversion",
    type: "scale",
    reverse: false
  },
  {
    id: 2,
    question: "Men tashqi muhitda energiya olamam",
    category: "extraversion",
    type: "scale",
    reverse: false
  },
  {
    id: 3,
    question: "Men jimjit va sokin bo'lishni afzal ko'raman",
    category: "extraversion",
    type: "scale",
    reverse: true
  },
  {
    id: 4,
    question: "Men rejalarimni puxta bajaraman",
    category: "conscientiousness",
    type: "scale",
    reverse: false
  },
  {
    id: 5,
    question: "Men tartibli va tashkil etilgan insonman",
    category: "conscientiousness",
    type: "scale",
    reverse: false
  },
  {
    id: 6,
    question: "Men beparvo va ehtiyotsiz bo'laman",
    category: "conscientiousness",
    type: "scale",
    reverse: true
  },
  {
    id: 7,
    question: "Men boshqalar bilan hamjihatlik qilaman",
    category: "agreeableness",
    type: "scale",
    reverse: false
  },
  {
    id: 8,
    question: "Men mehribon va samimiy insonman",
    category: "agreeableness",
    type: "scale",
    reverse: false
  },
  {
    id: 9,
    question: "Men ba'zan shafqatsiz bo'laman",
    category: "agreeableness",
    type: "scale",
    reverse: true
  },
  {
    id: 10,
    question: "Men tez-tez asabiy bo'laman",
    category: "neuroticism",
    type: "scale",
    reverse: false
  },
  {
    id: 11,
    question: "Men stress holatida ham xotirjam qolaman",
    category: "neuroticism",
    type: "scale",
    reverse: true
  },
  {
    id: 12,
    question: "Men yangi g'oyalarni qabul qilaman",
    category: "openness",
    type: "scale",
    reverse: false
  },
  {
    id: 13,
    question: "Men ijodiy va tasavvurli insonman",
    category: "openness",
    type: "scale",
    reverse: false
  },
  {
    id: 14,
    question: "Men an'anaviy va oddiy usullarni afzal ko'raman",
    category: "openness",
    type: "scale",
    reverse: true
  },
  {
    id: 15,
    question: "Men ko'p odamlar bilan muloqot qilishni yoqtiraman",
    category: "extraversion",
    type: "scale",
    reverse: false
  },
  {
    id: 16,
    question: "Men vazifalarni vaqtida tugataman",
    category: "conscientiousness",
    type: "scale",
    reverse: false
  },
  {
    id: 17,
    question: "Men boshqalarga yordam berishni yaxshi ko'raman",
    category: "agreeableness",
    type: "scale",
    reverse: false
  },
  {
    id: 18,
    question: "Men tez-tez qayg'uraman",
    category: "neuroticism",
    type: "scale",
    reverse: false
  },
  {
    id: 19,
    question: "Men san'at va madaniyatga qiziqaman",
    category: "openness",
    type: "scale",
    reverse: false
  },
  {
    id: 20,
    question: "Men odamlar bilan janjallashishni yoqtirmayman",
    category: "agreeableness",
    type: "scale",
    reverse: false
  }
]

export default function PersonalityTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [isCompleted, setIsCompleted] = useState(false)
  const [results, setResults] = useState<Record<string, number> | null>(null)

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const nextQuestion = () => {
    if (currentQuestion < personalityQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      calculateResults()
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const calculateResults = () => {
    const categoryScores = {
      extraversion: 0,
      conscientiousness: 0,
      agreeableness: 0,
      neuroticism: 0,
      openness: 0
    }

    personalityQuestions.forEach(question => {
      const answer = answers[question.id]
      if (answer) {
        const score = question.reverse ? 6 - answer : answer
        categoryScores[question.category as keyof typeof categoryScores] += score
      }
    })

    // Normalize scores (0-100)
    Object.keys(categoryScores).forEach(category => {
      const questionCount = personalityQuestions.filter(q => q.category === category).length
      categoryScores[category as keyof typeof categoryScores] = 
        Math.round((categoryScores[category as keyof typeof categoryScores] / (questionCount * 5)) * 100)
    })

    setResults(categoryScores)
    setIsCompleted(true)
  }

  const currentQ = personalityQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / personalityQuestions.length) * 100

  if (isCompleted && results) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Shaxsiyat testi natijalari
          </h1>
          <p className="text-gray-600">
            Sizning Big Five shaxsiyat xususiyatlaringiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(results).map(([category, score]) => {
            const categoryNames = {
              extraversion: 'Ekstroversiya',
              conscientiousness: 'Vijdonlilik',
              agreeableness: 'Kelishuvkorlik',
              neuroticism: 'Nevrotizm',
              openness: 'Ochiqlik'
            }

            return (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {categoryNames[category as keyof typeof categoryNames]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm">
                      <span>Ball:</span>
                      <span className="font-semibold">{score}/100</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button onClick={() => window.location.href = '/dashboard/careers'}>
            Kasb tavsiyalarini ko'rish
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Shaxsiyat testi
        </h1>
        <p className="text-gray-600">
          Savol {currentQuestion + 1} / {personalityQuestions.length}
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-center">
            {currentQ.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name={`question-${currentQ.id}`}
                  value={value}
                  checked={answers[currentQ.id] === value}
                  onChange={() => handleAnswer(currentQ.id, value)}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-sm">
                  {value === 1 && 'Umuman rozi emasman'}
                  {value === 2 && 'Rozi emasman'}
                  {value === 3 && 'Neytralman'}
                  {value === 4 && 'Roziman'}
                  {value === 5 && 'To\'liq roziman'}
                </span>
              </label>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
        >
          Orqaga
        </Button>
        <Button 
          onClick={nextQuestion}
          disabled={!answers[currentQ.id]}
        >
          {currentQuestion === personalityQuestions.length - 1 ? 'Yakunlash' : 'Keyingi'}
        </Button>
      </div>
    </div>
  )
}