
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Loader, FileCheck2 } from 'lucide-react';
import FileUploader from '@/components/upload/FileUploader';
import CompanyDetailsForm from '@/components/forms/CompanyDetailsForm';
import AnalysisResultDisplay from '@/components/analysis/AnalysisResultDisplay';
import { Company, FinancialStatement, AnalysisResult } from '@/lib/types';

// Dummy data for demonstration
const dummyAnalysisResult: AnalysisResult = {
  id: '12345',
  company: {
    name: 'شركة التجارة المتقدمة',
    sector: 'التجزئة',
    activity: 'بيع الأجهزة الإلكترونية',
    yearsToAnalyze: 3,
    currency: 'SAR',
  },
  summary: 'أداء الشركة يظهر نموًا مستقرًا في الإيرادات مع تحسن في هوامش الربح. ومع ذلك، هناك زيادة في الالتزامات قصيرة الأجل تتطلب الانتباه.',
  keyMetrics: {
    'نسبة السيولة': '2.1',
    'العائد على حقوق الملكية': '15.8%',
    'هامش الربح الصافي': '8.2%',
    'نسبة الدين إلى حقوق الملكية': '0.6',
  },
  visualizations: [],
  detailedAnalysis: [
    { title: 'تحليل الربحية', content: 'تحسنت الربحية بشكل ملحوظ خلال السنوات الثلاث الماضية...' },
    { title: 'تحليل السيولة', content: 'تتمتع الشركة بوضع سيولة جيد، ولكن يجب مراقبة التدفقات النقدية الخارجة...' },
  ],
  recommendations: [
    'العمل على تحسين إدارة رأس المال العامل.',
    'استكشاف فرص لخفض التكاليف التشغيلية.',
    'إعادة التفاوض على شروط الديون قصيرة الأجل.',
  ],
  generatedAt: new Date().toISOString(),
};


const DashboardPage = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [manualData, setManualData] = useState<FinancialStatement[]>([]);
  const [companyDetails, setCompanyDetails] = useState<Company | null>(null);

  const handleFilesUploaded = (files: File[]) => {
    setUploadedFiles(files);
  };

  const handleManualInput = (data: FinancialStatement[]) => {
    setManualData(data);
  };

  const handleCompanyDetailsSubmit = (data: Company) => {
    setCompanyDetails(data);
    setStep(3);
    triggerAnalysis();
  };

  const triggerAnalysis = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setAnalysisResult(dummyAnalysisResult);
      setIsLoading(false);
      setStep(4);
    }, 3000);
  };
  
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <FileUploader onFilesUploaded={handleFilesUploaded} onManualInput={handleManualInput} />;
      case 2:
        return <CompanyDetailsForm onSubmit={handleCompanyDetailsSubmit} />;
      case 3:
        return (
          <div className="text-center p-12">
            <Loader className="animate-spin mx-auto h-16 w-16 mb-4" />
            <p className="text-xl">جاري تحليل بياناتك باستخدام الذكاء الاصطناعي...</p>
          </div>
        );
      case 4:
        return analysisResult ? <AnalysisResultDisplay result={analysisResult} /> : null;
      default:
        return null;
    }
  }

  return (
    <div className="container mx-auto py-12 px-4">
        <AnimatePresence mode="wait">
            <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >
                {renderStepContent()}
            </motion.div>
        </AnimatePresence>
        
        <div className="flex justify-center mt-8">
            {(step === 1 && (uploadedFiles.length > 0 || manualData.length > 0)) && (
                 <motion.button 
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setStep(2)} 
                    className="btn-primary font-bold py-3 px-8 flex items-center gap-2"
                >
                    الخطوة التالية <ArrowRight size={20}/>
                </motion.button>
            )}
        </div>
    </div>
  );
};

export default DashboardPage;
