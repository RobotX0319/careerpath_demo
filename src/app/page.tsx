import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Karyerangizni boshlang
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            CareerPath platformasi orqali o'zingizga mos ish topish, ko'nikmalaringizni rivojlantirish va professional tarmoq qurishingiz mumkin.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Ro'yxatdan o'tish
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Kirish
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Ish topish</h3>
              <p className="text-gray-600">
                Minglab ish e'lonlari orasidan o'zingizga mos bo'lganini toping
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">Ta'lim olish</h3>
              <p className="text-gray-600">
                Kasbiy ko'nikmalaringizni rivojlantiring va sertifikat oling
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Tarmoq qurish</h3>
              <p className="text-gray-600">
                Professional jamoa bilan bog'laning va tajriba almashing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}