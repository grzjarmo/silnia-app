#!/bin/bash
# Zestaw komend do wrzucenia CAŁEJ aplikacji (frontend + backend) na GitHub

# 0. Konfiguracja Git'a (jeśli jeszcze nie skonfigurowane)
git config --global user.name "grzjarmo"
git config --global user.email "grzjarmo@jellytech.com.pl"

# 1. Przejdź do głównego folderu projektu
cd /Users/grzjarmo/Moje/Copilot/factorial-app

# 2. Inicjalizuj repozytorium Git
git init

# 3. Dodaj wszystkie pliki (frontend + backend)
git add .

# 4. Utwórz pierwszy commit
git commit -m "Initial commit: Factorial calculator - Full stack application (frontend + backend)"

# 5. Przemianuj branch na 'main'
git branch -M main

# 6. Dodaj remote do istniejącego repozytorium silnia-app
git remote add origin https://github.com/grzjarmo/silnia-app.git

# 7. Wrzuć wszystkie pliki na GitHub
git push -u origin main

# ✅ Gotowe!
# Frontend: https://grzjarmo.github.io/silnia-app
# Backend: (będzie na Render.com)
# Repozytorium: https://github.com/grzjarmo/silnia-app
