# backend/ai_model.py
import os
from transformers import pipeline
from dotenv import load_dotenv

load_dotenv()

# HuggingFace token set karo
HF_TOKEN = os.getenv("HF_API_TOKEN")
if HF_TOKEN:
    os.environ["HUGGINGFACEHUB_API_TOKEN"] = HF_TOKEN

# AI model load
emotion_classifier = pipeline(
    "text-classification",
    model="j-hartmann/emotion-english-distilroberta-base",
    return_all_scores=True
)

def analyze_emotion(message: str):
    results = emotion_classifier(message)[0]
    dominant = max(results, key=lambda x: x['score'])
    return {"emotion": dominant['label'], "score": float(dominant['score'])}
