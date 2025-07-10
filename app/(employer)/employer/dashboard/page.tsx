"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function EmployerDashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Ish beruvchi paneli</h1>
        <p className="text-gray-600 mt-2">
          Kompaniya ma'lumotlari va ish o'rinlarini boshqaring
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Faol ish o'rinlari</CardTitle>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-50 text-blue-600">
              <span className="text-lg">💼</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-gray-600 mt-1">+2 oxirgi hafta</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Arizalar</CardTitle>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-50 text-green-600">
              <span className="text-lg">📝</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-gray-600 mt-1">15 ta yangi</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Intervyu</CardTitle>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-purple-50 text-purple-600">
              <span className="text-lg">👥</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-600 mt-1">Bu hafta</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ishga qabul</CardTitle>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-orange-50 text-orange-600">
              <span className="text-lg">✅</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-gray-600 mt-1">Bu oy</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-3">➕</span>
              Yangi ish o'rni
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Yangi vakansiya e'lon qiling va nomzodlarni jalb qiling
            </p>
            <Button 
              onClick={() => window.location.href = '/employer/jobs/new'}
              className="w-full"
            >
              Ish o'rni qo'shish
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-3">👥</span>
              Nomzodlarni ko'rish
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Ariza bergan nomzodlarni ko'rib chiqing va baxolang
            </p>
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/employer/candidates'}
              className="w-full"
            >
              Nomzodlar
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-3">📊</span>
              Hisobotlar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Ish o'rinlari va nomzodlar bo'yicha statistika
            </p>
            <Button 
              variant="outline"
              className="w-full"
            >
              Hisobotlar
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>So'nggi arizalar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Aziz Karimov", position: "Frontend Developer", time: "10 daqiqa oldin" },
                { name: "Malika Tosheva", position: "UI/UX Designer", time: "1 soat oldin" },
                { name: "Bobur Aliev", position: "Backend Developer", time: "2 soat oldin" },
                { name: "Nodira Qosimova", position: "Project Manager", time: "3 soat oldin" }
              ].map((application, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{application.name}</p>
                    <p className="text-sm text-gray-600">{application.position}</p>
                  </div>
                  <div className="text-xs text-gray-500">
                    {application.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Faol ish o'rinlari</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Senior React Developer", applications: 15, views: 234 },
                { title: "Product Manager", applications: 8, views: 156 },
                { title: "UI/UX Designer", applications: 12, views: 189 },
                { title: "DevOps Engineer", applications: 6, views: 98 }
              ].map((job, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{job.title}</p>
                    <p className="text-sm text-gray-600">{job.applications} ariza • {job.views} ko'rish</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Boshqarish
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}