"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function EmployerJobsPage() {
  const [activeTab, setActiveTab] = useState('active')

  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      description: "React va TypeScript bilan ishlash tajribasi talab qilinadi",
      applications: 15,
      views: 234,
      status: "active",
      created: "3 kun oldin",
      salary: "$800-1500"
    },
    {
      id: 2,
      title: "Product Manager",
      description: "Mahsulot rivojlanish jarayonini boshqarish",
      applications: 8,
      views: 156,
      status: "active",
      created: "1 hafta oldin",
      salary: "$1000-2000"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      description: "Foydalanuvchi interfeysi va tajriba dizayni",
      applications: 12,
      views: 189,
      status: "active",
      created: "5 kun oldin",
      salary: "$600-1200"
    },
    {
      id: 4,
      title: "Frontend Developer",
      description: "Junior level frontend developer",
      applications: 24,
      views: 312,
      status: "closed",
      created: "2 hafta oldin",
      salary: "$400-800"
    }
  ]

  const filteredJobs = jobs.filter(job => job.status === activeTab)

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Ish o'rinlari</h1>
            <p className="text-gray-600 mt-2">
              Kompaniya vakansiyalarini boshqaring
            </p>
          </div>
          <Button onClick={() => window.location.href = '/employer/jobs/new'}>
            ➕ Yangi ish o'rni
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
          <button
            onClick={() => setActiveTab('active')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'active'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Faol ({jobs.filter(j => j.status === 'active').length})
          </button>
          <button
            onClick={() => setActiveTab('closed')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'closed'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Yopiq ({jobs.filter(j => j.status === 'closed').length})
          </button>
        </div>
      </div>

      {/* Jobs List */}
      <div className="grid grid-cols-1 gap-6">
        {filteredJobs.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <p className="text-gray-600 mt-2">{job.description}</p>
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                    <span>💰 {job.salary}</span>
                    <span>👥 {job.applications} ariza</span>
                    <span>👁️ {job.views} ko'rish</span>
                    <span>📅 {job.created}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {job.status === 'active' && (
                    <>
                      <Button variant="outline" size="sm">
                        Tahrirlash
                      </Button>
                      <Button variant="outline" size="sm">
                        Yopish
                      </Button>
                    </>
                  )}
                  <Button 
                    size="sm"
                    onClick={() => alert(`${job.title} arizalarini ko'rish (Demo)`)}
                  >
                    Arizalar ({job.applications})
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}

        {filteredJobs.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-lg font-semibold mb-2">
                {activeTab === 'active' ? 'Faol ish o\'rinlari yo\'q' : 'Yopiq ish o\'rinlari yo\'q'}
              </h3>
              <p className="text-gray-600 mb-4">
                {activeTab === 'active' 
                  ? 'Birinchi vakansiyangizni yarating' 
                  : 'Hali yopilgan vakansiyalar yo\'q'
                }
              </p>
              {activeTab === 'active' && (
                <Button onClick={() => window.location.href = '/employer/jobs/new'}>
                  Yangi ish o'rni yaratish
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}