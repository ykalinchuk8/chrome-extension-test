import 'dotenv/config';
import {drizzle, BetterSQLite3Database} from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schemas/schema';

const sqlite = new Database(process.env.DB_NAME);
export const db: BetterSQLite3Database<typeof schema> = drizzle(sqlite, { schema });