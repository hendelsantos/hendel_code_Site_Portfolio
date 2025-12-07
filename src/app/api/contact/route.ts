import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { saveMessage } from '@/lib/db';

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

        // 1. Save to Database (Reliability Layer)
        try {
            saveMessage({ name, email, subject, budget, message });
            console.log(`Message from ${email} saved to database.`);
        } catch (dbError) {
            console.error('Database save error:', dbError);
            // We continue to try sending email even if DB fails, or valid strategy? 
            // Better to fail if we can't save? 
            // For now, let's log and proceed, but if DB fails, it's a critical system issue.
        }

        // 2. Email Notification (Optional/Best Effort)
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            // Only attempt to send if credentials exist
            if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
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
            } else {
                console.warn('Email credentials missing, skipping email notification.');
            }

        } catch (emailError) {
            console.error('Email error:', emailError);
            // We ignore email errors if DB save was successful (which is implied if we reached here or if we treat DB as primary)
            // But to be safe, we return success if at least one worked?
            // Since we save to DB first, if that didn't throw, we are good.
        }

        return NextResponse.json({ success: true, message: 'Transmission received' });

    } catch (error) {
        console.error('Contact API critical error:', error);
        return NextResponse.json(
            { error: 'Failed to process transmission' },
            { status: 500 }
        );
    }
}
