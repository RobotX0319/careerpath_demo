import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🎯</span>
              <h1 className="text-2xl font-bold text-primary">CareerPath</h1>
            </div>
            <div className="space-x-4">
              <Link href="/login">
                <button className="btn btn-outline">Kirish</button>
              </Link>
              <Link href="/register">
                <button className="btn btn-primary">Ro'yxatdan o'tish</button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900">
            O'zingiz uchun mukammal karyera yo'lini aniqlang
          </h1>
          <p className="mt-2 text-xl text-gray-700">
            Sun'iy intellekt bilan testlardan o'tish, mos kasb yo'nalishini tanlash va professional rivojlanish
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/register" className="btn btn-primary btn-lg btn-rounded">
              Boshlaymiz 🚀
            </Link>
            <Link href="/login" className="btn btn-secondary btn-lg btn-rounded">
              Kirish
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-lg rounded-xl">
            <CardHeader className="bg-white rounded-t-xl">
              <div className="text-4xl mb-4">🧠</div>
              <CardTitle>Shaxsiyat testi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Big Five shaxsiyat modeli asosida o'zingizni yaxshiroq tanishtiring
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-xl">
            <CardHeader className="bg-white rounded-t-xl">
              <div className="text-4xl mb-4">🤖</div>
              <CardTitle>AI maslahatchi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Sun'iy intellekt yordamida kasb tavsiyalari va yo'l xaritasi oling
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-xl">
            <CardHeader className="bg-white rounded-t-xl">
              <div className="text-4xl mb-4">💼</div>
              <CardTitle>Ish topish</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Sizga mos ish o'rinlarini toping va ariza qoldiring
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Statistics Section */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex divide-x divide-gray-200">
              <div className="flex-1 py-6 text-center">
                <div className="text-4xl font-extrabold text-blue-600">10+</div>
                <div className="mt-1 text-sm font-medium text-gray-500">Kasb yo'nalishlari</div>
              </div>
              <div className="flex-1 py-6 text-center">
                <div className="text-4xl font-extrabold text-green-600">60+</div>
                <div className="mt-1 text-sm font-medium text-gray-500">Test savollari</div>
              </div>
              <div className="flex-1 py-6 text-center">
                <div className="text-4xl font-extrabold text-purple-600">AI</div>
                <div className="mt-1 text-sm font-medium text-gray-500">Maslahatchi</div>
              </div>
              <div className="flex-1 py-6 text-center">
                <div className="text-4xl font-extrabold text-orange-500">100%</div>
                <div className="mt-1 text-sm font-medium text-gray-500">Bepul</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 CareerPath Demo. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  )
}