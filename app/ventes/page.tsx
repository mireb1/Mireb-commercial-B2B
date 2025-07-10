import Link from 'next/link'

export default function Ventes() {
  const ventes = [
    {
      id: 1,
      client: "TechCorp Industries",
      produit: "Solution CRM Enterprise",
      montant: "€5,200",
      statut: "Fermée",
      date: "2025-01-08",
      commercial: "Marie Dubois"
    },
    {
      id: 2,
      client: "Business Solutions",
      produit: "Pack Marketing Digital",
      montant: "€3,800",
      statut: "En cours",
      date: "2025-01-07",
      commercial: "Jean Martin"
    },
    {
      id: 3,
      client: "Digital Dynamics",
      produit: "Consultation SEO",
      montant: "€2,100",
      statut: "Négociation",
      date: "2025-01-06",
      commercial: "Sophie Leroux"
    }
  ]

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
              <Link href="/ventes" className="flex items-center px-3 py-2 text-primary-600 bg-primary-50 rounded-lg">
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
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-secondary-900 mb-2">Ventes</h1>
                <p className="text-secondary-600">Suivez vos opportunités et ventes</p>
              </div>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
                <i className="ri-add-line mr-2"></i>
                Nouvelle vente
              </button>
            </div>
          </div>

          {/* Sales Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-secondary-600">Ventes fermées</p>
                  <p className="text-2xl font-bold text-secondary-900">12</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="ri-check-line text-2xl text-green-600"></i>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-secondary-600">En cours</p>
                  <p className="text-2xl font-bold text-secondary-900">8</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="ri-time-line text-2xl text-blue-600"></i>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-secondary-600">En négociation</p>
                  <p className="text-2xl font-bold text-secondary-900">5</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <i className="ri-discuss-line text-2xl text-orange-600"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Sales Pipeline */}
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <h2 className="text-lg font-semibold text-secondary-900 mb-4">Pipeline des ventes</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-secondary-900 mb-2">Prospects</h3>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border-l-4 border-gray-400">
                    <p className="text-sm font-medium">Nouveau Client A</p>
                    <p className="text-xs text-secondary-500">€1,500</p>
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-gray-400">
                    <p className="text-sm font-medium">Nouveau Client B</p>
                    <p className="text-xs text-secondary-500">€2,200</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-secondary-900 mb-2">Qualification</h3>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                    <p className="text-sm font-medium">Business Solutions</p>
                    <p className="text-xs text-secondary-500">€3,800</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-medium text-secondary-900 mb-2">Négociation</h3>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border-l-4 border-orange-400">
                    <p className="text-sm font-medium">Digital Dynamics</p>
                    <p className="text-xs text-secondary-500">€2,100</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-medium text-secondary-900 mb-2">Fermées</h3>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border-l-4 border-green-400">
                    <p className="text-sm font-medium">TechCorp Industries</p>
                    <p className="text-xs text-secondary-500">€5,200</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sales Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-secondary-900">Historique des ventes</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                      Produit/Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                      Montant
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                      Commercial
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {ventes.map((vente) => (
                    <tr key={vente.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-secondary-900">
                          {vente.client}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-secondary-900">{vente.produit}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-secondary-900">{vente.montant}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          vente.statut === 'Fermée' ? 'bg-green-100 text-green-800' :
                          vente.statut === 'En cours' ? 'bg-blue-100 text-blue-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {vente.statut}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">
                        {new Date(vente.date).toLocaleDateString('fr-FR')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900">
                        {vente.commercial}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-primary-600 hover:text-primary-900 transition-colors">
                            <i className="ri-eye-line"></i>
                          </button>
                          <button className="text-primary-600 hover:text-primary-900 transition-colors">
                            <i className="ri-edit-line"></i>
                          </button>
                          <button className="text-red-600 hover:text-red-900 transition-colors">
                            <i className="ri-delete-bin-line"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
