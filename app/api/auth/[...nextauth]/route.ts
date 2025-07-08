import NextAuth from 'next-auth'
import { SupabaseAdapter } from '@next-auth/supabase-adapter'
import EmailProvider from 'next-auth/providers/email'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export const authOptions = {
  adapter: SupabaseAdapter(supabase),
  providers: [
    EmailProvider({
      server: {
        host: process.env.RESEND_SMTP_HOST!,
        port: Number(process.env.RESEND_SMTP_PORT),
        auth: {
          user: process.env.RESEND_FROM_EMAIL!,
          pass: process.env.RESEND_API_KEY!
        }
      },
      from: process.env.RESEND_FROM_EMAIL!
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }