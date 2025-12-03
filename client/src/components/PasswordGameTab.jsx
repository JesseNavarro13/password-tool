import React from 'react';

const PasswordGameTab = () => {
  // Open the standalone pswrd game in a new tab
  const handleOpenPswrdGame = () => {
    const currentOrigin = window.location.origin;
    const pswrdgameUrl = `${currentOrigin}/pswrdgame/index.html`;
    console.log('Attempting to open:', pswrdgameUrl);
    
    // Only open in new tab, never navigate away from current app
    const newWindow = window.open(pswrdgameUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold h-14 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
            Password Game
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Dive into our fast-paced password game where the goal is simple: beat the challenges, race the clock, and chase the best high scores.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                🎮 Interactive Password Game
              </h3>
              <p className="text-gray-300 mb-6">
                Our standalone password game features:
              </p>
              <ul className="text-left text-gray-300 space-y-2 mb-8 max-w-md mx-auto">
                <li>• Fast-paced challenge built around outrageous password rules</li>
                <li>• Escalating levels of difficulty as you unlock new rules</li>
                <li>• Built-in timer to speedrun your way through the game</li>
                <li>• Persistent high scores so you can beat your personal best</li>
                <li>• Perfect for friendly competition: race against your friends</li>
              </ul>
              
              <button
                onClick={handleOpenPswrdGame}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl hover:from-red-500 hover:to-orange-400 transition-all duration-300 font-semibold shadow-lg hover:shadow-red-500/25 text-lg"
              >
                🚀 Launch Password Game
              </button>
              
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">
                  Opens in a new tab for the best experience
                </p>
                <p className="text-xs text-gray-500">
                  Direct link: 
                  <a 
                    href="/pswrdgame/index.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline ml-1"
                  >
                    /pswrd/index.html
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGameTab;