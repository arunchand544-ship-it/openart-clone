

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import base64

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class PromptRequest(BaseModel):
    prompt: str

@app.get("/")
def home():
    return {"status": "Backend running"}

@app.post("/generate")
def generate_image(data: PromptRequest):
    # simple 1x1 PNG (white pixel) in base64
    sample_base64 = (
        "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMA"
        "AQAABQABDQottAAAAABJRU5ErkJggg=="
    )
    return {"image": sample_base64}

