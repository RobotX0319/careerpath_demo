import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Karyerangizni rivojlantiring
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              AI yordamida kasb tanlash, shaxsiyat va IQ testlari, karyera yo'l xaritasi. 
              Eng mos kasb va ish o'rinlarini toping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Boshlaymiz 🚀
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Kirish
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platformaning xususiyatlari
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Karyerangizni rivojlantirish uchun zamonaviy texnologiyalar va AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">🧠</div>
                <CardTitle>Ilmiy testlar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Big Five shaxsiyat testi va IQ testlari orqali to'liq shaxsiy tahlil
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">🤖</div>
                <CardTitle>AI maslahatchi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gemini AI bilan kasb tanlash va karyera rivojlantirish bo'yicha maslahat
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">🎯</div>
                <CardTitle>Kasb tavsiyalari</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Test natijalari asosida sizga eng mos kasb yo'nalishlarini toping
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">💼</div>
                <CardTitle>Ish qidirish</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  AI yordamida sizga mos vakansiyalar va bir click'da ariza berish
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">📈</div>
                <CardTitle>Karyera yo'l xaritasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tanlangan kasb bo'yicha bosqichma-bosqich rivojlanish rejasi
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">💬</div>
                <CardTitle>Xabar almashish</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ish beruvchilar va boshqa foydalanuvchilar bilan to'g'ridan-to'g'ri aloqa
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Karyerangizni bugun boshlang!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Minglab odamlar CareerPath yordamida o'z karyeralarini rivojlantirmoqda
          </p>
          <Link href="/auth/register">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Bepul ro'yxatdan o'tish
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 CareerPath. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </footer>
    </div>
  )
}