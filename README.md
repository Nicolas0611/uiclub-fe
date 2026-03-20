# UIClub — Frontend (`uiclub-fe`)

Aplicación web construida con **Next.js (App Router)** que gestiona design systems, componentes, empresas, enlaces Figma y más. Persistencia con **PostgreSQL** vía **Prisma**, autenticación con **NextAuth v5** y UI con **HeroUI** + **Tailwind CSS**.

---

## Tabla de stack tecnológico

| Categoría                | Tecnología                                     | Versión / notas                             |
| ------------------------ | ---------------------------------------------- | ------------------------------------------- |
| Runtime                  | Node.js                                        | **20** (CI en GitHub Actions)               |
| Framework                | Next.js                                        | **15.x** (App Router)                       |
| UI                       | React                                          | **19.x**                                    |
| Lenguaje                 | TypeScript                                     | **5.x**                                     |
| Estilos                  | Tailwind CSS                                   | **3.4.x**                                   |
| Componentes UI           | @heroui/react, @heroicons/react                | —                                           |
| Animación                | framer-motion                                  | —                                           |
| ORM / DB                 | Prisma + `@prisma/client`                      | **6.15.x**, PostgreSQL                      |
| Auth                     | next-auth (v5 beta)                            | Ruta API: `src/app/api/auth/[...nextauth]/` |
| Formularios / validación | react-hook-form, zod                           | —                                           |
| Imágenes                 | cloudinary                                     | Subidas desde server actions                |
| Cookies                  | cookies-next                                   | —                                           |
| Notificaciones           | react-toastify                                 | —                                           |
| Otros UI                 | lottie-react                                   | —                                           |
| Observabilidad (prod)    | @vercel/analytics, @vercel/speed-insights      | —                                           |
| Tests                    | Vitest, Testing Library, jsdom                 | Patrones: `*.test.*` / `*.spec.*` en `src/` |
| Lint                     | ESLint + eslint-config-next                    | **9.x** / **15.1.3**                        |
| Build                    | `prisma generate` integrado en `npm run build` | Ver scripts                                 |

### Dependencias de desarrollo destacadas

| Herramienta                                   | Uso                                            |
| --------------------------------------------- | ---------------------------------------------- |
| `prisma`                                      | CLI: migraciones, `generate`, `migrate deploy` |
| `ts-node`                                     | Ejecución del seed (`npm run seed`)            |
| `@vitejs/plugin-react`, `vite-tsconfig-paths` | Entorno de tests Vitest                        |

---

## Requisitos previos

- **Node.js 20** y npm
- **Docker** (recomendado para PostgreSQL local)
- Archivo **`.env`** / **`.env.local`** con `DATABASE_URL`, `DIRECT_URL` y variables de NextAuth y servicios externos (Cloudinary, etc.) según tu entorno

---

## Variables de entorno (referencia)

Prisma espera al menos:

| Variable       | Rol                                                        |
| -------------- | ---------------------------------------------------------- |
| `DATABASE_URL` | Conexión principal a PostgreSQL                            |
| `DIRECT_URL`   | URL directa (p. ej. para migraciones / connection pooling) |

El resto depende de **NextAuth**, **Cloudinary** y la configuración de despliegue; revisa `.env.example` si existe en el repo o copia desde la documentación interna del equipo.

---

## Puesta en marcha (desarrollo local)

### 1. Base de datos con Docker (solo Postgres para este frontend)

Desde la carpeta **`uiclub-fe`**, el compose usa variables `DB_USER`, `DB_NAME`, `DB_PASSWORD` (defínelas en `.env` o en tu shell):

```bash
docker compose -f docker-compose.dev.yml up -d
```

- Servicio: **PostgreSQL 15.3**, contenedor `uiclub-db`, puerto **5432**
- Datos persistentes: directorio **`./postgres`** (gitignored habitualmente)

### 2. Instalar dependencias y Prisma

```bash
npm install
npx prisma migrate dev    # o: npm run migrate
npx prisma generate       # también se ejecuta en build
```

### 3. Seed (opcional)

```bash
npm run seed
```

### 4. Servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

---

## Docker en el monorepo (`uiclub-project`)

En la **raíz del monorepo** existe un `docker-compose.yml` que orquesta **Postgres**, **backend Django** (`uiclub-be`) y **frontend Next** (`uiclub-fe`). El servicio `frontend` referencia un `dev.Dockerfile` bajo `uiclub-fe`; si ese archivo no está presente en tu clon, tendrás que levantar el frontend con `npm run dev` o restaurar el Dockerfile según el equipo.

| Servicio (raíz) | Puerto | Descripción breve                                         |
| --------------- | ------ | --------------------------------------------------------- |
| `db`            | 5432   | PostgreSQL 14.3 (DjangoDB en el ejemplo del compose)      |
| `backend`       | 8000   | API Django                                                |
| `frontend`      | 3000   | Next.js en contenedor (si el build context está completo) |

Este README se centra en **`uiclub-fe`**; el backend tiene su propio flujo en `uiclub-be`.

---

## Prisma

| Ruta / concepto        | Descripción                                             |
| ---------------------- | ------------------------------------------------------- |
| `prisma/schema.prisma` | Esquema y modelos                                       |
| `prisma/migrations/`   | Migraciones versionadas                                 |
| Proveedor DB           | **postgresql** (`url` + `directUrl` en `schema.prisma`) |

| Comando                     | Cuándo usarlo                                     |
| --------------------------- | ------------------------------------------------- |
| `npm run migrate`           | Desarrollo: `prisma migrate dev`                  |
| `npx prisma migrate deploy` | Producción / CI: aplica migraciones sin prompts   |
| `npx prisma generate`       | Regenera el cliente (incluido en `npm run build`) |
| `npm run seed`              | Poblar datos vía `ts-node src/utils/seed.ts`      |

---

## Scripts npm

| Script            | Descripción                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Next.js en modo desarrollo               |
| `npm run build`   | `prisma generate` + `next build`         |
| `npm run start`   | Servidor de producción                   |
| `npm run lint`    | ESLint (Next)                            |
| `npm test`        | Vitest en modo run (`--passWithNoTests`) |
| `npm run migrate` | Alias de `npx prisma migrate dev`        |
| `npm run seed`    | Ejecuta el seed con `ts-node`            |

---

## Estructura del repositorio (`uiclub-fe`)

Vista resumida de archivos y carpetas relevantes (sin `node_modules`, `.next`, etc.):

```text
uiclub-fe/
├── .github/
│   └── workflows/
│       └── cd.yml              # CI/CD: lint, Prisma, build, Vercel
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── public/                     # Estáticos servidos por Next
├── src/
│   ├── app/                    # App Router: páginas, layouts, API routes
│   │   ├── api/auth/[...nextauth]/
│   │   ├── auth/
│   │   ├── dashboard/          # CRUD admin: companies, components, figma, etc.
│   │   ├── design-systems/
│   │   └── ...
│   ├── actions/                # Server Actions (dominio por carpeta)
│   ├── adapters/               # Ej. PrismaAdapter
│   ├── components/
│   │   ├── shared/             # UI reutilizable (Navbar, Sidebar, …)
│   │   └── custom/             # Vistas específicas (home, design-systems, …)
│   ├── constants/
│   ├── interfaces/
│   ├── lib/                    # Cliente Prisma singleton (`prisma.ts`)
│   ├── providers/              # HeroUI, NextAuth
│   └── utils/                  # Utilidades + `seed.ts`
├── docker-compose.dev.yml      # Postgres local para el frontend
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vitest.config.mts
```

### Tabla: qué hay en cada zona de `src/`

| Ruta                          | Propósito                                                                   |
| ----------------------------- | --------------------------------------------------------------------------- |
| `src/app/`                    | Rutas, layouts, `loading.tsx`, `not-found`, rutas API                       |
| `src/app/dashboard/*`         | Panel: empresas, design systems, componentes, tipos, Figma, links, usuarios |
| `src/actions/*`               | Mutaciones y lecturas desde el servidor (Prisma, Cloudinary, auth)          |
| `src/lib/prisma.ts`           | Instancia de Prisma Client                                                  |
| `src/adapters/PrismaAdapter/` | Capa de acceso a datos alineada con interfaces                              |
| `src/components/shared/`      | Piezas de UI genéricas                                                      |
| `src/components/custom/`      | Bloques de página / dominio                                                 |
| `src/providers/`              | Contexto de librerías (temas, sesión)                                       |
| `src/utils/seed.ts`           | Datos iniciales para desarrollo                                             |

---

## GitHub Actions — CD (`/.github/workflows/cd.yml`)

El workflow **CD Pipeline** se dispara en **push** y **pull_request** hacia **`main`**.

| Paso                        | Descripción                                          |
| --------------------------- | ---------------------------------------------------- |
| Checkout                    | Código del repo                                      |
| Node 20 + cache npm         | Instalación reproducible                             |
| `npm install`               | Dependencias                                         |
| `npm run lint`              | Calidad estática                                     |
| `npx prisma migrate deploy` | Migraciones contra DB de producción (secrets)        |
| `npm run build`             | Build de Next (requiere `DATABASE_URL`)              |
| Deploy Vercel               | `amondnet/vercel-action` con token e IDs de proyecto |

### Secrets esperados en GitHub

| Secret              | Uso                       |
| ------------------- | ------------------------- |
| `DATABASE_URL`      | Prisma (migrate + build)  |
| `DIRECT_URL`        | Prisma (`migrate deploy`) |
| `VERCEL_TOKEN`      | Despliegue                |
| `VERCEL_ORG_ID`     | Organización Vercel       |
| `VERCEL_PROJECT_ID` | Proyecto Vercel           |

> El paso de **seed** en CI está comentado en el workflow; actívalo solo si el seed es idempotente y seguro para el entorno objetivo.

---

## Tests

- Configuración: **`vitest.config.mts`** (entorno **jsdom**, tests bajo `src/**/*.{test,spec}.{ts,tsx}`).
- Ejecutar: `npm test`.

---

## Despliegue

- **Producción**: el pipeline despliega a **Vercel** tras un build exitoso.
- Asegúrate de que las variables de entorno en Vercel coincidan con las que usa Prisma y NextAuth.

---

## Referencias

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
