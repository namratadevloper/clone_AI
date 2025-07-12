# Cloan AI

A simple web-based AI chatbot using Flask and Google's Gemini AI API.

## Features

- Modern chat UI with markdown support
- Real-time chat powered by Gemini AI
- Responsive design
- Easy to run locally

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd "clone AI"
```

### 2. Install dependencies

Make sure you have Python 3.x installed.

```bash
pip install -r requirements.txt
```

### 3. Set up your Gemini API key

Edit `app.py` and replace the value of `GEMINI_API_KEY` with your own Gemini API key:

```python
GEMINI_API_KEY = "YOUR_GEMINI_API_KEY"
```

### 4. Run the app

```bash
python app.py
```

The app will be available at [http://127.0.0.1:5000](http://127.0.0.1:5000).

## Project Structure

```
clone AI/
│
├── app.py                # Flask backend
├── requirements.txt      # Python dependencies
│
├── templates/
│   └── index.html        # Main HTML template
│
└── static/
    ├── style.css         # Custom styles
    └── script.js         # Frontend chat logic
```

## Usage

- Open your browser and go to [http://127.0.0.1:5000](http://127.0.0.1:5000)
- Type your message and press Enter or click the send button
- The bot will reply using Gemini AI

## Notes

- Make sure your API key is valid and has access to the Gemini API.
- This project is for educational/demo purposes. Do not expose your API key in production.

## License

MIT License 
