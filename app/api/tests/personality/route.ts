import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  try {
    const { results, userId } = await request.json()

    // Save test results to database
    const supabase = createServerClient()
    const { data, error } = await supabase
      .from('test_results')
      .insert({
        user_id: userId,
        test_type: 'personality',
        results: results,
        score: Math.round((Object.values(results) as number[]).reduce((a, b) => a + b, 0) / 5),
        completed_at: new Date().toISOString()
      })

    if (error) {
      throw error
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Error saving personality test results:', error)
    return NextResponse.json(
      { error: 'Failed to save test results' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 400 })
    }

    const supabase = createServerClient()
    const { data, error } = await supabase
      .from('test_results')
      .select('*')
      .eq('user_id', userId)
      .eq('test_type', 'personality')
      .order('completed_at', { ascending: false })
      .limit(1)

    if (error) {
      throw error
    }

    return NextResponse.json({ data: data[0] || null })
  } catch (error) {
    console.error('Error fetching personality test results:', error)
    return NextResponse.json(
      { error: 'Failed to fetch test results' },
      { status: 500 }
    )
  }
}