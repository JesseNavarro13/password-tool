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
          <h2 className="text-4xl md:text-5xl font-bold h-14 bg-gradient-to-r from-accent-light via-white to-accent-light bg-clip-text text-transparent mb-4 drop-shadow-md">
            Password Game
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Dive into our fast-paced password game where the goal is simple: beat the challenges, race the clock, and chase the best high scores.
          </p>
          
          <div className="bg-primary-800/30 backdrop-blur-md rounded-2xl p-8 border border-accent-light/30 shadow-soft">
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
              
              <div className="border-2 border-cyan-400/60 rounded-xl p-1 hover:border-cyan-400/80 transition-all duration-300 inline-block">
                <button
                  onClick={handleOpenPswrdGame}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 font-semibold shadow-soft hover:shadow-glow text-lg cursor-pointer"
                >
                  🚀 Launch Password Game
                </button>
              </div>
              
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
                    className="text-accent-light hover:text-primary-300 underline ml-1"
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