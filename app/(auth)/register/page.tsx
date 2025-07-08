import RegisterForm from '../../../components/auth/register-form'

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Ro'yxatdan o'tish</h1>
        <RegisterForm />
      </div>
    </div>
  )
}