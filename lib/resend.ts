// Mock Resend functionality for demo
class MockResend {
  emails = {
    send: async (data: {
      from: string
      to: string
      subject: string
      html: string
    }) => {
      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      console.log('📧 Email sent:', {
        from: data.from,
        to: data.to,
        subject: data.subject
      })
      
      return {
        data: { id: 'mock-email-' + Date.now() },
        error: null
      }
    }
  }
}

export const resend = new MockResend()

// Email sending functions
export const sendEmail = async (data: {
  from: string
  to: string
  subject: string
  html: string
}) => {
  try {
    const result = await resend.emails.send(data)
    return { success: true, data: result.data }
  } catch (error) {
    return { success: false, error: error }
  }
}

export const sendWelcomeEmail = async (email: string, userName: string) => {
  return await sendEmail({
    from: 'CareerPath <noreply@careerpath.com>',
    to: email,
    subject: 'CareerPath\'ga xush kelibsiz!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">CareerPath'ga xush kelibsiz!</h1>
        <p>Hurmatli ${userName},</p>
        <p>CareerPath platformasida muvaffaqiyatli ro'yxatdan o'tdingiz.</p>
        <p>Omad tilaymiz!</p>
        <p>CareerPath jamoasi</p>
      </div>
    `
  })
}

export const sendTestCompletionEmail = async (email: string, userName: string, testType: string, score: number) => {
  return await sendEmail({
    from: 'CareerPath <noreply@careerpath.com>',
    to: email,
    subject: 'Test muvaffaqiyatli yakunlandi!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">Test muvaffaqiyatli yakunlandi!</h1>
        <p>Hurmatli ${userName},</p>
        <p>${testType === 'personality' ? 'Shaxsiyat' : 'IQ'} testini muvaffaqiyatli yakunladingiz.</p>
        <p><strong>Sizning natijangiz: ${score}%</strong></p>
        <p>CareerPath jamoasi</p>
      </div>
    `
  })
}

export const sendJobApplicationEmail = async (email: string, userName: string, jobTitle: string, company: string) => {
  return await sendEmail({
    from: 'CareerPath <noreply@careerpath.com>',
    to: email,
    subject: 'Ish o\'rniga murojaat yuborildi!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">Ish o'rniga murojaat yuborildi!</h1>
        <p>Hurmatli ${userName},</p>
        <p>"${jobTitle}" lavozimiga "${company}" kompaniyasida muvaffaqiyatli murojaat qildingiz.</p>
        <p>Omad tilaymiz!</p>
        <p>CareerPath jamoasi</p>
      </div>
    `
  })
}

export const sendNewMessageEmail = async (email: string, userName: string, senderName: string) => {
  return await sendEmail({
    from: 'CareerPath <noreply@careerpath.com>',
    to: email,
    subject: 'Yangi xabar!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">Yangi xabar!</h1>
        <p>Hurmatli ${userName},</p>
        <p>Sizga ${senderName} tomonidan yangi xabar keldi.</p>
        <p>CareerPath jamoasi</p>
      </div>
    `
  })
}