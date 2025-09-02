
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-finclick-gold/20 py-12 font-tajawal">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Image 
              src="/logo.png" 
              alt="FinClick.AI" 
              width={150} 
              height={45}
              className="mb-4"
            />
            <p className="text-finclick-gold/70">
              نظام التحليل المالي الذكي والثوري
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="/"><a className="hover:text-finclick-gold-light">الرئيسية</a></Link></li>
              <li><Link href="/dashboard"><a className="hover:text-finclick-gold-light">ابدأ التحليل</a></Link></li>
              <li><Link href="/pricing"><a className="hover:text-finclick-gold-light">الأسعار</a></Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">معلومات</h3>
            <ul className="space-y-2">
              <li><Link href="/about"><a className="hover:text-finclick-gold-light">من نحن</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-finclick-gold-light">تواصل معنا</a></Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">قانوني</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy"><a className="hover:text-finclick-gold-light">سياسة الخصوصية</a></Link></li>
              <li><Link href="/terms"><a className="hover:text-finclick-gold-light">شروط الاستخدام</a></Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-finclick-gold/20 pt-8 text-center text-finclick-gold/60">
          <p>&copy; {new Date().getFullYear()} FinClick.AI - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
