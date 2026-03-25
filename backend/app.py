from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

def factorial(n):
    """Oblicza silnię dla liczby n"""
    if n < 0:
        raise ValueError("Silnia nie istnieje dla liczb ujemnych")
    if n == 0 or n == 1:
        return 1
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

@app.route('/health', methods=['GET'])
def health():
    """Sprawdzenie czy backend jest dostępny"""
    return jsonify({'status': 'ok'})

@app.route('/api/factorial/<int:n>', methods=['GET'])
def get_factorial(n):
    """Endpoint do obliczania silni"""
    try:
        result = factorial(n)
        return jsonify({
            'number': n,
            'result': str(result),
            'status': 'success'
        })
    except ValueError as e:
        return jsonify({
            'error': str(e),
            'status': 'error'
        }), 400
    except Exception as e:
        return jsonify({
            'error': 'Wewnętrzny błąd serwera',
            'status': 'error'
        }), 500

@app.route('/', methods=['GET'])
def index():
    """Informacja o API"""
    return jsonify({
        'name': 'Factorial API',
        'version': '1.0',
        'endpoints': {
            'health': '/health',
            'factorial': '/api/factorial/<number>'
        }
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
