import type { Metadata } from 'next';
import '@refinedev/chakra-ui/dist/index.css';

export const metadata: Metadata = {
  title: 'پنل مدیریت | فروشگاه درب ضد سرقت',
  description: 'پنل مدیریت فروشگاه درب ضد سرقت',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
