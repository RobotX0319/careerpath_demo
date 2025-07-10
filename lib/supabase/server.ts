// Mock Supabase functionality for demo
export const supabase = {
  auth: {
    signUp: async (data: any) => ({ data: { user: data }, error: null }),
    signInWithPassword: async (data: any) => ({ data: { user: data }, error: null }),
    signOut: async () => ({ error: null })
  },
  from: (table: string) => ({
    select: () => ({ data: [], error: null }),
    insert: () => ({ data: [], error: null }),
    update: () => ({ data: [], error: null })
  })
}

export function createServerClient() {
  return supabase
}

export function createClient() {
  return supabase
}

export default supabase

// Demo helper functions
export const signInUser = async (credentials: { email: string; password: string }) => {
  if (credentials.email && credentials.password) {
    return { success: true, data: { id: '1', email: credentials.email } }
  }
  return { success: false, error: 'Invalid credentials' }
}