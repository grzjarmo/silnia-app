# 🔢 Factorial Calculator

Kalkulator silni z frontędem na GitHub Pages i backendem na Render.

## 📁 Struktura projektu

```
factorial-app/
├── frontend/          # GitHub Pages (HTML/CSS/JS)
│   ├── index.html
│   ├── style.css
│   └── script.js
├── backend/           # Render API (Flask + Python)
│   ├── app.py
│   ├── requirements.txt
│   ├── Procfile
│   └── .gitignore
├── README.md
└── .gitignore
```

## 🚀 Deployment

### Frontend - GitHub Pages

1. **Utwórz repozytorium GitHub** z tą nazwą: `<twoja-nazwa>.github.io`

2. **Wrzuć pliki z folderu `frontend/`** do repozytorium

3. Frontend będzie dostępny na: `https://<twoja-nazwa>.github.io`

### Backend - Render

1. **Utwórz konto na [render.com](https://render.com)**

2. **Powiąż repozytorium GitHub**

3. **Utwórz nowy Web Service:**
   - Root Directory: `backend`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`

4. **Pobierz URL Render'a** (np. `https://factorial-backend.onrender.com`)

5. **Zaktualizuj URL w `frontend/script.js`:**
   ```javascript
   const BACKEND_URL = 'https://factorial-backend.onrender.com';
   ```

6. **Wrzuć zmianę na GitHub** - frontend się automatycznie zaaktualizuje

## 🧪 Testy lokalne

### Backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

Następnie otwórz: `http://localhost:5000`

### Frontend

Otwórz `frontend/index.html` w przeglądarce.

## 📡 API Endpoints

- `GET /health` - Sprawdzenie statusu
- `GET /api/factorial/<number>` - Obliczenie silni

Przykład:
```bash
curl https://factorial-backend.onrender.com/api/factorial/5
```

Odpowiedź:
```json
{
  "number": 5,
  "result": "120",
  "status": "success"
}
```

## 📝 Uwagi

- Frontend komunikuje się z backendem poprzez API
- Jeśli backend jest niedostępny, interfejs wyświetla błąd
- Silnia jest obliczana z pełną precyzją (BigInt w JS, int w Python)

## 🛠️ Technologia

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Flask, Python
- **Hosting:** GitHub Pages + Render
