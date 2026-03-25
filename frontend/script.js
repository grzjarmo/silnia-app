// Konfiguracja URL backendu
const BACKEND_URL = 'https://silnia-app.onrender.com'; // Zmień na swój URL Render'a
const LOCAL_BACKEND = 'http://localhost:5000'; // Do testów lokalnych

// Sprawdzenie statusu backendu
async function checkBackendStatus() {
    try {
        const response = await fetch(`${BACKEND_URL}/health`, { mode: 'no-cors' });
        document.getElementById('backend-status').textContent = 'Online ✓';
        document.getElementById('backend-status').classList.add('online');
        return BACKEND_URL;
    } catch (error) {
        try {
            const response = await fetch(`${LOCAL_BACKEND}/health`);
            document.getElementById('backend-status').textContent = 'Online (localhost) ✓';
            document.getElementById('backend-status').classList.add('online');
            return LOCAL_BACKEND;
        } catch (e) {
            document.getElementById('backend-status').textContent = 'Offline ✗';
            document.getElementById('backend-status').classList.add('offline');
            return null;
        }
    }
}

// Pobranie aktualnego backendu
let activeBackend = LOCAL_BACKEND;
checkBackendStatus().then(url => {
    if (url) activeBackend = url;
});

async function obliczSilnie() {
    const input = document.getElementById('liczba');
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');
    const wynikDiv = document.getElementById('wynik');
    
    // Resetuj poprzednie błędy
    errorDiv.classList.remove('show');
    errorDiv.textContent = '';
    
    const liczba = input.value.trim();
    
    try {
        if (!liczba) {
            throw new Error("Proszę podać liczbę");
        }
        
        const num = parseInt(liczba);
        if (isNaN(num)) {
            throw new Error("Podana wartość nie jest liczbą");
        }
        
        if (num < 0) {
            throw new Error("Silnia nie istnieje dla liczb ujemnych");
        }

        // Wysłanie zapytania do backendu
        const response = await fetch(`${activeBackend}/api/factorial/${num}`);
        
        if (!response.ok) {
            throw new Error("Błąd serwera");
        }
        
        const data = await response.json();
        wynikDiv.textContent = `${num}! = ${data.result}`;
        resultDiv.classList.add('show');
    } catch (e) {
        errorDiv.textContent = "❌ " + e.message;
        errorDiv.classList.add('show');
        resultDiv.classList.remove('show');
    }
}

// Obsługa Enter
document.getElementById('liczba').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        obliczSilnie();
    }
});
