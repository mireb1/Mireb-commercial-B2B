#!/bin/bash

# Script de déploiement automatique pour Mireb Commercial B2B
echo "🚀 Déploiement de Mireb Commercial B2B..."

# Vérifier si git est initialisé
if [ ! -d ".git" ]; then
    echo "📝 Initialisation du repository git..."
    git init
    git add .
    git commit -m "Initial commit - Mireb Commercial B2B"
fi

# Demander l'URL du repository
echo "📋 Veuillez entrer l'URL de votre repository GitHub :"
echo "Exemple: https://github.com/votre-username/Mireb-commercial-B2B.git"
read -p "URL du repository: " repo_url

if [ -n "$repo_url" ]; then
    echo "🔗 Configuration du repository distant..."
    git remote add origin $repo_url 2>/dev/null || git remote set-url origin $repo_url
    
    echo "📤 Push vers GitHub..."
    git branch -M main
    git push -u origin main
    
    echo "✅ Repository GitHub configuré avec succès!"
    echo ""
    echo "🌐 Étapes suivantes pour le déploiement:"
    echo "1. Allez sur https://vercel.com"
    echo "2. Connectez votre compte GitHub"
    echo "3. Cliquez sur 'New Project'"
    echo "4. Sélectionnez votre repository"
    echo "5. Cliquez sur 'Deploy'"
    echo ""
    echo "🔗 Votre application sera accessible via:"
    echo "https://mireb-commercial-b2b.vercel.app"
else
    echo "❌ URL du repository non fournie. Déploiement annulé."
fi
