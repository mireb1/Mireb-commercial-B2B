# Mireb Commercial B2B

Une plateforme complète de gestion commerciale B2B développée avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- **Dashboard interactif** avec métriques en temps réel
- **Gestion des clients** B2B avec statuts et historique
- **Suivi des ventes** avec pipeline visuel
- **Rapports et analytics** détaillés
- **Interface responsive** et moderne
- **Design system** personnalisé

## 🛠️ Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Remix Icons** - Icônes modernes
- **ESLint** - Linting et qualité du code

## 📦 Installation locale

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/Mireb-commercial-B2B.git
cd Mireb-commercial-B2B
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🌐 Déploiement et accès

### Option 1: Vercel (Recommandé)
1. Connectez votre repository GitHub à [Vercel](https://vercel.com)
2. Déployez automatiquement depuis votre branch `main`
3. Votre application sera accessible via : `https://votre-app-name.vercel.app`

### Option 2: Netlify
1. Connectez votre repository à [Netlify](https://netlify.com)
2. Configurez la build : `npm run build`
3. Dossier de publication : `out` (après configuration export)
4. Votre application sera accessible via : `https://votre-app-name.netlify.app`

### Option 3: GitHub Pages
1. Activez GitHub Pages dans les paramètres de votre repository
2. Configurez Next.js pour l'export statique
3. Votre application sera accessible via : `https://votre-username.github.io/Mireb-commercial-B2B`

### Option 4: Domaine personnalisé
Une fois déployé sur Vercel/Netlify, vous pouvez :
1. Acheter un domaine (ex: `mireb-commercial.com`)
2. Configurer les DNS pour pointer vers votre déploiement
3. Configurer HTTPS automatiquement

## 📋 Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification ESLint
```

## 🚀 Déploiement rapide

### Étapes pour mettre en ligne votre application :

1. **Créer un repository GitHub** :
   ```bash
   git add .
   git commit -m "Initial commit - Mireb Commercial B2B"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/Mireb-commercial-B2B.git
   git push -u origin main
   ```

2. **Déployer sur Vercel** (le plus simple) :
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez votre compte GitHub
   - Cliquez sur "New Project"
   - Sélectionnez votre repository `Mireb-commercial-B2B`
   - Cliquez sur "Deploy"
   - Votre app sera accessible via : `https://mireb-commercial-b2b.vercel.app`

3. **Configurer un domaine personnalisé** (optionnel) :
   - Dans Vercel, allez dans Settings > Domains
   - Ajoutez votre domaine personnalisé
   - Configurez les DNS selon les instructions

## 🌍 Accès à l'application

Une fois déployée, votre application sera accessible via :
- **URL Vercel** : `https://votre-app-name.vercel.app`
- **Domaine personnalisé** : `https://votre-domaine.com`
- **GitHub Pages** : `https://votre-username.github.io/Mireb-commercial-B2B`

## 📱 Pages disponibles

- `/` - Page d'accueil
- `/dashboard` - Tableau de bord
- `/clients` - Gestion des clients
- `/ventes` - Suivi des ventes
- `/rapports` - Analytics et rapports

## 🔧 Configuration avancée

### Variables d'environnement
Créez un fichier `.env.local` pour la configuration :
```
NEXT_PUBLIC_APP_URL=https://votre-domaine.com
NEXT_PUBLIC_API_URL=https://api.votre-domaine.com
DATABASE_URL=your-database-url
```

### Personnalisation
- Couleurs : Modifiez `tailwind.config.js`
- Données : Remplacez les données simulées par vos vraies données
- API : Créez vos endpoints dans `app/api/`

## 📞 Support

Pour toute question ou assistance :
- Créez une issue sur GitHub
- Contactez l'équipe de développement
- Consultez la documentation Next.js

---

**Mireb Commercial B2B** - Optimisez vos ventes B2B avec une plateforme moderne et intuitive.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
