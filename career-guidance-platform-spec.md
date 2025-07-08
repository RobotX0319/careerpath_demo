# AI-asoslangan Kasbiy Yo'naltirish Platformasi

## 📋 Mundarija
1. [Umumiy tavsif](#umumiy-tavsif)
2. [Foydalanuvchi turlari](#foydalanuvchi-turlari)
3. [Asosiy modullar](#asosiy-modullar)
4. [Admin panel](#admin-panel)
5. [Texnik arxitektura](#texnik-arxitektura)
6. [Monetizatsiya](#monetizatsiya)

---

## 🎯 Umumiy tavsif

**Platforma maqsadi:** Foydalanuvchilarning qobiliyatlarini AI yordamida aniqlab, ularga mos kasb taklif qilish, ta'lim yo'l xaritasi tuzish va ish beruvchilar bilan bog'lash.

**Asosiy xususiyatlar:**
- 🧠 Shaxsiyat va IQ testlari
- 🤖 Gemini AI integratsiyasi
- 🎓 Shaxsiy ta'lim yo'l xaritasi
- 💼 Ish beruvchilar bilan to'g'ridan-to'g'ri aloqa
- 👥 Professional hamjamiyat

---

## 👥 Foydalanuvchi turlari

### 1. Oddiy foydalanuvchi (Ish qidiruvchi)
- Testlar topshiradi
- Kasb tanlaydi
- Ta'lim oladi
- Ish qidiradi

### 2. Ish beruvchi
- E'lon joylashtiradi
- Nomzod qidiradi
- Arizalarni ko'rib chiqadi
- Intervyu o'tkazadi

### 3. Mentor/O'qituvchi
- Kurs yaratadi
- Maslahat beradi
- Progress kuzatadi

### 4. Administrator
- Platformani boshqaradi
- Ma'lumotlarni tahlil qiladi
- Foydalanuvchilarni moderatsiya qiladi

---

## 🔧 Asosiy modullar

### 1️⃣ Ro'yxatdan o'tish

**Oddiy foydalanuvchi:**
```
Email/Telefon → Tasdiqlash → Shaxsiy ma'lumotlar → Profil
```

**Ish beruvchi:**
```
Kompaniya ma'lumotlari → Hujjatlar → Verifikatsiya → Dashboard
```

### 2️⃣ Test moduli

**Shaxsiyat testi (Big Five):**
- 📊 60 ta savol
- ⏱️ 30 daqiqa
- 📈 5 ta asosiy ko'rsatkich

**IQ testi:**
- 🧩 40 ta savol
- ⏱️ 45 daqiqa
- 📏 70-140 ball diapazoni

**Natijalardan keyin:**
- Tajriba yozish oynasi
- Avtomatik resyume yaratish
- Kasb tavsiylari

### 3️⃣ Foydalanuvchi profili

```
┌─────────────────────────────┐
│       Profil rasmi          │
│       ID: #123456           │
├─────────────────────────────┤
│ 📊 Test natijalari          │
│ 💼 Tanlangan kasb           │
│ 🎓 Ta'lim progress          │
│ 📄 AI resyume               │
│ 🏆 Yutuqlar                 │
└─────────────────────────────┘
```

### 4️⃣ AI Chat (Gemini integratsiyasi)

**Funksiyalar:**
- 💬 Oddiy suhbat
- 🔍 Qiziqishlarni aniqlash
- 📚 Bilim darajasini test qilish
- 📊 Progress monitoring
- 🎯 Kasb maslahatlar

**AI bilim baholash jarayoni:**
```mermaid
Suhbat → Savollar → Tahlil → Daraja belgilash → Resyume yangilash
```

### 5️⃣ Kasb tanlash

**Tavsiya algoritmi asoslari:**
- Shaxsiyat test natijalari (40%)
- IQ test natijalari (20%)
- Qiziqishlar (20%)
- Bozor talabi (10%)
- Tajriba (10%)

**Har bir kasb uchun ko'rsatiladi:**
- 📝 To'liq tavsif
- 💰 Maosh diapazoni
- 📈 Rivojlanish istiqboli
- 🎓 Talab qilinadigan ta'lim
- ✅ "Shu kasb bilan davom etish" tugmasi

### 6️⃣ Yo'l xaritasi

```
Boshlang'ich → Asosiy → Ixtisoslashgan → Amaliyot → Sertifikat → Mutaxassis
    ↓            ↓           ↓              ↓           ↓            ↓
 [Kurslar]   [Kurslar]   [Kurslar]    [Portfolio]  [Imtihon]   [Mentor]
```

### 7️⃣ Ish beruvchi moduli

**E'lon berish:**
- Lavozim va tavsif
- Talab qilinadigan ko'nikmalar
- Maosh va lokatsiya
- AI yordamida e'lon yaratish

**Nomzod qidirish:**
- Ko'nikmalar bo'yicha filter
- AI matching (0-100%)
- Skill gap analysis

### 8️⃣ Messenger va hamjamiyat

**Do'stlarni topish:**
- 🔍 Qiziqishlar bo'yicha
- 💼 Kasb bo'yicha
- 📍 Joylashuv bo'yicha

**Chat funksiyalari:**
- 💬 Matnli xabarlar
- 🎤 Ovozli xabarlar
- 📎 Fayl almashish
- 👥 Guruh suhbatlari

---

## 🛡️ Admin panel

### Dashboard
```
┌────────────┬────────────┬────────────┐
│ 👥 Users   │ 💼 Jobs    │ 💰 Revenue │
│   125,847  │   3,421    │  $247,538  │
├────────────┼────────────┼────────────┤
│ 📈 Growth  │ 🎓 Courses │ 🤝 Matches │
│   +15.3%   │    847     │   1,234    │
└────────────┴────────────┴────────────┘
```

### Asosiy bo'limlar

**1. Analytics & Reports**
- Real-time statistika
- Foydalanuvchi demografiyasi
- Test natijalari tahlili
- Export (CSV, Excel, PDF)

**2. Foydalanuvchilar**
- Profil boshqaruvi
- Bloklash/ochish
- Ommaviy operatsiyalar
- Faoliyat tarixi

**3. Content Management**
- Test savollarini boshqarish
- Kasb katalogi
- Ta'lim resurslari
- AI model sozlamalari

**4. Moliyaviy modul**
- Subscription monitoring
- To'lovlar boshqaruvi
- Daromad hisobotlari
- Refund operatsiyalari

**5. Xavfsizlik**
- Login monitoring
- IP blocking
- Security alerts
- Audit logs

### Admin rollari
- 👑 Super Admin - To'liq huquqlar
- 📝 Content Manager - Kontent boshqaruvi
- 💬 Support Manager - Foydalanuvchi support
- 💰 Financial Manager - Moliyaviy operatsiyalar
- 🏢 HR Manager - Ish beruvchilar

---

## 💻 Texnik arxitektura

### Frontend
```
React.js + Next.js
     ↓
Material-UI / Tailwind CSS
     ↓
Redux Toolkit (State)
     ↓
Socket.io (Real-time)
```

### Backend
```
Node.js + Express.js
     ↓
PostgreSQL + Redis
     ↓
JWT Authentication
     ↓
AWS S3 (Files)
```

### AI Stack
- **Gemini AI API** - Chat va tahlil
- **Custom ML Models** - Kasb matching
- **NLP** - O'zbek tili uchun

### DevOps
- 🐳 Docker + Kubernetes
- 🔄 CI/CD Pipeline
- 📊 Monitoring (Prometheus)
- 📝 Logging (ELK Stack)

---

## 💰 Monetizatsiya

### Foydalanuvchilar uchun
| Plan | Narx | Xususiyatlar |
|------|------|--------------|
| Free | $0 | Asosiy funksiyalar |
| Premium | $9.99/oy | Qo'shimcha testlar, mentor |
| Pro | $19.99/oy | Unlimited AI, priority matching |

### Ish beruvchilar uchun
| Plan | Narx | Xususiyatlar |
|------|------|--------------|
| Starter | Free | 3 e'lon/oy |
| Professional | $99/oy | 10 e'lon + qidiruv |
| Enterprise | Custom | Unlimited + API |

---

## 📊 Asosiy KPI ko'rsatkichlari

- 📈 **MAU** - Oylik aktiv foydalanuvchilar
- 🎯 **Kasb konversiyasi** - Test → Kasb tanlash
- 💼 **Ishga joylashish** - Platformadan ish topganlar
- ⭐ **NPS** - Foydalanuvchi qoniqishi
- 💰 **MRR** - Oylik takroriy daromad

---

## 🚀 Kelajak rivojlanish

- 🥽 AR/VR virtual intervyu
- 🔗 Blockchain sertifikatlar
- 🤖 AI mentorlar
- 🌍 Xalqaro ekspansiya
- 🏢 B2B yechimlar