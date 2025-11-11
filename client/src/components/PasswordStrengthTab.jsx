import React from 'react';

const PasswordStrengthTab = () => {
  const [openSection, setOpenSection] = React.useState(null);

  // Password FAQ sections
  const sections = [
    {
      title: 'Is it safe to use this password strength checker and can I trust it with my passwords?',
      content: 'Yes, our password strength checker is designed with user privacy in mind. Passwords are analyzed locally in your browser and are not sent to any server or stored anywhere.'
    },
    {
      title: 'How does your tool assess password strength?',
      content: 'Our tool analyzes passwords based on length, complexity, common patterns, and estimated time to crack using various attack methods. It provides a strength score and suggestions for improvement.'
    },
    {
      title: 'Why is password strength important?',
      content: 'Strong passwords protect your accounts from unauthorized access and potential data breaches. Weak passwords can be easily cracked by attackers using various techniques.'
    },
    {
      title: 'How to create a strong password?',
      content: 'Use a combination of uppercase and lowercase letters, numbers, and special characters. Avoid common words, phrases, or easily guessable information like birthdays.'
    },
    {
      title: 'Can I use this tool for multiple passwords?',
      content: 'Absolutely! You can test as many passwords as you like to evaluate their strength and get feedback on how to improve them.'
    },
  ];

  // Open the standalone pswrd page in a new tab
  const handleOpenPswrd = () => {
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

          {/* Password FAQ Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl mt-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Password Security FAQ
              </h3>
              <p className="text-gray-300 mb-8 text-center">
                Most common questions about password security and our tool:
              </p>

              <div className="space-y-4">
                {sections.map((section, index) => (
                <div key={index} className="group">
                  <button
                    onClick={() => setOpenSection(openSection === index ? null : index)}
                    className="w-full p-6 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-blue-400/50 rounded-xl transition-all duration-300 text-left"
                  >
                    <div className = "flex justify-between items-center">
                      <h4 className="text-lg font-semibold text-white pr-4">
                        {section.title}
                      </h4>
                      <div className="text-2xl text-blue-400 transition-transform duration-300 group-hover:scale-110">
                        {openSection === index ? "▲" : "▼"}
                      </div>
                    </div>
                  </button>
                  
                  {openSection === index && (
                    <div className="mt-2 p-6 bg-white/5 border border-white/10 rounded-xl animate-fade-in-up">
                      <div className="text-gray-300 leading-relaxed">
                        {section.content}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordStrengthTab