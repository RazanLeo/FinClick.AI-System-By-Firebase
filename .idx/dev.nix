{pkgs}: {
  channel = "stable-24.05";

  packages = [
    (pkgs.python311.withPackages (ps: [
      ps.fastapi
      ps.uvicorn
      ps.boto3
      ps.requests-oauthlib
      ps.cryptography
      ps.python-dotenv
      ps.pymongo
      ps.pydantic
      ps.email-validator
      ps.pyjwt
      ps.passlib
      ps.tzdata
      ps.motor
      ps.pytest
      ps.black
      ps.isort
      ps.flake8
      ps.mypy
      ps.python-jose
      ps.requests
      ps.pandas
      ps.numpy
      ps.python-multipart
      ps.typer
      ps.openai
      ps.pillow
      ps.pytesseract
      ps.pypdf2
      ps.openpyxl
      ps.python-docx
      ps.opencv-python
      ps.beautifulsoup4
      ps.lxml
      ps.pdfplumber
      ps.tabula-py
      ps.yfinance
      ps.alpha-vantage
      ps.pycryptodome
      ps.fpdf2
      ps.reportlab
      ps.python-pptx
      ps.dataclasses
    ])),
    pkgs.nodejs_20,
    pkgs.jq,
    pkgs.tesseract,
    pkgs.ghostscript,
    pkgs.tk,
    pkgs.poppler
  ];

  idx.extensions = ["ms-python.python"];

  idx.previews = {
    previews = {
      web = {
        command = ["./frontend/start-dev.sh"];
        manager = "web";
      };
      backend = {
        command = ["./backend/start.sh"];
        manager = "terminal";
      };
    };
  };
}
