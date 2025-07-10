"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Job {
  id: number
  title: string
  company: string
  location: string
  salary: string
  description: string
  requirements: string[]
  workType: string
  postedDate: string
}

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [locationFilter, setLocationFilter] = useState('')

  const jobs: Job[] = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechUz Solutions",
      location: "Toshkent",
      salary: "$800-1500",
      description: "React va TypeScript bilan ishlash tajribasi talab qilinadi. Zamonaviy web ilovalar yaratish.",
      requirements: ["React", "TypeScript", "HTML/CSS", "Git"],
      workType: "Ofis",
      postedDate: "2 kun oldin"
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Digital Agency",
      location: "Toshkent",
      salary: "$1000-2000",
      description: "Node.js va database bilan ishlash. API yaratish va server tomoni rivojlantirish.",
      requirements: ["Node.js", "MongoDB", "Express", "REST API"],
      workType: "Masofaviy",
      postedDate: "1 hafta oldin"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "Samarqand",
      salary: "$600-1200",
      description: "Foydalanuvchi interfeysi va tajriba dizayni. Figma va Adobe dasturlari bilan ishlash.",
      requirements: ["Figma", "Adobe XD", "Photoshop", "Prototyping"],
      workType: "Gibrid",
      postedDate: "3 kun oldin"
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "AnalyticsPro",
      location: "Toshkent",
      salary: "$1200-2500",
      description: "Ma'lumotlar tahlili va machine learning modellari yaratish.",
      requirements: ["Python", "SQL", "Machine Learning", "Statistics"],
      workType: "Masofaviy",
      postedDate: "5 kun oldin"
    },
    {
      id: 5,
      title: "Marketing Manager",
      company: "Brand Solutions",
      location: "Toshkent",
      salary: "$700-1400",
      description: "Digital marketing strategiyalari ishlab chiqish va amalga oshirish.",
      requirements: ["Digital Marketing", "SMM", "Analytics", "Content"],
      workType: "Ofis",
      postedDate: "1 kun oldin"
    },
    {
      id: 6,
      title: "Product Manager",
      company: "StartupHub",
      location: "Toshkent",
      salary: "$1500-3000",
      description: "Mahsulot rivojlanish jarayonini boshqarish va strategiya ishlab chiqish.",
      requirements: ["Product Management", "Analytics", "Leadership", "Agile"],
      workType: "Gibrid",
      postedDate: "4 kun oldin"
    }
  ]

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase())
    
    return matchesSearch && matchesLocation
  })

  const handleApply = async (job: Job) => {
    // Send application emails
    try {
      await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'job_application',
          data: {
            applicantEmail: 'demo@example.com',
            applicantName: 'Demo User',
            employerEmail: 'hr@company.com',
            jobTitle: job.title,
            companyName: job.company,
            status: 'pending'
          }
        })
      })
      
      alert(`${job.title} lavozimiga ariza yuborildi! Email xabarlari yuborildi.`)
    } catch (error) {
      console.error('Email error:', error)
      alert(`${job.title} lavozimiga ariza yuborildi!`)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Ish o'rinlari</h1>
        <p className="text-gray-600 mt-2">
          Sizga mos ish o'rinlarini toping va ariza qoldiring
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          placeholder="Lavozim yoki kompaniya qidiring..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Input
          placeholder="Shahar..."
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />
        <select className="px-3 py-2 border border-gray-200 rounded-md">
          <option value="">Barcha ish turlari</option>
          <option value="office">Ofis</option>
          <option value="remote">Masofaviy</option>
          <option value="hybrid">Gibrid</option>
        </select>
      </div>

      {/* Jobs List */}
      <div className="grid grid-cols-1 gap-6">
        {filteredJobs.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <p className="text-gray-600 font-medium">{job.company}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span>📍 {job.location}</span>
                    <span>💰 {job.salary}</span>
                    <span>🏢 {job.workType}</span>
                    <span>📅 {job.postedDate}</span>
                  </div>
                </div>
                <Button 
                  onClick={() => handleApply(job)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Ariza berish
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{job.description}</p>
              
              <div>
                <h4 className="font-semibold mb-2">Zarur ko'nikmalar:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredJobs.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold mb-2">Ish o'rinlari topilmadi</h3>
              <p className="text-gray-600">
                Qidiruv so'zini o'zgartiring yoki filtrlarni qayta sozlang
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Stats */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Ish qidirish statistikasi</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">{jobs.length}</div>
            <div className="text-sm text-gray-600">Jami ish o'rinlari</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">{filteredJobs.length}</div>
            <div className="text-sm text-gray-600">Filtr natijalari</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">3</div>
            <div className="text-sm text-gray-600">Masofaviy ishlar</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">$500-3000</div>
            <div className="text-sm text-gray-600">Maosh diapazoni</div>
          </div>
        </div>
      </div>
    </div>
  )
}