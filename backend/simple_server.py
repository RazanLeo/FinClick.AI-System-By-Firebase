from fastapi import FastAPI, APIRouter, HTTPException, Depends
from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
from starlette.middleware.cors import CORSMiddleware
import os
import datetime

# Define a simple data model for the request, matching the frontend
class AnalysisRequest(BaseModel):
    company_name: str
    language: str = "ar"
    sector: str
    activity: str
    legal_entity: str
    comparison_level: str
    analysis_years: int
    analysis_types: List[str]

# Create the FastAPI app
app = FastAPI(title="FinClick.AI Simple Server")
api_router = APIRouter(prefix="/api")

@api_router.post("/analyze")
async def analyze_financial_data(request: AnalysisRequest):
    """
    This is a dummy endpoint that simulates a successful analysis.
    It returns a fixed, successful JSON response to unblock the frontend.
    """
    # Create a dummy response that mimics the structure of the real analysis
    dummy_results = {
        "status": "success",
        "message": "تحليل وهمي ناجح لفك التعطيل",
        "company_name": request.company_name,
        "language": request.language,
        "analysis_date": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "total_analysis_count": 181,
        "results": {
            "executive_summary": {
                "company_information": {
                    "date": datetime.datetime.now().strftime("%Y-%m-%d"),
                    "company_name": request.company_name,
                    "company_sector": request.sector,
                    "company_activity": "Dummy Activity",
                    "legal_entity": request.legal_entity,
                    "analysis_years": request.analysis_years,
                    "comparison_type": request.comparison_level,
                    "analysis_type": ", ".join(request.analysis_types),
                },
                 "results_summary": {
                    "total_analyses": 181,
                    "summary_table": [
                        {
                            "number": 1,
                            "name": "تحليل السيولة (وهمي)",
                            "result": "2.5",
                            "interpretation": "الوضع جيد",
                            "rating": "ممتاز"
                        }
                    ]
                }
            },
            "basic_analysis": {
                "vertical_analysis": {
                    "introduction": { "definition": { "ar": "التحليل الرأسي (وهمي)" } }
                }
            }
        }
    }
    return dummy_results

# Include the router
app.include_router(api_router)

# Add CORS middleware to allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "FinClick.AI Simple Server is running"}
