interface Career {
  id: string
  title: string
  description: string
  required_skills: string[]
  education: string
  salary_range: {
    min: number
    max: number
    currency: string
  }
  growth_rate: string
  category: string
}

interface CareerCardProps {
  career: Career
  onSelect?: (career: Career) => void
  isSelected?: boolean
}

export default function CareerCard({ career, onSelect, isSelected }: CareerCardProps) {
  return (
    <div 
      className={`bg-white rounded-lg border p-6 cursor-pointer transition-all hover:shadow-lg ${
        isSelected ? 'border-primary shadow-lg' : 'border-gray-200'
      }`}
      onClick={() => onSelect?.(career)}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{career.title}</h3>
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
            {career.category}
          </span>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-green-600">
            ${career.salary_range.min}-{career.salary_range.max}
          </div>
          <div className="text-sm text-gray-500">oylik</div>
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-3">{career.description}</p>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Zarur ko'nikmalar:</h4>
        <div className="flex flex-wrap gap-2">
          {career.required_skills.map((skill, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600">
        <div>
          <span className="font-semibold">Ta'lim:</span> {career.education}
        </div>
        <div className="text-green-600 font-semibold">
          ↗ {career.growth_rate} o'sish
        </div>
      </div>

      {isSelected && (
        <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
          <div className="text-sm text-primary font-medium">
            ✓ Tanlangan kasb
          </div>
        </div>
      )}
    </div>
  )
}