from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

GEMINI_API_KEY = "AIzaSyDiHIezY9rNBdY_ZO2bLOlo3SjTVvp3Gsw"  # Replace with your real API key

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_input = data.get("message", "")
    
    if not user_input:
        return jsonify({"error": "No input provided"}), 400

    try:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={GEMINI_API_KEY}"
        headers = {"Content-Type": "application/json"}
        payload = {
            "contents": [{
                "parts": [{"text": user_input}]
            }]
        }

        response = requests.post(url, headers=headers, json=payload)
        response_data = response.json()  # Parse the JSON

        print("DEBUG: Full response from Gemini AI:", response_data)

        if response.status_code == 200:
            # Extract the reply from the correct structure
            if "candidates" in response_data and response_data["candidates"]:
                gemini_reply = response_data["candidates"][0]["content"]["parts"][0]["text"]
                return jsonify({"reply": gemini_reply})
            else:
                return jsonify({
                    "error": f"Unexpected response structure: {response_data}"
                }), 500
        else:
            return jsonify({"error": response_data}), response.status_code

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
