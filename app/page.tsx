import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-primary-600">Mireb</h1>
              <span className="ml-2 text-sm font-medium text-secondary-600">Commercial B2B</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/dashboard" className="text-secondary-600 hover:text-primary-600 transition-colors">
                Dashboard
              </Link>
              <Link href="/clients" className="text-secondary-600 hover:text-primary-600 transition-colors">
                Clients
              </Link>
              <Link href="/ventes" className="text-secondary-600 hover:text-primary-600 transition-colors">
                Ventes
              </Link>
              <Link href="/rapports" className="text-secondary-600 hover:text-primary-600 transition-colors">
                Rapports
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Connexion
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <h2 className="text-5xl font-bold text-secondary-900 mb-6">
            Optimisez vos <span className="text-primary-600">ventes B2B</span>
          </h2>
          <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
            Une plateforme complète pour gérer vos clients, suivre vos ventes et analyser vos performances commerciales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors">
              Commencer
            </Link>
            <Link href="/demo" className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-colors">
              Voir la démo
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-slide-up">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <i className="ri-dashboard-line text-2xl text-primary-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">Dashboard Intuitif</h3>
            <p className="text-secondary-600">Visualisez vos métriques clés et KPIs en temps réel</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-slide-up">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <i className="ri-team-line text-2xl text-primary-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">Gestion Clients</h3>
            <p className="text-secondary-600">Centralisez toutes les informations de vos clients B2B</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-slide-up">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <i className="ri-line-chart-line text-2xl text-primary-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">Suivi des Ventes</h3>
            <p className="text-secondary-600">Suivez vos opportunités depuis le prospect jusqu'à la vente</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-slide-up">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <i className="ri-bar-chart-line text-2xl text-primary-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">Rapports Avancés</h3>
            <p className="text-secondary-600">Analysez vos performances avec des rapports détaillés</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-slide-up">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <i className="ri-notification-line text-2xl text-primary-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">Notifications</h3>
            <p className="text-secondary-600">Restez informé des actions importantes et des échéances</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-slide-up">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <i className="ri-shield-check-line text-2xl text-primary-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">Sécurité</h3>
            <p className="text-secondary-600">Vos données sont protégées avec les plus hauts standards</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mireb Commercial B2B</h3>
              <p className="text-secondary-400">
                La solution complète pour optimiser vos ventes B2B
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produit</h4>
              <ul className="space-y-2 text-secondary-400">
                <li><Link href="/fonctionnalites" className="hover:text-white transition-colors">Fonctionnalités</Link></li>
                <li><Link href="/tarifs" className="hover:text-white transition-colors">Tarifs</Link></li>
                <li><Link href="/demo" className="hover:text-white transition-colors">Démo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-secondary-400">
                <li><Link href="/aide" className="hover:text-white transition-colors">Centre d'aide</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-secondary-400">
                <li><Link href="/about" className="hover:text-white transition-colors">À propos</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Carrières</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-400">
            <p>&copy; 2025 Mireb Commercial B2B. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
