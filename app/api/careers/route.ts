import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const category = searchParams.get('category')

    // Mock careers data (in real app, from database)
    const mockCareers = [
      {
        id: '1',
        title: 'Frontend Developer',
        description: 'Foydalanuvchi interfeysi va veb-saytlar yaratish',
        category: 'IT',
        required_skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        salary_range: '$40,000 - $80,000',
        growth_rate: 'Yuqori',
        match_score: 85
      },
      {
        id: '2',
        title: 'Backend Developer',
        description: 'Server tomonidagi dasturlar yaratish',
        category: 'IT',
        required_skills: ['Node.js', 'Python', 'Database', 'API'],
        salary_range: '$50,000 - $90,000',
        growth_rate: 'Yuqori',
        match_score: 78
      },
      {
        id: '3',
        title: 'UX/UI Designer',
        description: 'Foydalanuvchi interfeysi va tajribasini loyihalash',
        category: 'Design',
        required_skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
        salary_range: '$35,000 - $70,000',
        growth_rate: 'Yuqori',
        match_score: 92
      },
      {
        id: '4',
        title: 'Data Analyst',
        description: 'Ma\'lumotlarni tahlil qilish va hisobotlar yaratish',
        category: 'Data',
        required_skills: ['Python', 'SQL', 'Excel', 'Tableau'],
        salary_range: '$45,000 - $85,000',
        growth_rate: 'O\'rta',
        match_score: 67
      },
      {
        id: '5',
        title: 'Digital Marketing Specialist',
        description: 'Raqamli marketing kampaniyalarini boshqarish',
        category: 'Marketing',
        required_skills: ['Google Analytics', 'SEO', 'Social Media', 'Content Marketing'],
        salary_range: '$30,000 - $60,000',
        growth_rate: 'Yuqori',
        match_score: 73
      }
    ]

    let careers = [...mockCareers]

    // Filter by category if provided
    if (category && category !== 'all') {
      careers = careers.filter((career: any) => career.category === category)
    }

    // If user ID provided, get user profile for recommendations
    if (userId) {
      try {
        // Get user test results
        const supabase = createServerClient()
        const { data: testResults } = await supabase
          .from('test_results')
          .select('*')
          .eq('user_id', userId)

        // Get user interests
        const { data: userInterests } = await supabase
          .from('user_interests')
          .select('*')
          .eq('user_id', userId)
          .single()

        // Simple recommendation scoring
        const scoredCareers = careers.map((career: any) => {
          let score = Math.random() * 50 + 50 // Base score 50-100
          
          // Score based on test results
          if (testResults && testResults.length > 0) {
            const personalityTest = testResults.find((test: any) => test.test_type === 'personality') as any
            const iqTest = testResults.find((test: any) => test.test_type === 'iq') as any
            
            if (personalityTest?.results) {
              // Score based on personality traits
              if (career.category === 'IT' && personalityTest.results.openness > 60) score += 10
              if (career.category === 'Marketing' && personalityTest.results.extraversion > 60) score += 10
              if (career.category === 'Design' && personalityTest.results.openness > 70) score += 15
            }
            
            if (iqTest?.score) {
              // Score based on IQ
              if (career.category === 'IT' && iqTest.score > 110) score += 5
              if (career.category === 'Data' && iqTest.score > 115) score += 8
            }
          }
          
          // Score based on user interests
          if (userInterests && (userInterests as any)?.interests) {
            const interests = Array.isArray((userInterests as any).interests) ? (userInterests as any).interests : []
            const matchingInterests = career.required_skills.filter((skill: string) => 
              interests.some((interest: string) => 
                interest.toLowerCase().includes(skill.toLowerCase()) || 
                skill.toLowerCase().includes(interest.toLowerCase())
              )
            )
            score += matchingInterests.length * 3
          }
          
          return { ...career, recommendationScore: Math.min(score, 100) }
        })
        
        // Sort by recommendation score
        scoredCareers.sort((a: any, b: any) => b.recommendationScore - a.recommendationScore)
        
        return NextResponse.json({ 
          careers: scoredCareers,
          recommendations: scoredCareers.slice(0, 6)
        })
      } catch (error) {
        console.error('Error getting user profile:', error)
        // Return careers without recommendations
        return NextResponse.json({ careers })
      }
    }

    return NextResponse.json({ careers })
  } catch (error) {
    console.error('Error fetching careers:', error)
    return NextResponse.json(
      { error: 'Failed to fetch careers' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId, careerId } = await request.json()

    if (!userId || !careerId) {
      return NextResponse.json(
        { error: 'User ID and Career ID required' },
        { status: 400 }
      )
    }
    
    // Save career selection to database
    const supabase = createServerClient()
    const { data, error } = await supabase
      .from('user_careers')
      .upsert({
        user_id: userId,
        career_id: careerId,
        selected_at: new Date().toISOString(),
        roadmap_progress: {}
      })

    if (error) {
      throw error
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Error saving career selection:', error)
    return NextResponse.json(
      { error: 'Failed to save career selection' },
      { status: 500 }
    )
  }
}