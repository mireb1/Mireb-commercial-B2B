import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary-600">Mireb</Link>
              <span className="ml-2 text-sm font-medium text-secondary-600">Commercial B2B</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-secondary-600 hover:text-primary-600 transition-colors">
                <i className="ri-notification-line text-xl"></i>
              </button>
              <button className="p-2 text-secondary-600 hover:text-primary-600 transition-colors">
                <i className="ri-settings-line text-xl"></i>
              </button>
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <i className="ri-user-line text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <div className="p-6">
            <nav className="space-y-2">
              <Link href="/dashboard" className="flex items-center px-3 py-2 text-primary-600 bg-primary-50 rounded-lg">
                <i className="ri-dashboard-line mr-3"></i>
                Dashboard
              </Link>
              <Link href="/clients" className="flex items-center px-3 py-2 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                <i className="ri-team-line mr-3"></i>
                Clients
              </Link>
              <Link href="/ventes" className="flex items-center px-3 py-2 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                <i className="ri-line-chart-line mr-3"></i>
                Ventes
              </Link>
              <Link href="/produits" className="flex items-center px-3 py-2 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                <i className="ri-product-hunt-line mr-3"></i>
                Produits
              </Link>
              <Link href="/rapports" className="flex items-center px-3 py-2 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                <i className="ri-bar-chart-line mr-3"></i>
                Rapports
              </Link>
              <Link href="/parametres" className="flex items-center px-3 py-2 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                <i className="ri-settings-line mr-3"></i>
                Paramètres
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-secondary-900 mb-2">Dashboard</h1>
            <p className="text-secondary-600">Aperçu de votre activité commerciale</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-secondary-600">Ventes du mois</p>
                  <p className="text-2xl font-bold text-secondary-900">€45,230</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="ri-money-euro-circle-line text-2xl text-green-600"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-sm text-green-600 font-medium">+12%</span>
                <span className="text-sm text-secondary-500 ml-2">vs mois dernier</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-secondary-600">Nouveaux clients</p>
                  <p className="text-2xl font-bold text-secondary-900">24</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="ri-user-add-line text-2xl text-blue-600"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-sm text-green-600 font-medium">+8%</span>
                <span className="text-sm text-secondary-500 ml-2">vs mois dernier</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-secondary-600">Taux de conversion</p>
                  <p className="text-2xl font-bold text-secondary-900">32%</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i className="ri-pie-chart-line text-2xl text-purple-600"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-sm text-green-600 font-medium">+5%</span>
                <span className="text-sm text-secondary-500 ml-2">vs mois dernier</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-secondary-600">Opportunités</p>
                  <p className="text-2xl font-bold text-secondary-900">156</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <i className="ri-target-line text-2xl text-orange-600"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-sm text-green-600 font-medium">+18%</span>
                <span className="text-sm text-secondary-500 ml-2">vs mois dernier</span>
              </div>
            </div>
          </div>

          {/* Charts and Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Sales */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Ventes récentes</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-medium">AC</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-secondary-900">Acme Corporation</p>
                      <p className="text-sm text-secondary-500">Il y a 2 heures</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-green-600">+€2,500</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-medium">GT</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-secondary-900">Global Tech</p>
                      <p className="text-sm text-secondary-500">Il y a 4 heures</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-green-600">+€1,800</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-medium">IS</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-secondary-900">Innov Solutions</p>
                      <p className="text-sm text-secondary-500">Hier</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-green-600">+€3,200</span>
                </div>
              </div>
            </div>

            {/* Top Clients */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Meilleurs clients</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <i className="ri-vip-crown-line text-yellow-600"></i>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-secondary-900">TechCorp Industries</p>
                      <p className="text-sm text-secondary-500">€15,600 ce mois</p>
                    </div>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">VIP</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-building-line text-green-600"></i>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-secondary-900">Business Solutions</p>
                      <p className="text-sm text-secondary-500">€8,900 ce mois</p>
                    </div>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Actif</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="ri-global-line text-blue-600"></i>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-secondary-900">Digital Dynamics</p>
                      <p className="text-sm text-secondary-500">€6,750 ce mois</p>
                    </div>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Régulier</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
