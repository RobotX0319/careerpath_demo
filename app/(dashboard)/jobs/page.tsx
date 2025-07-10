export default function JobsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Ish o'rinlari</h1>
        <p className="text-gray-600 mt-2">
          Sizga mos ish o'rinlarini toping va ariza qoldiring
        </p>
      </div>

      {/* Filter & Search */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <input 
              type="text" 
              placeholder="Ish nomi yoki kalit so'z..."
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <select className="w-full px-3 py-2 border rounded-md">
              <option>Barcha sohalar</option>
              <option>IT</option>
              <option>Marketing</option>
              <option>Ta'lim</option>
              <option>Tibbiyot</option>
            </select>
          </div>
          <div>
            <select className="w-full px-3 py-2 border rounded-md">
              <option>Ish turi</option>
              <option>Office</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
          </div>
          <div>
            <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90">
              Qidirish
            </button>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">🤖 Sizga tavsiya qilinadigan ishlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Frontend Developer",
              company: "TechCorp",
              salary: "$800-1500",
              location: "Toshkent",
              type: "Remote",
              match: "95%"
            },
            {
              title: "React Developer", 
              company: "StartupHub",
              salary: "$600-1200",
              location: "Toshkent",
              type: "Hybrid",
              match: "87%"
            },
            {
              title: "Full Stack Developer",
              company: "DigitalAgency", 
              salary: "$1000-2000",
              location: "Toshkent",
              type: "Office",
              match: "82%"
            }
          ].map((job, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{job.title}</h3>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                  {job.match} mos
                </span>
              </div>
              <p className="text-gray-600 mb-2">{job.company}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                <span>{job.salary}</span>
                <span>{job.location}</span>
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                  {job.type}
                </span>
              </div>
              <button className="w-full bg-primary text-white py-2 rounded text-sm hover:bg-primary/90">
                Ariza berish
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* All Jobs */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Barcha ish o'rinlari</h2>
        <div className="space-y-4">
          {[
            {
              title: "UI/UX Designer",
              company: "Creative Studio",
              salary: "$500-1000",
              location: "Toshkent",
              type: "Office",
              posted: "2 kun oldin"
            },
            {
              title: "Marketing Manager",
              company: "BusinessCorp",
              salary: "$400-800", 
              location: "Samarqand",
              type: "Hybrid",
              posted: "1 hafta oldin"
            },
            {
              title: "Python Developer",
              company: "DataTech",
              salary: "$700-1400",
              location: "Toshkent", 
              type: "Remote",
              posted: "3 kun oldin"
            },
            {
              title: "English Teacher",
              company: "Language Center",
              salary: "$300-600",
              location: "Toshkent",
              type: "Office", 
              posted: "5 kun oldin"
            }
          ].map((job, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span>💰 {job.salary}</span>
                    <span>📍 {job.location}</span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                      {job.type}
                    </span>
                    <span>🕒 {job.posted}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10">
                    Batafsil
                  </button>
                  <button 
                    className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
                    onClick={async () => {
                      // Send application emails
                      try {
                        await fetch('/api/email', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            type: 'job_application',
                            data: {
                              applicantEmail: 'demo@example.com',
                              employerEmail: 'hr@company.com',
                              jobTitle: job.title,
                              applicantName: 'Demo User'
                            }
                          })
                        })
                      } catch (error) {
                        console.error('Email error:', error)
                      }
                      
                      alert('Ariza yuborildi! Email xabarlari yuborildi.')
                    }}
                  >
                    Ariza berish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            Ko'proq yuklash
          </button>
        </div>
      </div>
    </div>
  )
}