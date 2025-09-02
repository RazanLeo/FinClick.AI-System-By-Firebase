
import React from 'react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-black text-finclick-gold p-8 font-tajawal">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center font-playfair">شروط الاستخدام</h1>
        
        <div className="card p-8 space-y-6 text-lg">
          <div>
            <h2 className="text-2xl font-bold mb-2 font-playfair">1. الاستخدام المصرّح به</h2>
            <p>
              المنصة تخدم أغراض التحليل المالي فقط، ويُحظر استخدامها لأغراض غير قانونية أو مشبوهة أو لإنشاء خدمات منافسة.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2 font-playfair">2. الملكية الفكرية</h2>
            <p>
              جميع حقوق النظم، الكود، المحتوى، التصميم، والتحليلات مملوكة حصريًا لـ FinClick.AI ولا يحق للمستخدم إعادة توزيع أو بيع المخرجات كمحتوى آلي.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2 font-playfair">3. الدقة والمسؤولية</h2>
            <p>
              بالرغم من دقتنا العالية، لا نتحمل أي مسؤولية قانونية عن أي قرارات مالية تتخذها بناءً على التحليل المولد من النظام.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2 font-playfair">4. الاشتراك</h2>
            <p>
              أي تأخير في الدفع يوقف الحساب تلقائيًا. ولا يحق للمستخدم مشاركة الحساب مع غيره. اشتراك واحد = مستخدم واحد فقط.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2 font-playfair">5. إنهاء الاستخدام</h2>
            <p>
              يحق لـ FinClick.AI إيقاف أو تعطيل أي حساب يستخدم المنصة بشكل مسيء أو غير قانوني.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsPage;
