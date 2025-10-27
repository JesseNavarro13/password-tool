import React from "react";

const Homepage = ({ onTabChange }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">

      {/*Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            Learn, Play & Secure Your Digital Life
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-gray-300 leading-relaxed text-center mx-auto">
            Check your password strength, test your cybersecurity knowledge, and play an interactive game to improve your online security.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={() => onTabChange('password')} className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-2xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25 font-semibold text-lg">
              <span className="flex items-center justify-center gap-2">
                🔒 Check Password Strength
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button onClick={() => onTabChange('cybersecurity')} className="group px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl shadow-2xl hover:from-green-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-green-500/25 font-semibold text-lg">
              <span className="flex items-center justify-center gap-2">
                🧠 Start Quiz
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button> 
          </div>
        </div>
      </section>

      {/* Features Section*/}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Password Checker Card */}
            <div className="group p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 border border-white/20 hover:border-blue-400/50 cursor-pointer" onClick={() => onTabChange('password')}>
              <div className="text-4xl mb-4">🔐</div>
              <h4 className="text-2xl font-bold mb-4 text-white">Password Checker</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Check how strong your passwords are and get personalized tips to make them stronger.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 font-semibold group">
                Get Started
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            {/* Quiz Card */}
            <div className="group p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 transform hover:scale-105 border border-white/20 hover:border-green-400/50 cursor-pointer" onClick={() => onTabChange('cybersecurity')}>
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-2xl font-bold mb-4 text-white">Cybersecurity Quiz</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Test your knowledge with multiple choice, true/false, and fill-in-the-blank questions.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-500 hover:to-green-600 transition-all duration-300 font-semibold group">
                Try Quiz
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            {/* Game Card */}
            <div className="group p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 opacity-75">
              <div className="text-4xl mb-4">🎮</div>
              <h4 className="text-2xl font-bold mb-4 text-white">Password Game</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Play a fun and interactive game to practice creating strong passwords and learn best security practices.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-semibold cursor-not-allowed">
                Coming Soon
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md text-white py-12 mt-auto border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="text-gray-300 mb-4 md:mb-0">&copy; 2025 LockNLearn.</p>
          <ul className="flex gap-6">
            <li><button onClick={() => onTabChange('password')} className="hover:text-blue-300 transition-colors duration-300 font-medium">Password Strength</button></li>
            <li><button onClick={() => onTabChange('cybersecurity')} className="hover:text-blue-300 transition-colors duration-300 font-medium">Cybersecurity Info</button></li>
            <li><button onClick={() => onTabChange('cybersecurity')} className="hover:text-blue-300 transition-colors duration-300 font-medium">Quiz</button></li>
            <li><button className="hover:text-gray-500 transition-colors duration-300 font-medium cursor-not-allowed opacity-50">Game (Coming Soon)</button></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;