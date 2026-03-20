import dotenv from 'dotenv';
dotenv.config();

// ✅ Priorizar DATABASE_URL para producción (Render/Neon/Supabase)
export const DATABASE_URL: string | undefined = process.env.DATABASE_URL;

// Variables individuales (fallback para desarrollo local)
export const PORT: number = Number(process.env.PORT) || 3000;
export const DB_NAME: string = process.env.DB_NAME || 'proyecto_m4_front';
export const DB_USER: string = process.env.DB_USER || 'postgres';
export const DB_PASSWORD: string = process.env.DB_PASSWORD || 'admin';
export const DB_HOST: string = process.env.DB_HOST || 'localhost';
export const DB_PORT: number = Number(process.env.DB_PORT) || 5432;
export const JWT_SECRET: string = process.env.JWT_SECRET || 'secret';
export const NODE_ENV: string = process.env.NODE_ENV || 'development';
