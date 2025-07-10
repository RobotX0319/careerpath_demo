"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function CandidatesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const candidates = [
    {
      id: 1,
      name: "Aziz Karimov",
      email: "aziz.karimov@email.com",
      position: "Frontend Developer",
      experience: "3 yil",
      skills: ["React", "JavaScript", "TypeScript", "CSS"],
      status: "pending",
      appliedDate: "2024-01-15",
      resume: "resume_aziz.pdf",
      personalityScore: {
        extraversion: 75,
        agreeableness: 80,
        conscientiousness: 85,
        openness: 90
      },
      iqScore: 125
    },
    {
      id: 2,
      name: "Malika Tosheva",
      email: "malika.tosheva@email.com",
      position: "UI/UX Designer",
      experience: "2 yil",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      status: "interview",
      appliedDate: "2024-01-14",
      resume: "resume_malika.pdf",
      personalityScore: {
        extraversion: 85,
        agreeableness: 90,
        conscientiousness: 75,
        openness: 95
      },
      iqScore: 118
    },
    {
      id: 3,
      name: "Bobur Aliev",
      email: "bobur.aliev@email.com",
      position: "Backend Developer",
      experience: "4 yil",
      skills: ["Python", "Django", "PostgreSQL", "Docker"],
      status: "accepted",
      appliedDate: "2024-01-12",
      resume: "resume_bobur.pdf",
      personalityScore: {
        extraversion: 60,
        agreeableness: 75,
        conscientiousness: 95,
        openness: 80
      },
      iqScore: 130
    },
    {
      id: 4,
      name: "Nodira Qosimova",
      email: "nodira.qosimova@email.com",
      position: "Project Manager",
      experience: "5 yil",
      skills: ["Agile", "Scrum", "Jira", "Leadership"],
      status: "rejected",
      appliedDate: "2024-01-10",
      resume: "resume_nodira.pdf",
      personalityScore: {
        extraversion: 95,
        agreeableness: 85,
        conscientiousness: 90,
        openness: 70
      },
      iqScore: 115
    }
  ]

  const getStatusColor = (status: string) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      interview: 'bg-blue-100 text-blue-800',
      accepted: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800'
    }
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getStatusText = (status: string) => {
    const texts = {
      pending: 'Kutilmoqda',
      interview: 'Intervyu',
      accepted: 'Qabul qilindi',
      rejected: 'Rad etildi'
    }
    return texts[status as keyof typeof texts] || status
  }

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesStatus = filterStatus === 'all' || candidate.status === filterStatus
    
    return matchesSearch && matchesStatus
  })

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Nomzodlar</h1>
        <p className="text-gray-600 mt-2">
          Ariza bergan nomzodlarni ko'rib chiqing va baxolang
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Nomzod ismi, lavozim yoki ko'nikma bo'yicha qidiring..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-md"
          >
            <option value="all">Barcha holatlar</option>
            <option value="pending">Kutilmoqda</option>
            <option value="interview">Intervyu</option>
            <option value="accepted">Qabul qilindi</option>
            <option value="rejected">Rad etildi</option>
          </select>
        </div>
      </div>

      {/* Candidates List */}
      <div className="grid grid-cols-1 gap-6">
        {filteredCandidates.map((candidate) => (
          <Card key={candidate.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <CardTitle className="text-xl">{candidate.name}</CardTitle>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(candidate.status)}`}>
                      {getStatusText(candidate.status)}
                    </span>
                  </div>
                  <p className="text-gray-600">{candidate.email}</p>
                  <p className="text-gray-600">{candidate.position} • {candidate.experience} tajriba</p>
                  
                  <div className="mt-3">
                    <div className="flex flex-wrap gap-2">
                      {candidate.skills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-sm text-gray-500">Ariza sanasi</p>
                  <p className="font-medium">{new Date(candidate.appliedDate).toLocaleDateString('uz-UZ')}</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              {/* Test Results */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">IQ Test</h4>
                  <div className="text-2xl font-bold text-blue-600">{candidate.iqScore}</div>
                  <p className="text-xs text-blue-600">Yuqori daraja</p>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Ochiqlik</h4>
                  <div className="text-2xl font-bold text-green-600">{candidate.personalityScore.openness}%</div>
                  <p className="text-xs text-green-600">Innovatsion</p>
                </div>
                
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Mas'uliyat</h4>
                  <div className="text-2xl font-bold text-purple-600">{candidate.personalityScore.conscientiousness}%</div>
                  <p className="text-xs text-purple-600">Ishonchli</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  📄 Resume ko'rish
                </Button>
                <Button size="sm" variant="outline">
                  📊 Batafsil test natijalari
                </Button>
                {candidate.status === 'pending' && (
                  <>
                    <Button size="sm">
                      ✅ Intervyuga chaqirish
                    </Button>
                    <Button size="sm" variant="outline">
                      ❌ Rad etish
                    </Button>
                  </>
                )}
                {candidate.status === 'interview' && (
                  <>
                    <Button size="sm">
                      ✅ Qabul qilish
                    </Button>
                    <Button size="sm" variant="outline">
                      ❌ Rad etish
                    </Button>
                  </>
                )}
                <Button size="sm" variant="outline">
                  💬 Xabar yuborish
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredCandidates.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-semibold mb-2">Nomzodlar topilmadi</h3>
              <p className="text-gray-600">
                Qidiruv so'zini o'zgartiring yoki filtrlarni qayta sozlang
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}