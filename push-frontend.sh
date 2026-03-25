#!/bin/bash
# Zestaw komend do wrzucenia frontendu na GitHub

# 0. Konfiguracja Git'a (jeśli jeszcze nie skonfigurowane)
git config --global user.name "grzjarmo"
git config --global user.email "grzjarmo@jellytech.com.pl"

# 1. Przejdź do folderu frontend
cd /Users/grzjarmo/Moje/Copilot/factorial-app/frontend

# 2. Inicjalizuj repozytorium Git
git init

# 3. Dodaj pliki do Git'a
git add .

# 4. Utwórz pierwszy commit
git commit -m "Initial commit: Factorial calculator frontend"

# 5. Dodaj remote
git branch -M main
git remote add origin https://github.com/grzjarmo/silnia-app.git

# 6. Wrzuć pliki na GitHub
git push -u origin main

# ✅ Gotowe! Frontend będzie dostępny na:
# https://grzjarmo.github.io/silnia-app
