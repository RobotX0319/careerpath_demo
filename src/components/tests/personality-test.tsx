"use client"
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface Question {
  id: number
  question: string
  category: string
  type: string
  reverse?: boolean
}

export default function PersonalityTest() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{[key: number]: number}>({})
  const [isCompleted, setIsCompleted] = useState(false)
  const [results, setResults] = useState<any>(null)

  useEffect(() => {
    // Load questions from JSON file
    fetch('/data/personality-questions.json')
      .then(res => res.json())
      .then(data => setQuestions(data))
      .catch(err => console.error('Error loading questions:', err))
  }, [])

  const handleAnswer = (score: number) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: score
    }))

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      calculateResults()
    }
  }

  const calculateResults = () => {
    const scores = {
      extraversion: 0,
      agreeableness: 0,
      conscientiousness: 0,
      neuroticism: 0,
      openness: 0
    }

    questions.forEach(question => {
      const answer = answers[question.id] || 3
      const score = question.reverse ? 6 - answer : answer
      scores[question.category as keyof typeof scores] += score
    })

    // Normalize scores (divide by number of questions per category)
    Object.keys(scores).forEach(trait => {
      const questionCount = questions.filter(q => q.category === trait).length
      scores[trait as keyof typeof scores] = Math.round((scores[trait as keyof typeof scores] / questionCount) * 20)
    })

    setResults(scores)
    setIsCompleted(true)
  }

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  if (questions.length === 0) {
    return <div className="text-center">Yuklanmoqda...</div>
  }

  if (isCompleted && results) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Shaxsiyat testi natijalari</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(results).map(([trait, score]) => (
                <div key={trait} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="capitalize font-medium">{trait}</span>
                    <span>{score as number}/100</span>
                  </div>
                  <Progress value={score as number} className="h-3" />
                </div>
              ))}
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
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Shaxsiyat testi</h1>
        <p className="text-gray-600">Savol {currentQuestion + 1} / {questions.length}</p>
      </div>

      <Progress value={progress} className="h-3" />

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{questions[currentQuestion]?.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm text-gray-600 mb-4">1 - Butunlay rozi emasman, 5 - Butunlay roziman</p>
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map(score => (
                <Button
                  key={score}
                  variant={answers[questions[currentQuestion]?.id] === score ? "default" : "outline"}
                  onClick={() => handleAnswer(score)}
                  className="h-12"
                >
                  {score}
                </Button>
              ))}
            </div>
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
              onClick={() => handleAnswer(answers[questions[currentQuestion]?.id] || 3)}
              disabled={!answers[questions[currentQuestion]?.id]}
            >
              {currentQuestion === questions.length - 1 ? 'Tugatish' : 'Keyingisi'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}