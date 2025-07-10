"use client"
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  type: string
  difficulty: string
}

export default function IQTest() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{[key: number]: number}>({})
  const [isCompleted, setIsCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(1800) // 30 minutes
  const [startTime, setStartTime] = useState<Date | null>(null)
  const [results, setResults] = useState<any>(null)

  useEffect(() => {
    // Load questions from JSON file
    fetch('/data/iq-questions.json')
      .then(res => res.json())
      .then(data => {
        setQuestions(data)
        setStartTime(new Date())
      })
      .catch(err => console.error('Error loading questions:', err))
  }, [])

  useEffect(() => {
    if (startTime && !isCompleted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            calculateResults()
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [startTime, isCompleted, timeLeft])

  const handleAnswer = (answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: answerIndex
    }))

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      calculateResults()
    }
  }

  const calculateResults = () => {
    let correctAnswers = 0
    let totalScore = 0

    questions.forEach(question => {
      const userAnswer = answers[question.id]
      if (userAnswer === question.correct) {
        correctAnswers++
        // Difficulty based scoring
        const difficultyMultiplier = {
          easy: 1,
          medium: 2,
          hard: 3
        }
        totalScore += difficultyMultiplier[question.difficulty as keyof typeof difficultyMultiplier] || 1
      }
    })

    const percentage = Math.round((correctAnswers / questions.length) * 100)
    const estimatedIQ = Math.round(85 + (percentage * 0.3)) // Simple IQ estimation

    setResults({
      correctAnswers,
      totalQuestions: questions.length,
      percentage,
      estimatedIQ,
      timeTaken: Math.round((1800 - timeLeft) / 60) // minutes
    })
    setIsCompleted(true)
  }

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  if (questions.length === 0) {
    return <div className="text-center">Yuklanmoqda...</div>
  }

  if (isCompleted && results) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>IQ testi natijalari</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-4xl font-bold text-primary">{results.estimatedIQ}</div>
                  <div className="text-sm text-gray-600">Taxminiy IQ</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>To'g'ri javoblar</span>
                    <span>{results.correctAnswers}/{results.totalQuestions}</span>
                  </div>
                  <Progress value={results.percentage} className="h-3" />
                  <div className="text-sm text-gray-600">{results.percentage}% to'g'ri</div>
                </div>

                <div className="text-sm text-gray-600">
                  Vaqt: {results.timeTaken} daqiqa
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">IQ darajalari:</h3>
                <div className="text-sm space-y-1">
                  <div>130+ - Juda yuqori</div>
                  <div>120-129 - Yuqori</div>
                  <div>110-119 - O'rtadan yuqori</div>
                  <div>90-109 - O'rta</div>
                  <div>80-89 - O'rtadan past</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-4">
              <Button onClick={() => window.location.href = '/dashboard'}>
                Dashboardga qaytish
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/dashboard/careers'}>
                Kasb tavsiyalarini ko'rish
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">IQ testi</h1>
          <p className="text-gray-600">Savol {currentQuestion + 1} / {questions.length}</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-mono">{formatTime(timeLeft)}</div>
          <div className="text-sm text-gray-600">Qolgan vaqt</div>
        </div>
      </div>

      <Progress value={progress} className="h-3" />

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{questions[currentQuestion]?.question}</CardTitle>
          <div className="text-sm text-gray-500 capitalize">
            {questions[currentQuestion]?.type} • {questions[currentQuestion]?.difficulty}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {questions[currentQuestion]?.options.map((option, index) => (
              <Button
                key={index}
                variant={answers[questions[currentQuestion]?.id] === index ? "default" : "outline"}
                onClick={() => handleAnswer(index)}
                className="w-full text-left justify-start h-auto p-4"
              >
                <span className="mr-3 font-bold">{String.fromCharCode(65 + index)}.</span>
                {option}
              </Button>
            ))}
          </div>
          
          <div className="flex justify-between mt-6">
            <Button 
              variant="outline" 
              onClick={goBack}
              disabled={currentQuestion === 0}
            >
              Orqaga
            </Button>
            <Button 
              onClick={() => handleAnswer(answers[questions[currentQuestion]?.id] ?? 0)}
              disabled={answers[questions[currentQuestion]?.id] === undefined}
            >
              {currentQuestion === questions.length - 1 ? 'Tugatish' : 'Keyingisi'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}