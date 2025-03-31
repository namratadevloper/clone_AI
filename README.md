# AI Chat Application

This is a Flask-based web application that uses the Gemini AI API to create an interactive chat interface.

## Prerequisites

- Python 3.7 or higher
- pip (Python package installer)
- A Gemini API key (Get it from Google AI Studio)

## Installation Steps

1. Clone this repository or download the files to your local machine.

2. Create a virtual environment (recommended):
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

3. Install the required packages:
```bash
pip install flask requests
```

4. Get your Gemini API key:
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create an account if you don't have one
   - Generate an API key
   - Replace the `GEMINI_API_KEY` in `app.py` with your actual API key

## Project Structure

```
├── app.py              # Main Flask application
├── static/            # Static files (CSS, JavaScript)
├── templates/         # HTML templates
└── requirements.txt   # Project dependencies
```

## Running the Application

1. Make sure your virtual environment is activated.

2. Run the Flask application:
```bash
python app.py
```

3. Open your web browser and navigate to:
```
http://localhost:5000
```

## Features

- Interactive chat interface
- Real-time communication with Gemini AI
- Error handling and response validation
- Debug mode enabled for development

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed correctly
2. Verify your Gemini API key is valid and properly set in `app.py`
3. Check the console output for any error messages
4. Ensure you have an active internet connection

## Security Notes

- Never commit your API key to version control
- Consider using environment variables for sensitive information
- Keep your dependencies updated for security patches

## Support

For any issues or questions, please create an issue in the repository or contact the maintainers. 