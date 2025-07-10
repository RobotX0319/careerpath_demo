import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface TestResult {
  category: string
  score: number
  description: string
}

interface TestResultsProps {
  results: TestResult[]
}

export default function TestResults({ results }: TestResultsProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Test natijalari
        </h2>
        <p className="text-gray-600">
          Sizning shaxsiy xususiyatlaringiz tahlili
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {results.map((result, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{result.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Ball</span>
                  <span className="text-sm font-semibold">{result.score}/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${result.score}%` }}
                  />
                </div>
              </div>
              <p className="text-gray-600 text-sm">{result.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}