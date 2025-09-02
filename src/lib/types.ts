
export interface Company {
  name: string;
  sector: string;
  activity: string;
  yearsToAnalyze: number;
  currency: string;
}

export interface FinancialStatement {
  year: number;
  revenue: number;
  costOfGoodsSold: number;
  grossProfit: number;
  operatingExpenses: number;
  netIncome: number;
  totalAssets: number;
  totalLiabilities: number;
  totalEquity: number;
}

export interface AnalysisResult {
  id: string;
  company: Company;
  summary: string;
  keyMetrics: { [key: string]: string | number };
  visualizations: { type: string; data: any[] }[];
  detailedAnalysis: { title: string; content: string }[];
  recommendations: string[];
  generatedAt: string;
}
