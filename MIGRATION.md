# Migration Guide - Eski loyihadan yangi loyihaga o'tish

## 1. Environment variables ko'chirish

Eski `.env.local` faylini yangi loyihaga ko'chiring:

```bash
# Bu faylni: c:\Users\user\Desktop\CareerPath\careerpath-demo\.env.local
# Bu joyga ko'chiring: c:\Users\user\Desktop\CareerPath\careerpath-demo\careerpath-new\.env.local
```

## 2. Dependencies qo'shish

Yangi loyihaga kirrib dependencies o'rnating:

```bash
cd c:\Users\user\Desktop\CareerPath\careerpath-demo\careerpath-new

npm install @google/generative-ai @supabase/supabase-js resend
```

## 3. Fayllarni ko'chirish

Quyidagi fayllarni eski loyihadan yangi loyihaga ko'chiring:

### src/components/
- `src/components/ui/` - Barcha UI komponentlar
- `src/components/auth/` - Auth komponentlar  
- `src/components/dashboard/` - Dashboard komponentlar
- `src/components/tests/` - Test komponentlar
- `src/components/chat/` - Chat komponentlar

### app/ struktura
- `app/(auth)/` - Auth sahifalar
- `app/(dashboard)/` - Dashboard sahifalar  
- `app/(employer)/` - Employer sahifalar
- `app/api/` - API routes

### src/lib/
- `src/lib/gemini.ts` - AI konfiguratsiya
- `src/lib/resend.ts` - Email konfiguratsiya
- `src/lib/supabase/` - Database konfiguratsiya
- `src/lib/utils.ts` - Utility functions

### data/
- `data/careers.json` - Kasb ma'lumotlari
- `data/personality-questions.json` - Test savollari
- `data/iq-questions.json` - IQ test

### Root fayllar
- `README.md` - Loyiha hujjatlari
- `next.config.js` - Next.js konfiguratsiya

## 4. Package.json yangilash

Dependencies ni qo'shing va script'larni tekshiring.

## 5. Test qilish

```bash
npm run dev
```

Bu jarayon orqali barcha ishlar saqlanadi va yangi loyiha to'g'ri ishlaydi!