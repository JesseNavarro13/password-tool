import React from 'react';

const PasswordStrengthTab = () => {
  const handleOpenPswrd = () => {
    // Open the standalone pswrd page in a new tab
    const currentOrigin = window.location.origin;
    const pswrdUrl = `${currentOrigin}/pswrd/index.html`;
    console.log('Attempting to open:', pswrdUrl);
    
    // Only open in new tab, never navigate away from current app
    const newWindow = window.open(pswrdUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold h-14 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Password Strength Checker
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Experience our advanced password strength detector with interactive attacker cards, real-time analysis, and threat level assessment.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                🛡️ Advanced Password Security Tool
              </h3>
              <p className="text-gray-300 mb-6">
                Our standalone password strength detector features:
              </p>
              <ul className="text-left text-gray-300 space-y-2 mb-8 max-w-md mx-auto">
                <li>• Interactive attacker cards with different threat levels</li>
                <li>• Real-time password analysis and scoring</li>
                <li>• Time-to-crack calculations</li>
                <li>• Common password detection</li>
                <li>• Visual strength indicators</li>
                <li>• Background threat map visualization</li>
              </ul>
              
              <button
                onClick={handleOpenPswrd}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-blue-500/25 text-lg"
              >
                🚀 Launch Password Strength Detector
              </button>
              
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">
                  Opens in a new tab for the best experience
                </p>
                <p className="text-xs text-gray-500">
                  Direct link: 
                  <a 
                    href="/pswrd/index.html" 
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

export default PasswordStrengthTab