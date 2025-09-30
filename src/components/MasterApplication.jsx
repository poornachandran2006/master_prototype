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
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

const MasterApplication = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [userRole, setUserRole] = useState('Police');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'monitoring', label: 'Live Monitoring', icon: Map },
    { id: 'alerts', label: 'Alert Management', icon: AlertTriangle },
    { id: 'incidents', label: 'Incident Handling', icon: Shield },
    { id: 'analytics', label: 'Analytics & Reports', icon: BarChart3 },
  ];

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

  const handleNavigate = (view) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  const AuthComponent = () => (
    <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md mx-auto border border-blue-500/30 animate-fadeIn">
      <div className="text-center mb-6 sm:mb-8">
        <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400 mx-auto mb-4 animate-pulse" />
        <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Secure Login</h2>
        <p className="text-slate-400 text-sm sm:text-base">Access Control System</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-blue-400 mb-2">Role Selection</label>
          <select 
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
            className="w-full px-4 py-3 bg-slate-800/50 border-2 border-blue-500/30 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-all duration-300"
          >
            <option value="Patrol">Patrol Officer</option>
            <option value="Police">Police Officer</option>
            <option value="Admin">System Admin</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-blue-400 mb-2">Badge ID</label>
          <input 
            type="text" 
            placeholder="Enter Badge ID"
            className="w-full px-4 py-3 bg-slate-800/50 border-2 border-blue-500/30 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-blue-400 mb-2">Password</label>
          <input 
            type="password" 
            placeholder="Enter Password"
            className="w-full px-4 py-3 bg-slate-800/50 border-2 border-blue-500/30 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
          />
        </div>
        
        <button 
          onClick={() => setIsAuthenticated(true)}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-semibold shadow-lg shadow-blue-500/50 hover:scale-105 transform"
        >
          Login as {userRole}
        </button>
      </div>
      
      <div className="mt-6 p-4 bg-slate-800/50 rounded-xl border border-blue-500/20">
        <h4 className="font-medium text-blue-400 mb-2 text-sm sm:text-base">Role-Based Access:</h4>
        <ul className="text-xs sm:text-sm text-slate-400 space-y-1">
          <li>• <strong className="text-slate-300">Patrol:</strong> Field monitoring & alerts</li>
          <li>• <strong className="text-slate-300">Police:</strong> Escalation handling</li>
          <li>• <strong className="text-slate-300">Admin:</strong> Full system oversight</li>
        </ul>
      </div>
    </div>
  );

  const LiveMonitoring = () => (
    <div className="space-y-4 sm:space-y-6 animate-fadeInUp">
      <div className="bg-gradient-to-br from-slate-900/90 via-blue-950/90 to-slate-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-blue-500/30">
        <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 flex items-center">
          <Map className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-2" />
          Real-Time Monitoring Dashboard
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-gradient-to-br from-blue-900/40 to-green-900/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-dashed border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
            <h4 className="font-semibold text-blue-300 mb-3 sm:mb-4 text-sm sm:text-base">Interactive Map View</h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-400">
              <p>📍 Real-time tourist locations</p>
              <p>🛡️ Geofenced patrol zones</p>
              <p>🗺️ Monastery locations marked</p>
              <p>📶 Live GPS tracking display</p>
            </div>
            <div className="mt-4 flex space-x-2 items-center">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-slate-500">Live Updates</span>
            </div>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-slate-300 text-sm sm:text-base">Active Tourists</h4>
            {touristData.map((tourist, idx) => (
              <div key={tourist.id} className="bg-slate-800/80 rounded-xl p-3 sm:p-4 hover:bg-slate-700/80 transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 hover:scale-105 animate-fadeInUp" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-slate-200 text-sm sm:text-base truncate">{tourist.name}</div>
                    <div className="text-xs sm:text-sm text-slate-500">ID: {tourist.id} | Guide: {tourist.guide}</div>
                    <div className="text-xs sm:text-sm text-slate-400 flex items-center mt-1">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                      <span className="truncate">{tourist.location}</span>
                    </div>
                  </div>
                  <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                    tourist.status === 'Active' 
                      ? 'bg-green-900/50 text-green-400 border border-green-500/30' 
                      : 'bg-red-900/50 text-red-400 border border-red-500/30'
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

  const AlertManagement = () => (
    <div className="space-y-4 sm:space-y-6 animate-fadeInUp text-white">
      <div className="bg-gradient-to-br from-slate-900/90 via-blue-950/90 to-slate-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-blue-500/30">
        <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 flex items-center">
          <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mr-2" />
          Alert Management System
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {[
            { title: 'SOS Alerts', desc: 'High-priority emergency notifications with sound/vibration alerts', color: 'red' },
            { title: 'Geo-fencing', desc: 'Auto alerts when tourists enter restricted patrol zones', color: 'yellow' },
            { title: 'Connection Loss', desc: 'Flags when location updates stop from devices', color: 'orange' },
            { title: 'Delay Alerts', desc: 'Tourists who miss expected checkpoint times', color: 'blue' }
          ].map((alert, idx) => (
            <div key={idx} className={`bg-${alert.color}-900/20 border border-${alert.color}-500/30 rounded-xl p-3 sm:p-4 hover:scale-105 transition-all duration-300 animate-fadeInUp`} style={{ animationDelay: `${idx * 100}ms` }}>
              <h4 className={`font-semibold text-${alert.color}-400 mb-1 sm:mb-2 text-sm sm:text-base`}>{alert.title}</h4>
              <p className={`text-xs sm:text-sm text-${alert.color}-300/70`}>{alert.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          <h4 className="font-semibold text-slate-300 text-sm sm:text-base">Active Alerts</h4>
          {alertData.map((alert, idx) => (
            <div key={alert.id} className={`rounded-xl p-3 sm:p-4 border-l-4 hover:scale-105 transition-all duration-300 animate-slideInRight ${
              alert.priority === 'High' 
                ? 'bg-red-900/30 border-red-500' 
                : 'bg-yellow-900/30 border-yellow-500'
            }`} style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex-1 min-w-0 w-full">
                  <div className="flex items-center space-x-2 mb-2 flex-wrap">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      alert.type === 'SOS' 
                        ? 'bg-red-500/20 text-red-400'
                        : alert.type === 'Geo-fence'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-orange-500/20 text-orange-400'
                    }`}>
                      {alert.type}
                    </span>
                    <span className="font-medium text-slate-200 text-sm sm:text-base">{alert.tourist}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400">
                    Location: {alert.location} • {alert.time}
                  </div>
                </div>
                <button className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-xs sm:text-sm font-semibold shadow-lg shadow-blue-500/50 hover:scale-105">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const IncidentHandling = () => (
    <div className="space-y-4 sm:space-y-6 animate-fadeInUp">
      <div className="bg-gradient-to-br from-slate-900/90 via-blue-950/90 to-slate-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-blue-500/30">
        <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 flex items-center">
          <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-2" />
          Incident Handling Workflow
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-slate-300 text-sm sm:text-base">Response Workflow</h4>
            
            {[
              { num: 1, title: 'Acknowledge Alert', desc: 'Patrol marks alert as "In Progress"', color: 'blue' },
              { num: 2, title: 'Contact Tourist/Guide', desc: 'Integrated call/chat communication', color: 'green' },
              { num: 3, title: 'Escalation if Needed', desc: 'Notify higher authorities (police)', color: 'orange' },
              { num: 4, title: 'Close with Report', desc: 'Document actions taken and outcome', color: 'purple' }
            ].map((step, idx) => (
              <div key={idx} className={`flex items-center space-x-3 p-4 bg-${step.color}-900/20 rounded-xl border border-${step.color}-500/30 hover:scale-105 transition-all duration-300 animate-fadeInUp`} style={{ animationDelay: `${idx * 100}ms` }}>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-${step.color}-600 to-${step.color}-700 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium flex-shrink-0 shadow-lg`}>{step.num}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-slate-200 text-sm sm:text-base">{step.title}</div>
                  <div className="text-xs sm:text-sm text-slate-400">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-slate-300 text-sm sm:text-base">Communication Tools</h4>
            
            {[
              { icon: Phone, title: 'Direct Call', desc: 'One-click calling to tourist/guide', color: 'green' },
              { icon: MessageCircle, title: 'Chat Interface', desc: 'Real-time messaging system', color: 'blue' },
              { icon: Radio, title: 'Emergency Broadcast', desc: 'Alert all nearby patrol units', color: 'red' },
              { icon: CheckCircle, title: 'Incident Report', desc: 'Digital report generation', color: 'purple' }
            ].map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div key={idx} className="p-3 sm:p-4 border border-slate-700 rounded-xl hover:bg-slate-800/50 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 animate-fadeInUp" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${tool.color}-400 flex-shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-slate-200 text-sm sm:text-base">{tool.title}</div>
                      <div className="text-xs sm:text-sm text-slate-400">{tool.desc}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  const Analytics = () => (
    <div className="space-y-4 sm:space-y-6 animate-fadeInUp text-white">
      <div className="bg-gradient-to-br from-slate-900/90 via-blue-950/90 to-slate-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-blue-500/30">
        <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 flex items-center">
          <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mr-2" />
          Analytics & Reporting Dashboard
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            { title: 'Trip History Logs', items: ['Per-tourist journey tracking', 'Monastery visit records', 'Route analysis & patterns', 'Duration & timing stats'], stat: '1,247', label: 'Total Trips Logged', color: 'blue' },
            { title: 'Alert Statistics', items: ['SOS incident frequency', 'Connection loss patterns', 'Delay occurrence rates', 'Response time metrics'], stat: '89', label: 'Alerts This Month', color: 'red' },
            { title: 'Patrol Performance', items: ['Response time analysis', 'Resolution success rates', 'Coverage area efficiency', 'Team performance metrics'], stat: '94%', label: 'Success Rate', color: 'green' }
          ].map((card, idx) => (
            <div key={idx} className={`bg-gradient-to-br from-${card.color}-900/30 to-${card.color}-900/10 rounded-xl p-4 sm:p-6 border border-${card.color}-500/30 hover:scale-105 transition-all duration-300 animate-fadeInUp`} style={{ animationDelay: `${idx * 100}ms` }}>
              <h4 className={`font-semibold text-${card.color}-400 mb-3 sm:mb-4 text-sm sm:text-base`}>{card.title}</h4>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-slate-400 mb-4">
                {card.items.map((item, i) => (
                  <p key={i}>• {item}</p>
                ))}
              </div>
              <div className={`text-2xl sm:text-3xl font-bold text-${card.color}-400 mb-1`}>{card.stat}</div>
              <div className={`text-xs sm:text-sm text-${card.color}-300/70`}>{card.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 sm:mt-8 bg-slate-800/50 rounded-xl p-4 sm:p-6 border border-blue-500/20">
          <h4 className="font-semibold text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">Generate Reports</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { title: 'Daily Activity Report', desc: 'Summary of daily operations and incidents' },
              { title: 'Weekly Performance Report', desc: 'Patrol team efficiency and response metrics' },
              { title: 'Monthly Tourism Analysis', desc: 'Tourist patterns and monastery visit statistics' },
              { title: 'Custom Report Builder', desc: 'Create tailored reports with specific parameters' }
            ].map((report, idx) => (
              <button key={idx} className="p-3 sm:p-4 bg-slate-900/50 border border-slate-700 rounded-xl hover:bg-slate-800/50 hover:border-blue-500/40 hover:scale-105 transition-all duration-300 text-left animate-fadeInUp" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="font-medium text-slate-200 text-sm sm:text-base mb-1">{report.title}</div>
                <div className="text-xs sm:text-sm text-slate-400">{report.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const DashboardView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fadeInUp">
      {[
        { icon: Users, title: 'Active Tourists', stat: '127', desc: 'Currently tracked', gradient: 'from-blue-600 to-blue-700' },
        { icon: Shield, title: 'Active Patrols', stat: '24', desc: 'On duty now', gradient: 'from-green-600 to-green-700' },
        { icon: AlertTriangle, title: 'Active Alerts', stat: '3', desc: 'Require attention', gradient: 'from-red-600 to-red-700' }
      ].map((card, idx) => {
        const Icon = card.icon;
        return (
          <div key={idx} className={`bg-gradient-to-br ${card.gradient} text-white rounded-2xl p-4 sm:p-6 shadow-xl hover:scale-105 transition-all duration-300 animate-fadeInUp border border-white/20`} style={{ animationDelay: `${idx * 100}ms` }}>
            <Icon className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 opacity-90" />
            <h3 className="text-lg sm:text-xl font-bold mb-2">{card.title}</h3>
            <div className="text-2xl sm:text-3xl font-bold mb-1">{card.stat}</div>
            <div className="text-xs sm:text-sm opacity-80">{card.desc}</div>
          </div>
        );
      })}
    </div>
  );

  const renderCurrentView = () => {
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
        return <DashboardView />;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-black flex items-center justify-center p-4">
        <AuthComponent />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-black overflow-x-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900/90 via-blue-950/90 to-slate-900/90 backdrop-blur-xl shadow-xl border-b border-blue-500/30 sticky top-0 z-40">
        <div className="w-full px-3 sm:px-6">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
              <h1 className="text-sm sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 truncate">Sikkim Monastery Security</h1>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button 
                onClick={() => setIsAuthenticated(false)}
                className="hidden sm:flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-xs sm:text-sm font-semibold shadow-lg shadow-blue-500/50 hover:scale-105"
              >
                <UserCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Switch ({userRole})</span>
              </button>
              
              <div className="relative">
                <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 cursor-pointer hover:text-blue-400 transition-colors duration-300" />
                <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse font-bold">
                  3
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-blue-400 transition-colors duration-300"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="w-full p-3 sm:p-6">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* Desktop Sidebar */}
          <nav className="hidden lg:block w-64 bg-gradient-to-br from-slate-900/90 via-blue-950/90 to-slate-900/90 backdrop-blur-xl rounded-2xl shadow-xl p-4 sm:p-6 border border-blue-500/30 animate-fadeIn">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      currentView === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50'
                        : 'text-slate-300 hover:bg-slate-800/50 hover:text-blue-400'
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

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-14 sm:top-16 bg-black/50 backdrop-blur-sm z-30 animate-fadeIn" onClick={() => setMobileMenuOpen(false)}>
              <div className="bg-gradient-to-br from-slate-900/95 via-blue-950/95 to-slate-900/95 backdrop-blur-xl rounded-b-2xl p-4 shadow-2xl border-b border-x border-blue-500/30 animate-slideDown" onClick={(e) => e.stopPropagation()}>
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigate(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl mb-2 transition-all duration-300 ${
                        currentView === item.id
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                          : 'text-slate-300 hover:bg-slate-800/50'
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
                <button
                  onClick={() => {
                    setIsAuthenticated(false);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800/50 transition-all duration-300 sm:hidden"
                >
                  <UserCheck className="w-5 h-5" />
                  <span className="font-medium">Switch User ({userRole})</span>
                </button>
              </div>
            </div>
          )}

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {renderCurrentView()}
          </main>
        </div>
      </div>
      
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MasterApplication;