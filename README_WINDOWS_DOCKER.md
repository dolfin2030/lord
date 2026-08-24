# 🚀 راهنمای سریع اجرای پروژه با Docker در ویندوز

## اجرای سریع (۳ مرحله)

### ۱. کپی فایل محیطی
```powershell
Copy-Item .env.example .env
```

### ۲. اجرای کامل پروژه
```powershell
docker compose up --build -d
```

### ۳. مشاهده وضعیت
```powershell
docker compose ps
```

## دسترسی به سرویس‌ها

| سرویس | آدرس |
|-------|------|
| 🛍️ فروشگاه | http://localhost:3000 |
| 🔧 پنل مدیریت | http://localhost:3001 |
| 🚀 API | http://localhost:3002 |
| 📊 pgAdmin | http://localhost:5050 |

## دستورات ضروری

```powershell
# توقف پروژه
docker compose down

# مشاهده لاگ‌ها
docker compose logs -f

# ری‌استارت
docker compose restart

# حذف کامل (دیتابیس پاک می‌شود!)
docker compose down -v
```

## نکات مهم

✅ Docker Desktop باید اجرا باشد  
✅ حداقل 4GB RAM نیاز است  
✅ اولین اجرا 5-10 دقیقه طول می‌کشد  

برای راهنمای کامل، فایل `docs/RUNNING_WITH_DOCKER_WINDOWS.md` را مطالعه کنید.
