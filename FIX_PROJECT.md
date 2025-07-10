# Mavjud loyihani tuzatish uchun terminal buyruqlari

# 1. Loyiha papkasiga o'ting
cd c:\Users\user\Desktop\CareerPath\careerpath-demo

# 2. Node modules va cache tozalash
rm -rf node_modules
rm -f package-lock.json
npm cache clean --force

# 3. Dependencies o'rnatish
npm install

# 4. Kerakli packages qo'shish
npm install @google/generative-ai @supabase/supabase-js resend

# 5. Development dependencies
npm install -D @types/node @types/react @types/react-dom

# 6. TailwindCSS qayta sozlash
npx tailwindcss init -p

# 7. Build qilish
npm run build

# 8. Development server ishga tushirish
npm run dev

# Agar Windows PowerShell ishlatayotgan bo'lsangiz:
# Remove-Item -Recurse -Force node_modules
# Remove-Item package-lock.json
# npm cache clean --force