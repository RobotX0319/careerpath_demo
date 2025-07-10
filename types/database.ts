export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          phone: string | null
          birth_date: string | null
          gender: 'male' | 'female' | 'other' | null
          address: string | null
          education_level: string | null
          current_status: string | null
          user_type: 'user' | 'employer' | 'admin'
          avatar_url: string | null
          bio: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          phone?: string | null
          birth_date?: string | null
          gender?: 'male' | 'female' | 'other' | null
          address?: string | null
          education_level?: string | null
          current_status?: string | null
          user_type?: 'user' | 'employer' | 'admin'
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          phone?: string | null
          birth_date?: string | null
          gender?: 'male' | 'female' | 'other' | null
          address?: string | null
          education_level?: string | null
          current_status?: string | null
          user_type?: 'user' | 'employer' | 'admin'
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      companies: {
        Row: {
          id: string
          user_id: string | null
          name: string
          logo_url: string | null
          description: string | null
          industry: string | null
          size: string | null
          website: string | null
          verified: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          name: string
          logo_url?: string | null
          description?: string | null
          industry?: string | null
          size?: string | null
          website?: string | null
          verified?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          name?: string
          logo_url?: string | null
          description?: string | null
          industry?: string | null
          size?: string | null
          website?: string | null
          verified?: boolean
          created_at?: string
        }
      }
      test_results: {
        Row: {
          id: string
          user_id: string | null
          test_type: 'personality' | 'iq' | null
          results: Json | null
          score: number | null
          completed_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          test_type?: 'personality' | 'iq' | null
          results?: Json | null
          score?: number | null
          completed_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          test_type?: 'personality' | 'iq' | null
          results?: Json | null
          score?: number | null
          completed_at?: string
        }
      }
      careers: {
        Row: {
          id: string
          title: string
          description: string | null
          required_skills: Json | null
          education_requirements: string | null
          salary_range: Json | null
          growth_rate: string | null
          category: string | null
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          required_skills?: Json | null
          education_requirements?: string | null
          salary_range?: Json | null
          growth_rate?: string | null
          category?: string | null
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          required_skills?: Json | null
          education_requirements?: string | null
          salary_range?: Json | null
          growth_rate?: string | null
          category?: string | null
        }
      }
      jobs: {
        Row: {
          id: string
          company_id: string | null
          title: string
          description: string | null
          requirements: Json | null
          skills: Json | null
          salary_range: Json | null
          location: string | null
          work_type: 'office' | 'remote' | 'hybrid' | null
          status: 'active' | 'closed' | 'draft'
          created_at: string
        }
        Insert: {
          id?: string
          company_id?: string | null
          title: string
          description?: string | null
          requirements?: Json | null
          skills?: Json | null
          salary_range?: Json | null
          location?: string | null
          work_type?: 'office' | 'remote' | 'hybrid' | null
          status?: 'active' | 'closed' | 'draft'
          created_at?: string
        }
        Update: {
          id?: string
          company_id?: string | null
          title?: string
          description?: string | null
          requirements?: Json | null
          skills?: Json | null
          salary_range?: Json | null
          location?: string | null
          work_type?: 'office' | 'remote' | 'hybrid' | null
          status?: 'active' | 'closed' | 'draft'
          created_at?: string
        }
      }
    }
  }
}