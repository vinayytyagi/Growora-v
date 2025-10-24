import { 
  FiPieChart, 
  FiBarChart, 
  FiFileText, 
  FiBriefcase, 
  FiShoppingBag, 
  FiTrendingUp, 
  FiMessageCircle, 
  FiSettings, 
  FiCreditCard,
  FiZap
} from 'react-icons/fi';

export default function Sidebar({ activeItem = 'Templates' }) {
  const navigationItems = [
    { name: 'Dashboard', icon: FiPieChart, id: 'dashboard' },
    { name: 'Live Chat', icon: FiBarChart, id: 'live-chat' },
    { name: 'Templates', icon: FiFileText, id: 'templates' },
    { name: 'Contact Us', icon: FiBriefcase, id: 'contact' },
    { name: 'Template', icon: FiShoppingBag, id: 'templates-2' },
    { name: 'Campaigns', icon: FiTrendingUp, id: 'campaigns' },
    { name: 'Ads Manager', icon: FiMessageCircle, id: 'ads-manager' },
    { name: 'Flows', icon: FiSettings, id: 'flows' },
    { name: 'Payments', icon: FiCreditCard, id: 'payments' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 overflow-y-auto z-50 lg:block">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <FiZap className="text-2xl text-green-600" />
          <span className="text-xl font-bold text-green-600">Growora</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.id}>
                <a
                  href={`/${item.id === 'templates' ? 'templates' : item.id}`}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                    activeItem === item.name
                      ? 'bg-green-500 text-white shadow-sm'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <IconComponent className="text-lg" />
                  <span className="font-medium">{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
