import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { full_name, email, password } = await request.json()

    // Demo registration - any data works
    if (full_name && email && password) {
      // Send welcome email
      try {
        await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/email`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'welcome',
            data: {
              email,
              userName: full_name
            }
          })
        })
      } catch (emailError) {
        console.error('Welcome email failed:', emailError)
        // Continue registration even if email fails
      }

      return NextResponse.json({ 
        success: true, 
        user: { 
          id: '1', 
          email, 
          name: full_name 
        } 
      })
    }

    return NextResponse.json(
      { error: 'Barcha maydonlar talab qilinadi' },
      { status: 400 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Server xatosi' },
      { status: 500 }
    )
  }
}