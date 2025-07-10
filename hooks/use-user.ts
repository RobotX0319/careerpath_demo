import { useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// If you have a types/auth.ts file, ensure it exports AuthUser and AuthSession.
// Otherwise, define the types here directly or update the import path accordingly.
// Example definition (replace with your actual types if different):
export type AuthUser = {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  user_type?: string
}

export type AuthSession = {
  user: AuthUser
  access_token: string
  refresh_token: string
  expires_in: number
  expires_at: number
}

// import { AuthUser, AuthSession } from '@/types/auth'
import type { Database } from '../types/database'

export function useUser() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [session, setSession] = useState<AuthSession | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const supabase = createClientComponentClient<Database>()

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) {
          setError(error.message)
          return
        }

        if (session) {
          setSession(session as AuthSession)
          
          // Get user profile
          const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single()

          if (profile) {
            setUser({
              id: profile.id,
              email: session.user.email ?? '',
              full_name: profile.full_name || undefined,
              avatar_url: profile.avatar_url || undefined,
              user_type: profile.user_type
            })
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    getSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session) {
          setSession(session as AuthSession)
          
          // Get user profile
          const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single()

          if (profile) {
            setUser({
              id: profile.id,
              email: session.user.email ?? '',
              full_name: profile.full_name || undefined,
              avatar_url: profile.avatar_url || undefined,
              user_type: profile.user_type
            })
          }
        } else {
          setUser(null)
          setSession(null)
        }
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signOut = async () => {
    setLoading(true)
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        setError(error.message)
      } else {
        setUser(null)
        setSession(null)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  return {
    user,
    session,
    loading,
    error,
    signOut,
    isAuthenticated: !!user
  }
}