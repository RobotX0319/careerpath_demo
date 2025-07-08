import LoginForm from '@/components/auth/login-form'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Kirish</h1>
        <LoginForm />
      </div>
    </div>
  )
}