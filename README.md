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

```
---
## 📦 Estructura del Proyecto

```bash
MyApp-E-commerce/
│
├──  back/                     # API REST - Backend con Node.js + TypeORM
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
│   │   └──  views/            # Componentes de vista: HomeView, CartView...
│   ├── globals.css              # Estilos globales con Tailwind
│   ├── tailwind.config.ts       # Configuración de Tailwind
│   ├── next.config.ts           # Configuración de Next.js
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
├── README.md
└── eslint.config.mjs            # Configuración de ESLint
```
---
## ⚙️ Instalación y Configuración

### 📋 Prerrequisitos
- Node.js >= 18.x
- PostgreSQL >= 14.x (o MongoDB si adaptas TypeORM)
- Git

### 🔧 Paso a paso
```bash
# 1. Clonar el repositorio
git clone https://github.com/heberzan/MyApp-E-commerce.git
cd MyApp-E-commerce

# ==================================================
# 🔹 CONFIGURACIÓN DEL BACKEND
# ==================================================
cd back

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Edita .env con tus credenciales:
# - DATABASE_URL=postgresql://user:pass@localhost:5432/myapp_db
# - JWT_SECRET=tu_secreto_seguro
# - PORT=3000

# 4. Sincronizar base de datos (TypeORM)
npm run build
# O si tienes scripts de migración:
# npm run migration:run

# 5. Iniciar servidor en desarrollo
npm run dev
# El backend estará en: http://localhost:3000

# ==================================================
# 🔹 CONFIGURACIÓN DEL FRONTEND
# ==================================================
cd ../front

# 6. Instalar dependencias
npm install

# 7. Configurar variables de entorno (opcional)
# Crea .env.local si necesitas sobrescribir URLs:
# NEXT_PUBLIC_API_URL=http://localhost:3000/api

# 8. Iniciar aplicación en desarrollo
npm run dev
# El frontend estará en: http://localhost:3001 (o 5173 según config)
```
---
## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Para colaborar:

1. Haz **fork** del repositorio

2. Crea una rama para tu feature:
   ```bash
   git checkout -b feat/agregar-filtros-productos
   ```
3. Commit tus cambios con mensajes convencionales:
```bash
git commit -m "feat(cart): agregar persistencia en localStorage"
   ```
4. Push a tu rama:
```bash
git push origin feat/agregar-filtros-productos
   ```
5. Abre un Pull Request describiendo los cambios
---
### 📏 Convenciones de Commit
```bash
feat:     Nueva funcionalidad
fix:      Corrección de bug
docs:     Cambios en documentación
style:    Cambios de formato (sin lógica)
refactor: Mejora de código sin cambiar comportamiento
test:     Agregar o corregir pruebas
chore:    Tareas de mantenimiento (deps, config, etc.)
```
---
## 👨‍ Autor

**Heber Marzán** — Full Stack Developer

🎓 Especialista en Salud Ocupacional & Ingeniero Industrial  
🚀 Enfocado en soluciones limpias, escalables y tipo-safe

- 🐙 GitHub: [@heberzan](https://github.com/heberzan) ↗
-  LinkedIn: [Heber Marzán](https://linkedin.com/in/hebermarzan) *(opcional)*
- ✉️ Email: test_IV@vitared.com

> *"Código limpio, arquitectura sólida y UX intuitiva: la fórmula para productos digitales exitosos."*

## 👨‍💻 Autor

**Heber Marzán** - Full Stack Developer

- GitHub: [@heberzan](https://github.com/heberzan)
- LinkedIn: [Heber Marzán](https://linkedin.com/in/hebermarzan)
- Email: test_IV@vitared.com

## 👨‍💻 Autor

**Heber Marzán** — Full Stack Developer

[![GitHub](https://img.shields.io/badge/GitHub-@heberzan-181717?logo=github)](https://github.com/heberzan)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Heber%20Marzán-0A66C2?logo=linkedin)](https://linkedin.com/in/hebermarzan)
[![Email](https://img.shields.io/badge/Email-test__IV@vitared.com-D14836?logo=gmail)](mailto:test_IV@vitared.com)

> 🎓 Especialista en Salud Ocupacional & Ingeniero Industrial

## 👨‍ Autor

<div align="center">

**Heber Marzán** — Full Stack Developer

🎓 Especialista en Salud Ocupacional & Ingeniero Industrial  
🚀 Enfocado en soluciones limpias, escalables y tipo-safe

[🐙 GitHub](https://github.com/heberzan) • 
[💼 LinkedIn](https://linkedin.com/in/hebermarzan) • 
[✉️ Email](mailto:test_IV@vitared.com)

> *"Código limpio, arquitectura sólida y UX intuitiva"*

</div>

---
<div align="center">
<sub>Construido con ❤️, TypeScript y buenas prácticas • 2025</sub>
</div>
