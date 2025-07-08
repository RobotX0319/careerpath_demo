# CareerPath Demo - To'liq Texnik Spetsifikatsiya

## 📁 Project Strukturasi

```
careerpath-demo/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   ├── tests/
│   │   │   ├── personality/
│   │   │   │   └── page.tsx
│   │   │   ├── iq/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── careers/
│   │   │   └── page.tsx
│   │   ├── roadmap/
│   │   │   └── page.tsx
│   │   ├── chat/
│   │   │   └── page.tsx
│   │   ├── messages/
│   │   │   └── page.tsx
│   │   ├── jobs/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   └── layout.tsx
│   ├── (employer)/
│   │   ├── employer/
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   ├── jobs/
│   │   │   │   ├── new/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   └── candidates/
│   │   │       └── page.tsx
│   │   └── layout.tsx
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts
│   │   ├── tests/
│   │   │   ├── personality/
│   │   │   │   └── route.ts
│   │   │   └── iq/
│   │   │       └── route.ts
│   │   ├── careers/
│   │   │   └── route.ts
│   │   ├── chat/
│   │   │   └── route.ts
│   │   ├── messages/
│   │   │   └── route.ts
│   │   ├── jobs/
│   │   │   └── route.ts
│   │   └── upload/
│   │       └── route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── textarea.tsx
│   │   ├── dialog.tsx
│   │   ├── tabs.tsx
│   │   ├── progress.tsx
│   │   └── ...
│   ├── auth/
│   │   ├── login-form.tsx
│   │   └── register-form.tsx
│   ├── dashboard/
│   │   ├── sidebar.tsx
│   │   ├── header.tsx
│   │   └── stats-card.tsx
│   ├── tests/
│   │   ├── personality-test.tsx
│   │   ├── iq-test.tsx
│   │   └── test-results.tsx
│   ├── careers/
│   │   ├── career-card.tsx
│   │   └── career-recommendations.tsx
│   ├── chat/
│   │   ├── chat-interface.tsx
│   │   └── message-bubble.tsx
│   └── jobs/
│       ├── job-card.tsx
│       └── job-form.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   ├── auth.ts
│   ├── gemini.ts
│   ├── resend.ts
│   └── utils.ts
├── hooks/
│   ├── use-user.ts
│   ├── use-tests.ts
│   └── use-chat.ts
├── types/
│   ├── database.ts
│   ├── auth.ts
│   └── index.ts
├── data/
│   ├── personality-questions.json
│   ├── iq-questions.json
│   └── careers.json
├── public/
│   └── images/
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🗄️ Database Schema (Supabase SQL)

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  phone TEXT,
  birth_date DATE,
  gender TEXT CHECK (gender IN ('male', 'female', 'other')),
  address TEXT,
  education_level TEXT,
  current_status TEXT,
  user_type TEXT DEFAULT 'user' CHECK (user_type IN ('user', 'employer', 'admin')),
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Companies table
CREATE TABLE public.companies (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  name TEXT NOT NULL,
  logo_url TEXT,
  description TEXT,
  industry TEXT,
  size TEXT,
  website TEXT,
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Test results
CREATE TABLE public.test_results (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  test_type TEXT CHECK (test_type IN ('personality', 'iq')),
  results JSONB,
  score INTEGER,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- User interests (from AI chat)
CREATE TABLE public.user_interests (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  interests JSONB,
  skills JSONB,
  knowledge_level JSONB,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Careers
CREATE TABLE public.careers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  required_skills JSONB,
  education_requirements TEXT,
  salary_range JSONB,
  growth_rate TEXT,
  category TEXT
);

-- User selected career
CREATE TABLE public.user_careers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  career_id UUID REFERENCES careers(id),
  selected_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  roadmap_progress JSONB DEFAULT '{}'::jsonb
);

-- Jobs
CREATE TABLE public.jobs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  title TEXT NOT NULL,
  description TEXT,
  requirements JSONB,
  skills JSONB,
  salary_range JSONB,
  location TEXT,
  work_type TEXT CHECK (work_type IN ('office', 'remote', 'hybrid')),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'closed', 'draft')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Job applications
CREATE TABLE public.applications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  job_id UUID REFERENCES jobs(id),
  user_id UUID REFERENCES auth.users(id),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'interview', 'rejected', 'accepted')),
  cover_letter TEXT,
  applied_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Messages
CREATE TABLE public.conversations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  participant1_id UUID REFERENCES auth.users(id),
  participant2_id UUID REFERENCES auth.users(id),
  last_message_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

CREATE TABLE public.messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  conversation_id UUID REFERENCES conversations(id),
  sender_id UUID REFERENCES auth.users(id),
  content TEXT,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Chat history with AI
CREATE TABLE public.ai_chats (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  messages JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_interests ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_careers ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_chats ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Profiles
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Add more policies for other tables...

-- Functions and Triggers
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (new.id, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

## 📦 Package.json

```json
{
  "name": "careerpath-demo",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.39.3",
    "@supabase/auth-helpers-nextjs": "^0.8.7",
    "next": "14.1.0",
    "next-auth": "^4.24.5",
    "@next-auth/supabase-adapter": "^0.3.6",
    "react": "^18",
    "react-dom": "^18",
    "@google/generative-ai": "^0.2.1",
    "resend": "^3.0.0",
    "react-hook-form": "^7.48.2",
    "zod": "^3.22.4",
    "@hookform/resolvers": "^3.3.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-progress": "^1.0.3",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "lucide-react": "^0.309.0",
    "date-fns": "^3.2.0",
    "react-hot-toast": "^2.4.1",
    "zustand": "^4.4.7",
    "react-markdown": "^9.0.1",
    "next-cloudinary": "^5.20.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "eslint": "^8",
    "eslint-config-next": "14.1.0",
    "typescript": "^5"
  }
}
```

## 🔧 Environment Variables (.env.local)

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://kcmzfudshgvruccwuskj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjbXpmdWRzaGd2cnVjY3d1c2tqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5Njg4MDMsImV4cCI6MjA2NzU0NDgwM30.6Q2yWVoQZEbNKsPi9K44GTzIxXT30LFBNaOV0FjjK5k
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjbXpmdWRzaGd2cnVjY3d1c2tqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MTk2ODgwMywiZXhwIjoyMDY3NTQ0ODAzfQ.yEcfahWEcyi9GRYejdztjrmjnPDP73kO_hiD_HN3yj8

# Gemini AI
GEMINI_API_KEY=AIzaSyAVYsRTfnBz12-Eu50s0TswMNMv-irk7n0

# Email
RESEND_API_KEY=re_ZJ1EMLb7_7wfdWd2JNCT28qi56NbXEF2p
RESEND_FROM_EMAIL=onboarding@resend.dev

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dditqdok3
CLOUDINARY_API_KEY=258957136283257
CLOUDINARY_API_SECRET=vfoEdICJYkUI-Llbo_geYOCY4ls

# NextAuth
NEXTAUTH_SECRET=EcihyVGBIahzE15xBzcD8s3PshGWh2if
NEXTAUTH_URL=https://careerpath-demo.vercel.app

# App URL
NEXT_PUBLIC_APP_URL=https://careerpath-demo.vercel.app
```

## 🚀 Copilot uchun vazifalar

### 1-vazifa: Loyihani yaratish va asosiy konfiguratsiya

```
Create a new Next.js 14 project with TypeScript and Tailwind CSS named "careerpath-demo".
Set up the folder structure as specified above.
Install all dependencies from package.json.
Create .env.local file with the provided environment variables.
Configure next.config.js for Supabase and Cloudinary.
Set up tailwind.config.ts with custom theme colors.
```

### 2-vazifa: Supabase konfiguratsiya

```
Create lib/supabase/client.ts for client-side Supabase instance.
Create lib/supabase/server.ts for server-side Supabase instance.
Create lib/supabase/middleware.ts for auth middleware.
Run the provided SQL schema in Supabase SQL editor.
Set up Row Level Security policies for all tables.
```

### 3-vazifa: Authentication tizimi

```
Set up NextAuth with Supabase adapter in app/api/auth/[...nextauth]/route.ts.
Create login page at app/(auth)/login/page.tsx with email/password form.
Create register page at app/(auth)/register/page.tsx with full registration form.
Implement auth components: login-form.tsx and register-form.tsx.
Add auth protection middleware for dashboard routes.
```

### 4-vazifa: Dashboard layout va asosiy sahifalar

```
Create dashboard layout at app/(dashboard)/layout.tsx with sidebar navigation.
Implement sidebar component with navigation links.
Create dashboard home page showing user stats.
Add header component with user menu and logout.
Implement responsive design for mobile.
```

### 5-vazifa: Shaxsiyat testi moduli

```
Create personality test page at app/(dashboard)/tests/personality/page.tsx.
Implement 60 personality questions from data/personality-questions.json.
Create personality-test.tsx component with progress tracking.
Add API route for saving test results.
Implement Big Five personality scoring algorithm.
Show results with radar chart visualization.
```

### 6-vazifa: IQ testi moduli

```
Create IQ test page at app/(dashboard)/tests/iq/page.tsx.
Implement 40 IQ questions with timer from data/iq-questions.json.
Create iq-test.tsx component with multiple question types.
Add API route for calculating IQ score.
Implement time tracking and scoring logic.
Display results with percentile ranking.
```

### 7-vazifa: AI Chat integratsiya (Gemini)

```
Create lib/gemini.ts for Gemini AI configuration.
Implement chat interface at app/(dashboard)/chat/page.tsx.
Create chat-interface.tsx component with message history.
Add API route for AI chat at app/api/chat/route.ts.
Implement interest detection and knowledge assessment.
Store chat history and extracted data in database.
```

### 8-vazifa: Kasb tavsiyalari moduli

```
Create careers page at app/(dashboard)/careers/page.tsx.
Load careers data from data/careers.json into database.
Implement AI-based career matching algorithm.
Create career-card.tsx component for displaying careers.
Add career selection functionality.
Generate and display career roadmap.
```

### 9-vazifa: Foydalanuvchi profili

```
Create profile page at app/(dashboard)/profile/page.tsx.
Display test results, selected career, and progress.
Implement profile editing functionality.
Add avatar upload using Cloudinary.
Create auto-generated resume based on data.
Add skills and interests visualization.
```

### 10-vazifa: Ish beruvchi moduli

```
Create employer dashboard at app/(employer)/employer/dashboard/page.tsx.
Implement job posting form at employer/jobs/new/page.tsx.
Create job management interface.
Add candidate search and filtering.
Implement application tracking system.
Create company profile management.
```

### 11-vazifa: Ish qidirish moduli

```
Create jobs listing page at app/(dashboard)/jobs/page.tsx.
Implement job search and filters.
Create job detail page with application form.
Add AI-based job matching.
Implement one-click apply functionality.
Show application status tracking.
```

### 12-vazifa: Messenger moduli

```
Create messages page at app/(dashboard)/messages/page.tsx.
Implement real-time messaging using Supabase Realtime.
Create conversation list and chat interface.
Add user search functionality.
Implement message notifications.
Show user details in chat (career, interests).
```

### 13-vazifa: Email integratsiya

```
Set up Resend configuration in lib/resend.ts.
Create email templates for:
- Welcome email
- Test completion notification
- Job application updates
- New message notifications
Implement email sending in relevant API routes.
```

### 14-vazifa: UI Components

```
Create all UI components using Radix UI and Tailwind:
- Button, Card, Input, Label, Select, Textarea
- Dialog, Tabs, Progress, Avatar
- Custom styled components for the app
Ensure consistent design system.
Add loading states and error handling.
```

### 15-vazifa: Final optimizatsiya va deploy

```
Add proper TypeScript types for all components.
Implement error boundaries and loading states.
Optimize images and implement lazy loading.
Add SEO meta tags and Open Graph data.
Test all features thoroughly.
Deploy to Vercel with environment variables.
```

## 📊 Test ma'lumotlari namunalari

### Shaxsiyat test savollari (personality-questions.json)
```json
[
  {
    "id": 1,
    "question": "Men yangi odamlar bilan tanishishni yoqtiraman",
    "category": "extraversion",
    "type": "scale"
  },
  {
    "id": 2,
    "question": "Men rejalarimni puxta bajaraman",
    "category": "conscientiousness",
    "type": "scale"
  }
  // ... 60 ta savol
]
```

### IQ test savollari (iq-questions.json)
```json
[
  {
    "id": 1,
    "question": "Keyingi raqam qaysi? 2, 4, 8, 16, ?",
    "options": ["24", "32", "28", "36"],
    "correct": 1,
    "type": "sequence"
  }
  // ... 40 ta savol
]
```

### Kasblar ro'yxati (careers.json)
```json
[
  {
    "id": "software-developer",
    "title": "Dasturchi",
    "description": "Dasturiy ta'minot yaratish va qo'llab-quvvatlash",
    "required_skills": ["dasturlash", "muammo hal qilish", "mantiqiy fikrlash"],
    "education": "Oliy ta'lim (IT yo'nalishi)",
    "salary_range": {
      "min": 500,
      "max": 3000,
      "currency": "USD"
    },
    "growth_rate": "22%",
    "category": "IT"
  }
  // ... 50+ kasb
]
```

## 🎨 UI/UX Ko'rsatmalar

1. **Rang palitrasi:**
   - Primary: #3B82F6 (Blue)
   - Secondary: #10B981 (Green)
   - Accent: #8B5CF6 (Purple)
   - Background: #F9FAFB
   - Dark mode support

2. **Typography:**
   - Font: Inter
   - Headings: Bold
   - Body: Regular

3. **Components:**
   - Rounded corners (rounded-lg)
   - Subtle shadows
   - Smooth transitions
   - Mobile-first design

## 🚀 Deploy qilish

1. GitHub'ga yuklash:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO
git push -u origin main
```

2. Vercel'da deploy:
- Vercel.com ga kiring
- "Import Git Repository"
- GitHub repo'ni tanlang
- Environment variables qo'shing
- Deploy!

## 📝 Qo'shimcha eslatmalar

1. **Xavfsizlik:**
   - Barcha API routes'da authentication tekshirish
   - Input validation (Zod bilan)
   - SQL injection himoyasi (Supabase RLS)

2. **Performance:**
   - Image optimization (Next.js Image)
   - Code splitting
   - Lazy loading

3. **SEO:**
   - Meta tags
   - Sitemap
   - Robots.txt

Bu spetsifikatsiya asosida Copilot to'liq funktsional demo yaratishi mumkin!