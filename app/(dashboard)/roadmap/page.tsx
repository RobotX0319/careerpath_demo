export default function RoadmapPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Karyera yo'l xaritasi</h1>
        <p className="text-gray-600 mt-2">
          Tanlagan kasbingiz bo'yicha batafsil rivojlanish yo'li
        </p>
      </div>

      {/* Demo Roadmap */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-primary mb-2">Dasturchi</h2>
          <p className="text-gray-600">Sizning tanlangan kasb yo'nalishi</p>
        </div>

        <div className="space-y-6">
          {/* Phase 1 */}
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 bg-green-500 rounded-full text-white text-xs flex items-center justify-center mr-3">✓</div>
              <h3 className="text-lg font-semibold">1-bosqich: Asoslar (1-3 oy)</h3>
            </div>
            <ul className="text-gray-600 space-y-1 ml-9">
              <li>• Dasturlash asoslarini o'rganish</li>
              <li>• HTML, CSS, JavaScript</li>
              <li>• Git va version control</li>
              <li>• Birinchi loyihalar yaratish</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center mr-3">2</div>
              <h3 className="text-lg font-semibold">2-bosqich: Rivojlanish (3-6 oy)</h3>
            </div>
            <ul className="text-gray-600 space-y-1 ml-9">
              <li>• React yoki Vue.js framework</li>
              <li>• Backend development (Node.js)</li>
              <li>• Ma'lumotlar bazasi (SQL)</li>
              <li>• Portfolio yaratish</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="border-l-4 border-yellow-500 pl-6">
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 bg-yellow-500 rounded-full text-white text-xs flex items-center justify-center mr-3">3</div>
              <h3 className="text-lg font-semibold">3-bosqich: Amaliyot (6-12 oy)</h3>
            </div>
            <ul className="text-gray-600 space-y-1 ml-9">
              <li>• Real loyihalarda ishlash</li>
              <li>• Internship yoki Junior pozitsiya</li>
              <li>• Jamoada ishlash ko'nikmalari</li>
              <li>• Murakkab loyihalar</li>
            </ul>
          </div>

          {/* Phase 4 */}
          <div className="border-l-4 border-gray-400 pl-6">
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 bg-gray-400 rounded-full text-white text-xs flex items-center justify-center mr-3">4</div>
              <h3 className="text-lg font-semibold">4-bosqich: Professional (1-2 yil)</h3>
            </div>
            <ul className="text-gray-600 space-y-1 ml-9">
              <li>• Senior developer darajasiga erishish</li>
              <li>• Loyiha boshqaruvi</li>
              <li>• Mentoring va o'qitish</li>
              <li>• Ixtisoslashtirish tanlash</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-4 bg-primary/5 rounded-lg">
          <h4 className="font-semibold text-primary mb-2">Tavsiyalar:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Har kuni kamida 2-3 soat dasturlash bilan shug'ullaning</li>
            <li>• GitHub'da faol bo'ling va kodlaringizni ulashing</li>
            <li>• Dasturchilar hamjamiyatiga qo'shiling</li>
            <li>• Doimiy o'rganishni davom ettiring</li>
          </ul>
        </div>
      </div>
    </div>
  )
}