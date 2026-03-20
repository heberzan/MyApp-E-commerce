import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './routes';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Ruta raíz informativa
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: '🚀 Bienvenidos a MyApp E-commerce API',
    version: '1.0.0',
    status: 'online',
    environment: process.env.NODE_ENV || 'development',
    documentation: '/api-docs',
    health: '/health',
    endpoints: {
      products: {
        GET: '/api/products',
        'GET /:id': '/api/products/:id',
      },
      users: {
        'POST /register': '/api/users/register',
        'POST /login': '/api/users/login',
        'GET /me': '/api/users/me',
      },
      orders: {
        GET: '/api/orders',
        POST: '/api/orders',
      },
    },
    author: {
      name: 'Heber Marzán',
      github: 'https://github.com/heberzan',
    },
    timestamp: new Date().toISOString(),
  });
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    uptime: process.uptime(),
  });
});

// Montar rutas de la API con prefijo /api
app.use('/api', router);

// Middleware de manejo de errores
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({
    statusCode: err.statusCode || 500,
    message: err.message || 'Internal Server Error',
  });
});

export default app;
