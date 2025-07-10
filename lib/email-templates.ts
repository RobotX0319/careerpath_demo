export const getWelcomeEmailTemplate = (userName: string) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #2563eb;">CareerPath'ga xush kelibsiz!</h1>
      <p>Hurmatli ${userName},</p>
      <p>CareerPath platformasida muvaffaqiyatli ro'yxatdan o'tdingiz. Endi siz:</p>
      <ul>
        <li>Shaxsiyat va IQ testlarini topshirishingiz</li>
        <li>AI maslahatchi bilan suhbatlashishingiz</li>
        <li>O'zingizga mos kasb yo'nalishlarini topishingiz</li>
        <li>Ish o'rinlarini qidirishingiz mumkin</li>
      </ul>
      <p>Omad tilaymiz!</p>
      <p>CareerPath jamoasi</p>
    </div>
  `
}

export const getTestCompletionEmailTemplate = (userName: string, testType: string, score: number) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #2563eb;">Test muvaffaqiyatli yakunlandi!</h1>
      <p>Hurmatli ${userName},</p>
      <p>${testType === 'personality' ? 'Shaxsiyat' : 'IQ'} testini muvaffaqiyatli yakunladingiz.</p>
      <p><strong>Sizning natijangiz: ${score}%</strong></p>
      <p>Test natijalaringiz asosida sizga mos kasb yo'nalishlari tavsiya qilinadi.</p>
      <p>Dashboard'da batafsil natijalarni ko'rishingiz mumkin.</p>
      <p>CareerPath jamoasi</p>
    </div>
  `
}

export const getJobApplicationEmailTemplate = (userName: string, jobTitle: string, company: string) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #2563eb;">Ish o'rniga murojaat yuborildi!</h1>
      <p>Hurmatli ${userName},</p>
      <p>"${jobTitle}" lavozimiga "${company}" kompaniyasida muvaffaqiyatli murojaat qildingiz.</p>
      <p>Sizning profilingiz ko'rib chiqiladi va tez orada javob beriladi.</p>
      <p>Omad tilaymiz!</p>
      <p>CareerPath jamoasi</p>
    </div>
  `
}

export const getNewMessageEmailTemplate = (userName: string, senderName: string) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #2563eb;">Yangi xabar!</h1>
      <p>Hurmatli ${userName},</p>
      <p>Sizga ${senderName} tomonidan yangi xabar keldi.</p>
      <p>Xabarni ko'rish uchun platformaga kiring.</p>
      <p>CareerPath jamoasi</p>
    </div>
  `
}