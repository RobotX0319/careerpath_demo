// Database types
export interface User {
  id: string
  email: string
  full_name?: string
  phone?: string
  birth_date?: string
  gender?: 'male' | 'female' | 'other'
  address?: string
  education_level?: string
  current_status?: string
  user_type: 'user' | 'employer' | 'admin'
  avatar_url?: string
  bio?: string
  created_at: string
  updated_at: string
}

export interface UserProfile {
  id: string
  user_id: string
  name: string
  email: string
  avatar_url?: string
  phone?: string
  date_of_birth?: string
  location?: string
  bio?: string
  skills?: string[]
  experience?: string
  education?: string
  created_at: string
  updated_at: string
}

export interface TestResult {
  id: string
  user_id: string
  test_type: 'personality' | 'iq'
  results: any
  score: number
  completed_at: string
}

export interface Career {
  id: string
  title: string
  description: string
  required_skills: string[]
  salary_range: string
  growth_rate: string
  match_score?: number
}

export interface Job {
  id: string
  title: string
  company: string
  location: string
  salary: string
  description: string
  requirements: string[]
  benefits: string[]
  type: 'full-time' | 'part-time' | 'contract' | 'freelance'
  posted_at: string
}

export interface Message {
  id: string
  sender_id: string
  receiver_id: string
  content: string
  type: 'text' | 'file' | 'image'
  is_read: boolean
  created_at: string
}

export interface Notification {
  id: string
  user_id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  is_read: boolean
  created_at: string
}

export interface Activity {
  id: string
  user_id: string
  type: 'test_completed' | 'job_applied' | 'profile_updated' | 'message_sent'
  description: string
  metadata?: any
  created_at: string
}

// Test question types
export interface PersonalityQuestion {
  id: number
  question: string
  category: 'extraversion' | 'agreeableness' | 'conscientiousness' | 'neuroticism' | 'openness'
  type: 'scale'
}

export interface IQQuestion {
  id: number
  question: string
  options: string[]
  correct: number
  type: 'sequence' | 'pattern' | 'logic' | 'math'
}

// API response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Form types
export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  full_name: string
  email: string
  password: string
  confirmPassword: string
}

// Chat types
export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

export interface AIChat {
  id: string
  user_id: string
  messages: ChatMessage[]
  created_at: string
}