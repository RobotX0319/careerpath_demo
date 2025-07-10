"use client"
import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface IQQuestion {
  id: number
  question: string
  options: string[]
  correct: number
  type: string
  difficulty: string
  time_limit: number
}

const iqQuestions: IQQuestion[] = [
  {
    id: 1,
    question: "Keyingi raqam qaysi? 2, 4, 8, 16, ?",
    options: ["24", "32", "28", "36"],
    correct: 1,
    type: "sequence",
    difficulty: "easy",
    time_limit: 60
  },
  {
    id: 2,
    question: "Qaysi so'z ortiqcha? Olma, Nok, Banan, Sabzi, Uzum",
    options: ["Olma", "Nok", "Sabzi", "Uzum"],
    correct: 2,
    type: "odd_one_out",
    difficulty: "easy",
    time_limit: 45
  },
  {
    id: 3,
    question: "5 ta olma 10 ming so'm tursa, 8 ta olma qancha turadi?",
    options: ["15000", "16000", "18000", "20000"],
    correct: 1,
    type: "math",
    difficulty: "easy",
    time_limit: 45
  },
  {
    id: 4,
    question: "Quyidagi harflar ketma-ketligini davom ettiring: A, C, F, J, O, ?",
    options: ["T", "U", "V", "W"],
    correct: 1,
    type: "sequence",
    difficulty: "hard",
    time_limit: 90
  },
  {
    id: 5,
    question: "Agar bugun seshanba bo'lsa, 100 kundan keyin qaysi kun bo'ladi?",
    options: ["Dushanba", "Seshanba", "Chorshanba", "Payshanba"],
    correct: 3,
    type: "logic",
    difficulty: "medium",
    time_limit: 75
  },
  {
    id: 6,
    question: "Qaysi raqam noto'g'ri yozilgan? 16, 25, 36, 48, 64",
    options: ["25", "36", "48", "64"],
    correct: 2,
    type: "pattern",
    difficulty: "medium",
    time_limit: 60
  },
  {
    id: 7,
    question: "1, 1, 2, 3, 5, 8, 13, ?",
    options: ["18", "21", "24", "26"],
    correct: 1,
    type: "sequence",
    difficulty: "medium",
    time_limit: 60
  },
  {
    id: 8,
    question: "Agar soat 3:15 ni ko'rsatayotgan bo'lsa, soat va minut millari orasidagi burchak necha gradus?",
    options: ["0°", "7.5°", "15°", "22.5°"],
    correct: 1,
    type: "spatial",
    difficulty: "hard",
    time_limit: 90
  },
  {
    id: 9,
    question: "100 dan 1 gacha bo'lgan barcha toq sonlar yig'indisi qancha?",
    options: ["2500", "2450", "2550", "2600"],
    correct: 0,
    type: "math",
    difficulty: "medium",
    time_limit: 90
  },
  {
    id: 10,
    question: "Poyezd 120 km/soat tezlikda 3 soat yurdi. Qancha masofa bosib o'tdi?",
    options: ["240 km", "300 km", "360 km", "420 km"],
    correct: 2,
    type: "math",
    difficulty: "easy",
    time_limit: 45
  }
]

export default function IQTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [isCompleted, setIsCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60)
  const [testStartTime, setTestStartTime] = useState<number | null>(null)
  const [score, setScore] = useState(0)

  const currentQ = iqQuestions[currentQuestion]

  useEffect(() => {
    if (testStartTime && !isCompleted) {
      setTimeLeft(currentQ.time_limit)
      
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            nextQuestion()
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [currentQuestion, testStartTime, isCompleted])

  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }))
  }

  const nextQuestion = () => {
    if (currentQuestion < iqQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      calculateScore()
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const calculateScore = () => {
    let correctAnswers = 0
    
    iqQuestions.forEach(question => {
      const userAnswer = answers[question.id]
      if (userAnswer === question.correct) {
        correctAnswers++
      }
    })

    const percentage = (correctAnswers / iqQuestions.length) * 100
    const iqScore = Math.round(100 + (percentage - 50) * 0.3) // Simplified IQ calculation
    
    setScore(iqScore)
    setIsCompleted(true)
  }

  const startTest = () => {
    setTestStartTime(Date.now())
    setTimeLeft(currentQ.time_limit)
  }

  const progress = ((currentQuestion + 1) / iqQuestions.length) * 100

  if (isCompleted) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            IQ testi natijalari
          </h1>
          <p className="text-gray-600">
            Sizning kognitiv qobiliyat darajangiz
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="text-6xl mb-4">🧠</div>
            <CardTitle className="text-3xl text-blue-600">{score} IQ</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {Object.keys(answers).length}
                </div>
                <div className="text-sm text-gray-600">Javob berilgan</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {iqQuestions.filter(q => answers[q.id] === q.correct).length}
                </div>
                <div className="text-sm text-gray-600">To'g'ri javob</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {Math.round((iqQuestions.filter(q => answers[q.id] === q.correct).length / iqQuestions.length) * 100)}%
                </div>
                <div className="text-sm text-gray-600">Aniqlik</div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">IQ darajasi tahlili:</h3>
              <p className="text-sm text-gray-600">
                {score >= 130 ? "Juda yuqori - Iste'dodli" :
                 score >= 115 ? "Yuqori o'rtacha - Yaxshi" :
                 score >= 85 ? "O'rtacha - Normal" :
                 score >= 70 ? "Pastroq o'rtacha" : "Past"}
              </p>
            </div>

            <div className="space-x-4">
              <Button onClick={() => window.location.href = '/dashboard/careers'}>
                Kasb tavsiyalarini ko'rish
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/dashboard/tests'}>
                Boshqa testlar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!testStartTime) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <div className="text-6xl mb-4">🎯</div>
            <CardTitle className="text-2xl">IQ testi</CardTitle>
            <p className="text-gray-600">Kognitiv qobiliyat baholash</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Test haqida:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• {iqQuestions.length} ta savol</li>
                  <li>• Har bir savol uchun vaqt</li>
                  <li>• Mantiqiy fikrlash</li>
                  <li>• Matematik masalalar</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Sizga beradi:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• IQ darajasi (raqamda)</li>
                  <li>• Kognitiv tahlil</li>
                  <li>• Mos kasblar</li>
                  <li>• Rivojlanish yo'llari</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <p className="text-yellow-800 text-sm">
                ⚠️ Diqqat: Test vaqti cheklangan. Har bir savol uchun belgilangan vaqt tugagach, 
                keyingi savolga o'tiladi.
              </p>
            </div>
            
            <div className="text-center">
              <Button onClick={startTest} size="lg">
                Testni boshlash
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">IQ testi</h1>
          <p className="text-gray-600">
            Savol {currentQuestion + 1} / {iqQuestions.length}
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-red-600">{timeLeft}s</div>
          <div className="text-sm text-gray-600">Qolgan vaqt</div>
        </div>
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
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">
              {currentQ.question}
            </CardTitle>
            <div className="text-sm text-gray-500">
              {currentQ.type} • {currentQ.difficulty}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <label key={index} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                <input
                  type="radio"
                  name={`question-${currentQ.id}`}
                  value={index}
                  checked={answers[currentQ.id] === index}
                  onChange={() => handleAnswer(currentQ.id, index)}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="font-medium">{String.fromCharCode(65 + index)})</span>
                <span>{option}</span>
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
          disabled={answers[currentQ.id] === undefined}
        >
          {currentQuestion === iqQuestions.length - 1 ? 'Yakunlash' : 'Keyingi'}
        </Button>
      </div>
    </div>
  )
}