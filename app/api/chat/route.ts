import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    console.log('Received message:', message)
    console.log('Gemini API Key exists:', !!process.env.GEMINI_API_KEY)

    // Try to use Gemini AI
    try {
      const { GoogleGenerativeAI } = await import('@google/generative-ai')
      
      if (!process.env.GEMINI_API_KEY) {
        throw new Error('Gemini API key not found')
      }

      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

      const prompt = `
Siz professional kasb maslahatchi va karyera ekspertisiz. Foydalanuvchi bilan o'zbek tilida suhbatlashing va har doim turli xil, foydali maslahatlar bering.

Foydalanuvchi savoli: "${message}"

MUHIM: Har safar yangi va boshqacha javob bering. Takrorlanmang!

Quyidagilarni hisobga oling:
- Kasb tanlash va rivojlanish
- O'zbekiston ish bozori haqiqatlari
- Zamonaviy texnologiyalar va trendlar
- Amaliy maslahatlar va yo'l xaritalari
- Shaxsiy rivojlanish usullari

Javobni qisqa, aniq va foydali qiling. Emoji va formatlash ishlatishingiz mumkin.
      `

      console.log('Sending request to Gemini...')
      
      const result = await model.generateContent(prompt)
      const response = await result.response
      const text = response.text()

      console.log('Gemini response received:', text.substring(0, 100) + '...')

      return NextResponse.json({ 
        response: text,
        source: 'gemini_ai'
      })

    } catch (aiError) {
      console.error('Gemini AI error:', aiError)
      
      // Use enhanced fallback with variety
      const fallbackResponse = getEnhancedFallbackResponse(message)
      
      return NextResponse.json({ 
        response: fallbackResponse,
        source: 'fallback',
        error: typeof aiError === 'object' && aiError && 'message' in aiError ? (aiError as any).message : String(aiError)
      })
    }

  } catch (error) {
    console.error('API error:', error)
    
    return NextResponse.json(
      { error: 'Server xatosi yuz berdi' },
      { status: 500 }
    )
  }
}

// Enhanced fallback with variety
let responseCounter = 0
const usedResponses = new Set()

function getEnhancedFallbackResponse(message: string): string {
  const msg = message?.toLowerCase() || ''
  responseCounter++
  
  // IT soha uchun turli javoblar
  if (msg.includes('dasturchi') || msg.includes('it') || msg.includes('kod') || msg.includes('boshlash')) {
    const itResponses = [
      `� **IT sohasida muvaffaqiyat sirlari:**

**📋 Boshlang'ich yo'nalishlar:**
• **Frontend:** React, Vue.js, Angular o'rganing
• **Backend:** Node.js, Python, Java ni tanlang
• **Mobile:** Flutter yoki React Native bilan boshlang
• **Data Science:** Python + SQL + Machine Learning

**🎯 2024-yil uchun eng talab qilinadigan:**
• Cloud Computing (AWS, Azure)
• AI/ML dasturlash
• Cybersecurity
• Blockchain texnologiyalari

**📊 O'zbekistonda eng ko'p ish beruvchilar:**
• EPAM, Andoza, Humans, Iman
• Startup'lar va outsourcing kompaniyalar
• Bank va telekom sektorlari`,

      `🚀 **IT karyerasini tezkor boshlash:**

**⚡ 6 oyda junior bo'lish:**
1. **1-2 oy:** HTML, CSS, JavaScript asoslari
2. **3-4 oy:** React yoki Vue.js frameworklari  
3. **5-6 oy:** Backend API'lar va database
4. **Har doim:** Git, terminal, debugging

**💡 Amaliy maslahatlar:**
• Har kuni 2-3 soat kod yozing
• GitHub'da real loyihalar joylashtiring
• Stack Overflow va dev forums'da faol bo'ling
• Meetup va IT hodisalarga boring

**🎖️ Sertifikatlar:**
• Google IT Support Certificate
• AWS Cloud Practitioner
• Microsoft Azure Fundamentals`,

      `📈 **IT sohasida maosh oshirish yo'llari:**

**💰 Junior'dan Senior'gacha:**
• **0-1 yil:** $300-600 (Portfollio muhim)
• **1-3 yil:** $600-1200 (Frameworks master)
• **3-5 yil:** $1200-2500 (Architecture bilimi)
• **5+ yil:** $2500+ (Team lead, mentoring)

**� Premium skills:**
• DevOps va CI/CD
• System Design va Architecture
• Team leadership va mentoring
• Business understanding

**🌟 Freelancing imkoniyatlari:**
• Upwork, Fiverr orqali xorij mijozlari
• O'zbek startup'larga yordam
• E-commerce platformalar yaratish`
    ]
    
    return getRandomResponse(itResponses, 'it')
  }

  // Test natijalari uchun turli javoblar
  if (msg.includes('test') || msg.includes('shaxsiyat') || msg.includes('iq') || msg.includes('natija')) {
    const testResponses = [
      `🧠 **Test natijalarini chuqur tahlil:**

**Big Five shaxsiyat modeli:**
• **Yuqori Extraversion:** Sales, PR, HR sohalari
• **Yuqori Conscientiousness:** Project management, audit
• **Yuqori Openness:** Kreativ sohalar, R&D
• **Yuqori Agreeableness:** Tibbiyot, ta'lim, NGO
• **Past Neuroticism:** Stress muhitlari, leadership

**🎯 IQ va kasb mos kelishi:**
• **120+ IQ:** Research, analytics, strategic planning
• **110-120:** Engineering, programming, management
• **100-110:** Sales, customer service, operations`,

      `📊 **Test natijalarini career matching uchun:**

**Shaxsiyat + kasb kombinatsiyasi:**
• **Introvert + Analytical:** Data Science, Backend dev
• **Extrovert + Creative:** UX/UI design, Marketing
• **Detail-oriented:** QA testing, Accounting, Legal
• **Big picture thinker:** Product management, Strategy

**🔍 O'z kuchli tomonlaringizni aniqlang:**
• Natural talentlar vs O'rganilgan skills
• Stress ostida performance
• Team'da yoki individual ishlash
• Long-term vs Short-term thinking`,

      `💡 **Test natijalaridan foydalanish strategiyasi:**

**Karyera rivojlanish uchun:**
1. **Strengths:** Kuchli tomonlarni maksimal ishlatish
2. **Weaknesses:** Kamchiliklarni yaxshilash yoki delegatsiya
3. **Opportunities:** Bozordagi imkoniyatlarni izlash
4. **Threats:** Risklar va alternativ rejalar

**🎨 Kreativlik vs Analytik:**
• Yuqori kreativlik: Design, Content, Innovation
• Yuqori analitik: Finance, Engineering, Research
• Ikkalasi ham: Product design, Architecture`
    ]
    
    return getRandomResponse(testResponses, 'test')
  }

  // Maosh haqida turli javoblar  
  if (msg.includes('maosh') || msg.includes('oylik') || msg.includes('pul') || msg.includes('daromad')) {
    const salaryResponses = [
      `💰 **2024-yil maosh trendlari O'zbekistonda:**

**🔥 Eng yuqori maoshli sohalar:**
• **IT:** $500-5000 (tajribaga qarab)
• **Oil & Gas:** $800-3000
• **Banking:** $400-2500
• **Telecommunications:** $300-2000

**� Tez o'sayotgan sohalar:**
• E-commerce va Digital marketing
• Renewable energy  
• EdTech va HealthTech
• Logistics va Supply chain`,

      `🚀 **Maoshni 2x oshirish strategiyasi:**

**💼 Skill upgrading:**
• English - +30% maosh bonus
• Cloud certifications - +40-60%
• Leadership skills - +50%
• Domain expertise - +25%

**� Remote work imkoniyatlari:**
• Xorijiy kompaniyalar uchun
• Timezone farqi muammosi yo'q
• USD/EUR valyutasida maosh
• Global experience`,

      `📊 **Soha bo'yicha maosh statistika:**

**Tech positions:**
• DevOps Engineer: $1000-4000
• AI/ML Engineer: $1200-5000  
• Product Manager: $800-3000
• UX/UI Designer: $500-2500

**Non-tech leadership:**
• Sales Director: $1000-3000
• Marketing Head: $800-2500
• Operations Manager: $600-2000
• HR Director: $500-1800`
    ]
    
    return getRandomResponse(salaryResponses, 'salary')
  }

  // Default responses
  const defaultResponses = [
    `� **Salom! Kasb maslahatchi sifatida sizga yordam beraman.**

Bugun qanday mavzu bo'yicha gaplashamiz?

**🔥 Popular mavzular:**
• Karyera o'zgartirish
• Skill development rejalar  
• Industry trends 2024
• Remote work imkoniyatlari
• Startup vs Corporate tanlov`,

    `💡 **Professional rivojlanish bo'yicha maslahatlar:**

**📚 Continuous learning:**
• Har oy yangi skill o'rganing
• Industry news'larni kuzatib boring
• Networking eventlarga boring
• Mentor toping yoki mentor bo'ling

Qaysi sohada o'zingizni rivojlantirishni xohlaysiz?`,

    `🎯 **Karyera maqsadlarini belgilash:**

**SMART goals methodology:**
• **Specific:** Aniq maqsad
• **Measurable:** O'lchanadigan 
• **Achievable:** Erishsa bo'ladigan
• **Relevant:** Muhim
• **Time-bound:** Vaqt chegarasi

Sizning 1 yillik karyera maqsadingiz nima?`
  ]
  
  return getRandomResponse(defaultResponses, 'default')
}

function getRandomResponse(responses: string[], category: string): string {
  const key = `${category}_${responseCounter}`
  
  // Avoid same response for same category
  let availableResponses = responses.filter((_, index) => 
    !usedResponses.has(`${category}_${index}`)
  )
  
  if (availableResponses.length === 0) {
    // Reset if all used
    Array.from(usedResponses).forEach(used => {
      if ((used as string).startsWith(category)) {
        usedResponses.delete(used)
      }
    })
    availableResponses = responses
  }
  
  const randomIndex = Math.floor(Math.random() * availableResponses.length)
  const selectedResponse = availableResponses[randomIndex]
  
  // Mark as used
  const originalIndex = responses.indexOf(selectedResponse)
  usedResponses.add(`${category}_${originalIndex}`)
  
  return selectedResponse
}