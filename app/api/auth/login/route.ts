import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Demo authentication - any email/password works
    if (email && password) {
      return NextResponse.json({ 
        success: true, 
        user: { 
          id: '1', 
          email, 
          name: 'Demo User' 
        } 
      })
    }

    return NextResponse.json(
      { error: 'Email va parol talab qilinadi' },
      { status: 400 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Server xatosi' },
      { status: 500 }
    )
  }
}