import { User as SupabaseUser, Session } from '@supabase/supabase-js'

export interface AuthUser {
  id: string
  email?: string
  full_name?: string
  avatar_url?: string
  user_type?: 'user' | 'employer' | 'admin'
}

export interface AuthSession extends Session {
  user: SupabaseUser
}

export interface AuthError {
  message: string
  status?: number
}

export interface AuthState {
  user: AuthUser | null
  session: AuthSession | null
  loading: boolean
  error: AuthError | null
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  email: string
  password: string
  full_name: string
}

export interface ResetPasswordCredentials {
  email: string
}