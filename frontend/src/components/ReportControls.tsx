
import React from 'react';

interface ReportControlsProps {
  ticker: string;
  setTicker: (ticker: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

const ReportControls: React.FC<ReportControlsProps> = ({ ticker, setTicker, onGenerate, isLoading }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <input 
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value.toUpperCase())}
          placeholder="أدخل رمز السهم (مثلاً: AAPL)"
          className="flex-grow bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={onGenerate}
          disabled={isLoading}
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'جاري الإنشاء...' : 'إنشاء التقرير'}
        </button>
      </div>
    </div>
  );
};

export default ReportControls;
