// src/lib/db.ts
import fs from 'fs';
import path from 'path';

const DB_FILE = path.resolve(process.cwd(), 'messages.json');

// Ensure DB file exists
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2));
}

export function saveMessage(data: { name: string; email: string; subject: string; budget: string; message: string }) {
    try {
        const fileContent = fs.readFileSync(DB_FILE, 'utf-8');
        let messages = [];
        try {
            messages = JSON.parse(fileContent);
        } catch (e) {
            // If file is corrupted, start fresh
            messages = [];
        }

        const newMessage = {
            id: Date.now(),
            ...data,
            created_at: new Date().toISOString()
        };

        messages.push(newMessage);
        fs.writeFileSync(DB_FILE, JSON.stringify(messages, null, 2));
        return { changes: 1 };
    } catch (error) {
        console.error('Failed to save message to JSON:', error);
        throw error;
    }
}
