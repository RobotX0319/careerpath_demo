"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

interface RoadmapStep {
  id: string
  title: string
  description: string
  duration: string
  completed: boolean
  resources: string[]
  skills: string[]
}

interface CareerRoadmap {
  id: string
  title: string
  description: string
  totalDuration: string
  difficulty: 'Oson' | 'O\'rta' | 'Qiyin'
  steps: RoadmapStep[]
}

export default function RoadmapPage() {
  const [selectedCareer, setSelectedCareer] = useState<string>('frontend')
  
  const roadmaps: Record<string, CareerRoadmap> = {
    frontend: {
      id: 'frontend',
      title: 'Frontend Developer',
      description: 'Foydalanuvchi interfeysi va veb-saytlar yaratish yo\'li',
      totalDuration: '6-12 oy',
      difficulty: 'O\'rta',
      steps: [
        {
          id: '1',
          title: 'HTML & CSS asoslari',
          description: 'Veb-sahifalar yaratish uchun asosiy markup va styling tillarini o\'rganing',
          duration: '4-6 hafta',
          completed: true,
          resources: ['MDN Web Docs', 'W3Schools', 'CSS-Tricks'],
          skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid']
        },
        {
          id: '2',
          title: 'JavaScript fundamentals',
          description: 'Dinamik veb-sahifalar yaratish uchun JavaScript dasturlash tilini o\'rganing',
          duration: '8-10 hafta',
          completed: true,
          resources: ['JavaScript.info', 'Eloquent JavaScript', 'MDN JavaScript'],
          skills: ['ES6+', 'DOM manipulation', 'Event handling', 'Async/await']
        },
        {
          id: '3',
          title: 'React.js framework',
          description: 'Modern frontend development uchun React kutubxonasini o\'rganing',
          duration: '6-8 hafta',
          completed: false,
          resources: ['React Documentation', 'React Tutorial', 'Scrimba React'],
          skills: ['JSX', 'Components', 'State management', 'Hooks']
        },
        {
          id: '4',
          title: 'TypeScript',
          description: 'Kod sifatini yaxshilash uchun TypeScript o\'rganing',
          duration: '3-4 hafta',
          completed: false,
          resources: ['TypeScript Handbook', 'TypeScript Deep Dive'],
          skills: ['Type annotations', 'Interfaces', 'Generics', 'Modules']
        },
        {
          id: '5',
          title: 'Build tools & Testing',
          description: 'Loyihani build qilish va test yozish vositalarini o\'rganing',
          duration: '4-6 hafta',
          completed: false,
          resources: ['Webpack', 'Vite', 'Jest', 'React Testing Library'],
          skills: ['Webpack', 'Vite', 'Jest', 'Unit testing']
        },
        {
          id: '6',
          title: 'Portfolio & Job Search',
          description: 'Portfolio yarating va ish qidirishga tayyorlaning',
          duration: '2-4 hafta',
          completed: false,
          resources: ['GitHub', 'LinkedIn', 'Portfolio examples'],
          skills: ['Git', 'GitHub', 'CV writing', 'Interview prep']
        }
      ]
    },
    backend: {
      id: 'backend',
      title: 'Backend Developer',
      description: 'Server tomonidagi dasturlar yaratish yo\'li',
      totalDuration: '8-12 oy',
      difficulty: 'O\'rta',
      steps: [
        {
          id: '1',
          title: 'Dasturlash tili (Node.js/Python)',
          description: 'Backend development uchun dasturlash tilini o\'rganing',
          duration: '6-8 hafta',
          completed: false,
          resources: ['Node.js docs', 'Python.org', 'Express.js'],
          skills: ['Node.js', 'Python', 'Express.js', 'FastAPI']
        },
        {
          id: '2',
          title: 'Database va SQL',
          description: 'Ma\'lumotlar bazasi bilan ishlashni o\'rganing',
          duration: '4-6 hafta',
          completed: false,
          resources: ['PostgreSQL', 'MongoDB', 'SQL Tutorial'],
          skills: ['SQL', 'PostgreSQL', 'MongoDB', 'Database design']
        },
        {
          id: '3',
          title: 'API Development',
          description: 'RESTful API va GraphQL yaratishni o\'rganing',
          duration: '6-8 hafta',
          completed: false,
          resources: ['REST API', 'GraphQL', 'Postman'],
          skills: ['REST API', 'GraphQL', 'Authentication', 'Authorization']
        },
        {
          id: '4',
          title: 'Cloud va DevOps',
          description: 'Loyihani deploy qilish va server boshqarish',
          duration: '4-6 hafta',
          completed: false,
          resources: ['AWS', 'Docker', 'Kubernetes'],
          skills: ['AWS', 'Docker', 'CI/CD', 'Linux']
        }
      ]
    },
    datascience: {
      id: 'datascience',
      title: 'Data Science',
      description: 'Ma\'lumotlarni tahlil qilish va machine learning yo\'li',
      totalDuration: '12-18 oy',
      difficulty: 'Qiyin',
      steps: [
        {
          id: '1',
          title: 'Python va Statistics',
          description: 'Python dasturlash tili va statistika asoslarini o\'rganing',
          duration: '8-10 hafta',
          completed: false,
          resources: ['Python.org', 'Statistics courses', 'Kaggle Learn'],
          skills: ['Python', 'Statistics', 'Probability', 'NumPy']
        },
        {
          id: '2',
          title: 'Data Analysis',
          description: 'Ma\'lumotlarni tahlil qilish va visualization',
          duration: '6-8 hafta',
          completed: false,
          resources: ['Pandas', 'Matplotlib', 'Seaborn', 'Plotly'],
          skills: ['Pandas', 'Matplotlib', 'Data cleaning', 'EDA']
        },
        {
          id: '3',
          title: 'Machine Learning',
          description: 'Machine learning algoritmlari va modellar',
          duration: '10-12 hafta',
          completed: false,
          resources: ['Scikit-learn', 'TensorFlow', 'PyTorch'],
          skills: ['Scikit-learn', 'TensorFlow', 'Model evaluation', 'Feature engineering']
        },
        {
          id: '4',
          title: 'Deep Learning',
          description: 'Chuqur o\'rganish va neural networks',
          duration: '8-10 hafta',
          completed: false,
          resources: ['Deep Learning courses', 'Keras', 'PyTorch'],
          skills: ['Neural networks', 'CNN', 'RNN', 'Transfer learning']
        }
      ]
    }
  }

  const currentRoadmap = roadmaps[selectedCareer]
  const completedSteps = currentRoadmap.steps.filter(step => step.completed).length
  const totalSteps = currentRoadmap.steps.length
  const progressPercentage = (completedSteps / totalSteps) * 100

  const toggleStepCompletion = (stepId: string) => {
    // In real app, this would update the database
    console.log('Toggle step completion:', stepId)
  }

  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Karyera Yo'l Xaritasi</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Tanlangan kasb bo'yicha bosqichma-bosqich rivojlanish rejasi va tavsiyalar
        </p>
      </div>

      {/* Career Selection */}
      <div className="flex justify-center">
        <div className="flex space-x-4">
          {Object.entries(roadmaps).map(([key, roadmap]) => (
            <button
              key={key}
              type="button"
              className={`px-6 py-2 rounded-md font-medium border transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                selectedCareer === key
                  ? 'bg-blue-600 text-white border-blue-600 shadow'
                  : 'bg-white text-gray-900 border-gray-300 hover:bg-blue-50'
              }`}
              onClick={() => setSelectedCareer(key)}
            >
              {roadmap.title}
            </button>
          ))}
        </div>
      </div>

      {/* Roadmap Overview */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-2xl text-center">{currentRoadmap.title}</CardTitle>
          <p className="text-center text-gray-600">{currentRoadmap.description}</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Davomiyligi</h3>
              <p className="text-blue-600 font-medium">{currentRoadmap.totalDuration}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Qiyinchilik</h3>
              <p className="text-blue-600 font-medium">{currentRoadmap.difficulty}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Jarayon</h3>
              <p className="text-blue-600 font-medium">{completedSteps}/{totalSteps} bosqich</p>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Umumiy jarayon</span>
              <span className="text-sm font-medium text-gray-700">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Roadmap Steps */}
      <div className="space-y-6">
        {currentRoadmap.steps.map((step, index) => (
          <Card key={step.id} className={`relative ${step.completed ? 'bg-green-50 border-green-200' : 'bg-white'}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    step.completed ? 'bg-green-500' : 'bg-gray-400'
                  }`}>
                    {step.completed ? '✓' : index + 1}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Davomiyligi</p>
                  <p className="font-medium">{step.duration}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">O'rganadigan ko'nikmalar</h4>
                  <div className="flex flex-wrap gap-2">
                    {step.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Foydali manbalar</h4>
                  <ul className="space-y-1">
                    {step.resources.map((resource, resourceIndex) => (
                      <li key={resourceIndex} className="text-blue-600 hover:text-blue-800 cursor-pointer">
                        • {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Button
                  onClick={() => toggleStepCompletion(step.id)}
                  variant={step.completed ? "outline" : "default"}
                  className="w-full md:w-auto"
                >
                  {step.completed ? 'Yakunlangan ✓' : 'Bosqichni boshlash'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Achievement */}
      {completedSteps === totalSteps && (
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="text-center py-12">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Tabriklaymiz!</h2>
            <p className="text-gray-600 mb-6">
              Siz {currentRoadmap.title} yo'l xaritasini muvaffaqiyatli yakunladingiz!
            </p>
            <Button size="lg">
              Sertifikat olish
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}