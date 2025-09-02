
import React from 'react';
import { motion } from 'framer-motion';
import { Aperture, Rocket, Target, Star } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-finclick-gold p-8 font-tajawal">
      <div className="container mx-auto py-12">
        
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-playfair font-bold mb-4">عن FinClick.AI</h1>
          <p className="text-xl text-finclick-gold/80 max-w-3xl mx-auto">
            نظام التحليل المالي الذكي والثوري الذي يُعيد تعريف معايير الدقة والسرعة في عالم المال.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="card p-8 flex items-center gap-8"
          >
            <Aperture className="w-16 h-16 text-finclick-gold flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-3">رؤيتنا (Vision)</h2>
              <p className="text-lg text-finclick-gold/90">
                أن نُحدث ثورة عالمية في عالم التحليل المالي من خلال منصة ذكاء اصطناعي سعودية مبتكرة ترافق صناع القرار لحظيًا، وتُصبح المعيار الذهبي للتحليل المالي الذكي الشامل لجميع أنواع التحليل المالي بضغطة زر. وأن نكون المستثمر الأول في التقنية المالية القائمة على الـ AI في المنطقة والعالم.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="card p-8 flex items-center gap-8 text-right"
          >
             <div>
              <h2 className="text-3xl font-playfair font-bold mb-3">رسالتنا (Mission)</h2>
              <p className="text-lg text-finclick-gold/90">
                تسخير قوة الذكاء الاصطناعي المتقدم لتوفير نظام تحليل مالي شامل وفوري يُمكّن جميع الشركات والمؤسسات والمنظمات من فهم أدائها المالي، اكتشاف المخاطر والفرص، واتخاذ قرارات دقيقة، بسرعة وسهولة غير مسبوقة، دون الحاجة لخبرات مالية متعمقة.
              </p>
            </div>
            <Rocket className="w-16 h-16 text-finclick-gold flex-shrink-0" />
          </motion.div>

          {/* Objectives */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="card p-8"
          >
            <h2 className="text-3xl font-playfair font-bold mb-6 text-center flex items-center justify-center gap-4"><Target /> أهدافنا (Objectives)</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
              <li className="p-4 bg-finclick-gold/5 rounded-md">قيادة التحول الرقمي في التحليل المالي.</li>
              <li className="p-4 bg-finclick-gold/5 rounded-md">إتاحة التحليل المالي العميق بضغطة زر.</li>
              <li className="p-4 bg-finclick-gold/5 rounded-md">الأتمتة الكاملة للعملية التحليلية.</li>
              <li className="p-4 bg-finclick-gold/5 rounded-md">الشمولية والعمق في التحليل.</li>
              <li className="p-4 bg-finclick-gold/5 rounded-md">سهولة الاستخدام والدقة والموثوقية.</li>
              <li className="p-4 bg-finclick-gold/5 rounded-md">تحقيق قيمة تجارية مستدامة.</li>
            </ul>
          </motion.div>
          
          {/* Core Values */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="card p-8"
          >
            <h2 className="text-3xl font-playfair font-bold mb-8 text-center flex items-center justify-center gap-4"><Star /> قيمنا الأساسية</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                <div className="flex flex-col items-center"><h3 className="text-xl font-bold">الابتكار</h3></div>
                <div className="flex flex-col items-center"><h3 className="text-xl font-bold">الدقة</h3></div>
                <div className="flex flex-col items-center"><h3 className="text-xl font-bold">السرعة</h3></div>
                <div className="flex flex-col items-center"><h3 className="text-xl font-bold">الخصوصية والأمان</h3></div>
                <div className="flex flex-col items-center"><h3 className="text-xl font-bold">الاحترافية</h3></div>
                <div className="flex flex-col items-center"><h3 className="text-xl font-bold">التمكين</h3></div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
