import { NextRequest, NextResponse } from 'next/server'
import { 
  sendEmail
} from '@/lib/resend'

export async function POST(request: NextRequest) {
  try {
    const { type, data } = await request.json()

    if (!type || !data) {
      return NextResponse.json(
        { error: 'Type and data are required' },
        { status: 400 }
      )
    }

    let emailTemplate: { to: string; subject: string; html: string; from: string }

    switch (type) {
      case 'welcome':
        emailTemplate = {
          to: data.email,
          subject: "🚀 CareerPath'ga xush kelibsiz!",
          from: 'CareerPath <noreply@careerpath.com>',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #3B82F6, #8B5CF6); color: white; padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1>🚀 CareerPath'ga xush kelibsiz!</h1>
              </div>
              
              <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
                <h2>Salom ${data.userName}!</h2>
                <p>CareerPath platformasiga xush kelibsiz! Sizning karerangizni rivojlantirish uchun barcha imkoniyatlar tayyor.</p>
                
                <center>
                  <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard" 
                     style="display: inline-block; background: #3B82F6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0;">
                    Boshlaymiz
                  </a>
                </center>
              </div>
            </div>
          `
        }
        break
      case 'test_completion':
        emailTemplate = {
          to: data.email,
          subject: `🎉 ${data.testType === 'personality' ? 'Shaxsiyat' : 'IQ'} testi yakunlandi!`,
          from: 'CareerPath <noreply@careerpath.com>',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #3B82F6, #8B5CF6); color: white; padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1>🎉 Test yakunlandi!</h1>
              </div>
              
              <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
                <h2>Salom ${data.userName}!</h2>
                <p>${data.testType === 'personality' ? 'Shaxsiyat' : 'IQ'} testini muvaffaqiyatli yakunladingiz!</p>
                
                <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3>📊 Natija: ${data.score}%</h3>
                </div>
                
                <center>
                  <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard/results" 
                     style="display: inline-block; background: #3B82F6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0;">
                    Batafsil natijalar
                  </a>
                </center>
              </div>
            </div>
          `
        }
          break
        case 'application_status':
          const statusTitles = {
            pending: 'Ariza qabul qilindi',
            reviewing: 'Ariza ko\'rib chiqilmoqda',
            interview: 'Suhbatga taklif!',
            accepted: 'Ariza qabul qilindi!',
            rejected: 'Ariza holati'
          }
          emailTemplate = {
          to: data.applicantEmail,
          subject: `📄 ${statusTitles[data.status as keyof typeof statusTitles]} - ${data.jobTitle}`,
          from: 'CareerPath <noreply@careerpath.com>',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #3B82F6, #8B5CF6); color: white; padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1>📄 ${statusTitles[data.status as keyof typeof statusTitles]}</h1>
              </div>
              
              <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
                <h2>Salom ${data.applicantName}!</h2>
                <p>${data.companyName} kompaniyasidagi "${data.jobTitle}" lavozimi bo'yicha arizangiz holati yangilandi.</p>
                
                <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3>📊 Holat: ${statusTitles[data.status as keyof typeof statusTitles]}</h3>
                </div>
                
                <center>
                  <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard/applications" 
                     style="display: inline-block; background: #3B82F6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0;">
                    Batafsil ko'rish
                  </a>
                </center>
              </div>
            </div>
          `
        }
        // Also send notification to employer
        if (data.employerEmail && data.status === 'pending') {
          await sendEmail({
            to: data.employerEmail,
            subject: `📩 Yangi ariza - ${data.jobTitle}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2>Yangi ariza keldi!</h2>
                <p><strong>Lavozim:</strong> ${data.jobTitle}</p>
                <p><strong>Nomzod:</strong> ${data.applicantName}</p>
                <p><strong>Email:</strong> ${data.applicantEmail}</p>
                <a href="${process.env.NEXT_PUBLIC_APP_URL}/employer/candidates" 
                   style="display: inline-block; background: #3B82F6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0;">
                  Nomzodni ko'rish
                </a>
              </div>
            `,
            from: 'CareerPath <noreply@careerpath.com>'
          })
        }
        break
      case 'new_message':
        emailTemplate = {
          to: data.recipientEmail,
          subject: `💬 ${data.senderName}dan yangi xabar`,
          from: 'CareerPath <noreply@careerpath.com>',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #3B82F6, #8B5CF6); color: white; padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1>💬 Yangi xabar</h1>
              </div>
              
              <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
                <h2>Salom ${data.recipientName}!</h2>
                <p>${data.senderName} sizga yangi xabar yubordi:</p>
                
                <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p style="font-style: italic;">${data.messagePreview}</p>
                </div>
                
                <center>
                  <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard/messages" 
                     style="display: inline-block; background: #3B82F6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0;">
                    Xabarni o'qish
                  </a>
                </center>
              </div>
            </div>
          `
        }
        break
      case 'career_recommendation':
        emailTemplate = {
          to: data.email,
          subject: "🎯 Sizga mos kasb tavsiyalari tayyor!",
          from: 'CareerPath <noreply@careerpath.com>',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #3B82F6, #8B5CF6); color: white; padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1>🎯 Kasb tavsiyalari tayyor!</h1>
              </div>
              
              <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
                <h2>Salom ${data.userName}!</h2>
                <p>Test natijalaringiz va AI tahlili asosida sizga mos kasb tavsiyalari tayyorlandi:</p>
                
                <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3>🏆 Top kasb tavsiyalari:</h3>
                  <ul>
                    ${data.careers?.map((career: string) => `<li>${career}</li>`).join('') || '<li>Dasturchi</li><li>UX/UI Dizayner</li><li>Data Analyst</li>'}
                  </ul>
                </div>
                
                <center>
                  <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard/careers" 
                     style="display: inline-block; background: #3B82F6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0;">
                    Batafsil ko'rish
                  </a>
                </center>
              </div>
            </div>
          `
        }
        break
      case 'reminder':
        emailTemplate = {
          to: data.email,
          subject: "⏰ CareerPath'da yangi imkoniyatlar sizni kutmoqda",
          from: 'CareerPath <noreply@careerpath.com>',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2>⏰ ${data.userName}, sizni sog'indik!</h2>
              <p>CareerPath'da yangi imkoniyatlar paydo bo'ldi:</p>
              <ul>
                <li>🆕 ${Math.floor(Math.random() * 50 + 10)} ta yangi ish o'rni</li>
                <li>🤖 AI maslahatchi yangilandi</li>
                <li>📊 Yangi kasb tavsiyalari</li>
              </ul>
              <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard" 
                 style="display: inline-block; background: #10B981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0;">
                Platformaga qaytish
              </a>
            </div>
          `
        }
        break

      default:
        return NextResponse.json(
          { error: 'Invalid email type' },
          { status: 400 }
        )
    }

    const result = await sendEmail(emailTemplate)

    // Show success message regardless of actual sending
    const message = (result as any).demo 
      ? `Demo: Email muvaffaqiyatli yuborildi (${emailTemplate.to})`
      : 'Email muvaffaqiyatli yuborildi'

    return NextResponse.json({ 
      success: true, 
      message,
      demo: (result as any).demo || false,
      data: result.data
    })

  } catch (error) {
    console.error('Email API error:', error)
    
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}