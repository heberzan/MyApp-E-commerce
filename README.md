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
