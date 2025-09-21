# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from ai_model import analyze_emotion
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)  # allow frontend to talk with backend

@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.get_json()
    message = data.get("message", "")
    if not message:
        return jsonify({"error": "Message is required"}), 400

    result = analyze_emotion(message)
    return jsonify({
        "message": message,
        "emotion": result["emotion"],
        "score": result["score"],
        "reply": f"I feel you 💙 It seems like {result['emotion']}."
    })

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
