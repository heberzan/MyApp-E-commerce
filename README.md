# 🛒 MyApp E-commerce

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-in%20development-yellow.svg)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)]()

> Plataforma de comercio electrónico full-stack desarrollada con **Next.js 14**, **Node.js** y **TypeScript**.

## 📌 Descripción

MyApp E-commerce es una aplicación web completa para la gestión de ventas en línea, construida con una arquitectura escalable y tipo-safe. Incluye:

- 🔐 Autenticación de usuarios con JWT y validación de esquemas
- 🛍️ Catálogo de productos con rutas dinámicas (`/product/[productId]`)
- 🛒 Carrito de compras con persistencia mediante Context API
- 📦 Gestión de órdenes e historial de compras
- 👨‍💼 Panel de administración para gestión de inventario y pedidos
- 🎨 UI moderna con Tailwind CSS y componentes reutilizables

---

## 🚀 Tecnologías Utilizadas

### 🔹 Frontend (`/front`)
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Next.js** | 14+ | Framework React con App Router y SSR |
| **React** | 18+ | Biblioteca de UI |
| **TypeScript** | 5.x | Tipado estático y seguridad de tipos |
| **Tailwind CSS** | 3.x | Estilizado utility-first |
| **Yup** | - | Validación de formularios con schemas |
| **Context API** | - | Gestión de estado global (Auth, Cart) |

### 🔹 Backend (`/back`)
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Node.js** | 18+ | Entorno de ejecución JavaScript |
| **Express** | 4.x | Framework para API REST |
| **TypeScript** | 5.x | Tipado estático en backend |
| **TypeORM** | - | ORM para gestión de base de datos |
| **PostgreSQL** | - | Base de datos relacional (configurable) |
| **JWT** | - | Autenticación stateless con tokens |

### 🔹 DevOps & Tools
```bash
Git • GitHub • ESLint • Prettier • Docker (opcional) • Vercel (deploy frontend)

---

## 📦 Estructura del Proyecto

MyApp-E-commerce/
│
├── 📁 back/                     # API REST - Backend con Node.js + TypeORM
│   ├── 📁 src/
│   │   ├── 📁 config/           # Configuraciones: dataSource.ts, envs.ts
│   │   ├── 📁 controllers/      # Lógica de endpoints: user, product, order
│   │   ├── 📁 dtos/             # Data Transfer Objects para validación
│   │   ├── 📁 entities/         # Modelos de TypeORM: User, Product, Order...
│   │   ├── 📁 helpers/          # Scripts de precarga: categories, products
│   │   ├── 📁 middlewares/      # Middleware de auth y validación de requests
│   │   ├── 📁 repositories/     # Acceso a datos con patrón Repository
│   │   ├── 📁 routes/           # Definición de rutas: users, products, orders
│   │   ├── 📁 services/         # Lógica de negocio desacoplada
│   │   ├── 📁 utils/            # Utilidades: catchedController, errors
│   │   ├── index.ts             # Punto de entrada del servidor
│   │   └── server.ts            # Configuración del servidor Express
│   ├── .env.example             # Variables de entorno de ejemplo
│   ├── package.json
│   └── tsconfig.json
│
├── 📁 front/                    # Frontend con Next.js 14 (App Router)
│   ├── 📁 public/               # Assets estáticos
│   ├── 📁 src/
│   │   ├── 📁 app/              # Rutas con App Router
│   │   │   ├── 📁 about/        # Página: /about
│   │   │   ├── 📁 cart/         # Página: /cart (carrito de compras)
│   │   │   ├── 📁 dashboard/    # Panel: /dashboard (órdenes y perfil)
│   │   │   ├── 📁 login/        # Autenticación: /login
│   │   │   ├── 📁 product/[productId]/  # Detalle dinámico de producto
│   │   │   ├── 📁 register/     # Registro: /register
│   │   │   ├── layout.tsx       # Layout raíz con providers
│   │   │   ├── page.tsx         # Home: /
│   │   │   └── not-found.tsx    # Página 404 personalizada
│   │   ├── 📁 components/
│   │   │   ├── 📁 forms/        # LoginForm.tsx, RegisterForm.tsx
│   │   │   ├── 📁 ui/           # Componentes reutilizables: Card, Navbar...
│   │   │   └── PasswordInput.tsx # Input con toggle de visibilidad
│   │   ├── 📁 context/          # AuthContext.tsx, CartContext.tsx
│   │   ├── 📁 helpers/          # NavItems.tsx, productsToPreLoad.ts
│   │   ├── 📁 services/         # Conexión con API: auth, orders, products
│   │   ├── 📁 types/            # Interfaces TypeScript: orders, products...
│   │   ├── 📁 validators/       # Schemas Zod: loginSchema, registerSchema
│   │   └── 📁 views/            # Componentes de vista: HomeView, CartView...
│   ├── globals.css              # Estilos globales con Tailwind
│   ├── tailwind.config.ts       # Configuración de Tailwind
│   ├── next.config.ts           # Configuración de Next.js
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
├── README.md
└── eslint.config.mjs            # Configuración de ESLint
