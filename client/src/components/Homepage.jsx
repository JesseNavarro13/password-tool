import React from "react";

const Homepage = ({ onTabChange }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">

      {/*Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-20 pb-12 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-light/10 to-primary-600/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <h2 className="brand-title text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent-light via-white to-accent-light bg-clip-text text-transparent leading-tight drop-shadow-lg">
            Learn, Play & Secure Your Digital Life
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-gray-300 leading-relaxed text-center mx-auto">
            Check your password strength, test your cybersecurity knowledge, and play an interactive game to improve your online security.
          </p>
        </div>
      </section>

      {/* Features Section*/}
      <section className="pt-8 pb-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-5xl font-bold text-center mb-16 mt-5 bg-gradient-to-r from-white via-accent-light to-white bg-clip-text text-transparent drop-shadow-md">
            Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Password Checker Card */}
            <div className="group p-8 bg-primary-800/30 backdrop-blur-md rounded-2xl shadow-soft hover:shadow-glow transition-all duration-500 transform hover:scale-105 border border-accent-light/30 hover:border-accent-light/60 cursor-pointer" onClick={() => onTabChange('password')}>
              <div className="text-4xl mb-4">🔐</div>
              <h4 className="text-2xl font-bold mb-4 text-white">Password Checker</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Check how strong your passwords are and get personalized tips to make them stronger.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-400 hover:to-primary-500 transition-all duration-300 font-semibold group cursor-pointer">
                Get Started
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            {/* Quiz Card */}
            <div className="group p-8 bg-primary-800/30 backdrop-blur-md rounded-2xl shadow-soft hover:shadow-glow transition-all duration-500 transform hover:scale-105 border border-accent-light/30 hover:border-accent-light/60 cursor-pointer" onClick={() => onTabChange('cybersecurity')}>
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-2xl font-bold mb-4 text-white">Cybersecurity Quiz</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Test your knowledge with multiple choice, true/false, and fill-in-the-blank questions.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-light to-primary-500 text-white rounded-lg hover:from-accent-light/90 hover:to-primary-400 transition-all duration-300 font-semibold group cursor-pointer">
                Try Quiz
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            {/* Game Card */}
            <div className="group p-8 bg-primary-800/30 backdrop-blur-md rounded-2xl shadow-soft hover:shadow-glow transition-all duration-500 transform hover:scale-105 border border-accent-light/30 hover:border-accent-light/60 cursor-pointer" onClick={() => onTabChange('game')}>
              <div className="text-4xl mb-4">🎮</div>
              <h4 className="text-2xl font-bold mb-4 text-white">Password Game</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Race against the clock in a chaotic password game with escalating rules and try to set a new high score.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-dark text-white rounded-lg hover:from-primary-500 hover:to-primary-600 transition-all duration-300 font-semibold group cursor-pointer">
                Play Game
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900/50 backdrop-blur-md text-white py-12 mt-auto border-t border-accent-light/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="text-gray-300 mb-4 md:mb-0">&copy; 2025 LockNLearn.</p>
          <ul className="flex gap-6">
            <li><button onClick={() => onTabChange('password')} className="hover:text-accent-light transition-colors duration-300 font-medium">Password Strength</button></li>
            <li><button onClick={() => onTabChange('cybersecurity')} className="hover:text-accent-light transition-colors duration-300 font-medium">Cybersecurity Info</button></li>
            <li><button onClick={() => onTabChange('cybersecurity')} className="hover:text-accent-light transition-colors duration-300 font-medium">Quiz</button></li>
            <li><button onClick={() => onTabChange('game')} className="hover:text-accent-light transition-colors duration-300 font-medium">Game</button></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;