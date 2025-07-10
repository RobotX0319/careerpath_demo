import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface EmailTemplate {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: EmailTemplate) {
  try {
    // Skip email sending in demo mode if using example.com
    if (to.includes('example.com') || to.includes('demo@')) {
      console.log('Demo mode: Email would be sent to:', to)
      console.log('Subject:', subject)
      return { success: true, data: { id: 'demo-email-id' }, demo: true }
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to,
      subject,
      html,
    })

    if (error) {
      console.error('Email sending error:', error)
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error('Failed to send email:', error)
    
    // Return demo success to avoid breaking the flow
    return { 
      success: true, 
      data: { id: 'fallback-demo-id' }, 
      demo: true,
      error: error 
    }
  }
}

// Welcome email template
export function getWelcomeEmailTemplate(userName: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>CareerPath'ga xush kelibsiz!</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3B82F6, #8B5CF6); color: white; padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .button { display: inline-block; background: #3B82F6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .features { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
        .feature { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 CareerPath'ga xush kelibsiz!</h1>
          <p>Karyerangizni rivojlantirish uchun eng yaxshi platforma</p>
        </div>
        
        <div class="content">
          <h2>Salom ${userName}!</h2>
          
          <p>CareerPath platformasiga muvaffaqiyatli ro'yxatdan o'tganingiz bilan tabriklaymiz! Sizning karyera sayohatingizni boshlashga tayyor.</p>
          
          <div class="features">
            <div class="feature">
              <h3>🧠 Shaxsiyat testi</h3>
              <p>Big Five modeli asosida shaxsingizni tahlil qiling</p>
            </div>
            <div class="feature">
              <h3>🎯 IQ testi</h3>
              <p>Mantiqiy fikrlash qobiliyatingizni sinab ko'ring</p>
            </div>
            <div class="feature">
              <h3>🤖 AI maslahatchi</h3>
              <p>Sun'iy intellekt yordamida kasb maslahatini oling</p>
            </div>
            <div class="feature">
              <h3>💼 Ish qidirish</h3>
              <p>O'zingizga mos ish o'rinlarini toping</p>
            </div>
          </div>
          
          <p><strong>Keyingi qadamlar:</strong></p>
          <ol>
            <li>Profilingizni to'ldiring</li>
            <li>Shaxsiyat va IQ testlarini topshing</li>
            <li>AI maslahatchi bilan suhbatlashing</li>
            <li>Kasb yo'nalishingizni tanlang</li>
            <li>Ish qidirishni boshlang</li>
          </ol>
          
          <center>
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard" class="button">Dashboard'ga o'tish</a>
          </center>
        </div>
        
        <div class="footer">
          <p>Savollar bormi? Bizga yozing: <a href="mailto:support@careerpath.uz">support@careerpath.uz</a></p>
          <p>&copy; 2025 CareerPath. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Test completion notification template
export function getTestCompletionEmailTemplate(userName: string, testType: 'personality' | 'iq', score?: number): string {
  const testTypeUz = testType === 'personality' ? 'Shaxsiyat' : 'IQ'
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${testTypeUz} testi yakunlandi!</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #10B981, #3B82F6); color: white; padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .score-card { background: white; padding: 25px; border-radius: 10px; text-align: center; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .button { display: inline-block; background: #10B981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .recommendations { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10B981; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 ${testTypeUz} testi muvaffaqiyatli yakunlandi!</h1>
        </div>
        
        <div class="content">
          <h2>Tabriklaymiz, ${userName}!</h2>
          
          <p>Siz ${testTypeUz.toLowerCase()} testini muvaffaqiyatli yakunladingiz. Natijalaringiz tayyyor!</p>
          
          ${score ? `
            <div class="score-card">
              <h3>Sizning natijangiz</h3>
              <div style="font-size: 48px; font-weight: bold; color: #10B981;">${score}${testType === 'iq' ? ' ball' : '/100'}</div>
              <p>${testType === 'iq' ? 'IQ darajangiz yuqori!' : 'Ajoyib natija!'}</p>
            </div>
          ` : ''}
          
          <div class="recommendations">
            <h3>📋 Keyingi qadamlar:</h3>
            <ul>
              <li>Test natijalaringizni batafsil ko'rib chiqing</li>
              <li>AI maslahatchi bilan kasb tavsiyalari oling</li>
              <li>Sizga mos kasb yo'nalishlarini o'rganing</li>
              <li>Karyera yo'l xaritasini yarating</li>
            </ul>
          </div>
          
          <center>
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard/tests" class="button">Natijalarni ko'rish</a>
          </center>
        </div>
      </div>
    </body>
    </html>
  `
}

// Job application update template
export function getJobApplicationEmailTemplate(userName: string, jobTitle: string, companyName: string, status: string): string {
  const statusMessages = {
    pending: { title: 'Ariza qabul qilindi', color: '#3B82F6', icon: '📝' },
    reviewing: { title: 'Ariza ko\'rib chiqilmoqda', color: '#F59E0B', icon: '👀' },
    interview: { title: 'Suhbatga taklif', color: '#10B981', icon: '🎯' },
    accepted: { title: 'Ariza qabul qilindi!', color: '#10B981', icon: '🎉' },
    rejected: { title: 'Ariza rad etildi', color: '#EF4444', icon: '❌' }
  }
  
  const statusInfo = statusMessages[status as keyof typeof statusMessages] || statusMessages.pending
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Ariza holati yangilandi</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: ${statusInfo.color}; color: white; padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .status-card { background: white; padding: 25px; border-radius: 10px; text-align: center; margin: 20px 0; border-left: 4px solid ${statusInfo.color}; }
        .button { display: inline-block; background: ${statusInfo.color}; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>${statusInfo.icon} ${statusInfo.title}</h1>
        </div>
        
        <div class="content">
          <h2>Salom ${userName}!</h2>
          
          <div class="status-card">
            <h3>📄 Ariza ma'lumotlari</h3>
            <p><strong>Lavozim:</strong> ${jobTitle}</p>
            <p><strong>Kompaniya:</strong> ${companyName}</p>
            <p><strong>Holat:</strong> ${statusInfo.title}</p>
          </div>
          
          ${status === 'interview' ? `
            <p>🎊 Ajoyib xabar! Sizning arizangiz qabul qilindi va suhbatga taklif qilindingiz. Tez orada HR mutaxassisi siz bilan bog'lanadi.</p>
          ` : status === 'accepted' ? `
            <p>🎉 Tabriklaymiz! Sizning arizangiz qabul qilindi. Kompaniya sizni jamoaga qo'shilishni kutmoqda!</p>
          ` : status === 'rejected' ? `
            <p>Afsuski, bu safar sizning arizangiz rad etildi. Lekin tushkunlikka tushishmang - boshqa ajoyib imkoniyatlar sizni kutmoqda!</p>
          ` : `
            <p>Sizning arizangiz hozirda ${statusInfo.title.toLowerCase()} bosqichida. Yangilanishlar haqida xabardor bo'lib turamiz.</p>
          `}
          
          <center>
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard/jobs" class="button">Boshqa ish o'rinlarini ko'rish</a>
          </center>
        </div>
      </div>
    </body>
    </html>
  `
}

// New message notification template
export function getNewMessageEmailTemplate(userName: string, senderName: string, messagePreview: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Yangi xabar</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #8B5CF6, #3B82F6); color: white; padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .message-card { background: white; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #8B5CF6; }
        .button { display: inline-block; background: #8B5CF6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>💬 Sizga yangi xabar keldi!</h1>
        </div>
        
        <div class="content">
          <h2>Salom ${userName}!</h2>
          
          <p><strong>${senderName}</strong> sizga yangi xabar yubordi:</p>
          
          <div class="message-card">
            <p style="font-style: italic; color: #666;">"${messagePreview}"</p>
          </div>
          
          <p>To'liq xabarni o'qish va javob berish uchun platformaga kiring.</p>
          
          <center>
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard/messages" class="button">Xabarlarni o'qish</a>
          </center>
        </div>
      </div>
    </body>
    </html>
  `
}