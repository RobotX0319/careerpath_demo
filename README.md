# CareerPath Demo

AI-powered career guidance platform for Uzbekistan

## 🚀 Features

- **Personality Tests**: Big Five personality assessment
- **IQ Tests**: Cognitive ability evaluation
- **AI Career Advisor**: Gemini AI-powered career guidance
- **Job Matching**: AI-based job recommendations
- **Career Roadmap**: Step-by-step career development plans
- **Real-time Messaging**: Direct communication with employers
- **Responsive Design**: Mobile-first approach

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **AI**: Google Gemini API
- **Email**: Resend
- **File Upload**: Cloudinary
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/careerpath-demo.git
cd careerpath-demo
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# Email (Resend)
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=your_from_email

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

5. Run the development server:
```bash
npm run dev
```

## 🗄️ Database Setup

1. Create a new Supabase project
2. Run the SQL schema from `docs/database-schema.sql`
3. Set up Row Level Security (RLS) policies
4. Configure authentication settings

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📱 Features Overview

### For Job Seekers

- **Assessment Tests**: Personality and IQ tests
- **AI Guidance**: Personalized career advice
- **Job Search**: Smart job matching
- **Profile Management**: Complete career profile
- **Application Tracking**: Monitor job applications

### For Employers

- **Job Posting**: Create detailed job listings
- **Candidate Search**: Find qualified candidates
- **Application Management**: Track applications
- **Company Profile**: Showcase your company

## 🔧 Development

### Project Structure

```
src/
├── app/              # Next.js app router
├── components/       # React components
├── lib/             # Utility functions
├── hooks/           # Custom React hooks
├── types/           # TypeScript types
├── data/            # Static data files
└── public/          # Static assets
```

### Key Components

- **UI Components**: Reusable UI elements
- **Test Components**: Personality and IQ test interfaces
- **Chat Interface**: AI-powered chat system
- **Job Components**: Job listing and application forms
- **Profile Components**: User profile management

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support, email support@careerpath.uz or create an issue on GitHub.

## 🔮 Future Features

- [ ] Video interviews
- [ ] Skill assessments
- [ ] Company reviews
- [ ] Salary insights
- [ ] Mobile app
- [ ] Multi-language support

---

Made with ❤️ for career development in Uzbekistan

---

# Cleanup unused import files

# Remove duplicate button components
-# filepath: c:\Users\user\Desktop\CareerPath\careerpath-demo\app\page-fixed.tsx
-# filepath: c:\Users\user\Desktop\CareerPath\careerpath-demo\app\(dashboard)\dashboard\page-clean.tsx

# Remove duplicate auth components  
-# filepath: c:\Users\user\Desktop\CareerPath\careerpath-demo\src\app\page.tsx
-# filepath: c:\Users\user\Desktop\CareerPath\careerpath-demo\src\components\auth\login-form.tsx
-# filepath: c:\Users\user\Desktop\CareerPath\careerpath-demo\src\components\auth\register-form.tsx

# Clean up auth routes
-# filepath: c:\Users\user\Desktop\CareerPath\careerpath-demo\app\auth\login\page.tsx

# Remove duplicate dashboard components
-# filepath: c:\Users\user\Desktop\CareerPath\careerpath-demo\components\dashboard\sidebar-new.tsx
-# filepath: c:\Users\user\Desktop\CareerPath\careerpath-demo\components\dashboard\cards.tsx
-# filepath: c:\Users\user\Desktop\CareerPath\careerpath-demo\components\dashboard\cards-complete.tsx

# Keep main structure clean
