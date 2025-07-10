# Fayllarni yangi loyihaga ko'chirish buyruqlari

# 1. Yangi loyiha papkasiga o'tish
cd "c:\Users\user\Desktop\CareerPath\careerpath-demo\careerpath-new"

# 2. Dependencies o'rnatish
npm install @google/generative-ai @supabase/supabase-js resend

# 3. Eski loyihadagi fayllarni ko'chirish

# src papkasini to'liq ko'chirish
xcopy "..\src" "src\" /E /I /Y

# app papkasidagi custom sahifalarni ko'chirish
xcopy "..\app\(auth)" "app\(auth)\" /E /I /Y
xcopy "..\app\(dashboard)" "app\(dashboard)\" /E /I /Y
xcopy "..\app\(employer)" "app\(employer)\" /E /I /Y
xcopy "..\app\api" "app\api\" /E /I /Y

# data papkasini ko'chirish
xcopy "..\data" "data\" /E /I /Y

# Root configuration fayllarni ko'chirish
copy "..\next.config.js" "next.config.js" /Y
copy "..\README.md" "README.md" /Y

# globals.css ni ko'chirish (TailwindCSS sozlamalari bilan)
copy "..\app\globals.css" "app\globals.css" /Y

# layout.tsx faylini ko'chirish
copy "..\app\layout.tsx" "app\layout.tsx" /Y

# page.tsx (home page) ni ko'chirish  
copy "..\app\page.tsx" "app\page.tsx" /Y

# tsconfig.json sozlamalarini yangilash (path aliases bilan)
copy "..\tsconfig.json" "tsconfig.json" /Y

# PostCSS konfiguratsiya
copy "..\postcss.config.js" "postcss.config.js" /Y

# Tailwind konfiguratsiya
copy "..\tailwind.config.js" "tailwind.config.js" /Y

echo "Barcha fayllar muvaffaqiyatli ko'chirildi!"
echo "Endi 'npm run dev' buyrug'ini ishga tushiring."