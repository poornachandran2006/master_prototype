import React, { useState, useEffect } from 'react';

const SlaveApplication = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentTrip, setCurrentTrip] = useState(null);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showModal, setShowModal] = useState('');
  const [alerts, setAlerts] = useState([]);
  const [guideRating, setGuideRating] = useState(0);
  const [experienceRating, setExperienceRating] = useState(0);
  const [handicraftAlerts, setHandicraftAlerts] = useState([]);

  // Sample Data
  const sampleGuides = [
    {
      id: 1,
      name: "Tenzin Norbu",
      rating: 4.8,
      specialty: "Heritage Sites",
      location: "Leh, Ladakh",
      experience: "8 years",
      price: "₹2000/day",
      languages: ["English", "Hindi", "Ladakhi"],
      photo: "👨‍🎓"
    },
    {
      id: 2,
      name: "Dolma Yangchen",
      rating: 4.9,
      specialty: "Handicrafts",
      location: "Leh, Ladakh",
      experience: "6 years",
      price: "₹1800/day",
      languages: ["English", "Hindi", "Ladakhi", "Tibetan"],
      photo: "👩‍🎨"
    },
    {
      id: 3,
      name: "Stanzin Dorje",
      rating: 4.7,
      specialty: "Festivals & Culture",
      location: "Hemis, Ladakh",
      experience: "10 years",
      price: "₹2200/day",
      languages: ["English", "Hindi", "Ladakhi"],
      photo: "🧑‍🏫"
    }
  ];

  const [communityStories, setCommunityStories] = useState([
    {
      id: 1,
      title: "Hemis Festival Magic",
      category: "festival",
      author: "Priya Sharma",
      location: "Hemis Monastery",
      content: "The masked dancers moved with such grace and spiritual energy. The sound of traditional horns echoing through the monastery courtyard was absolutely mesmerizing...",
      date: "2024-07-15",
      likes: 24
    },
    {
      id: 2,
      title: "Traditional Pashmina Weaving",
      category: "handicraft",
      author: "Rajesh Kumar",
      location: "Changthang Plateau",
      content: "Watching the local artisans weave pashmina from Changthangi goat hair was incredible. The patience and skill required is truly remarkable...",
      date: "2024-08-22",
      likes: 18
    }
  ]);

  // Alert System
  const showAlert = (message, type = 'info') => {
    const newAlert = { id: Date.now(), message, type };
    setAlerts(prev => [...prev, newAlert]);
    setTimeout(() => {
      setAlerts(prev => prev.filter(alert => alert.id !== newAlert.id));
    }, 5000);
  };

  // Authentication Functions
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
      email: formData.get('email'),
      type: formData.get('userType'),
      name: formData.get('userType') === 'tourist' ? 'John Doe' : 'Tenzin Guide'
    };
    setCurrentUser(userData);
    setShowModal('');
    showAlert('Login successful! Welcome to Sacred Bytes.', 'success');
    generateHandicraftAlerts();
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
      email: formData.get('email'),
      type: formData.get('userType'),
      name: formData.get('name'),
      phone: formData.get('phone'),
      emergency: formData.get('emergency')
    };
    setCurrentUser(userData);
    setShowModal('');
    showAlert('Account created successfully! Welcome to Sacred Bytes.', 'success');
    generateHandicraftAlerts();
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentTrip(null);
    setActiveSection('dashboard');
    showAlert('Logged out successfully', 'info');
  };

  // Trip Functions
  const startTrip = () => {
    const newTrip = {
      id: Date.now(),
      guide: sampleGuides,
      startTime: new Date(),
      status: 'active'
    };
    setCurrentTrip(newTrip);
    showAlert('Trip started! Your guide will contact you shortly.', 'success');
    // Simulate trip events
    setTimeout(() => showAlert('Checkpoint reached: Heritage Gallery', 'success'), 10000);
    setTimeout(() => showAlert('You are running 15 minutes behind schedule', 'warning'), 20000);
  };

  const endTrip = () => {
    setCurrentTrip(null);
    showAlert('Trip completed successfully!', 'success');
    setTimeout(() => setShowModal('feedback'), 2000);
  };

  const triggerSOS = () => {
    showAlert('🚨 SOS Alert Sent! Emergency services notified.', 'error');
    setTimeout(() => showAlert('Emergency response team dispatched. ETA: 15 minutes.', 'warning'), 3000);
  };

  // Handicraft Alerts
  const generateHandicraftAlerts = () => {
    const alertsArr = [
      {
        id: Date.now(),
        title: "Traditional Thangka Painting Workshop",
        distance: "0.8 km away",
        artist: "Master Lobsang",
        price: "₹500 - ₹5000"
      },
      {
        id: Date.now() + 1,
        title: "Pashmina Weaving Center",
        distance: "1.2 km away",
        artist: "Changpa Cooperative",
        price: "₹2000 - ₹15000"
      }
    ];

    const randomAlert = alertsArr[Math.floor(Math.random() * alertsArr.length)];
    setHandicraftAlerts(prev => [...prev.slice(-2), randomAlert]);
  };

  // Community Functions
  const handleAddStory = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newStory = {
      id: Date.now(),
      title: formData.get('title'),
      category: formData.get('category'),
      author: currentUser?.name || 'Anonymous',
      location: formData.get('location'),
      content: formData.get('content'),
      date: new Date().toISOString().split('T'),
      likes: 0
    };
    setCommunityStories(prev => [newStory, ...prev]);
    setShowModal('');
    showAlert('Your story has been shared!', 'success');
  };

  const likeStory = (storyId) => {
    setCommunityStories(prev => 
      prev.map(story => 
        story.id === storyId
          ? { ...story, likes: story.likes + 1 }
          : story
      )
    );
  };

  // Effects
  useEffect(() => {
    if (currentUser) {
      const interval = setInterval(generateHandicraftAlerts, 30000);
      return () => clearInterval(interval);
    }
  }, [currentUser]);

  // Components
  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  };

  const StarRating = ({ rating, onRatingChange, readonly = false }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => !readonly && onRatingChange(star)}
            className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'} ${!readonly ? 'hover:text-yellow-400 cursor-pointer' : ''}`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  const Alert = ({ alert }) => {
    const bgColor = {
      success: 'bg-green-100 border-green-500 text-green-700',
      error: 'bg-red-100 border-red-500 text-red-700',
      warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
      info: 'bg-blue-100 border-blue-500 text-blue-700'
    }[alert.type];
    return (
      <div className={`${bgColor} border-l-4 p-4 mb-4 rounded-lg animate-fade-in`}>
        <div className="flex justify-between items-start">
          <p className="font-medium">{alert.message}</p>
          <button
            onClick={() => setAlerts(prev => prev.filter(a => a.id !== alert.id))}
            className="text-lg font-bold ml-4"
          >
            ×
          </button>
        </div>
      </div>
    );
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <header className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 mb-8 shadow-2xl">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🏛</span>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Sacred Bytes
                </h1>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setShowModal('login')}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300"
                >
                  Login
                </button>
                <button 
                  onClick={() => setShowModal('signup')}
                  className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </header>

          {/* Welcome Section */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-12 max-w-2xl mx-auto shadow-2xl text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Sacred Bytes</h2>
            <p className="text-xl text-gray-600 mb-8">Your gateway to heritage tourism and cultural exploration</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowModal('login')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-300"
              >
                Login
              </button>
              <button 
                onClick={() => setShowModal('signup')}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Login Modal */}
          <Modal isOpen={showModal === 'login'} onClose={() => setShowModal('')} title="Login">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">User Type</label>
                <select name="userType" required className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none">
                  <option value="">Select User Type</option>
                  <option value="tourist">Tourist</option>
                  <option value="guide">Guide</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  name="password" 
                  required 
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                  placeholder="Enter your password"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300"
              >
                Login
              </button>
            </form>
          </Modal>

          {/* Signup Modal */}
          <Modal isOpen={showModal === 'signup'} onClose={() => setShowModal('')} title="Sign Up">
            <form onSubmit={handleSignup} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">User Type</label>
                <select name="userType" required className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none">
                  <option value="">Select User Type</option>
                  <option value="tourist">Tourist</option>
                  <option value="guide">Guide</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  name="password" 
                  required 
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                  placeholder="Create a password"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Emergency Contact</label>
                <input 
                  type="tel" 
                  name="emergency" 
                  required 
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                  placeholder="Emergency contact number"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300"
              >
                Sign Up
              </button>
            </form>
          </Modal>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800">
      <div className="container mx-auto px-4 py-8">
        {/* Alerts */}
        <div className="fixed top-4 left-4 right-4 z-40">
          {alerts.map(alert => (
            <Alert key={alert.id} alert={alert} />
          ))}
        </div>
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 mb-8 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🏛</span>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Sacred Bytes
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg font-medium">Welcome, {currentUser.name}!</span>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                currentTrip ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}>
                {currentUser.type.charAt(0).toUpperCase() + currentUser.type.slice(1)}
              </span>
              <button 
                onClick={handleLogout}
                className="border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-lg rounded-3xl p-4 mb-8 shadow-xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {['dashboard', 'trip', 'guides', 'community', 'profile'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </nav>

        {/* Trip Status */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 mb-8 shadow-xl">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-800">Current Trip Status</h3>
              <p className="text-gray-600">
                {currentTrip ? `Trip in progress with ${currentTrip.guide.name}` : 'No active trip'}
              </p>
            </div>
            <span className={`px-6 py-2 rounded-full font-semibold ${
              currentTrip 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}>
              {currentTrip ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>

        {/* Dashboard Section */}
        {activeSection === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Heritage Card */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="text-6xl mb-4 text-center">🏛</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Explore Heritage</h3>
              <p className="text-gray-600 mb-6">Virtual monastery tours, cultural information, and local events.</p>
              <button 
                onClick={() => setShowModal('heritage')}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300"
              >
                Explore Now
              </button>
            </div>

            {/* Handicrafts Card */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="text-6xl mb-4 text-center">🎨</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Handicraft Suggestions</h3>
              <p className="text-gray-600 mb-6">Discover nearby workshops and authentic handicrafts.</p>
              <button 
                onClick={generateHandicraftAlerts}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300"
              >
                Find Crafts
              </button>
            </div>

            {/* Book Guide Card */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="text-6xl mb-4 text-center">👨‍🏫</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Book Guide</h3>
              <p className="text-gray-600 mb-6">Connect with experienced local guides for tours.</p>
              <button 
                onClick={() => setActiveSection('guides')}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300"
              >
                Find Guide
              </button>
            </div>

            {/* Community Card */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="text-6xl mb-4 text-center">👥</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Stories</h3>
              <p className="text-gray-600 mb-6">Read and share local stories and traditions.</p>
              <button 
                onClick={() => setActiveSection('community')}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300"
              >
                Join Community
              </button>
            </div>

            {/* Handicraft Alerts */}
            {handicraftAlerts.length > 0 && (
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-2xl font-bold text-white mb-4">Nearby Handicraft Alerts</h3>
                {handicraftAlerts.map((alert) => (
                  <div key={alert.id} className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-3xl shadow-xl animate-slide-in">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2">📍 {alert.title}</h4>
                        <p className="mb-2"><strong>Distance:</strong> {alert.distance} | <strong>Artist:</strong> {alert.artist}</p>
                        <p><strong>Price Range:</strong> {alert.price}</p>
                      </div>
                      <button
                        onClick={() => setHandicraftAlerts(prev => prev.filter(a => a.id !== alert.id))}
                        className="text-2xl font-bold ml-4 hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Trip Management Section */}
        {activeSection === 'trip' && (
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">🗺 Trip Management</h3>

            <div className="mb-6">
              {!currentTrip ? (
                <button 
                  onClick={startTrip}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300"
                >
                  Start Trip
                </button>
              ) : (
                <button 
                  onClick={endTrip}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300"
                >
                  End Trip
                </button>
              )}
            </div>

            {/* Live Route Map */}
            <div className="bg-gray-200 h-96 rounded-3xl flex items-center justify-center mb-6 relative overflow-hidden">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">🗺</div>
                <p className="text-xl">Live Route Map</p>
                <p>{currentTrip ? 'Tracking active trip...' : 'Start trip to view real-time tracking'}</p>
              </div>
              
              {currentTrip && (
                <>
                  <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="absolute top-1/2 left-1/3 w-5 h-5 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="absolute top-2/3 left-3/5 w-5 h-5 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                </>
              )}
            </div>

            {currentTrip && (
              <div className="bg-gray-100 p-6 rounded-3xl">
                <h4 className="text-xl font-bold mb-4">Trip Timeline</h4>
                <div className="space-y-2">
                  <div><strong>Start:</strong> {currentTrip.startTime.toLocaleTimeString()}</div>
                  <div><strong>Current Location:</strong> Monastery Entrance</div>
                  <div><strong>Next Checkpoint:</strong> Heritage Gallery</div>
                  <div><strong>Guide:</strong> {currentTrip.guide.name}</div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Guides Section */}
        {activeSection === 'guides' && (
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">🔍 Find Guides</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <input 
                type="text" 
                placeholder="Enter location or heritage site"
                className="p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
              />
              <select className="p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none">
                <option value="">All Specialties</option>
                <option value="heritage">Heritage Sites</option>
                <option value="handicrafts">Handicrafts</option>
                <option value="festivals">Festivals & Events</option>
                <option value="nature">Nature & Trekking</option>
              </select>
            </div>

            <button 
              onClick={() => showAlert('Searching for guides...', 'info')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300 mb-8"
            >
              Search Guides
            </button>

            <div className="space-y-6 max-h-96 overflow-y-auto">
              {sampleGuides.map((guide) => (
                <div key={guide.id} className="bg-gray-50 p-6 rounded-3xl border-2 border-transparent hover:border-purple-500 transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl">{guide.photo}</span>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800">{guide.name}</h4>
                          <div className="flex items-center gap-2">
                            <StarRating rating={Math.floor(guide.rating)} readonly />
                            <span className="text-yellow-500 font-semibold">{guide.rating}/5.0</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 text-gray-600">
                        <p><strong>Specialty:</strong> {guide.specialty}</p>
                        <p><strong>Experience:</strong> {guide.experience}</p>
                        <p><strong>Languages:</strong> {guide.languages.join(', ')}</p>
                        <p><strong>Price:</strong> {guide.price}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <button 
                        onClick={() => showAlert(`Booking request sent to ${guide.name}`, 'success')}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300"
                      >
                        Book Now
                      </button>
                      <button 
                        onClick={() => showAlert('Contact details sent to your email', 'info')}
                        className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
                      >
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Community Section */}
        {activeSection === 'community' && (
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800">❤ Community Stories</h3>
              <button 
                onClick={() => setShowModal('addStory')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300"
              >
                Share Your Story
              </button>
            </div>

            <div className="space-y-6 max-h-96 overflow-y-auto">
              {communityStories.map((story) => (
                <div key={story.id} className="bg-gray-50 p-6 rounded-3xl border-l-4 border-purple-500">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{story.title}</h4>
                      <p className="text-sm text-gray-500">by {story.author} • {story.location} • {new Date(story.date).toLocaleDateString()}</p>
                    </div>
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {story.category}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{story.content}</p>
                  <div className="flex items-center gap-6">
                    <button 
                      onClick={() => likeStory(story.id)}
                      className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors duration-300"
                    >
                      <span>❤</span>
                      <span>{story.likes} likes</span>
                    </button>
                    <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors duration-300">
                      <span>💬</span>
                      <span>Comment</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Profile Section */}
        {activeSection === 'profile' && (
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">👤 Profile Settings</h3>
            
            <form className="space-y-6 max-w-md">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  defaultValue={currentUser.name}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  defaultValue={currentUser.email}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  defaultValue={currentUser.phone}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Interests</label>
                <select multiple className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none h-32">
                  <option value="heritage">Heritage Sites</option>
                  <option value="handicrafts">Handicrafts</option>
                  <option value="festivals">Festivals</option>
                  <option value="nature">Nature</option>
                  <option value="photography">Photography</option>
                </select>
              </div>
              <button 
                type="button"
                onClick={() => showAlert('Profile updated successfully!', 'success')}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300"
              >
                Update Profile
              </button>
            </form>
          </div>
        )}

        {/* SOS Button */}
        <button
          onClick={triggerSOS}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-bold text-lg shadow-2xl hover:scale-110 transform transition-all duration-300 z-30 animate-pulse"
          title="Emergency SOS"
        >
          SOS
        </button>

        {/* Heritage Modal */}
        <Modal isOpen={showModal === 'heritage'} onClose={() => setShowModal('')} title="Heritage Exploration">
          <div className="text-center">
            <div className="bg-gray-200 h-48 rounded-3xl flex items-center justify-center mb-6">
              <button 
                onClick={() => {
                  showAlert('Starting virtual tour of Hemis Monastery...', 'success');
                  setShowModal('');
                }}
                className="text-6xl text-purple-600 hover:scale-110 transition-transform duration-300"
              >
                ▶
              </button>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Hemis Monastery Virtual Tour</h3>
            <p className="text-gray-600 mb-6">Experience the ancient Buddhist monastery with 360° virtual tour</p>
            <button 
              onClick={() => {
                showAlert('Starting virtual tour of Hemis Monastery...', 'success');
                setShowModal('');
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300"
            >
              Start Virtual Tour
            </button>
            <div className="mt-8">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Upcoming Events</h4>
              <div className="bg-gray-100 p-4 rounded-xl">
                <div className="font-semibold">Hemis Festival 2025</div>
                <div className="text-sm text-gray-600">July 15-16, 2025 | Traditional masked dance performances</div>
              </div>
            </div>
          </div>
        </Modal>

        {/* Add Story Modal */}
        <Modal isOpen={showModal === 'addStory'} onClose={() => setShowModal('')} title="Share Your Story">
          <form onSubmit={handleAddStory} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Story Title</label>
              <input 
                type="text" 
                name="title"
                required 
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                placeholder="Enter story title"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
              <select name="category" required className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none">
                <option value="">Select Category</option>
                <option value="festival">Festival Experience</option>
                <option value="tradition">Local Tradition</option>
                <option value="handicraft">Handicraft Discovery</option>
                <option value="heritage">Heritage Site Visit</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Your Story</label>
              <textarea 
                name="content"
                rows="6" 
                required
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                placeholder="Share your experience..."
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
              <input 
                type="text" 
                name="location"
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                placeholder="Where did this happen?"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300"
            >
              Share Story
            </button>
          </form>
        </Modal>

        {/* Feedback Modal */}
        <Modal isOpen={showModal === 'feedback'} onClose={() => setShowModal('')} title="Trip Feedback">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Rate Your Guide</label>
              <StarRating rating={guideRating} onRatingChange={setGuideRating} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Rate Overall Experience</label>
              <StarRating rating={experienceRating} onRatingChange={setExperienceRating} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Comments</label>
              <textarea 
                rows="4"
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                placeholder="Share your experience..."
              />
            </div>
            <button 
              onClick={() => {
                showAlert('Thank you for your feedback!', 'success');
                setShowModal('');
                setGuideRating(0);
                setExperienceRating(0);
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300"
            >
              Submit Feedback
            </button>
          </div>
        </Modal>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SlaveApplication;
