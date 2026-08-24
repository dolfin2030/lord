import Link from 'next/link';
import { ShoppingCart, Menu, Phone, Search } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-primary">
              🚪 درب ضد سرقت
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="hover:text-primary transition">صفحه اصلی</Link>
              <Link href="/products" className="hover:text-primary transition">محصولات</Link>
              <Link href="/categories" className="hover:text-primary transition">دسته‌بندی‌ها</Link>
              <Link href="/brands" className="hover:text-primary transition">برندها</Link>
              <Link href="/blog" className="hover:text-primary transition">مقالات</Link>
              <Link href="/contact" className="hover:text-primary transition">تماس با ما</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search className="w-5 h-5" />
              </button>
              <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </Link>
              <button className="p-2 hover:bg-gray-100 rounded-full md:hidden">
                <Menu className="w-5 h-5" />
              </button>
              <a href="tel:02112345678" className="hidden md:flex items-center gap-2 text-primary">
                <Phone className="w-5 h-5" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-l from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                درب ضد سرقت لوکس و ایمن برای خانه شما
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                بهترین درب‌های ضد سرقت ایرانی و ترک با گارانتی معتبر، نصب حرفه‌ای و قیمت مناسب. امنیت خانه خود را به ما بسپارید.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/products" 
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition font-bold"
                >
                  مشاهده محصولات
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition font-bold"
                >
                  مشاوره رایگان
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                <span className="text-9xl">🚪</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">دسته‌بندی محصولات</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'درب آپارتمان', icon: '🏢' },
              { name: 'درب ویلا', icon: '🏡' },
              { name: 'درب ضد حریق', icon: '🔥' },
              { name: 'درب لوکس', icon: '✨' },
            ].map((category) => (
              <Link 
                key={category.name}
                href={`/categories/${category.name}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition">{category.icon}</div>
                <h3 className="font-bold text-lg">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">محصولات ویژه</h2>
            <Link href="/products" className="text-primary hover:underline">مشاهده همه →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                  <span className="text-6xl">🚪</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">درب ضد سرقت مدل لوکس {i}</h3>
                  <p className="text-gray-600 text-sm mb-4">ورق فولادی ۲mm، روکش MDF، قفل هوشمند</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{(i * 15000000).toLocaleString('fa-IR')} تومان</span>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition">
                      افزودن به سبد
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">چرا ما را انتخاب کنید؟</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '✓', title: 'گارانتی معتبر', desc: 'تا ۵ سال گارانتی رسمی' },
              { icon: '🚚', title: 'ارسال رایگان', desc: 'به سراسر کشور' },
              { icon: '🔧', title: 'نصب حرفه‌ای', desc: 'تیم نصب مجرب' },
              { icon: '💳', title: 'پرداخت امن', desc: 'درگاه پرداخت معتبر' },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="opacity-90">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">🚪 درب ضد سرقت</h3>
              <p className="text-gray-400 leading-relaxed">
                مرجع تخصصی فروش درب‌های ضد سرقت با بیش از ۱۰ سال تجربه در صنعت درب و پنجره.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">دسترسی سریع</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/products" className="hover:text-white transition">محصولات</Link></li>
                <li><Link href="/about" className="hover:text-white transition">درباره ما</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">مقالات</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">تماس با ما</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">دسته‌بندی‌ها</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition">درب آپارتمان</Link></li>
                <li><Link href="#" className="hover:text-white transition">درب ویلا</Link></li>
                <li><Link href="#" className="hover:text-white transition">درب ضد حریق</Link></li>
                <li><Link href="#" className="hover:text-white transition">درب لوکس</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">تماس با ما</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 تهران، خیابان ولیعصر</li>
                <li>📞 ۰۲۱-۱۲۳۴۵۶۷۸</li>
                <li>📱 ۰۹۱۲-۱۲۳۴۵۶۷</li>
                <li>✉️ info@door-shop.ir</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © ۱۴۰۳ فروشگاه درب ضد سرقت. تمامی حقوق محفوظ است.
          </div>
        </div>
      </footer>
    </div>
  );
}
