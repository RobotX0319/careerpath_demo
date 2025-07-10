import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export const gemini = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

export async function generateCareerGuidance(userProfile: {
  personalityResults?: any
  iqResults?: any
  interests?: string[]
  skills?: string[]
  educationLevel?: string
}) {
  const prompt = `
    Siz kasb yo'nalishi bo'yicha maslahatchi siz. Quyidagi ma'lumotlar asosida foydalanuvchiga mos kasb tavsiya qiling:

    Shaxsiyat testi natijalari: ${JSON.stringify(userProfile.personalityResults || {})}
    IQ testi natijalari: ${JSON.stringify(userProfile.iqResults || {})}
    Qiziqishlari: ${userProfile.interests?.join(', ') || 'Kiritilmagan'}
    Ko'nikmalari: ${userProfile.skills?.join(', ') || 'Kiritilmagan'}
    Ta'lim darajasi: ${userProfile.educationLevel || 'Kiritilmagan'}

    Iltimos, quyidagi formatda javob bering:
    1. 3-5 ta mos kasb tavsiyasi
    2. Har bir kasb uchun qisqa tavsif
    3. Zarur ko'nikmalar
    4. Karyera rivojlanish yo'li
    5. Oylik maosh diapazoni (USD)

    Javobni o'zbek tilida bering.
  `

  try {
    const result = await gemini.generateContent(prompt)
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error('Gemini API error:', error)
    // Fallback demo response
    return `
      Sizning profil ma'lumotlaringiz asosida quyidagi kasb tavsiyalarini beramiz:

      1. Dasturchi (IT)
      - Tavsif: Web va mobil ilovalar yaratish
      - Zarur ko'nikmalar: JavaScript, React, Python
      - Maosh: $500-3000
      - Rivojlanish: Frontend -> Fullstack -> Senior

      2. Marketing menejeri
      - Tavsif: Mahsulot targ'iboti va strategiya
      - Zarur ko'nikmalar: Ijodkorlik, tahlil, muloqot
      - Maosh: $400-2000
      - Rivojlanish: Specialist -> Manager -> Director

      3. Ma'lumotlar olimi
      - Tavsif: Big Data tahlili va insights
      - Zarur ko'nikmalar: Python, SQL, statistika
      - Maosh: $800-4000
      - Rivojlanish: Junior -> Senior -> Lead
    `
  }
}

export async function analyzeUserInterests(chatHistory: string[]) {
  const prompt = `
    Quyidagi suhbat tarixidan foydalanuvchining qiziqishlari, ko'nikmalari va bilim darajasini tahlil qiling:

    Suhbat tarixi:
    ${chatHistory.join('\n')}

    Quyidagi JSON formatda javob bering:
    {
      "interests": ["qiziqish1", "qiziqish2", ...],
      "skills": ["ko'nikma1", "ko'nikma2", ...],
      "knowledge_level": {
        "technology": "boshlang'ich/o'rta/yuqori",
        "business": "boshlang'ich/o'rta/yuqori",
        "creativity": "boshlang'ich/o'rta/yuqori"
      }
    }
  `

  try {
    const result = await gemini.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    
    // Try to parse JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0])
    }
    
    return {
      interests: ["texnologiya", "ijodkorlik", "muammo hal qilish"],
      skills: ["dasturlash", "dizayn", "tahlil"],
      knowledge_level: {
        technology: "o'rta",
        business: "boshlang'ich", 
        creativity: "yuqori"
      }
    }
  } catch (error) {
    console.error('Error analyzing interests:', error)
    return {
      interests: ["texnologiya", "ijodkorlik", "muammo hal qilish"],
      skills: ["dasturlash", "dizayn", "tahlil"],
      knowledge_level: {
        technology: "o'rta",
        business: "boshlang'ich", 
        creativity: "yuqori"
      }
    }
  }
}