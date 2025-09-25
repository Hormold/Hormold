import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import fs from 'fs/promises'
import path from 'path'

const resend = new Resend(process.env.RESEND_API_KEY)
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const emailFrom = process.env.EMAIL_FROM || 'Nikita Podelenko from OpenAI DevDay <nikita@cail.io>'
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Read the resume PDF
    const resumePath = path.join(process.cwd(), 'public', 'resume.pdf')
    const resumeBuffer = await fs.readFile(resumePath)
    
    // Read the HTML template
    const htmlTemplatePath = path.join(process.cwd(), 'email-template.html')
    let htmlContent = await fs.readFile(htmlTemplatePath, 'utf-8')
    
    // Send email with Resend
    const data = await resend.emails.send({
      from: emailFrom,
      to: [email],
      subject: 'Nikita Podelenko - Founding Engineer Resume',
      html: htmlContent,
      attachments: [
        {
          content: resumeBuffer.toString('base64'),
          filename: 'Nikita_Podelenko_Resume.pdf',
        }
      ],
    })

    return NextResponse.json({ 
      success: true, 
      id: data.data?.id 
    })
  } catch (error) {
    console.error('Error sending email:', error)
    
    // More specific error handling
    if (error instanceof Error) {
      if (error.message.includes('API')) {
        return NextResponse.json(
          { error: 'Email service configuration error. Please check API key.' },
          { status: 500 }
        )
      }
      if (error.message.includes('ENOENT')) {
        return NextResponse.json(
          { error: 'Resume file not found. Please contact administrator.' },
          { status: 500 }
        )
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}