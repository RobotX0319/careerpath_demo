export interface UserProfile {
  id: string
  full_name: string
  email: string
  phone?: string
  birth_date?: string
  gender?: 'male' | 'female' | 'other'
  address?: string
  education_level?: string
  current_status?: string
  avatar_url?: string
  bio?: string
  created_at: string
  updated_at: string
}

export interface TestResult {
  id: string
  user_id: string
  test_type: 'personality' | 'iq'
  results: any
  score?: number
  completed_at: string
}

export interface Career {
  id: string
  title: string
  description: string
  required_skills: string[]
  education_requirements: string
  salary_range: {
    min: number
    max: number
    currency: string
  }
  growth_rate: string
  category: string
}

export interface Job {
  id: string
  company_id: string
  title: string
  description: string
  requirements: string[]
  skills: string[]
  salary_range: {
    min: number
    max: number
    currency: string
  }
  location: string
  work_type: 'office' | 'remote' | 'hybrid'
  status: 'active' | 'closed' | 'draft'
  created_at: string
}

export interface Application {
  id: string
  job_id: string
  user_id: string
  status: 'pending' | 'reviewing' | 'interview' | 'rejected' | 'accepted'
  cover_letter?: string
  applied_at: string
}

export interface Message {
  id: string
  conversation_id: string
  sender_id: string
  content: string
  read: boolean
  created_at: string
}

export interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
}