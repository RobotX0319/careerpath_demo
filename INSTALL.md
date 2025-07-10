# CareerPath Demo - O'rnatish ko'rsatmalari

## 1. Dependencies o'rnatish

Terminal ochib, loyiha papkasiga o'ting:
```bash
cd c:\Users\user\Desktop\CareerPath\careerpath-demo
```

Keyin barcha dependencies'larni o'rnating:
```bash
npm install
```

## 2. Agar npm install ishlamasa

Package'larni alohida o'rnating:
```bash
npm install @google/generative-ai@latest
npm install @supabase/supabase-js@latest  
npm install resend@latest
npm install next@latest react@latest react-dom@latest
npm install -D typescript @types/node @types/react @types/react-dom
npm install -D tailwindcss postcss autoprefixer
```

## 3. TailwindCSS sozlash

```bash
npx tailwindcss init -p
```

## 4. Loyihani ishga tushirish

```bash
npm run dev
```

## 5. Agar hali ham xatolik bo'lsa

Node.js versiyasini tekshiring:
```bash
node --version
npm --version
```

Node.js 18+ versiyasi kerak.

## 6. Cache tozalash

```bash
npm cache clean --force
rm -rf node_modules
rm package-lock.json
npm install
```

Bu amallardan keyin barcha xatoliklar tuzaladi.