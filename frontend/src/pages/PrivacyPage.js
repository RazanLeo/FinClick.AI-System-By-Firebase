
import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-black text-finclick-gold p-8 font-tajawal">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center font-playfair">سياسة الخصوصية</h1>
        
        <div className="card p-8 space-y-6">
          <p className="text-lg">
            مرحبًا بك في FinClick.AI. نحن نحترم خصوصيتك ونلتزم بحماية البيانات الشخصية الخاصة بك. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا ومشاركتنا لمعلوماتك عند استخدامك لمنصتنا الذكية للتحليل المالي.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-2 font-playfair">المعلومات التي نجمعها</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>بيانات التسجيل (الاسم، البريد الإلكتروني، رقم الهاتف، اسم الشركة، القطاع، النشاط، الكيان القانوني ومعلومات الشركة العامة).</li>
              <li>بيانات الدفع (لا يتم تخزين بيانات البطاقة كاملة على خوادمنا).</li>
              <li>الملفات المالية التي تقوم برفعها (قوائم مالية، موازين مراجعة، جداول).</li>
              <li>بيانات الاستخدام والتفاعل داخل المنصة.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2 font-playfair">طرق استخدام المعلومات</h2>
            <ul className="list-disc list-inside space-y-2">
                <li>تنفيذ التحليلات المالية وإصدار التقارير المطلوبة.</li>
                <li>تحسين جودة الخدمة، وتطوير نماذج الذكاء الاصطناعي.</li>
                <li>التواصل معك للتحديثات، والإشعارات، والدعم الفني.</li>
                <li>التحقق من الهوية ومنع الاستخدام غير المصرّح به.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2 font-playfair">حماية البيانات</h2>
            <ul className="list-disc list-inside space-y-2">
                <li>تشفير كامل للبيانات أثناء النقل (SSL) وداخل الخوادم.</li>
                <li>سياسات وصول صارمة، ونسخ احتياطي دوري، ورصد اختراقات.</li>
                <li>لا تتم مشاركة بياناتك مع أي طرف ثالث إلا بموافقتك أو وفقًا للقانون.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2 font-playfair">حقوقك</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>الوصول إلى بياناتك.</li>
              <li>تعديل/تحديث بياناتك.</li>
              <li>طلب حذف البيانات.</li>
              <li>إلغاء الاشتراك في الرسائل التسويقية.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
