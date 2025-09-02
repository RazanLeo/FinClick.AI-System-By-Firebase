
import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

interface ReportDisplayProps {
  report: string;
  isLoading: boolean;
}

const ReportDisplay: React.FC<ReportDisplayProps> = ({ report, isLoading }) => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const parseMarkdown = async () => {
      if (report) {
        try {
          // Use the modern promise-based API of marked
          const html = await marked.parse(report);
          setHtmlContent(html);
        } catch (error) {
          console.error("Error parsing markdown:", error);
          setHtmlContent("<p>خطأ في عرض التقرير.</p>");
        }
      } else {
        setHtmlContent('');
      }
    };

    parseMarkdown();
  }, [report]);

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 min-h-[400px]">
      <h3 className="text-2xl font-bold mb-4">التقرير المالي</h3>
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : htmlContent ? (
        <div 
          className="prose prose-invert max-w-none rtl"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      ) : (
        <p className="text-gray-400">سيتم عرض التقرير هنا بعد إنشائه.</p>
      )}
    </div>
  );
};

export default ReportDisplay;
