
import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const pricingTiers = [
  {
    name: 'الاشتراك الشهري',
    price: '5,000',
    currency: 'ريال سعودي',
    pricePeriod: 'شهريًا',
    description: 'خطة مرنة تمنحك وصولاً كاملاً لجميع الميزات لتحليل غير محدود واتخاذ قرارات مستنيرة.',
    features: [
      'وصول كامل لمنصة FinClick.AI',
      'تحليل أكثر من 181 نوعًا من التحليلات المالية',
      'دعم فني متكامل',
      'تصدير جميع التقارير والبيانات',
    ],
    isFeatured: false,
  },
  {
    name: 'الاشتراك السنوي',
    price: '54,000',
    originalPrice: '60,000',
    currency: 'ريال سعودي',
    pricePeriod: 'سنويًا',
    description: 'الخيار الأفضل للحصول على قيمة مستمرة، مع توفير 10% على اشتراكك السنوي.',
    features: [
      'جميع مزايا الخطة الشهرية',
      'توفير 10% مقارنة بالاشتراك الشهري',
      'أولوية في الحصول على الميزات الجديدة',
      'جلسة تدريبية تعريفية عند بدء الاشتراك',
    ],
    isFeatured: true,
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-black text-finclick-gold p-8 font-tajawal">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-4">خطط اشتراك مرنة وقوية</h1>
          <p className="text-xl text-finclick-gold/80 max-w-3xl mx-auto">
            ابدأ رحلتك نحو التمكين المالي مع FinClick.AI. اختر الخطة التي تناسب احتياجاتك واستفد من قوة التحليل المالي المدعوم بالذكاء الاصطناعي.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`card p-8 rounded-lg flex flex-col w-full max-w-md ${tier.isFeatured ? 'border-2 border-finclick-gold shadow-2xl shadow-finclick-gold/20' : ''}`}
            >
              {tier.isFeatured && (
                <div className="text-center -mt-12 mb-6">
                  <span className="bg-finclick-gold text-black font-bold text-sm px-6 py-2 rounded-full">الخيار الأفضل (توفير 10%)</span>
                </div>
              )}
              <h2 className="text-3xl font-playfair font-bold text-center mb-4">{tier.name}</h2>
              <p className="text-center text-finclick-gold/70 mb-6 h-16">{tier.description}</p>
              
              <div className="text-center mb-8">
                 {tier.originalPrice && (
                  <p className="text-lg text-red-400 line-through">
                    {tier.originalPrice} {tier.currency}
                  </p>
                )}
                <span className="text-5xl font-bold">{tier.price}</span>
                <span className="text-xl font-medium"> {tier.currency}</span>
                <span className="text-finclick-gold/60"> / {tier.pricePeriod}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className="text-green-400 h-6 w-6 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full font-bold text-lg py-3 rounded-md transition-transform duration-200 ${tier.isFeatured ? 'btn-primary transform hover:scale-105' : 'btn'}`}>
                ابدأ الاشتراك
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
