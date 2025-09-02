'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Brain, CloudUpload, Cpu, FileText, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="bg-black text-finclick-gold font-playfair">
       <style jsx global>{`
        .hero-section {
          background: #000000;
          color: #D4AF37;
        }

        .hero-bg {
          background-image:
            radial-gradient(circle at 15% 50%, rgba(212, 175, 55, 0.1), transparent 30%),
            radial-gradient(circle at 85% 30%, rgba(212, 175, 55, 0.08), transparent 25%),
            radial-gradient(circle at 50% 80%, rgba(212, 175, 55, 0.05), transparent 20%);
          filter: blur(20px);
          animation: pulse 15s infinite alternate;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(1.1); opacity: 1; }
        }

        .interactive-logo {
          transition: transform 0.3s ease, filter 0.3s ease;
          animation: float 6s ease-in-out infinite;
        }

        .interactive-logo:hover {
          transform: scale(1.1);
          filter: drop-shadow(0 0 15px #D4AF37);
        }

        @keyframes float {
            0% {
                transform: translatey(0px);
            }
            50% {
                transform: translatey(-10px);
            }
            100% {
                transform: translatey(0px);
            }
        }

        .text-gradient {
          background: linear-gradient(45deg, #D4AF37, #FFD700, #B8860B, #D4AF37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-animation 5s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes gradient-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .btn-primary {
          background-color: #D4AF37;
          color: #000000;
          border: 2px solid #D4AF37;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background-color: transparent;
          color: #D4AF37;
        }

        .btn-secondary {
            background-color: transparent;
            color: #D4AF37;
            border: 2px solid #D4AF37;
            transition: all 0.3s ease;
        }

        .btn-secondary:hover {
            background-color: #D4AF37;
            color: #000000;
        }

        .ticker-tape {
          background-color: #000000;
          color: #D4AF37;
        }

        .ticker-track {
            display: inline-block;
            animation: ticker 30s linear infinite;
        }

        @keyframes ticker {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .feature-card, .step-card, .analysis-type-card, .testimonial-card, .pricing-card {
          background: rgba(212, 175, 55, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 15px;
          padding: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover, .step-card:hover, .analysis-type-card:hover, .testimonial-card:hover, .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(212, 175, 55, 0.1);
        }

        .step-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(145deg, #d4af37, #b2912e);
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        }

        .rating {
          color: #FFD700;
        }

        .pricing-card.popular {
          border-color: #D4AF37;
          box-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
          position: relative;
        }

        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #D4AF37;
          color: #000;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section text-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 hero-bg"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative"
        >
          <Image
            src="/logo.png"
            alt="FinClick.AI Logo"
            width={192}
            height={192}
            className="w-48 h-auto mx-auto mb-6 interactive-logo"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">FinClick.AI</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-tajawal">
            نظام التحليل المالي الذكي والثوري
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-12 font-tajawal">
            ثورة ونقلة نوعية في عالم التحليل المالي. احصل على +181 نوع تحليل مالي فائق الدقة بضغطة زر.
          </p>
          <Link href="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #D4AF37" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg font-bold py-3 px-8 rounded-full"
            >
              ابدأ التحليل الآن <ArrowRight className="inline-block mr-2" />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Ticker Tape */}
      <div className="ticker-tape overflow-hidden whitespace-nowrap py-3 border-y border-finclick-gold/20">
        <div className="ticker-track flex">
          {/* Add real-time stock market tickers here */}
          <span className="mx-4">TASI: 11,500.20 (+0.5%)</span>
          <span className="mx-4">DOW: 38,800.50 (+0.2%)</span>
          <span className="mx-4">NASDAQ: 17,500.80 (+0.8%)</span>
          <span className="mx-4">S&P 500: 5,200.00 (+0.3%)</span>
          <span className="mx-4">FTSE: 7,900.70 (-0.1%)</span>
        </div>
      </div>

      {/* Why FinClick.AI Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">لماذا FinClick.AI؟</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto font-tajawal">
            نظام يقلب كل الموازين في عالم التحليل المالي، ويقدم لك رؤى لم تعهدها من قبل.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card">
              <Brain className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">ذكاء اصطناعي ثوري</h3>
              <p className="font-tajawal">يخدم كل مستفيدي التحليل المالي وكل أغراضه.</p>
            </div>
            <div className="feature-card">
              <BarChart3 className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">+181 تحليل مالي</h3>
              <p className="font-tajawal">جميع أنواع التحليل المالي المعروفة في العالم.</p>
            </div>
            <div className="feature-card">
              <Zap className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">سرعة فائقة</h3>
              <p className="font-tajawal">احصل على التحليل في ثوانٍ معدودة بضغطة زر.</p>
            </div>
            <div className="feature-card">
              <ShieldCheck className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">دقة وأمان</h3>
              <p className="font-tajawal">دقة تصل إلى 99% مع أعلى معايير الأمان.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-finclick-gold/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">ثلاث خطوات بسيطة نحو قرار مالي أذكى</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="step-card">
              <div className="step-icon"><CloudUpload size={40} /></div>
              <h3 className="text-2xl font-bold mt-6 mb-2">أرفق قوائمك</h3>
              <p className="font-tajawal">ارفع ملفاتك المالية بأي صيغة (PDF, Excel, صور) أو أدخل البيانات يدويًا.</p>
            </div>
            <div className="step-card">
              <div className="step-icon"><Cpu size={40} /></div>
              <h3 className="text-2xl font-bold mt-6 mb-2">حدد خياراتك</h3>
              <p className="font-tajawal">اختر قطاع شركتك، مستوى المقارنة، ونوع التحليل المطلوب.</p>
            </div>
            <div className="step-card">
              <div className="step-icon"><FileText size={40} /></div>
              <h3 className="text-2xl font-bold mt-6 mb-2">اضغط زر التحليل</h3>
              <p className="font-tajawal">احصل على تقارير مفصلة وعروض تقديمية احترافية في لحظات.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">أنواع التحليل المالي</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="analysis-type-card">
              <h3 className="text-2xl font-bold mb-4">التحليل الأساسي الكلاسيكي</h3>
              <ul className="list-disc list-inside font-tajawal">
                <li>التحليل الهيكلي للقوائم المالية</li>
                <li>النسب المالية الأساسية</li>
                <li>تحليلات التدفق والحركة</li>
              </ul>
            </div>
            <div className="analysis-type-card">
              <h3 className="text-2xl font-bold mb-4">التحليل التطبيقي المتوسط</h3>
              <ul className="list-disc list-inside font-tajawal">
                <li>تحليلات المقارنة المتقدمة</li>
                <li>تحليلات التقييم والاستثمار</li>
                <li>تحليلات الأداء والكفاءة</li>
              </ul>
            </div>
            <div className="analysis-type-card">
              <h3 className="text-2xl font-bold mb-4">التحليل المتقدم والمتطور</h3>
              <ul className="list-disc list-inside font-tajawal">
                <li>النمذجة والمحاكاة</li>
                <li>التحليل الإحصائي والكمي</li>
                <li>تحليل المحافظ والمخاطر</li>
                <li>الكشف والتنبؤ الذكي</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-finclick-gold/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">ماذا يقول عملاؤنا؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="testimonial-card">
              <p className="font-tajawal mb-4">\"نظام شامل ومتكامل ساعدني على أن أفهم أداء شركتي بسرعة ودقة وسهولة. أنصح كل الشركات به.\"</p>
              <div className="flex items-center">
                <div className="rating">★★★★★</div>
                <p className="font-semibold mr-4">مدير تنفيذي</p>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="font-tajawal mb-4">\"كمحلل مالي، لم أعد أضيع وقتي في الحسابات الطويلة. كل عملي أصبح أسهل واجتماعاتي أكثر احترافية.\"</p>
              <div className="flex items-center">
                <div className="rating">★★★★★</div>
                <p className="font-semibold mr-4">محلل مالي</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">خطط اشتراك مرنة</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="pricing-card">
              <h3 className="text-2xl font-bold mb-4">الخطة الشهرية</h3>
              <p className="text-5xl font-bold mb-4">5,000 <span className="text-lg">SAR</span></p>
              <p className="font-tajawal mb-6">/ شهرياً</p>
              <Link href="/register">
                <button className="btn-secondary">اشترك الآن</button>
              </Link>
            </div>
            <div className="pricing-card popular">
              <span className="popular-badge">الأكثر شيوعاً</span>
              <h3 className="text-2xl font-bold mb-4">الخطة السنوية</h3>
              <p className="text-5xl font-bold mb-2">54,000 <span className="text-lg">SAR</span></p>
              <p className="font-tajawal line-through text-gray-400">60,000 SAR</p>
              <p className="font-tajawal mb-6">وفر 6,000 ريال</p>
              <Link href="/register">
                <button className="btn-primary">اشترك الآن</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
