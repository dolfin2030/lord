# 🚪 فروشگاه اینترنتی درب ضد سرقت

یک پلتفرم جامع فروشگاهی برای درب‌های ضد سرقت با معماری مدرن و مقیاس‌پذیر.

## 📋 فهرست محتوا

- [معرفی](#معرفی)
- [معماری پروژه](#معماری-پروژه)
- [تکنولوژی‌ها](#تکنولوژی‌ها)
- [ساختار پروژه](#ساختار-پروژه)
- [نصب و راه‌اندازی](#نصب-و-راه‌اندازی)
- [API Documentation](#api-documentation)
- [پنل مدیریت](#پنل-مدیریت)
- [SEO](#seo)
- [امنیت](#امنیت)

## معرفی

این پروژه یک سیستم فروشگاهی کامل برای فروش درب‌های ضد سرقت است که شامل:

- ✅ **فروشگاه آنلاین** (Next.js)
- ✅ **پنل مدیریت** (Refine + Next.js)
- ✅ **Backend API** (NestJS)
- ✅ **دیتابیس PostgreSQL**
- ✅ **کش Redis**
- ✅ **Docker & Nginx**

## معماری پروژه

```
anti-theft-door-shop/
├── apps/
│   ├── web/              # سایت فروشگاهی (port: 3000)
│   ├── admin/            # پنل مدیریت (port: 3002)
│   └── api/              # Backend API (port: 3001)
├── packages/
│   ├── ui/               # کامپوننت‌های مشترک
│   ├── shared/           # Types / Validation
│   └── config/           # تنظیمات مشترک
├── prisma/
│   └── schema.prisma     # Database Schema
├── infrastructure/
│   ├── docker/           # Dockerfiles
│   └── nginx/            # Nginx Config
└── docs/                 # مستندات
```

## تکنولوژی‌ها

### Frontend (Web & Admin)
- **Next.js 14** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI Components
- **RTL Support** - فارسی

### Backend (API)
- **NestJS** - Node.js Framework
- **Prisma** - ORM
- **PostgreSQL** - Database
- **Redis** - Caching
- **JWT** - Authentication
- **bcrypt** - Password Hashing
- **class-validator** - Validation
- **Swagger** - API Docs

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Orchestration
- **Nginx** - Reverse Proxy
- **pnpm** - Package Manager
- **Turborepo** - Monorepo Build System

## ساختار پروژه

### مدل‌های دیتابیس

```prisma
User          # کاربران
Role          # نقش‌ها (CUSTOMER, ADMIN, MANAGER, SUPPORT)
Category      # دسته‌بندی محصولات
Brand         # برندها
Product       # محصولات
ProductImage  # تصاویر محصول
ProductVariant # ورژن‌های محصول
Cart          # سبد خرید
CartItem      # آیتم‌های سبد
Order         # سفارشات
OrderItem     # آیتم‌های سفارش
Payment       # پرداخت‌ها
Address       # آدرس‌ها
Coupon        # کدهای تخفیف
BlogPost      # مقالات
Project       # نمونه پروژه‌ها
Review        # نظرات
Setting       # تنظیمات
AuditLog      # لاگ فعالیت‌ها
```

### ویژگی‌های مخصوص درب ضد سرقت

هر محصول دارای فیلدهای تخصصی زیر است:

- `doorType` - نوع درب (آپارتمان، ویلا، ضد حریق، لوکس)
- `dimensions` - ابعاد (عرض x ارتفاع x عمق)
- `sheetThickness` - ضخامت ورق (میلی‌متر)
- `frameThickness` - ضخامت چهارچوب
- `sheetMaterial` - جنس ورق (فولاد، استیل)
- `coatingMaterial` - جنس روکش (MDF، چوب، رنگ کوره‌ای)
- `lockType` - نوع قفل (کلید، کارتی، هوشمند)
- `hingeType` - نوع لولا
- `hingeCount` - تعداد لولا
- `soundInsulation` - عایق صوتی
- `heatInsulation` - عایق حرارتی
- `fireResistance` - مقاومت در برابر حریق
- `fireRating` - دقیقه مقاومت در برابر حریق
- `color` - رنگ
- `openingDirection` - جهت بازشو (راست‌باز، چپ‌باز)
- `customizable` - قابلیت سفارشی‌سازی
- `warranty` - ماه گارانتی
- `installation` - خدمات نصب

## نصب و راه‌اندازی

### پیش‌نیازها

- Node.js >= 18
- pnpm >= 8
- Docker & Docker Compose

### راه‌اندازی سریع با Docker

```bash
# کلون کردن پروژه
cd anti-theft-door-shop

# اجرای تمام سرویس‌ها
docker-compose up -d

# مشاهده لاگ‌ها
docker-compose logs -f

# دسترسی به سرویس‌ها
# Web: http://localhost:3000
# API: http://localhost:3001
# Admin: http://localhost:3002
# Swagger: http://localhost:3001/api/docs
```

### راه‌اندازی محلی (Development)

```bash
# نصب dependencies
pnpm install

# تولید Prisma Client
pnpm db:generate

# اجرای миграция‌ها
pnpm db:migrate

# Seed دیتابیس (اختیاری)
pnpm db:seed

# اجرای همزمان تمام سرویس‌ها
pnpm dev
```

### متغیرهای محیطی

فایل `.env` را در ریشه پروژه ایجاد کنید:

```env
# Database
DATABASE_URL="postgresql://doorshop:doorshop_secret@localhost:5432/doorshop"

# Redis
REDIS_URL="redis://localhost:6379"

# JWT
JWT_ACCESS_SECRET="your-super-secret-access-key"
JWT_REFRESH_SECRET="your-super-secret-refresh-key"

# App
PORT=3001
NODE_ENV=development

# CORS
ALLOWED_ORIGINS="http://localhost:3000,http://localhost:3002"
```

## API Documentation

### Endpoints اصلی

#### Authentication
```
POST   /api/v1/auth/register      # ثبت‌نام
POST   /api/v1/auth/login         # ورود
POST   /api/v1/auth/logout        # خروج
POST   /api/v1/auth/refresh       # Refresh Token
POST   /api/v1/auth/forgot-password
POST   /api/v1/auth/reset-password
```

#### Products
```
GET    /api/v1/products           # لیست محصولات (با فیلتر و جستجو)
GET    /api/v1/products/:slug     # محصول بر اساس slug
GET    /api/v1/products/featured  # محصولات ویژه
GET    /api/v1/products/best-sellers
GET    /api/v1/products/category/:id
GET    /api/v1/products/brand/:id
GET    /api/v1/products/search?q=...
POST   /api/v1/products           # ایجاد محصول (Admin)
PATCH  /api/v1/products/:id       # ویرایش محصول (Admin)
DELETE /api/v1/products/:id       # حذف محصول (Admin)
```

#### Categories
```
GET    /api/v1/categories         # لیست دسته‌بندی‌ها
GET    /api/v1/categories/:id     # جزئیات دسته‌بندی
POST   /api/v1/categories         # ایجاد (Admin)
PATCH  /api/v1/categories/:id     # ویرایش (Admin)
DELETE /api/v1/categories/:id     # حذف (Admin)
```

#### Orders
```
GET    /api/v1/orders             # لیست سفارشات کاربر
GET    /api/v1/orders/:id         # جزئیات سفارش
POST   /api/v1/orders             # ثبت سفارش جدید
PATCH  /api/v1/orders/:id/status  # تغییر وضعیت (Admin)
```

#### Cart
```
GET    /api/v1/cart               # سبد خرید فعلی
POST   /api/v1/cart/items         # افزودن به سبد
PATCH  /api/v1/cart/items/:id     # ویرایش مقدار
DELETE /api/v1/cart/items/:id     # حذف از سبد
```

### Swagger Documentation

در محیط توسعه، مستندات کامل API در دسترس است:

```
http://localhost:3001/api/docs
```

## پنل مدیریت

### دسترسی

```
URL: http://localhost:3002
Email: admin@example.com
Password: admin123
```

### بخش‌های پنل

```
Dashboard
├── فروشگاه
│   ├── محصولات (CRUD)
│   ├── دسته‌بندی‌ها
│   ├── برندها
│   ├── ویژگی‌ها
│   └── موجودی
├── سفارشات
│   ├── سفارشات جدید
│   ├── در حال پردازش
│   ├── ارسال شده
│   └── تکمیل شده
├── مشتریان
├── بازاریابی
│   ├── تخفیف‌ها
│   ├── کمپین‌ها
│   └── بنرها
├── محتوا
│   ├── مقالات
│   ├── صفحات
│   ├── FAQ
│   └── پروژه‌ها
├── SEO
├── گزارشات
└── تنظیمات
```

## SEO

### ویژگی‌های SEO

- ✅ Meta Tags پویا برای هر صفحه
- ✅ Open Graph Tags
- ✅ Twitter Cards
- ✅ Schema.org Structured Data
  - Product Schema
  - Organization Schema
  - LocalBusiness Schema
  - Breadcrumb Schema
  - FAQ Schema
  - Article Schema
- ✅ Sitemap.xml خودکار
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ JSON-LD
- ✅ پشتیبانی از Jalali Date
- ✅ URLهای فارسی

### صفحات SEO Landing

```
/درب-ضد-سرقت
/درب-ضد-سرقت-ایرانی
/درب-ضد-سرقت-ترک
/درب-ضد-سرعت-لوکس
/درب-ضد-سرعت-آپارتمان
/درب-ضد-سرعت-ویلا
/درب-ضد-سرعت-ضد-حریق
/درب-ضد-سرعت-ارزان
```

## امنیت

### ویژگی‌های امنیتی

- ✅ JWT Authentication با Access & Refresh Tokens
- ✅ Password Hashing با bcrypt
- ✅ Rate Limiting (Throttler)
- ✅ CORS Configuration
- ✅ Input Validation (class-validator)
- ✅ SQL Injection Prevention (Prisma)
- ✅ XSS Protection
- ✅ Helmet Headers
- ✅ Role-Based Access Control (RBAC)
- ✅ Audit Logging
- ✅ HTTPS Ready

### نقش‌ها و دسترسی‌ها

| Role | دسترسی‌ها |
|------|----------|
| CUSTOMER | مشاهده محصولات، سبد خرید، سفارش |
| MANAGER | مدیریت محصولات، سفارشات، مشتریان |
| ADMIN | دسترسی کامل به تمام بخش‌ها |
| SUPPORT | مشاهده سفارشات، پاسخ به نظرات |

## Scripts

```bash
# Development
pnpm dev              # اجرای تمام سرویس‌ها
pnpm dev:web          # فقط وبسایت
pnpm dev:admin        # فقط پنل مدیریت
pnpm dev:api          # فقط API

# Build
pnpm build            # بیلد تمام سرویس‌ها
pnpm build:web
pnpm build:admin
pnpm build:api

# Database
pnpm db:generate      # تولید Prisma Client
pnpm db:migrate       # اجرای迁移‌ها
pnpm db:seed          # Seed دیتابیس
pnpm db:studio        # Prisma Studio

# Docker
pnpm docker:up        # اجرای Docker Compose
pnpm docker:down      # توقف Docker Compose
pnpm docker:build     # بیلد ایمیج‌ها
pnpm docker:logs      # مشاهده لاگ‌ها

# Testing
pnpm test             # اجرای تست‌ها
pnpm test:coverage    # تست با Coverage
pnpm lint             # Linting
```

## Contributing

1. Fork پروژه
2. Branch جدید بسازید (`git checkout -b feature/amazing-feature`)
3. Commit کنید (`git commit -m 'Add amazing feature'`)
4. Push کنید (`git push origin feature/amazing-feature`)
5. Pull Request باز کنید

## License

MIT License

## تماس و پشتیبانی

برای سوالات و پشتیبانی:
- Email: support@example.com
- Phone: 021-12345678

---

**ساخته شده با ❤️ برای صنعت درب ضد سرقت ایران**
