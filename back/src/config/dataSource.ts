import { DataSource } from 'typeorm';
import {
  DATABASE_URL,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
  NODE_ENV,
} from './envs';
import { User } from '../entities/User';
import { Credential } from '../entities/Credential';
import { Order } from '../entities/Order';
import { Category } from '../entities/Category';
import { Product } from '../entities/Product';

export const AppDataSource = new DataSource({
  // Usar DATABASE_URL si existe (producción en Render)
  // Si no, construir conexión desde variables individuales (desarrollo local)
  url: DATABASE_URL,

  // Configuración fallback para desarrollo local (solo si DATABASE_URL no está definido)
  type: 'postgres',
  host: DATABASE_URL ? undefined : DB_HOST,
  port: DATABASE_URL ? undefined : DB_PORT,
  username: DATABASE_URL ? undefined : DB_USER,
  password: DATABASE_URL ? undefined : DB_PASSWORD,
  database: DATABASE_URL ? undefined : DB_NAME,

  // SSL para producción (Render requiere SSL para conexiones externas)
  ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,

  synchronize: NODE_ENV !== 'production' || !!process.env.DATABASE_URL, // ⚠️ Nunca true en producción
  logging: NODE_ENV === 'development',
  entities: [User, Credential, Order, Product, Category],
  subscribers: [],
  migrations: [],
});
