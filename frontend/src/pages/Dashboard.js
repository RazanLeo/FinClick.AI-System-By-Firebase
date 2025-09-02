
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import FileUploader from '@/components/upload/FileUploader';
import CompanyDetailsForm from '@/components/forms/CompanyDetailsForm';
import { Company, FinancialStatement } from '@/lib/types';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { CloudUpload, Building2, TrendingUp, Brain } from 'lucide-react';

const DashboardPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [financialData, setFinancialData] = useState<FinancialStatement[]>([]);
  const [companyDetails, setCompanyDetails] = useState<Company | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFilesUploaded = (files: File[]) => {
    setUploadedFiles(files);
    toast.success(`تم رفع ${files.length} ملف بنجاح`);
  };

  const handleManualInput = (data: FinancialStatement[]) => {
    setFinancialData(data);
    toast.success('تم إدخال البيانات المالية بنجاح');
  };

  const handleCompanyDetails = (details: Company) => {
    setCompanyDetails(details);
    setStep(3);
  };

  const startAnalysis = async () => {
    if (!companyDetails) {
      toast.error('يرجى إدخال تفاصيل الشركة');
      return;
    }

    if (uploadedFiles.length === 0 && financialData.length === 0) {
      toast.error('يرجى رفع الملفات أو إدخال البيانات المالية');
      return;
    }

    setIsAnalyzing(true);

    try {
      const formData = new FormData();
      formData.append('company', JSON.stringify(companyDetails));
      uploadedFiles.forEach((file, index) => {
        formData.append(`file-${index}`, file);
      });
      if (financialData.length > 0) {
        formData.append('financialData', JSON.stringify(financialData));
      }

      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('فشل في بدء التحليل');
      }

      const { analysisId } = await response.json();
      
      toast.success('بدأ التحليل بنجاح!');
      router.push(`/analysis/${analysisId}`);
    } catch (error) {
      console.error('Error starting analysis:', error);
      toast.error('حدث خطأ في بدء التحليل');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-finclick-gold p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">لوحة التحكم</h1>
        
        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className={`flex items-center ${step >= 1 ? 'text-finclick-gold' : 'text-gray-600'}`}>
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                  step >= 1 ? 'border-finclick-gold bg-finclick-gold/20' : 'border-gray-600'
                }`}>
                  1
                </div>
                <span className="mr-2 font-semibold">رفع الملفات</span>
              </div>
              
              <div className={`flex-1 h-1 mx-4 ${
                step >= 2 ? 'bg-finclick-gold' : 'bg-gray-600'
              }`}></div>
              
              <div className={`flex items-center ${step >= 2 ? 'text-finclick-gold' : 'text-gray-600'}`}>
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                  step >= 2 ? 'border-finclick-gold bg-finclick-gold/20' : 'border-gray-600'
                }`}>
                  2
                </div>
                <span className="mr-2 font-semibold">بيانات الشركة</span>
              </div>
              
              <div className={`flex-1 h-1 mx-4 ${
                step >= 3 ? 'bg-finclick-gold' : 'bg-gray-600'
              }`}></div>
              
              <div className={`flex items-center ${step >= 3 ? 'text-finclick-gold' : 'text-gray-600'}`}>
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                  step >= 3 ? 'border-finclick-gold bg-finclick-gold/20' : 'border-gray-600'
                }`}>
                  3
                </div>
                <span className="mr-2 font-semibold">بدء التحليل</span>
              </div>
            </div>
          </div>

          {/* Step Content */}
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {step === 1 && (
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  <CloudUpload className="inline-block ml-2" />
                  رفع القوائم المالية
                </h2>
                <FileUploader 
                  onFilesUploaded={handleFilesUploaded}
                  onManualInput={handleManualInput}
                />
                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => setStep(2)}
                    className="btn btn-primary"
                    disabled={uploadedFiles.length === 0 && financialData.length === 0}
                  >
                    التالي
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  <Building2 className="inline-block ml-2" />
                  بيانات الشركة
                </h2>
                <CompanyDetailsForm onSubmit={handleCompanyDetails} />
                <div className="flex justify-between mt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="btn"
                  >
                    السابق
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  <TrendingUp className="inline-block ml-2" />
                  ملخص البيانات
                </h2>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-finclick-gold/10 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">بيانات الشركة:</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-finclick-gold/70">اسم الشركة:</span>
                        <span className="mr-2">{companyDetails?.name}</span>
                      </div>
                      <div>
                        <span className="text-finclick-gold/70">القطاع:</span>
                        <span className="mr-2">{companyDetails?.sector}</span>
                      </div>
                      <div>
                        <span className="text-finclick-gold/70">النشاط:</span>
                        <span className="mr-2">{companyDetails?.activity}</span>
                      </div>
                      <div>
                        <span className="text-finclick-gold/70">سنوات التحليل:</span>
                        <span className="mr-2">{companyDetails?.yearsToAnalyze}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-finclick-gold/10 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">الملفات المرفوعة:</h3>
                    <p className="text-sm">
                      {uploadedFiles.length > 0 
                        ? `${uploadedFiles.length} ملف مرفوع`
                        : 'تم إدخال البيانات يدوياً'
                      }
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="btn"
                    disabled={isAnalyzing}
                  >
                    السابق
                  </button>
                  
                  <button
                    onClick={startAnalysis}
                    className="btn btn-primary flex items-center gap-2"
                    disabled={isAnalyzing}
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="spinner w-5 h-5"></div>
                        جاري التحليل...
                      </>
                    ) : (
                      <>
                        <Brain className="w-5 h-5" />
                        بدء التحليل الذكي
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;
