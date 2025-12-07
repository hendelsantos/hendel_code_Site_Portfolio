// src/lib/db.ts
// Placeholder for SQLite connection
// Recommended stack: Drizzle ORM + better-sqlite3

import path from 'path';

export const dbPath = path.resolve(process.cwd(), 'hendel.db');

export function connect() {
    console.log(`Connecting to SQLite DB at ${dbPath}`);
    // return new Database(dbPath);
}
