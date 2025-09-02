
'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import ReportControls from "@/components/ReportControls";
import ReportDisplay from "@/components/ReportDisplay";
import Footer from "@/components/Footer";

export default function Home() {
  const [ticker, setTicker] = useState('');
  const [report, setReport] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateReport = async () => {
    if (!ticker) {
      setError('الرجاء إدخال رمز السهم.');
      return;
    }

    setIsLoading(true);
    setError('');
    setReport('');

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ticker }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'حدث خطأ ما.');
      }

      const data = await response.json();
      setReport(data.analysis);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-6">لوحة التحكم الرئيسية</h2>
        <ReportControls 
          ticker={ticker}
          setTicker={setTicker}
          onGenerate={handleGenerateReport}
          isLoading={isLoading}
        />
        {error && <p className="text-red-500 text-center my-4">{error}</p>}
        <ReportDisplay report={report} isLoading={isLoading} />
      </main>
      <Footer />
    </div>
  );
}
