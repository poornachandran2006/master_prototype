import React, { useState } from 'react';
import { 
  Shield, 
  Users, 
  MapPin, 
  AlertTriangle, 
  Phone, 
  MessageCircle, 
  Clock, 
  Activity,
  BarChart3,
  Settings,
  Bell,
  Map,
  UserCheck,
  Radio,
  Eye,
  ChevronRight,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

const MasterApplication = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [userRole, setUserRole] = useState('Police');

  // Navigation items
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'monitoring', label: 'Live Monitoring', icon: Map },
    { id: 'alerts', label: 'Alert Management', icon: AlertTriangle },
    { id: 'incidents', label: 'Incident Handling', icon: Shield },
    { id: 'analytics', label: 'Analytics & Reports', icon: BarChart3 },
  ];

  // Sample data for demonstration
  const touristData = [
    { id: 'T001', name: 'John Doe', guide: 'Guide A', location: 'Rumtek Monastery', status: 'Active' },
    { id: 'T002', name: 'Jane Smith', guide: 'Guide B', location: 'Enchey Monastery', status: 'Alert' },
    { id: 'T003', name: 'Mike Johnson', guide: 'Guide C', location: 'Pemayangtse Monastery', status: 'Active' },
  ];

  const alertData = [
    { id: 'A001', type: 'SOS', tourist: 'Jane Smith', location: 'Enchey Monastery', time: '2 min ago', priority: 'High' },
    { id: 'A002', type: 'Geo-fence', tourist: 'Mike Johnson', location: 'Restricted Area', time: '5 min ago', priority: 'Medium' },
    { id: 'A003', type: 'Connection Loss', tourist: 'Sarah Wilson', location: 'Unknown', time: '10 min ago', priority: 'High' },
  ];

  // Component for Authentication
  const AuthComponent = () => (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
      <div className="text-center mb-8">
        <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900">Secure Login</h2>
        <p className="text-gray-600">Access Control System</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Role Selection</label>
          <select 
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="Patrol">Patrol Officer</option>
            <option value="Police">Police Officer</option>
            <option value="Admin">System Admin</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Badge ID</label>
          <input 
            type="text" 
            placeholder="Enter Badge ID"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input 
            type="password" 
            placeholder="Enter Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
          Login as {userRole}
        </button>
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-2">Role-Based Access:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• <strong>Patrol:</strong> Field monitoring & alerts</li>
          <li>• <strong>Police:</strong> Escalation handling</li>
          <li>• <strong>Admin:</strong> Full system oversight</li>
        </ul>
      </div>
    </div>
  );

  // Component for Live Monitoring
  const LiveMonitoring = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Map className="w-6 h-6 text-blue-600 mr-2" />
          Real-Time Monitoring Dashboard
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Map Area */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 border-2 border-dashed border-blue-200">
            <h4 className="font-semibold text-gray-900 mb-4">Interactive Map View</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📍 Real-time tourist locations</p>
              <p>🛡️ Geofenced patrol zones</p>
              <p>🗺️ Monastery locations marked</p>
              <p>📶 Live GPS tracking display</p>
            </div>
            <div className="mt-4 flex space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">Live Updates</span>
            </div>
          </div>
          
          {/* Tourist Details Panel */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Active Tourists</h4>
            {touristData.map((tourist) => (
              <div key={tourist.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">{tourist.name}</div>
                    <div className="text-sm text-gray-600">ID: {tourist.id} | Guide: {tourist.guide}</div>
                    <div className="text-sm text-gray-500 flex items-center mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {tourist.location}
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    tourist.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {tourist.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Component for Alert Management
  const AlertManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
          Alert Management System
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-900 mb-2">SOS Alerts</h4>
            <p className="text-sm text-red-700">High-priority emergency notifications with sound/vibration alerts</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-900 mb-2">Geo-fencing</h4>
            <p className="text-sm text-yellow-700">Auto alerts when tourists enter restricted patrol zones</p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 className="font-semibold text-orange-900 mb-2">Connection Loss</h4>
            <p className="text-sm text-orange-700">Flags when location updates stop from devices</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Delay Alerts</h4>
            <p className="text-sm text-blue-700">Tourists who miss expected checkpoint times</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Active Alerts</h4>
          {alertData.map((alert) => (
            <div key={alert.id} className={`rounded-lg p-4 border-l-4 ${
              alert.priority === 'High' 
                ? 'bg-red-50 border-red-500' 
                : 'bg-yellow-50 border-yellow-500'
            } hover:shadow-md transition-shadow duration-200`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      alert.type === 'SOS' 
                        ? 'bg-red-100 text-red-800'
                        : alert.type === 'Geo-fence'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {alert.type}
                    </span>
                    <span className="font-medium text-gray-900">{alert.tourist}</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Location: {alert.location} • {alert.time}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Component for Incident Handling
  const IncidentHandling = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Shield className="w-6 h-6 text-green-600 mr-2" />
          Incident Handling Workflow
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Workflow Steps */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Response Workflow</h4>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
                <div>
                  <div className="font-medium text-gray-900">Acknowledge Alert</div>
                  <div className="text-sm text-gray-600">Patrol marks alert as "In Progress"</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
                <div>
                  <div className="font-medium text-gray-900">Contact Tourist/Guide</div>
                  <div className="text-sm text-gray-600">Integrated call/chat communication</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-medium">3</div>
                <div>
                  <div className="font-medium text-gray-900">Escalation if Needed</div>
                  <div className="text-sm text-gray-600">Notify higher authorities (police)</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">4</div>
                <div>
                  <div className="font-medium text-gray-900">Close with Report</div>
                  <div className="text-sm text-gray-600">Document actions taken and outcome</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Communication Tools */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Communication Tools</h4>
            
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="font-medium text-gray-900">Direct Call</div>
                    <div className="text-sm text-gray-600">One-click calling to tourist/guide</div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Chat Interface</div>
                    <div className="text-sm text-gray-600">Real-time messaging system</div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <Radio className="w-6 h-6 text-red-600" />
                  <div>
                    <div className="font-medium text-gray-900">Emergency Broadcast</div>
                    <div className="text-sm text-gray-600">Alert all nearby patrol units</div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                  <div>
                    <div className="font-medium text-gray-900">Incident Report</div>
                    <div className="text-sm text-gray-600">Digital report generation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Component for Analytics & Reports
  const Analytics = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <BarChart3 className="w-6 h-6 text-purple-600 mr-2" />
          Analytics & Reporting Dashboard
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Trip History */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 mb-4">Trip History Logs</h4>
            <div className="space-y-2 text-sm text-blue-800">
              <p>• Per-tourist journey tracking</p>
              <p>• Monastery visit records</p>
              <p>• Route analysis & patterns</p>
              <p>• Duration & timing stats</p>
            </div>
            <div className="mt-4 text-2xl font-bold text-blue-900">1,247</div>
            <div className="text-sm text-blue-700">Total Trips Logged</div>
          </div>
          
          {/* Alert Statistics */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
            <h4 className="font-semibold text-red-900 mb-4">Alert Statistics</h4>
            <div className="space-y-2 text-sm text-red-800">
              <p>• SOS incident frequency</p>
              <p>• Connection loss patterns</p>
              <p>• Delay occurrence rates</p>
              <p>• Response time metrics</p>
            </div>
            <div className="mt-4 text-2xl font-bold text-red-900">89</div>
            <div className="text-sm text-red-700">Alerts This Month</div>
          </div>
          
          {/* Performance Reports */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 mb-4">Patrol Performance</h4>
            <div className="space-y-2 text-sm text-green-800">
              <p>• Response time analysis</p>
              <p>• Resolution success rates</p>
              <p>• Coverage area efficiency</p>
              <p>• Team performance metrics</p>
            </div>
            <div className="mt-4 text-2xl font-bold text-green-900">94%</div>
            <div className="text-sm text-green-700">Success Rate</div>
          </div>
        </div>
        
        {/* Report Generation */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Generate Reports</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200 text-left">
              <div className="font-medium text-gray-900">Daily Activity Report</div>
              <div className="text-sm text-gray-600">Summary of daily operations and incidents</div>
            </button>
            <button className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200 text-left">
              <div className="font-medium text-gray-900">Weekly Performance Report</div>
              <div className="text-sm text-gray-600">Patrol team efficiency and response metrics</div>
            </button>
            <button className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200 text-left">
              <div className="font-medium text-gray-900">Monthly Tourism Analysis</div>
              <div className="text-sm text-gray-600">Tourist patterns and monastery visit statistics</div>
            </button>
            <button className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200 text-left">
              <div className="font-medium text-gray-900">Custom Report Builder</div>
              <div className="text-sm text-gray-600">Create tailored reports with specific parameters</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentView = () => {
    if (currentView === 'auth') return <AuthComponent />;
    
    switch (currentView) {
      case 'monitoring':
        return <LiveMonitoring />;
      case 'alerts':
        return <AlertManagement />;
      case 'incidents':
        return <IncidentHandling />;
      case 'analytics':
        return <Analytics />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6 shadow-lg">
              <Users className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2">Active Tourists</h3>
              <div className="text-3xl font-bold mb-1">127</div>
              <div className="text-blue-100">Currently tracked</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6 shadow-lg">
              <Shield className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2">Active Patrols</h3>
              <div className="text-3xl font-bold mb-1">24</div>
              <div className="text-green-100">On duty now</div>
            </div>
            
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg p-6 shadow-lg">
              <AlertTriangle className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2">Active Alerts</h3>
              <div className="text-3xl font-bold mb-1">3</div>
              <div className="text-red-100">Require attention</div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Shield className="w-8 h-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Sikkim Monastery Security System</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setCurrentView('auth')}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <UserCheck className="w-4 h-4" />
                <span>Switch User ({userRole})</span>
              </button>
              
              <div className="relative">
                <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView !== 'auth' && (
          <div className="flex space-x-8">
            {/* Navigation Sidebar */}
            <nav className="w-64 bg-white rounded-lg shadow-lg p-6">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentView(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        currentView === item.id
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                      {currentView === item.id && (
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      )}
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1">
              <div className="animate-fade-in">
                {renderCurrentView()}
              </div>
            </main>
          </div>
        )}
        
        {currentView === 'auth' && (
          <div className="animate-fade-in">
            <AuthComponent />
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MasterApplication;