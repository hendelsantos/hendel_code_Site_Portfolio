import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, budget, message } = body;

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to self
            replyTo: email,
            subject: `[PORTFOLIO] ${subject.toUpperCase()} from ${name}`,
            html: `
                <div style="font-family: monospace; color: #333; padding: 20px; border: 1px solid #ddd;">
                    <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">INCOMING TRANSMISSION</h2>
                    <p><strong>FROM:</strong> ${name} (${email})</p>
                    <p><strong>SUBJECT:</strong> ${subject}</p>
                    <p><strong>BUDGET:</strong> ${budget || 'N/A'}</p>
                    <hr style="border-top: 1px dashed #ccc;" />
                    <p style="white-space: pre-wrap;">${message}</p>
                    <hr style="border-top: 1px dashed #ccc;" />
                    <p style="font-size: 12px; color: #888;">TIMESTAMP: ${new Date().toLocaleString()}</p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            { error: 'Failed to send transmission' },
            { status: 500 }
        );
    }
}
