import './styles/globals.css';
import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'فروشگاه درب ضد سرقت | درب‌های امنیتی لوکس و باکیفیت',
  description: 'مرجع تخصصی فروش درب ضد سرقت، درب آپارتمان، درب ویلا، درب ضد حریق. بهترین برندهای ایرانی و ترک با گارانتی معتبر و نصب حرفه‌ای.',
  keywords: ['درب ضد سرقت', 'درب آپارتمان', 'درب ویلا', 'درب ضد حریق', 'درب لوکس', 'درب ایمنی', 'درب امنیتی'],
  authors: [{ name: 'فروشگاه درب ضد سرقت' }],
  openGraph: {
    title: 'فروشگاه درب ضد سرقت | درب‌های امنیتی لوکس',
    description: 'خرید اینترنتی درب ضد سرقت با بهترین قیمت و کیفیت',
    type: 'website',
    locale: 'fa_IR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'فروشگاه درب ضد سرقت',
    description: 'خرید اینترنتی درب ضد سرقت با بهترین قیمت و کیفیت',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>{children}</body>
    </html>
  );
}
