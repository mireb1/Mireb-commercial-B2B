import Link from 'next/link'

export default function Rapports() {
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
              <Link href="/dashboard" className="flex items-center px-3 py-2 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
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
              <Link href="/rapports" className="flex items-center px-3 py-2 text-primary-600 bg-primary-50 rounded-lg">
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
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-secondary-900 mb-2">Rapports</h1>
                <p className="text-secondary-600">Analysez vos performances commerciales</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-white border border-gray-300 text-secondary-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                  <i className="ri-download-line mr-2"></i>
                  Exporter
                </button>
                <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
                  <i className="ri-add-line mr-2"></i>
                  Nouveau rapport
                </button>
              </div>
            </div>
          </div>

          {/* Report Filters */}
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <h2 className="text-lg font-semibold text-secondary-900 mb-4">Filtres</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">Période</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>Ce mois</option>
                  <option>Le mois dernier</option>
                  <option>Ce trimestre</option>
                  <option>Cette année</option>
                  <option>Personnalisé</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">Commercial</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>Tous</option>
                  <option>Marie Dubois</option>
                  <option>Jean Martin</option>
                  <option>Sophie Leroux</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">Statut client</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>Tous</option>
                  <option>VIP</option>
                  <option>Actif</option>
                  <option>Régulier</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">Produit</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>Tous</option>
                  <option>CRM Enterprise</option>
                  <option>Marketing Digital</option>
                  <option>Consultation SEO</option>
                </select>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-secondary-600">Chiffre d&#39;affaires</p>
                  <p className="text-2xl font-bold text-secondary-900">€125,680</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="ri-money-euro-circle-line text-2xl text-green-600"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-sm text-green-600 font-medium">+15%</span>
                <span className="text-sm text-secondary-500 ml-2">vs période précédente</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-secondary-600">Nombre de ventes</p>
                  <p className="text-2xl font-bold text-secondary-900">47</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="ri-shopping-cart-line text-2xl text-blue-600"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-sm text-green-600 font-medium">+8%</span>
                <span className="text-sm text-secondary-500 ml-2">vs période précédente</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-secondary-600">Panier moyen</p>
                  <p className="text-2xl font-bold text-secondary-900">€2,674</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i className="ri-calculator-line text-2xl text-purple-600"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-sm text-green-600 font-medium">+6%</span>
                <span className="text-sm text-secondary-500 ml-2">vs période précédente</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-secondary-600">Taux de conversion</p>
                  <p className="text-2xl font-bold text-secondary-900">32%</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <i className="ri-pie-chart-line text-2xl text-orange-600"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-sm text-green-600 font-medium">+3%</span>
                <span className="text-sm text-secondary-500 ml-2">vs période précédente</span>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Sales Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Évolution des ventes</h3>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <i className="ri-line-chart-line text-4xl text-secondary-400 mb-2"></i>
                  <p className="text-secondary-600">Graphique des ventes</p>
                  <p className="text-sm text-secondary-500">Intégration avec Chart.js à venir</p>
                </div>
              </div>
            </div>

            {/* Performance by Sales Rep */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Performance par commercial</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-medium">MD</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-secondary-900">Marie Dubois</p>
                      <p className="text-sm text-secondary-500">€45,200</p>
                    </div>
                  </div>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-medium">JM</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-secondary-900">Jean Martin</p>
                      <p className="text-sm text-secondary-500">€38,500</p>
                    </div>
                  </div>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{width: '72%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-medium">SL</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-secondary-900">Sophie Leroux</p>
                      <p className="text-sm text-secondary-500">€41,980</p>
                    </div>
                  </div>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-secondary-900 mb-4">Produits les plus vendus</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                      Produit
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                      Ventes
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                      Revenus
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                      Évolution
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-secondary-900">Solution CRM Enterprise</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900">
                      15 unités
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900">
                      €78,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-green-600 font-medium">+12%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-secondary-900">Pack Marketing Digital</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900">
                      12 unités
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900">
                      €45,600
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-green-600 font-medium">+8%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-secondary-900">Consultation SEO</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900">
                      8 unités
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900">
                      €16,800
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-red-600 font-medium">-3%</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
