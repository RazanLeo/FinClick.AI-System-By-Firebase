
import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "تحليل | منصة التحليل المالي",
  description: "أداة تحليل مالي متقدمة لاتخاذ قرارات استثمارية دقيقة.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.className} bg-gray-900 text-white`}>{children}</body>
    </html>
  );
}
