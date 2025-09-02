
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { ticker } = await request.json();

    if (!ticker) {
      return NextResponse.json({ error: 'Ticker symbol is required' }, { status: 400 });
    }

    // 1. Fetch financial data from FMP
    const fmpApiKey = process.env.FMP_API_KEY;
    const [profile, income, balanceSheet] = await Promise.all([
      fetch(`https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=${fmpApiKey}`),
      fetch(`https://financialmodelingprep.com/api/v3/income-statement/${ticker}?period=annual&apikey=${fmpApiKey}`),
      fetch(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/${ticker}?period=annual&apikey=${fmpApiKey}`)
    ]);

    const profileData = await profile.json();
    const incomeData = await income.json();
    const balanceSheetData = await balanceSheet.json();

    // 2. Prepare the prompt for OpenAI
    const prompt = `
      **Company Profile:**
      - Name: ${profileData[0].companyName}
      - Sector: ${profileData[0].sector}
      - Industry: ${profileData[0].industry}
      - Description: ${profileData[0].description}
      - Website: ${profileData[0].website}

      **Financial Statements (Annual):**
      - **Income Statement:** ${JSON.stringify(incomeData.slice(0, 3), null, 2)}
      - **Balance Sheet:** ${JSON.stringify(balanceSheetData.slice(0, 3), null, 2)}

      **Task:**
      Based on the financial data provided, please generate a detailed financial analysis report in Arabic. The report should include:
      1.  **Executive Summary:** A brief overview of the company's financial health.
      2.  **Revenue & Profitability Analysis:** Analyze revenue trends, gross profit margin, and net income.
      3.  **Balance Sheet Analysis:** Assess the company's assets, liabilities, and equity. Look at liquidity ratios (like the current ratio) and solvency ratios (like the debt-to-equity ratio).
      4.  **Key Strengths & Weaknesses:** Identify the main financial strengths and weaknesses of the company.
      5.  **Investment Recommendation:** Conclude with a recommendation (e.g., Buy, Hold, Sell) and justify it based on the analysis. The recommendation should be concise and direct.

      **Format the output in clean, readable Arabic.**
    `;

    // 3. Call OpenAI to get the analysis
    const openaiApiKey = process.env.OPENAI_API_KEY;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: 'You are a financial analyst AI that provides reports in Arabic.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 1500,
      }),
    });

    const data = await response.json();

    if (response.status !== 200) {
        console.error("OpenAI API Error:", data);
        return NextResponse.json({ error: 'Failed to get analysis from AI' }, { status: 500 });
    }

    const analysis = data.choices[0].message.content;

    // 4. Return the analysis
    return NextResponse.json({ analysis });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An internal server error occurred' }, { status: 500 });
  }
}
