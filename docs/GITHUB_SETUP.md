# راهنمای اتصال به گیت‌هاب و دیپلوی

## ✅ پروژه کاملاً با گیت سازگار است

### مراحل اتصال به گیت‌هاب:

```bash
# 1. ساخت ریپازیتوری جدید در GitHub
# به github.com بروید و یک ریپازیتوری جدید بسازید

# 2. اتصال ریپازیتوری لوکال به GitHub
git remote add origin https://github.com/YOUR_USERNAME/antitheft-door-shop.git

# 3. پوشش کدها به گیت‌هاب
git branch -M main
git push -u origin main
```

### بعد از پوش، CI/CD خودکار اجرا می‌شود:

1. **Build & Test**: با هر push یا PR، تست‌ها اجرا می‌شوند
2. **Docker Build**: پس از موفقیت تست‌ها، ایمیج‌های Docker ساخته می‌شوند
3. **Deploy**: روی branch اصلی، دیپلوی خودکار انجام می‌شود

### تنظیم Secrets در GitHub:

به Settings > Secrets and variables > Actions بروید و این مقادیر را اضافه کنید:

```
DOCKER_USERNAME=your-docker-username
DOCKER_PASSWORD=your-docker-password-or-token
```

### Branches:

- `main`: نسخه production
- `develop`: نسخه development

### Pull Request Workflow:

```bash
# ساخت branch جدید
git checkout -b feature/new-feature

# commit تغییرات
git add .
git commit -m "feat: add new feature"

# پوش به GitHub
git push origin feature/new-feature

# ساخت PR در GitHub
```

### بررسی وضعیت CI/CD:

بعد از push، به تب Actions در GitHub بروید تا وضعیت build را ببینید.

---

## 📦 دانلود پروژه

برای دانلود کامل پروژه:

```bash
# Clone از GitHub
git clone https://github.com/YOUR_USERNAME/antitheft-door-shop.git
cd antitheft-door-shop

# نصب dependencies
pnpm install

# کپی env
cp .env.example .env

# اجرای Docker services
docker compose up -d

# Migration دیتابیس
pnpm db:migrate

# Seed داده‌های اولیه
pnpm db:seed

# اجرای پروژه
pnpm dev
```

---

## 🚀 دسترسی به سرویس‌ها:

- فروشگاه: http://localhost:3000
- پنل مدیریت: http://localhost:3001  
- API: http://localhost:3002
- PostgreSQL: localhost:5432
- Redis: localhost:6379

---

## 📝 نکات مهم:

1. فایل `.env` را commit نکنید (در .gitignore هست)
2. برای production حتماً secrets را تنظیم کنید
3. قبل از merge به main، مطمئن شوید تست‌ها پاس شده‌اند
4. از branch protection rules در GitHub استفاده کنید
