
import React from 'react';
import { motion } from 'framer-motion';
import { AnalysisResult } from '@/lib/types';
import { TrendingUp, FileText, CheckCircle, BarChart2 } from 'lucide-react';

interface AnalysisResultDisplayProps {
  result: AnalysisResult;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const AnalysisResultDisplay: React.FC<AnalysisResultDisplayProps> = ({ result }) => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
        <h1 className="text-4xl font-playfair font-bold text-center mb-2">
          تحليل شركة: {result.company.name}
        </h1>
        <p className="text-center text-finclick-gold/70 text-lg">
          تم الإنشاء في: {new Date(result.generatedAt).toLocaleString('ar-SA')}
        </p>
      </motion.div>

      {/* Executive Summary */}
      <motion.div custom={0} variants={cardVariants} initial="hidden" animate="visible" className="card p-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 font-playfair">
          <FileText /> الملخص التنفيذي
        </h2>
        <p className="text-lg whitespace-pre-line">{result.summary}</p>
      </motion.div>

      {/* Key Metrics */}
      <motion.div custom={1} variants={cardVariants} initial="hidden" animate="visible" className="card p-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 font-playfair">
          <TrendingUp /> المؤشرات الرئيسية
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.entries(result.keyMetrics).map(([key, value]) => (
            <div key={key} className="bg-finclick-gold/10 p-4 rounded-md text-center">
              <p className="font-semibold text-lg">{String(value)}</p>
              <p className="text-sm text-finclick-gold/80">{key}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Visualizations */}
      <motion.div custom={2} variants={cardVariants} initial="hidden" animate="visible" className="card p-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 font-playfair">
          <BarChart2 /> تصورات بيانية
        </h2>
        {/* In a real app, you would map result.visualizations to actual chart components */}
        <p className="text-center py-8">سيتم عرض الرسوم البيانية هنا لتحليل الأداء المالي.</p>
        <div className="h-64 bg-finclick-gold/10 rounded-md flex items-center justify-center">
          [مساحة مخصصة للرسم البياني]
        </div>
      </motion.div>

      {/* Detailed Analysis */}
      <motion.div custom={3} variants={cardVariants} initial="hidden" animate="visible" className="space-y-6">
         {result.detailedAnalysis.map((section, index) => (
          <div key={index} className="card p-6">
            <h3 className="text-xl font-bold mb-3 font-playfair">{section.title}</h3>
            <p className="text-finclick-gold/90 whitespace-pre-line">{section.content}</p>
          </div>
        ))}
      </motion.div>
      
      {/* Recommendations */}
      <motion.div custom={4} variants={cardVariants} initial="hidden" animate="visible" className="card p-8 bg-finclick-gold/10 border border-finclick-gold/30">
         <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 font-playfair">
           <CheckCircle /> التوصيات
         </h2>
         <ul className="space-y-3 list-disc list-inside">
           {result.recommendations.map((rec, index) => (
             <li key={index} className="text-lg">{rec}</li>
           ))}
         </ul>
       </motion.div>

    </div>
  );
};

export default AnalysisResultDisplay;
