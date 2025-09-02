
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class StockRequest(BaseModel):
    ticker: str

@app.get("/")
def read_root():
    return {"message": "مرحباً بك في واجهة برمجة تطبيقات التحليل المالي"}

