import Link from 'next/link'

export default function Clients() {
  const clients = [
    {
      id: 1,
      name: "TechCorp Industries",
      email: "contact@techcorp.com",
      phone: "+33 1 23 45 67 89",
      status: "VIP",
      totalSales: "€15,600",
      lastContact: "Il y a 2 jours"
    },
    {
      id: 2,
      name: "Business Solutions",
      email: "info@business-solutions.fr",
      phone: "+33 1 98 76 54 32",
      status: "Actif",
      totalSales: "€8,900",
      lastContact: "Il y a 1 semaine"
    },
    {
      id: 3,
      name: "Digital Dynamics",
      email: "hello@digital-dynamics.com",
      phone: "+33 1 11 22 33 44",
      status: "Régulier",
      totalSales: "€6,750",
      lastContact: "Il y a 3 jours"
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
              <Link href="/clients" className="flex items-center px-3 py-2 text-primary-600 bg-primary-50 rounded-lg">
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
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-secondary-900 mb-2">Clients</h1>
                <p className="text-secondary-600">Gérez vos clients et prospects</p>
              </div>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
                <i className="ri-add-line mr-2"></i>
                Nouveau client
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <i className="ri-search-line absolute left-3 top-3 text-secondary-400"></i>
                  <input
                    type="text"
                    placeholder="Rechercher un client..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>Tous les statuts</option>
                  <option>VIP</option>
                  <option>Actif</option>
                  <option>Régulier</option>
                  <option>Inactif</option>
                </select>
                <button className="px-4 py-2 bg-gray-100 text-secondary-600 rounded-lg hover:bg-gray-200 transition-colors">
                  <i className="ri-filter-line"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Clients Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-secondary-900">Liste des clients</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                      Ventes totales
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                      Dernier contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {clients.map((client) => (
                    <tr key={client.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                            <span className="text-primary-600 font-medium">
                              {client.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-secondary-900">
                              {client.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-secondary-900">{client.email}</div>
                        <div className="text-sm text-secondary-500">{client.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          client.status === 'VIP' ? 'bg-yellow-100 text-yellow-800' :
                          client.status === 'Actif' ? 'bg-green-100 text-green-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {client.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900">
                        {client.totalSales}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">
                        {client.lastContact}
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

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-secondary-700">
              Affichage de <span className="font-medium">1</span> à <span className="font-medium">3</span> sur <span className="font-medium">3</span> résultats
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                Précédent
              </button>
              <button className="px-3 py-1 text-sm bg-primary-600 text-white border border-primary-600 rounded-md">
                1
              </button>
              <button className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                Suivant
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
